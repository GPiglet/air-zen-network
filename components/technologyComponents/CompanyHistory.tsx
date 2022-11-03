import React, { FC, useState, useRef } from 'react'
import gsap from "gsap";

type props = {
  className?: string,
}

const CompanyHistory: FC<props> = ({className = ''}) => {
  const histories = [
    {
      duration: '1999',
      title: 'Wlan Anfänge',
      descriptions: [
        'Der erste WLAN-Standard wurde der Welt vorgestellt. Das Air Zen Team setzt sich hauptsächlich aus Autodidakten zusammen, die seit ihrer Kindheit eine Leidenschaft für Linux & Netzwerke besitzen.'        
      ]
    },
    {
      duration: '2004 - 2016',
      title: 'Industrielle Projekte',
      descriptions: [
        'Vorgängerprojekte unseres Teams entwickelten in dieser Zeit verschiedene kundenspezifische Industrie-Projekte und führten diese auf Basis eigener WLAN-Hard &-Software durch.',
        'Von Beginn an konnten wir uns durch Technikaffinität an industriellen Sonderlösungen beteiligen. Zahlreiche Projekte ermöglichten uns den Kontakt zu unabhängigen und innovativen Herstellern.'
      ]
    },
    {
      duration: '2016 - 2020',
      title: 'Learning by doing',
      descriptions: [
        'Ab 2016 fokussierten wir uns maßgeblich auf cloudbasierte Netzwerk-Technologie mit dem Schwerpunkt des Kunden-WLAN. Die zentrale Plattform, um remote Netzwerke zu steuern wurde durch die vorangegangenen Entwicklungen im Bereich Public-WLAN ergänzt: elementare Bestandteile einer ganzheitlichen Lösung für Unternehmensnetzwerke.'        
      ]
    },
    {
      duration: '2023',
      title: 'Themenschwerpunkt Sicherheit',
      descriptions: [
        'IT-Security, die wenig Aufmerksamkeit durch ihre Anwender:innen benötigt und automatisiert ihren Dienst verrichtet ist einer unserer Leitsätze für das Jahr 2023. Der Schwerpunkt liegt darauf, Kunden & Nutzer:innen des WLANs vor externen Bedrohungen zu schützen. Parallel zu diesem Schutz steht die weitere Vereinfachung der Cloud-Komponente im Fokus. Ziel ist es, dass jedes Unternehmen selbst seine eigene AirZen-Cloud betreiben kann - mit oder ohne Managed Service über uns.'        
      ]
    },
    {
      duration: '2024',
      title: 'Fokus Europa',
      descriptions: [
        'Aus unserer Sicht gibt es Stand 2022 aus Europa keine State-Of-The-Art Netzwerk-Technologie. Auch sind uns abseits der eigenen Aktivitäten keine gleichwertigen Versuche bekannt. Wir möchten uns dieser Herausforderung stellen und planen den Ausbau unseres Ansatzes, um alle Core-Elemente Moderner Netzwerktechnologie abzubilden.'
      ]
    },
  ]

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
      <p className='text-center text-2xl mb-10 uppercase'>Herkunft</p>
      <div className='w-full h-fit overflow-hidden ml-[10%] md:ml-0'>
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
                    (description, index2) =>
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