
import React, { FC } from 'react'

type checkboxProps = {
    checked: boolean,
    onClick: () => void
}

const CustomCheckbox: FC<checkboxProps> = ({ checked, onClick }) => {

    return (
        <div className='cursor-pointer w-[22px]' onClick={onClick} >
            {
                checked ?
                    (
                        <img src="/images/round-check.png" alt="" />
                    ) : (
                        <img src="/images/round.png" alt="" />
                    )
            }

        </div >
    )
}

export default CustomCheckbox