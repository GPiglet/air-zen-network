import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'


const Contact: FC = () => {
    //translate
    const { t } = useTranslation()



    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <div className='border-t-4 border-gray-300 pl-20 py-10 relative'>
                <p className='text-lg w-1/2 mt-2 tracking-widest text-gray-500'>{t('business.form.configrator.contact')}</p>
                <button className='md:absolute right-0 md:top-[30px] text-lg py-[12px] float-right rounded-md drop-shadow-md tracking-[0.08em] cursor-pointer px-[55px] bg-primary-button text-white'>{t('landing.contact.title')}</button>
                <svg width="160" height="160" className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-20px]' viewBox="0 0 191 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.9" d="M187.729 115.344C176.588 165.353 126.268 196.726 75.3071 185.373C24.3461 174.019 -7.89752 124.253 3.24348 74.2444C14.3845 24.2359 64.7045 -7.13696 115.666 4.21623C166.626 15.5694 198.87 65.336 187.729 115.344Z" stroke="url(#paint0_linear_1223_2923)" strokeWidth="2" />
                    <defs>
                        <linearGradient id="paint0_linear_1223_2923" x1="196.04" y1="69.8561" x2="19.882" y2="98.448" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </FadeIn>
    )
}

export default Contact