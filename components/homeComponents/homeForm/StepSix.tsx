import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Form from '../../common/form'

const StepSix: FC = () => {
    //translate
    const { t } = useTranslation()

    return (
        <FadeIn delay={0} transitionDuration={1000} className='leading-8'>
            <Form
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={true}
                breadcrumb={t('home.form.step6.breadcrumb')}
                buttonString={t('home.form.step6.button')}
                width='sm:w-[80%]'
            >
                <p className='text-gray-500'>{t('home.form.step6.info')}</p>
                <div className='flex items-center'>
                    <picture>
                        <source src="/images/pdf-icon.svg" type="" />
                        <img src="/images/pdf-icon.svg" alt="" />
                    </picture>
                    <p className='text-inputColor font-bold ml-5'>Air zen & Firmenname,<br /> 05.07.2022</p>
                </div>
                <div className='flex items-center mt-10'>
                    <svg width="53" height="53" className='mr-5' viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26.5" r="25" stroke="url(#paint0_linear_1248_3123)" strokeWidth="3" />
                        <defs>
                            <linearGradient id="paint0_linear_1248_3123" x1="26.5" y1="0" x2="26.5" y2="53" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#01ACE6" />
                                <stop offset="1" stopColor="#01ACE6" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className=' ml-2'>{t('home.form.step6.confirm')}</p>
                </div>
            </Form>
        </FadeIn>
    )
}

export default StepSix