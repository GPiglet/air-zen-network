import React, { FC } from 'react'
import IconItem from './IconItem'
import { useTranslation } from 'next-i18next'

type props = {
  className?: string,
}

const Touchpoints: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items: Array<any> = t('technology.intro.touchpoints.items', { returnObjects: true });
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-lg mb-10 uppercase text-center xl:text-left'>{t('technology.intro.touchpoints.title')}</p>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        {
          Array.isArray(items) && items.map ( 
            (point, index) => 
            <IconItem key={index} title={point.title} description={point.description} iconWidth={28} itemWidth={170}>
              <img src={point.icon} className='h-fit'/>
            </IconItem>
          )
        }
      </div>
    </div>      
  )
}

export default Touchpoints