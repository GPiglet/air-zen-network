import React, { FC, useRef, useState, useContext, useEffect } from 'react'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepThree: FC = () => {

    const [active, setActive] = useState(false)
    const monthRef = useRef<any>();
    const {homeOption, changeHomeOption} = useContext(StoreContext)
    useEffect(() => {
        if(homeOption?.contractTerm){
            setActive(true)
        } 
        console.log(homeOption?.contractTerm, '-------')
       })

    const testValue = () => {
        if (monthRef.current.value) {
            setActive(true)
            const option = {
                contractTerm: Number(monthRef.current.value),
                monthPay: 68
            }
            changeHomeOption?.(option)
        } else {
            setActive(false)
        }
    }

    return (
        <div>
            <Form
                buttonType='border border-primary px-[70px] bg-primary text-white'
                buttonActive={active}
                breadcrumb='Home Konfigurator'
                buttonString='Kostenübersicht'
                width='sm:w-[80%]'
            >
                <div className='pb-10 flex items-center'>
                    <div>
                        <div className="sm:flex items-center">
                            <p>Vertragslaufzeit:</p>
                            <select name="cars" className='custom-input w-[50%] sm:w-[22%] text-center text-inputColor mx-2' ref={monthRef} onChange={() => testValue()}  defaultValue={homeOption?.contractTerm}>
                                <option value={undefined} className='text-gray-500' disabled hidden>3-60</option>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="60">60</option>
                            </select>
                            <span>Monate</span>
                        </div>
                        <div className="sm:flex items-center mt-7">
                            <p>Ich möchte</p>
                            <input placeholder='z.B. monatlich' className='text-center custom-input w-[60%] sm:w-[40%] text-inputColor mx-2' value='68€ monatlich' disabled={true} />
                            <span> zahlen.</span>
                        </div>
                    </div>
                </div>
                <p className='text-lg mt-2 tracking-widest text-gray-500'> Da wir unsere Software konstant weiter entwickeln, beruht unser Service auf einem Lizensmodel.<br /><br />Damit ermöglichen wir Ihnen Support vom Experten, konstant sicheres Internet und fortlaufend neue Features.</p>
            </Form>
        </div>
    )
}

export default StepThree