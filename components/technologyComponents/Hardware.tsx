import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'

type props = {
  className?: string,
}

const Hardware: FC<props> = ({className = ''}) => {
    const { t } = useTranslation();
    const items: Array<any> = t('technology.intro.hardware.items', { returnObjects: true });
    return (
      <div className={`relative text-white ${className}`}>
        <p className='text-lg mb-10 uppercase text-center xl:text-left'>{t('technology.intro.hardware.title')}</p>
        <div className='flex flex-row md:flex-col gap-10 md:gap-6 justify-center md:justify-start'>
          <img src={t('technology.intro.hardware.image')} className="w-[140px] md:w-[120px] object-contain" />
          <div className='w-[170px]'>
            {
                items.map( (item, index) => 
                    <div key={index}>
                        <p className=''>{item.title}</p>
                        <p className='font-light mb-4'>{item.description}</p>
                    </div>
                )
            }
          </div>
        </div>
      </div>      
    )
}

export default Hardware