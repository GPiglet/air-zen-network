//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'

import CustomInput from '../../../components/common/widgets/input';
import CustomCheckbox from '../../../components/common/widgets/checkbox';
import FriendlyCaptcha from '../../../components/common/FriendlyCaptcha';
import ContactApi from '../../../services/contact.service';
import SendButton from '../../../components/common/widgets/button/SendButton';
import { setStorage, getStorage } from '../../../services/storage.service';

type props = {
    item: any
}

  
const WhitePaper: FC<props> = ({item}) => {
    const { t } = useTranslation();
    const router = useRouter()

    const [compannyname, setCompanyname] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');

    const [dataProtection, setDataProtection] = useState<boolean>(false);
    const [dataCollection, setDataCollection] = useState<boolean>(false);
    const [captchaSolution, setCaptchaSolution] = useState<any>(null);

    const [validFirstname, setValidFirstname] = useState<boolean>(true);
    const [validLastname, setValidLastname] = useState<boolean>(true);
    const [validEmailAddress, setValidEmailAddress] = useState<boolean>(true);
    const [validDSGVOProtection, setValidDSGVOProtection] = useState<boolean>(true);
    const [validDSGVOCollection, setValidDSGVOCollection] = useState<boolean>(true);

    const [autoSend, setAutoSend] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    const refCompanyname = useRef<HTMLInputElement>(null);
    const refFirstname = useRef<HTMLInputElement>(null);
    const refLastname = useRef<HTMLInputElement>(null);
    const refEmailAddress = useRef<HTMLInputElement>(null);
    const refCaptcha = useRef<any>(null);

    const changeCheck = (type: string) => {
        switch (type) {
            case 'dataProtection':
                setDataProtection(!dataProtection);
                if ( !dataProtection ) setValidDSGVOProtection(true);
                else setValidDSGVOProtection(false);
                break;
            case 'dataCollection':
                setDataCollection(!dataCollection);
                if ( !dataCollection ) setValidDSGVOCollection(true);
                else setValidDSGVOCollection(false);
                break;
    
            default:
                break;
        }
    }

    // onchange input
    const onChangeInput = (value:string, setValue: (value: string)=>void, setValid?: (valid: boolean)=>void) => {
        if ( setValid ) {
            if ( value.trim() ) setValid(true);
            else setValid(false);
        }

        setValue(value);
    }

    //onclick send
    const onClickSend = () => {
        if ( !captchaSolution && refCaptcha.current ) {
            refCaptcha.current.start();      
        }

        if ( !emailAddress.trim() ) {
            setValidEmailAddress(false);
            refEmailAddress.current?.focus();
            return;
        }

        if ( !firstname.trim() ) {
            setValidFirstname(false);
            refFirstname.current?.focus();
            return;
        }

        if ( !lastname.trim() ) {
            setValidLastname(false);
            refLastname.current?.focus();
            return;
        }

        if ( !dataProtection ) {
            setValidDSGVOProtection(false);
            return;
        }

        if ( !dataCollection ) {
            setValidDSGVOCollection(false);
            return;
        }

        if ( !captchaSolution ) {
            setAutoSend(true);
            return;
        }

        //set cookie
        setStorage('whitepaper_contact', {
            compannyname,
            firstname,
            lastname,
            emailAddress
        });

        setButtonDisabled(true);

        ContactApi.create(
            {
                compannyname,
                firstname,
                lastname,
                emailAddress,
                captchaSolution,
            },
            (res: any) => {
                setButtonDisabled(false);
                refCaptcha.current.reset();
                document.location.href = item.url;
                // window.open(item.url, '_blank');
                // router.back();
            },
            (err: any) => {
                alert(t('whitepaperDownloadForm.error.apiError'));                
                setButtonDisabled(false);
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

    useEffect(() => {
        const contactCookie = getStorage('whitepaper_contact');
        if ( contactCookie ) {
            try {
                const contact = JSON.parse(contactCookie);
                setCompanyname(contact.compannyname);
                setFirstname(contact.firstname);
                setLastname(contact.lastname);
                setEmailAddress(contact.emailAddress);
                setDataCollection(true);
                setDataProtection(true);
            }
            catch(e) {

            }
        }
    }, [])

    return (
        <div className='relative flex gap-8 md:gap-10 flex-col max-w-[1220px] w-full p-8 md:px-16 md:py-10 text-white'>
            {/* <CloseIcon color="#fff" className='absolute right-4 top-8 md:right-10 md:top-10 cursor-pointer' onClick={() => router.back()} /> */}
            <div className='flex flex-col md:flex-row gap-8 md:gap-20'>
                <div className='w-[80%] md:w-1/3'>
                    <img src={`/images/${item?.image}`} className='shadow shadow-white'/>
                </div>
                <div>
                    <p className='font-bold text-[20px] md:text-[30px]'>{item?.heading}</p>
                    <p className='text-[20px] md:text-[30px] mb-4 md:mb-8'>{item?.title}</p>
                    <p>{item?.description}</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row md:gap-10'>
                <CustomInput placeholder={t('whitepaperDownloadForm.companynameInput.placeholder')} className="max-w-[500px] mb-5"
                    ref={refCompanyname} invalid={false} value={compannyname}
                    onChange={(e: any)=>onChangeInput(e.target.value, setCompanyname)}
                />
                <CustomInput placeholder={t('whitepaperDownloadForm.emailInput.placeholder')} className="max-w-[500px] mb-5"
                    ref={refEmailAddress} invalid={!validEmailAddress} value={emailAddress}
                    onChange={(e: any)=>onChangeInput(e.target.value, setEmailAddress, setValidEmailAddress)}
                />
                </div>
                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                <CustomInput placeholder={t('whitepaperDownloadForm.firstnameInput.placeholder')} className="max-w-[500px]"
                    ref={refFirstname} invalid={!validFirstname} value={firstname}
                    onChange={(e: any)=>onChangeInput(e.target.value, setFirstname, setValidFirstname)}
                />
                <CustomInput placeholder={t('whitepaperDownloadForm.lastnameInput.placeholder')} className="max-w-[500px]"
                    ref={refLastname} invalid={!validLastname} value={lastname}
                    onChange={(e: any)=>onChangeInput(e.target.value, setLastname)}
                />
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <div className={`relative top-[0.25rem] ml-10 font-lato font-base`}>
                    {(!validDSGVOCollection || !validDSGVOProtection) ? t('landing.contact.DSGVOErrorMsg') : t('landing.contact.DSGVOLabel')}
                </div>
                <div className='flex gap-4'>
                    <CustomCheckbox checked={dataProtection} valid={validDSGVOProtection} onClick={() => changeCheck('dataProtection')}>
                        {t('landing.contact.description').split('\n')[0]}
                        <a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
                        {t('landing.contact.description').split('\n')[2]}
                    </CustomCheckbox>
                </div>
                <div className='flex gap-4'>
                    <CustomCheckbox checked={dataCollection} valid={validDSGVOCollection} onClick={() => changeCheck('dataCollection')}>
                        {t('landing.contact.description').split('\n')[3]}
                    </CustomCheckbox>
                </div>
                <FriendlyCaptcha widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone} style="dark"/>
            </div>
            <div className='text-center'>
                <SendButton title={t('whitepaperDownloadForm.sendButton.title')} disabled={buttonDisabled} onClick={()=>onClickSend()} className='bg-white border border-[#01ACE6] rounded-[32px] text-center text-black/70 uppercase w-[210px] h-[50px]' fillClassName='fill-black/70'/>
            </div>
        </div>
    )
}
export default WhitePaper