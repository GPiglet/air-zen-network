import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'

type props = {
  className?: string,
}

const RoadMap: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items = t('technology.roadmaps.items', { returnObjects: true });
  const roadmaps: Array<any> = Array.isArray(items) ? items : [];

  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-center text-2xl mb-10 uppercase'>{t('technology.roadmaps.title')}</p>
      <div className='flex flex-col md:flex-row gap-10 xl:gap-32 justify-center'>
        <div className='flex flex-col md:flex-row gap-10'>
          <p className='relative top-[16px] md:top-[-18px] font-bold text-[4rem] ml-[5rem] md:ml-0'>22</p>
          <div className=''>
          {
            roadmaps.filter((rm)=>rm.year==22).map(
              (roadmap, index) =>
              <div key={index} className='flex flex-row gap-10 mx-4 md:mx-0'>
                <p className='font-light w-[32px]'>{roadmap.quarter}</p>
                <div className='hidden md:block w-[1px] bg-white'></div>
                <p className='w-[30%]'>{roadmap.title}</p>
                <p className='font-light leading-7 w-[50%] pb-10'>{roadmap.description}</p>
              </div>
            )
          }
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10'>
          <p className='relative top-[-18px] font-bold text-[4rem] ml-[5rem] md:ml-0'>23</p>
          <div>
          {
            roadmaps.filter((rm)=>rm.year==23).map(
              (roadmap, index) =>
              <div key={index} className='flex flex-row gap-10 mx-4 md:mx-0'>
                <p className='font-light w-[32px]'>{roadmap.quarter}</p>
                <div className='hidden md:block w-[1px] bg-white'></div>
                <p className='w-[30%]'>{roadmap.title}</p>
                <p className='font-light leading-7 w-[50%] pb-10'>{roadmap.description}</p>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </div>      
  )
}

export default RoadMap