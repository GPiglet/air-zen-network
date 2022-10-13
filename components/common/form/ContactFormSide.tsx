import React, { FC, useEffect, useState, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import CustomCheckbox from '../checkbox'
import FriendlyCaptcha from '../FriendlyCaptcha';
import ContactApi from '../../../services/contact.service';

const ContactFormSide: FC = () => {
    //translate
    const { t } = useTranslation();

    const [username, setUsername] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [captchaSolution, setCaptchaSolution] = useState<any>(null);
    const [dataProtection, setDataProtection] = useState<boolean>(false);
    const [dataCollection, setDataCollection] = useState<boolean>(false);

    const [validUsername, setValidUsername] = useState<boolean>(true);
    const [validEmailAddress, setValidEmailAddress] = useState<boolean>(true);
    const [validDSGVO, setValidDSGVO] = useState<boolean>(true);
    const [autoSend, setAutoSend] = useState<boolean>(false);

    const refUsername = useRef<HTMLInputElement>(null);
    const refEmailAddress = useRef<HTMLInputElement>(null);
    const refCaptcha = useRef<any>(null);

    const changeCheck = (type: string) => {
        switch (type) {
            case 'dataProtection':
                setDataProtection(!dataProtection);
                if ( !dataProtection && dataCollection ) setValidDSGVO(true);
                else setValidDSGVO(false);
                break;
            case 'dataCollection':
                setDataCollection(!dataCollection);
                if ( dataProtection && !dataCollection ) setValidDSGVO(true);
                else setValidDSGVO(false);
                break;

            default:
                break;
        }
    }

    // onchange input
    const onChangeInput = (value:string, setValue: (value: string)=>void, setValid: (valid: boolean)=>void) => {
        if ( value.trim() )
        setValid(true);
        else
        setValid(false);

        setValue(value);
    }

    //onclick send
    const onClickSend = () => {
        if ( !captchaSolution && refCaptcha.current ) refCaptcha.current.start();

        if ( !username.trim() ) {
            setValidUsername(false);
            refUsername.current?.focus();
            return;
        }

        if ( !emailAddress.trim() ) {
            setValidEmailAddress(false);
            refEmailAddress.current?.focus();
            return;
        }

        if ( !dataCollection || !dataProtection ) {
            setValidDSGVO(false);
            return;
        }

        if ( !captchaSolution ) {
            setAutoSend(true);
            return;
        }

        ContactApi.create(
            {
                username,
                emailAddress,
                description,
                captchaSolution,
            },
            (res: any) => {
                alert(t('landing.contact.successMessage'));
                setUsername('');
                setEmailAddress('');
                setDescription('');
                refCaptcha.current.reset();
            },
            (err: any) => {
                alert(t('landing.contact.failedMessage'));
            }
        )
    }

    const onCaptchaReady = () => {
        setCaptchaSolution(null);
    }

    const onCaptchaDone = (solution: any) => {
        setCaptchaSolution(solution);
    }

    useEffect(() => {
        if ( autoSend ) {
            onClickSend();
            setAutoSend(false);
        }
    }, [captchaSolution])

    const showChat = () => {
        if (!formView)
            setFormView(!formView)
    }

    const [formView, setFormView] = React.useState(false)

    return (
        <div className='realtive right-0 z-60'>
            <div className='fixed right-[-40px] top-[115px] bg-white w-[112px] cursor-pointer  p-3 rounded-full z-60' onClick={() => { setFormView(!formView); /*window.location.href = '#technology'*/ }}>
                <picture className='max-w-[40px]'>
                    <source srcSet="/images/chat-icon.svg" type="image/webp" />
                    <img width="36px" src="/images/chat-icon.svg" alt="" />
                </picture>


            </div>
            <div className={`fixed z-60 ${formView ? ' block right-[0%]' : 'right-[-100%] sm:right-[-500px] opacity-0.7 '} top-[115px] w-[90%] sm:w-[400px] form-animate`} onClick={() => showChat()}>

                <div className='relative'>
                    {/* <svg className='absolute top-[-48px] left-[-37px]' width="277" height="219" viewBox="0 0 277 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M129.293 215.398C71.8441 227.511 15.2595 189.912 2.92224 131.397C-9.41506 72.8825 27.1731 15.6397 84.6218 3.52718C142.071 -8.58532 198.655 29.013 210.992 87.5279C223.33 146.043 186.741 203.286 129.293 215.398Z" stroke="url(#paint0_linear_0_1)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="131.072" y1="129.791" x2="30.2147" y2="24.9748" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg> */}
                    <div className='relative bg-white md:block w-[100%] rounded-l-[50px] pt-[50px] font-lato h-[80vh] overflow-y-auto'>
                        <svg className='absolute top-[15px] right-[15px] cursor-pointer' onClick={() => { setFormView(false); }} width="25" height="27" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.707107" y1="1.29289" x2="35.7071" y2="36.2929" stroke="#159BDE" strokeWidth="2" />
                            <line x1="35.7071" y1="2.70711" x2="0.707107" y2="37.7071" stroke="#159BDE" strokeWidth="2" />
                        </svg>
                        <h1 className='text-[32px] font-semibold uppercase tracking-[.08em] ml-[10%]'>{t('contactForm.cotact')}</h1>

                        <div className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[600px] pb-[40px]'>
                            <div className=" sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ml-[10%] ">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            <p className={`text-[16px] font-semibold tracking-[.08em] my-[5px] ${validUsername ? '' : 'text-red-300'}`}>{t('landing.contact.nameLabel')}</p>
                                        </label>
                                        <input
                                            ref={refUsername}
                                            type="text"
                                            name="first-name"
                                            placeholder={t('landing.contact.namePlaceholder')}
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full shadow-sm border-gray-300 border-[1px] rounded-md px-3 py-1"
                                            value={username}
                                            onChange={(e)=>onChangeInput(e.target.value, setUsername, setValidUsername)}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            <p className={`text-[16px] font-semibold tracking-[.08em] my-[5px] ${validEmailAddress ? '' : 'text-red-300'}`}>{t('landing.contact.emailLabel')}</p>
                                        </label>
                                        <input
                                            ref={refEmailAddress}
                                            type="email"
                                            name="email-address"
                                            placeholder={t('landing.contact.emailPlaceholder')}
                                            id="email-address"
                                            autoComplete="email"
                                            className="block w-full shadow-sm border-gray-300 border-[1px] rounded-md px-3 py-1"
                                            value={emailAddress}
                                            onChange={(e)=>onChangeInput(e.target.value, setEmailAddress, setValidEmailAddress)}
                                        />
                                    </div>

                                    <div>
                                        {/* <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            <p className='text-base font-semibold tracking-[.08em] my-[5px]'>{t('contactForm.message')}</p>
                                        </label> */}
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full border border-gray-300 rounded-md px-3 py-1"
                                                placeholder={t('landing.contact.descPlaceholder')}
                                                value={description}
                                                onChange={(e)=>setDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className={`mb-4`}>
                                        <FriendlyCaptcha widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone}/>
                                    </div>
                                    <div className='flex justify-between items-end mb-4'>
                                        <div className={`relative top-[0.25rem] ml-10 font-lato font-base ${validDSGVO ? '' : 'text-red-300'}`}>
                                        {t('landing.contact.DSGVOLabel')}
                                        </div>
                                        <button className={`text-lgx text-white button-gradient border-primary py-2 px-8 rounded-md border relative z-10`} onClick={()=>onClickSend()}>
                                            {t('landing.contact.send')}
                                        </button>
                                    </div>
                                    <div className='flex relative z-40'>
                                        <div className='mt-5 mr-3'>
                                            <CustomCheckbox checked={dataProtection} onClick={() => changeCheck('dataProtection')} />
                                        </div>
                                        <p className='font-lato font-light text-left text-sm tracking-[2px]'>
                                            {t('landing.contact.description').split('\n')[0]}
                                            <a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
                                            {t('landing.contact.description').split('\n')[2]}
                                        </p>
                                    </div>
                                    <div className='flex relative z-40'>
                                        <div className='mt-5 mr-3'>
                                            <CustomCheckbox checked={dataCollection} onClick={() => changeCheck('dataCollection')} />
                                        </div>
                                        <p className='font-lato font-light text-left text-sm tracking-[2px]'>
                                            {t('landing.contact.description').split('\n')[3]}
                                        </p>
                                    </div>
                                </div>


                                {/* <div className="absolute w-[100%]">
                                    <div className='relative px-4 pt-7 sm:px-6 w-[100%] flex'>
                                        <div className='rounded-full mx-auto border-solid border-[1px] border-white'>
                                            <button className='styled-btn uppercase text-lg my-7 mx-10'>
                                                {t('contactForm.button')}
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* <svg className='absolute top-[-48px] left-[-37px]' width="277" height="219" viewBox="0 0 277 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.7" d="M125.574 197.766C77.7025 207.86 30.5325 176.53 20.2465 127.744C9.96052 78.9585 40.4663 31.2515 88.3383 21.1581C136.21 11.0648 183.38 42.3946 193.666 91.1804C203.952 139.966 173.446 187.673 125.574 197.766Z" stroke="url(#paint1_linear_0_1)" strokeWidth="2" />
                            <path d="M265.727 164.563C272.198 155.21 276 143.808 276 131.5C275.998 99.7441 250.704 74 219.5 74C188.296 74 163 99.7441 163 131.5C163 163.256 188.296 189 219.5 189C231.796 189 243.173 185.001 252.448 178.213L274.982 188.096L265.727 164.563Z" stroke="url(#paint2_linear_0_1)" strokeWidth="2" strokeMiterlimit="10" />
                            <defs>
                                <linearGradient id="paint1_linear_0_1" x1="168.43" y1="187.039" x2="133.223" y2="109.544" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#159BDE" />
                                    <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_0_1" x1="266.652" y1="188.026" x2="186.782" y2="92.9571" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#66BEE9" />
                                    <stop offset="1" stopColor="#66BEE9" stopOpacity="0.59" />
                                </linearGradient>
                            </defs>
                        </svg> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormSide