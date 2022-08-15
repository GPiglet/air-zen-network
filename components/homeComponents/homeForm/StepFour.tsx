import React, { FC, useContext, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepFour: FC = () => {
    const { homeOption } = useContext(StoreContext)
    const { t } = useTranslation()


    return (
        <div className='leading-10'>
            <Form
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={true}
                breadcrumb={t('home.form.step4.breadcrumb')}
                buttonString={t('home.form.step4.button')}
                width='sm:w-[80%]'
            >
                <p className='text-gray-500'>{t('home.form.step4.confirm')}</p>
                <p className='mt-5'>{t('home.form.step4.roomSize').split('\n')[0]}<span className='text-inputColor p-1 border rounded-md'>{homeOption?.roomSize}</span> {t('home.form.step4.roomSize').split('\n')[1]}</p>
                <p className='mt-5'>{t('home.form.step4.node').split('\n')[0]} <span className='text-inputColor p-1 border rounded-md'>{homeOption?.node}</span> {t('home.form.step4.node').split('\n')[1]}</p>
                <p className='mt-5'>{t('home.form.step4.month').split('\n')[0]} <span className='text-inputColor p-1 border rounded-md'>{homeOption?.contractTerm}</span> {t('home.form.step4.month').split('\n')[1]}</p>
                <p className='mt-5 mb-5'>{t('home.form.step4.price').split('\n')[0]} <span className='text-inputColor p-1 border rounded-md'>monatlich {homeOption?.monthPay}€</span> {t('home.form.step4.price').split('\n')[1]}</p>
                {
                    t('home.form.step4.noti').split('\n').map((item, index) =>
                        <p className='leading-8' key={index}>
                            {item}
                        </p>
                    )
                }
            </Form>
        </div>
    )
}

export default StepFour