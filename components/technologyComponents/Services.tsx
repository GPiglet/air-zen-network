import React, { FC } from 'react'
import IconItem from './IconItem'
import { useTranslation } from 'next-i18next'

type props = {
  className?: string,
}

const Services: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items: Array<any> = t('technology.intro.services.items', { returnObjects: true });
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-lg mb-10 uppercase text-center xl:text-left'>{t('technology.intro.services.title')}</p>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        {
          Array.isArray(items) && items.map ( 
            (service, index) => 
            <IconItem key={index} title={service.title} description={service.description} iconWidth={36} itemWidth={service.itemWidth}>
              <img src={service.icon} className="h-fit" />
            </IconItem>
          )
        }
      </div>
    </div>      
  )
}

export default Services