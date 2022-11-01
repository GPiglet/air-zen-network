
import React, { FC } from 'react'

type props = {
    className?: string,
    onClick?: any
    color?: string,
    width?: string
}

const CloseIcon: FC<props> = ({ className, onClick, color, width }) => {
    return (
        <svg className={className} onClick={onClick} width="25" height="27" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.707107" y1="1.29289" x2="35.7071" y2="36.2929" stroke={`${color ? color : '#159BDE'}`} strokeWidth={`${width ? width : '2'}`} />
            <line x1="35.7071" y1="2.70711" x2="0.707107" y2="37.7071" stroke={`${color ? color : '#159BDE'}`} strokeWidth={`${width ? width : '2'}`} />
        </svg>
    )
}

export default CloseIcon