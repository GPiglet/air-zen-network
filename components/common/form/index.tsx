import React, { FC, ReactNode, useContext, useState } from 'react'
import FadeIn from 'react-fade-in'

import { StoreContext } from '../../../contexts/Store'

type FormProps = {
    breadcrumb?: string,
    final?: boolean,
    bgImg?: string,
    submit?: boolean,
    buttonString?: string,
    buttonType?: string,
    children: ReactNode,
    buttonActive?: boolean,
    bgClassName?: string
    width: string

}

const Form: FC<FormProps> = ({ breadcrumb, final, bgImg, submit, buttonString, buttonType, buttonActive, bgClassName, width, children }) => {

    const {changeStep} = useContext(StoreContext)
    let step = useContext(StoreContext).step

    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <div className={`w-[90%] ${width} tracking-[0.08em] text-lg`}>
                {
                    breadcrumb && (
                        <div className="flex items-center pb-10 relative z-50">
                            <svg width="20" height="36" viewBox="0 0 20 36" className='cursor-pointer' fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => changeStep?.(--step)}>
                                <line x1="0.707107" y1="17.2929" x2="18.7071" y2="35.2929" stroke="#159BDE" strokeWidth="2" />
                                <line x1="18.7071" y1="0.707107" x2="0.707107" y2="18.7071" stroke="#159BDE" strokeWidth="2" />
                            </svg>
                            <p className='text-lg ml-7 text-slate-500'>{breadcrumb}</p>

                        </div>
                    )
                }
                {children}
            </div>
            <picture >
                <source src={bgImg} />
                <img src={bgImg} alt="" className={`absolute  ${bgClassName}`} />
            </picture>
            {
                buttonString && 
                <button className={`text-lg py-[12px] float-right rounded-lg drop-shadow-lg tracking-[0.08em] mt-12 cursor-pointer ${buttonType} ${buttonActive ? 'opacity-1' : 'opacity-50'}`} disabled={!buttonActive} onClick={() => changeStep?.(++step)}>{buttonString}</button>

            }
        </FadeIn>
    )
}

export default Form