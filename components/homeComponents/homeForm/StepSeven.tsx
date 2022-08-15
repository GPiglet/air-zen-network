import React, { FC, useContext } from 'react'
import { useTranslation } from 'next-i18next'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepSeven: FC = () => {
    //translate
    const { t } = useTranslation()

    const { homeOption, changeStep, changeHomeOption } = useContext(StoreContext)

    const buttonList = t('home.form.step7.buttons', { returnObjects: true })

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
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={true}
                breadcrumb={t('home.form.step7.breadcrumb')}
                width='sm:w-[80%]'
            >
                <p className='text-gray-500'>Wir berechnen dir eine <strong>einmalige Zahlung</strong> von <strong>100€</strong> für <strong>{homeOption?.node}</strong> Nodes. Außerdem werden wir monatlich über <strong>{homeOption?.contractTerm} Monate {homeOption?.monthPay}€</strong>   abbuchen.</p>
                <p className='mt-10'>Wir garantieren Dir <br /> <strong>30 Tage Rückgaberecht.</strong></p>
                <p className='text-gray-500 mt-5'>Bitte wähle deine Zahlungsmethode:</p>
                <div className='mt-3 text-lg text-white'>
                    {
                        (buttonList as unknown as any[]).map((item, index) =>
                            <button className='w-full py-[12px] rounded-md cursor-pointer px-[70px] bg-primary-button mb-5' onClick={() => payMethod(item)} key={index}>
                                {item}
                            </button>
                        )
                    }
                </div>
            </Form>
        </div>
    )
}

export default StepSeven