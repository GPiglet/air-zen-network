import React, { FC, useContext, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'
import CustomCheckbox from '../../common/checkbox'

const StepFive: FC = () => {

    //translate
    const { t } = useTranslation()

    const { homeOption, changeHomeOption } = useContext(StoreContext)
    const [active, setActive] = useState(false)
    const [deliver, setDeliver] = useState(false)
    const mailRef = useRef<any>();
    const firstNameRef = useRef<any>();
    const surNameRef = useRef<any>();
    const streetRef = useRef<any>();
    const placeRef = useRef<any>();
    const federalRef = useRef<any>();
    const houseNoRef = useRef<any>();
    const postCodeRef = useRef<any>();

    const testValue = () => {
        const firstName = firstNameRef.current.value
        const surName = surNameRef.current.value
        const street = streetRef.current.value
        const placeName = placeRef.current.value
        const federalState = federalRef.current.value
        const houseNo = houseNoRef.current.value
        const postCode = postCodeRef.current.value
        if (mailRef.current.value
            && firstName
            && surName
            && street
            && placeName
            && federalState
            && houseNo
            && postCode
        ) {
            setActive(true)
            const homeOption = {
                firstName,
                surName,
                street,
                placeName,
                federalState,
                houseNo,
                postCode
            }
            changeHomeOption?.(homeOption)
        } else {
            setActive(false)
        }
    }

    const changeDeliver = () => {
        setDeliver(!deliver)
    }

    return (
        <FadeIn delay={0} transitionDuration={1000} className='leading-8'>
            <Form
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={active}
                breadcrumb={t('home.form.step5.breadcrumb')}
                buttonString={t('home.form.step5.button')}
                bgImg='/images/model.png'
                bgClassName='bottom-[-40px] w-[40%] right-[-5px]'
                width='sm:w-[80%]'
            >
                <FadeIn transitionDuration={1000} delay={0}>
                    <p className='text-gray-500'>{t('home.form.step5.info')}</p>
                    <p className='text-gray-400 pl-3'>Mail</p>
                    <input placeholder='Mail' type='email' required className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={mailRef} onChange={() => testValue()} defaultValue={homeOption?.mail} />
                    <input placeholder='Vorname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={firstNameRef} onChange={() => testValue()} defaultValue={homeOption?.firstName} />
                    <input placeholder='Nachname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={surNameRef} onChange={() => testValue()} defaultValue={homeOption?.surName} />
                    <div className='md:flex'>
                        <input placeholder='Straße' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={streetRef} onChange={() => testValue()} defaultValue={homeOption?.street} />
                        <input placeholder='Haus Nr.' type='number' className='mb-3 ml-2 w-[30%] h-[38px] custom-input text-inputColor' ref={houseNoRef} onChange={() => testValue()} defaultValue={homeOption?.houseNo} />
                    </div>
                    <div className="md:flex">
                        <input placeholder='Ortsname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={placeRef} onChange={() => testValue()} defaultValue={homeOption?.placeName} />
                        <input placeholder='PLZ' type='number' className='mb-3 ml-2 w-[30%] h-[38px] custom-input text-inputColor' ref={postCodeRef} onChange={() => testValue()} defaultValue={homeOption?.postCode} />
                    </div>
                    <input placeholder='Bundesland' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={federalRef} onChange={() => testValue()} defaultValue={homeOption?.federalState} />
                    <div className="flex items-center px-2 py-5">
                        <CustomCheckbox checked={deliver} onClick={() => changeDeliver()} />
                        <div className='ml-5'>
                            {
                                t('home.form.step5.confirm').split('\n').map((item, index) =>
                                    <p key={index}>{item}</p>
                                )
                            }
                        </div>
                    </div>
                </FadeIn>
            </Form>
        </FadeIn>
    )
}

export default StepFive