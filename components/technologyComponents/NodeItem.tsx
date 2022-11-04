import React, { FC } from 'react'
import DownloadButton from './DownloadButton'

type props = {
  className?: string,
  children?: any,
  item?: any
}

const NodeItem: FC<props> = ({className = '', item, children}) => {
    return (
      <div className={`relative flex gap-10 md:gap-4 text-white ${className} justify-center`}>
        <div className={`flex justify-end md:justify-center ${Array.isArray(item?.itemClasses) && item.itemClasses[0]}`} >{children}</div>
        <div className={`relative top-[-4px] ${Array.isArray(item?.itemClasses) && item.itemClasses[1]}`}>
          <p className='font-lato-light uppercase text-[14px]'>{item?.solution}</p>
          <p className='text-lg mb-6 uppercase'>{item?.title}</p>
          <p className='text-lg font-light mb-6'>{item?.description}</p>
          <ul className='font-light'>
            {
              Array.isArray(item?.specs) && item.specs.map(
                (spec: any, index: number) =>
                <li key={index}>
                  - {spec}
                </li>
              )
            }
          </ul>
          <p className='mt-10'>{item.download ? <DownloadButton title="Datenblatt" item={item.download}/> : <div className='px-8 py-3'>&nbsp;</div>}</p>
        </div>
      </div>      
    )
}

export default NodeItem