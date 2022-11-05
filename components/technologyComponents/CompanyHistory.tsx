import React, { FC, useState, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import gsap from "gsap";

type props = {
  className?: string,
}

const CompanyHistory: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items = t('technology.histories.items', { returnObjects: true });
  const histories: Array<any> = Array.isArray(items) ? items : [];

  //custome carousel
  const historyPanelWidth = 420;
  const refHistories = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const gotoHistory = (action: string) => {
    const viewRect = refHistories.current?.parentElement?.getBoundingClientRect();
    const viewWidth = viewRect ? viewRect.width : 0;
    if ( gsap.isTweening(refHistories.current) ) return;
    if ( action == 'next' ) {
      if ( (histories.length - startIndex) * historyPanelWidth <= viewWidth + 50 ) return;
      else {
        gsap.to(refHistories.current, {x: '-=' + historyPanelWidth});
        setStartIndex(startIndex + 1);
        if ( (histories.length - startIndex - 1) * historyPanelWidth <= viewWidth + 50 ) gsap.set('.nav-next', {display: 'none'});
      }
      gsap.set('.nav-prev', {display: 'block'});
    }
    else if ( action == 'prev' ) {
      if ( startIndex <= 0 ) return;
      else {
        gsap.to(refHistories.current, {x: '+=' + historyPanelWidth});
        setStartIndex(startIndex - 1);
        if ( startIndex - 1 <= 0 ) gsap.set('.nav-prev', {display: 'none'});
      }
      gsap.set('.nav-next', {display: 'block'});
    }
  }
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-center text-2xl mb-10 uppercase'>{t('technology.histories.title')}</p>
      <div className='w-full overflow-hidden ml-[10%] md:ml-0'>
        <div className='z-50 history-nav-back nav-next absolute right-0 w-[300px] h-full'>
          <img src="/images/sparkle-arrow.svg" alt='Next' className='w-[47px] h-[93px] top-[52%] cursor-pointer absolute right-[20px] md:right-[47px] md:top-1/2 center-y-transform z-50' onClick={()=>{gotoHistory('next')}}/>
        </div>
        <div className='z-50 history-nav-back-reserve nav-prev hidden absolute left-0 w-[300px] h-full'>
          <img src="/images/sparkle-arrow.svg" alt='Next' className='sparkle-arrow-reverse w-[47px] h-[93px] top-[52%] cursor-pointer absolute left-[20px] md:left-[47px] md:top-1/2 center-y-transform z-50' onClick={()=>{gotoHistory('prev')}}/>
        </div>
        <div ref={refHistories} className='inline-flex flex-row justify-center text-lg'>
          {
            histories.map(
              (history, index) => 
              <div key={index} className={`w-[420px]`}>
                <p className='font-light mb-4'>{history.duration}</p>
                <div className='history-line mb-4 w-full'></div>
                <p className='mb-6 uppercase'>{history.title}</p>
                {
                  history.descriptions.map (
                    (description: string, index2: number) =>
                    <p key={index2} className='font-light mb-4 w-[80%]'>
                      {description}
                    </p>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </div>      
  )
}

export default CompanyHistory