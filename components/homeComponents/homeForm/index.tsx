import React, { FC, useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import StepSix from './StepSix'
import StepSeven from './StepSeven'
import Final from '../../common/form/final'
import { StoreContext } from '../../../contexts/Store'

const HomeForm: FC = () => {
    const router = useRouter()


    const [formView, setFormView] = useState(false)
    let step = useContext(StoreContext).step
    const { homeOption } = useContext(StoreContext)
    useEffect(() => {
        console.log(step, homeOption)
        if (step === 0 && homeOption) {
            ++step
        }
    }, [step, homeOption])

    const scrollAnchor = () => {
        console.log('----')
        window.location.href = '#technology'
        setFormView(!formView)
    }



    return (
        <div className='realtive right-0 z-60' >
            <div className='fixed right-[-40px] top-[10%] bg-white w-[100px] cursor-pointer  py-4 px-4 rounded-full z-100' onClick={() => scrollAnchor()}>
                <picture className='max-w-[40px]'>
                    <source srcSet="/images/chat-icon.svg" type="image/webp" />
                    <img src="/images/chat-icon.svg" alt="" />
                </picture>


            </div>
            {
                <div className={`w-full absolute overflow-y-scroll max-h-[75%]  ${formView ? ' block right-[-20px]' : 'right-[-100%] xl:right-[-800px] md:right-[-600px]'} top-[25%] bg-white  md:w-[600px] xl:w-[800px] rounded-xl  font-lato form-animate tracking-[0.8em] z-40`}>
                    {step === 0 &&
                        <picture>
                            <source src='/images/chat-check.svg' />
                            <img src="/images/chat-check.svg" alt="" className='absolute top-[-30px] left-[50%] center-x-transform' />
                        </picture>
                    }
                    {
                        step !== 0 && <svg width="214" height="219" className='absolute top-[-60px] left-[-50px]' viewBox="0 0 214 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M129.297 215.398C71.848 227.511 15.2634 189.912 2.92615 131.397C-9.41115 72.8825 27.177 15.6397 84.6257 3.52718C142.074 -8.58532 198.659 29.013 210.996 87.5279C223.334 146.043 186.745 203.286 129.297 215.398Z" stroke="url(#paint0_linear_0_1)" />
                            <path opacity="0.2" d="M106.958 199.708C58.0336 199.708 18.3419 159.321 18.3419 109.463C18.3419 59.6043 58.0336 19.217 106.958 19.217C155.882 19.217 195.574 59.6043 195.574 109.463C195.574 159.321 155.882 199.708 106.958 199.708Z" stroke="url(#paint1_linear_0_1)" strokeWidth="2" />
                            <defs>
                                <linearGradient id="paint0_linear_0_1" x1="131.076" y1="129.791" x2="30.2186" y2="24.9748" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_0_1" x1="151.105" y1="198.052" x2="132.642" y2="114.961" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#159BDE" />
                                    <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    }
                    <div className='relative overflow-hidden py-[58px] pl-[60px] pr-0'>
                        {step === 1 && <StepOne></StepOne>}
                        {step === 2 && <StepTwo></StepTwo>}
                        {step === 3 && <StepThree></StepThree>}
                        {step === 4 && <StepFour></StepFour>}
                        {step === 5 && <StepFive></StepFive>}
                        {step === 6 && <StepSix></StepSix>}
                        {step === 7 && <StepSeven></StepSeven>}
                        {step === 0 && <Final app={true}></Final>}
                    </div>
                </div>
            }

        </div>
    )
}

export default HomeForm