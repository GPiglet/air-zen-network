
import React, { FC } from 'react'

type checkboxProps = {
    checked: boolean,
    onChange: () => void
}

const CustomCheckbox: FC<checkboxProps> = ({ checked, onChange }) => {

    return (
        <div className='cursor-pointer w-[30px]' onMouseDown={() => onChange()} >
            {
                checked ?
                    (
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.5" cy="15.5" r="15.5" fill="url(#paint0_linear_1376_4709)" />
                            <path d="M9 15.4416L13.3707 20L22 11" stroke="white" strokeWidth="3" />
                            <defs>
                                <linearGradient id="paint0_linear_1376_4709" x1="15.5" y1="0" x2="15.5" y2="43" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#159BDE" />
                                    <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    ) : (
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="15" transform="matrix(1 0 0 -1 16.5 16.5)" stroke="url(#paint0_linear_1376_4714)" strokeWidth="3" />
                            <defs>
                                <linearGradient id="paint0_linear_1376_4714" x1="16.5" y1="0" x2="16.5" y2="33" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#01ACE6" />
                                    <stop offset="1" stopColor="#01ACE6" stopOpacity="0.6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    )
            }

        </div >
    )
}

export default CustomCheckbox