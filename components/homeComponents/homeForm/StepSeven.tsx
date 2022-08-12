import React, { FC, useContext} from 'react'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepSeven: FC = () => {

    const {homeOption, changeStep, changeHomeOption} = useContext(StoreContext)
    let step = useContext(StoreContext).step

    const payMethod = (method: string) => {
        const homeOption = {
            payMethod: method
        }
        changeHomeOption?.(homeOption)
        changeStep?.(0)
    }

    return (
        <div className='leading-8'>
            <Form
                buttonType='border border-primary px-[70px] bg-primary text-white'
                buttonActive={true}
                breadcrumb='Zahlungsoptionen'
                width='sm:w-[80%]'
            >
                <p className='text-gray-500'>Wir berechnen dir eine <strong>einmalige Zahlung</strong> von <strong>100€</strong> für <strong>{homeOption?.node}</strong> Nodes. Außerdem werden wir monatlich über <strong>{homeOption?.contractTerm} Monate {homeOption?.monthPay}€</strong>   abbuchen.</p>
                <p className='mt-10'>Wir garantieren Dir <br /> <strong>30 Tage Rückgaberecht.</strong></p>
                <p className='text-gray-500 mt-5'>Bitte wähle deine Zahlungsmethode:</p>
                <div className='mt-3 text-lg text-white'>
                    <button className='w-full py-[12px] rounded-lg cursor-pointer px-[70px] bg-primary' onClick={() => payMethod('bank')}>
                        Bank Transfer
                    </button>
                    <button className='w-full py-[12px] rounded-lg cursor-pointer mt-5 px-[70px] bg-primary' onClick={() => payMethod('creditcard')}>
                    Kreditkarte
                    </button>
                    <button className='w-full py-[12px] rounded-lg cursor-pointer mt-5 px-[70px] bg-primary' onClick={() => payMethod('sepa')}>
                    SEPA-Lastschrift
                    </button>
                    <button className='w-full py-[12px] rounded-lg cursor-pointer mt-5 px-[70px] bg-primary' onClick={() => payMethod('ideal')}>
                    Ideal
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default StepSeven