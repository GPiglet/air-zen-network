import React, { FC } from 'react'
import Button from './Button'

type props = {
  className?: string,
  solution?: string,
  title?: string,
  description?: string,
  specs?: string[],
  children?: any,
  imageWidthClass?: string,
  itemWidthClass?: string,
}

const NodeItem: FC<props> = ({className = '', solution='', title='', description='', specs=[], children, imageWidthClass='', itemWidthClass=''}) => {
    return (
      <div className={`relative flex gap-10 md:gap-4 text-white ${className} justify-center`}>
        <div className={`flex justify-end md:justify-center ${imageWidthClass}`} >{children}</div>
        <div className={`relative top-[-4px] ${itemWidthClass}`}>
          <p className='font-lato-light uppercase text-[14px]'>{solution}</p>
          <p className='text-lg mb-6 uppercase'>{title}</p>
          <p className='text-lg font-light mb-6'>{description}</p>
          <ul className='font-light'>
            {
              specs.map(
                (spec, index) =>
                <li key={index}>
                  - {spec}
                </li>
              )
            }
          </ul>
          <p className='mt-10'><Button title="Datenblatt" /></p>
        </div>
      </div>      
    )
}

export default NodeItem