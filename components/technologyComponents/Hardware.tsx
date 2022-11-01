import React, { FC } from 'react'

type props = {
  className?: string,
}

const Hardware: FC<props> = ({className = ''}) => {
    return (
      <div className={`relative text-white ${className}`}>
        <p className='text-lg mb-10 uppercase text-center md:text-left'>Hardware</p>
        <div className='flex flex-row md:flex-col gap-10 md:gap-6 justify-center md:justify-start'>
          <img src="/images/model.png" className="w-[140px] md:w-[120px] h-fit" />
          <div className='w-[170px]'>
            <p className=''>AirZen Nodes</p>
            <p className='font-light mb-4'>Router, Access, Mesh & Security</p>
            <p>unterstützte Interfaces</p>
            <p className='font-light'>Ethernet, DSL, Fiber, Bluetooth & BLE, WiFi6, LoRa, 5G & 4G, Starlink, GPS/GNNS & Iridium</p>
          </div>
        </div>
      </div>      
    )
}

export default Hardware