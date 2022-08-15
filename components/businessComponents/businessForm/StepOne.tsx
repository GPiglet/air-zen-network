import React, { FC, useState } from 'react'
import FadeIn from 'react-fade-in'
import { useTranslation } from 'next-i18next'


import Form from '../../common/form'

const StepOne: FC = () => {
    const { t } = useTranslation()

    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <Form
                buttonType='border border-primary pl-5 pr-12'
                buttonActive={true}
                buttonString='zum Konfigurator'
                width='sm:w-[80%]'
            >
                <h1 className='text-[22px] uppercase mb-10'>{t('business.form.step1.title')}</h1>
                {t('business.form.step1.content').split('\n').map((item, index) =>
                    <p className='text-lg mt-2 tracking-widest' key={index}>{item}</p>
                )}
            </Form>
        </FadeIn>
    )
}

export default StepOne