import React, { FC } from 'react'

type props = {
  className?: string,
  title?: string,
  description?: string,
  children?: any,
  iconWidth?: number,
  itemWidth?: number,
}

const IconItem: FC<props> = ({className = '', title='', description='', children, iconWidth=0, itemWidth=0}) => {
    return (
      <div className={`relative flex gap-4 text-white ${className}`}>
        <div className='flex justify-center' style={{width: iconWidth ? iconWidth : 'auto'}}>{children}</div>
        <div className='relative top-[-4px]' style={{width: itemWidth ? itemWidth : 'auto'}}>
          <p>{title}</p>
          <p className='font-light'>{description}</p>
        </div>
      </div>      
    )
}

export default IconItem