import React, { FC, useState, useRef, useContext } from 'react'
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next'

import DownloadButton from './DownloadButton'

type props = {
  className?: string,
}

const WhitePaper: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items: Array<any> = t('technology.whitepapers.items', { returnObjects: true });

  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-center text-2xl mb-10 uppercase'>{t('technology.whitepapers.title')}</p>
      <div className='flex flex-col md:flex-row gap-20 justify-center text-lg items-center'>
        {
          Array.isArray(items) && items.map(
            (paper, index) => 
            <div key={index} className='text-center md:text-left' style={{width: paper.width}}>
              <p className='mb-4 text-center md:text-left'>{paper.title}</p>
              <p className='font-light min-h-[100px] text-center md:text-left'>{paper.description}</p>
              <DownloadButton title="PDF DOWNLOAD" item={paper.download}/>
            </div>
          )
        }
      </div>
    </div>      
  )
}

export default WhitePaper