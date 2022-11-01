
import React, { FC } from 'react'

type checkboxProps = {
    checked: boolean,
    valid?: boolean,
    style?: string,
    children?: any,
    onClick: () => void
}

const CustomCheckbox: FC<checkboxProps> = ({ checked, valid, style, onClick, children }) => {
    return (
        <>
            <div className='mt-5 mr-3'>
                <div className='cursor-pointer w-[24px]' onClick={onClick} >
                    {
                        checked ? <img src="/images/icons/round-check.png" alt="" /> : (
                            !valid ? (
                                style == 'dark' ? <img src="/images/icons/round-invalid-black.png" alt="" /> : <img src="/images/icons/round-invalid-white.png" alt="" />
                                
                            ) : (
                                <img src="/images/icons/round.png" alt="" />
                            )
                        )
                    }
                </div>
            </div>
            <p className={`font-lato font-light text-left text-sm ${style=='dark' ? '' : 'text-white'} tracking-[2px] my-4`}>
                {children}
            </p>
        </>


    )
}

export default CustomCheckbox