import React, {FC, useEffect, useState} from 'react'

type SparkleProps = {
    className?: string,
    children: string
}

const Sparkle :FC<SparkleProps> = ({className, children}) => {
    return (
      <div className={`hidden md:flex items-start ${className ? className : ''}`}>
        <img src="/images/sparkle.svg" className="relative top-[-9px] w-[40px]" />
        <p className='font-lato-light w-full text-base text-white'>{children}</p>
      </div>
    );
  };

  export default Sparkle