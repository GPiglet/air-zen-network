import React, { FC } from 'react'

type props = {
  className?: string,
}

const RoadMap: FC<props> = ({className = ''}) => {
  const roadmaps = [
    {
      year: 22,
      quarter: 'Q3',
      title: 'Node H6',
      description: 'Produktrealease\nMesh WLAN Router\nfür Home(Office) mit\nAirZen OS.',
    },

    {
      year: 22,
      quarter: 'Q4',
      title: 'Node M5',
      description: 'Produktrealease\nMobile Router\nfür raue Umgebungen mit\n5G, WLAN & 24h Batterie.',
    },

    {
      year: 23,
      quarter: 'Q1',
      title: 'Node H5',
      description: '5G Home&Business Router\nfür den Innenbereich',
    },

    {
      year: 23,
      quarter: '',
      title: 'Mesh VPN',
      description: 'Automatische Mobile &\nSecure Netzwerke',
    },

    {
      year: 23,
      quarter: 'Q2',
      title: 'Home App',
      description: 'AirZen App Home\nfür Privatkunden.',
    },

    {
      year: 23,
      quarter: '',
      title: 'Node B7',
      description: 'WiFi6 Business Router\nmit Pro-Bandbreite.',
    },

    {
      year: 23,
      quarter: 'Q3',
      title: 'Private Cloud',
      description: 'Public Release\nAirZen OS Private Cloud.\nSelf-Hosted AirZen\nSystem.',
    },

    {
      year: 23,
      quarter: 'Q4',
      title: 'AirZen Things',
      description: 'Produkt Launch mehrerer\nInternet of Things basierter\nSensoren für Home & Business.',
    },
  ]
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-center text-2xl mb-10'>ROADMAP</p>
      <div className='flex flex-col md:flex-row gap-10 md:gap-32 justify-center'>
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