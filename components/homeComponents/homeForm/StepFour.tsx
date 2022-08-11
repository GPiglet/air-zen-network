import React, { FC, useContext, useRef, useState } from 'react'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepFour: FC = () => {
    const {homeOption} = useContext(StoreContext)



    return (
        <div className='leading-10'>
            <Form
                buttonType='border border-primary px-[70px] bg-primary text-white'
                buttonActive={true}
                breadcrumb='Zusammenfassung'
                buttonString='Zahlungsoptionen'
            >
                    <p className='text-gray-500'>Sind diese Daten Korrekt?</p>
                    <p>Mein Zuhause ist <span className='text-inputColor p-1 border rounded-md'>{homeOption?.roomSize}</span> m<sup>2</sup>groß .</p>
                    <p>Ich möchte <span className='text-inputColor p-1 border rounded-md'>{homeOption?.node}</span> Nodes á 25€.</p>
                    <p>Mit einer Vertragslaufzeit von <span className='text-inputColor p-1 border rounded-md'>{homeOption?.contractTerm}</span> Monaten.</p>
                    <p>Ich möchte <span className='text-inputColor p-1 border rounded-md'>monatlich {homeOption?.monthPay}€</span> Nodes á 25€.</p>
                   <p className='mt-10 leading-8'>
                   Wir garantieren Dir <br/><strong>30 Tage Rückgaberecht.</strong>
                   </p>
            </Form>
        </div>
    )
}

export default StepFour