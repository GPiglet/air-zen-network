import React, { FC } from 'react'

type props = {
  className?: string,
  title?: string,
  onClick?: ()=> void,
}

const Button: FC<props> = ({className = '', title='', onClick}) => {
    return (
      <button 
        onClick={onClick}
        className={`border border-[#01ACE6] rounded-[32px] text-center font-light px-8 py-3 text-white/75 uppercase ${className}`}
      >
        {title}
      </button>      
    )
}

export default Button