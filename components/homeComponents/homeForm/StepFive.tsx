import React, { FC, useContext, useRef, useState } from 'react'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepFive: FC = () => {
    const { homeOption } = useContext(StoreContext)
    const [active, setActive] = useState(false)
    const mailRef = useRef<any>();
    const firstNameRef = useRef<any>();
    const Ref = useRef<any>();
    const surNameRef = useRef<any>();
    const streetRef = useRef<any>();
    const placeRef = useRef<any>();
    const federalRef = useRef<any>();
    const houseNoRef = useRef<any>();
    const postCodeRef = useRef<any>();





    return (
        <div className='leading-10'>
            <Form
                buttonType='border border-primary px-[70px] bg-primary text-white'
                buttonActive={active}
                breadcrumb='Vertragsdetails'
                buttonString='Vertragsübersicht'
                bgImg='/images/model.png'
            >
                <p className='text-gray-500'>Wir benötigen Ihre Adressdaten:</p>
                    <p>Mail</p>
                    <input placeholder='Mail' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={mailRef} defaultValue={homeOption?.mail} />
                    <input placeholder='Vorname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={firstNameRef} defaultValue={homeOption?.firstName} />
                    <input placeholder='Nachname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={surNameRef} defaultValue={homeOption?.surName} />
                    <input placeholder='Straße' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={streetRef} defaultValue={homeOption?.street} />
                    <input placeholder='Haus Nr.' className='mb-3 ml-2 w-[30%] h-[38px] custom-input text-inputColor' ref={houseNoRef} defaultValue={homeOption?.houseNo} />
                    <input placeholder='Ortsname' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={placeRef} defaultValue={homeOption?.placeName} />
                    <input placeholder='PLZ' className='mb-3 ml-2 w-[30%] h-[38px] custom-input text-inputColor' ref={postCodeRef} defaultValue={homeOption?.postCode} />
                    <input placeholder='Bundesland' className='mb-3 w-[65%] h-[38px] custom-input text-inputColor' ref={federalRef} defaultValue={homeOption?.federalState} />
            </Form>
        </div>
    )
}

export default StepFive