import React, { FC, useRef, useState, useContext, useEffect } from 'react'

import { StoreContext } from '../../../contexts/Store'
import Form from '../../common/form'

const StepTwo: FC = () => {

    const [active, setActive] = useState(false)
    const {homeOption, changeHomeOption} = useContext(StoreContext)
    const roomRef = useRef<any>();
    const nodeRef = useRef<any>();

   useEffect(() => {
    if(homeOption?.roomSize && homeOption.node){
        setActive(true)
    } 
   })
    const testValue = () => {
        const roomSize = Number(roomRef.current.value)
        const node = Number(nodeRef.current.value)
        if(roomSize && node){
            setActive(true)
            var option = {
                roomSize,
                node
            }
            changeHomeOption?.(option)

        }else{
            setActive(false)
        }
    }

    return (
        <div>
            <Form
                buttonType='border border-primary px-[70px] bg-primary text-white'
                buttonActive={active}
                breadcrumb='Home Konfigurator'
                buttonString='weiter'
                width='sm:w-[80%]'
            >
                <div className='pb-10 flex items-center'>
                    <div>
                        <div className="sm:flex items-center">
                            <p>Mein Zuhause ist</p>
                            <input placeholder='z.B. 80' className='custom-input w-[50%] sm:w-[23%] text-inputColor mx-2' ref={roomRef} onChange={() => testValue()} defaultValue={homeOption?.roomSize}/>
                            <span>m<sup>2</sup> groß .</span>
                        </div>
                        <div className="sm:flex items-center mt-7">
                            <p>Ich möchte</p>
                            <input placeholder='4' className='custom-input w-[30%] sm:w-[20%] text-inputColor mx-2' ref={nodeRef} onChange={() => testValue()} defaultValue={homeOption?.node}/>
                            <span> Nodes á 25€.</span>
                        </div>
                    </div>
                </div>
                <p className='text-lg mt-2 tracking-widest text-gray-500'> Das AirZen Set beinhaltet mindestens 3 Router: unsere Nodes. Damit garantieren wir ihnen eine stabile Verbindung bis zu 200m<sup>2</sup>. <br /><br /> Darüber hinaus empfehlen wir jeweils eine Node für zusätzliche 60m2 oder neue externe Standorte.</p>
            </Form>
        </div>
    )
}

export default StepTwo