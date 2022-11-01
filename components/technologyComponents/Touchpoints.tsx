import React, { FC } from 'react'
import IconItem from './IconItem'

type props = {
  className?: string,
}

const Touchpoints: FC<props> = ({className = ''}) => {
  const points = [
    {
      title: 'WiFi',
      description: 'mehrere virtuell getrennte Netze',
      icon: <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.32031 16.7811L9.10031 17.8911C9.53031 18.5011 10.3403 18.6711 11.0003 18.3211C11.8003 17.8911 12.7003 17.6611 13.6403 17.6611C14.5803 17.6611 15.4803 17.8911 16.2803 18.3211C16.9303 18.6711 17.7503 18.4911 18.1803 17.8911L18.9603 16.7811C17.4703 15.5411 15.6103 14.8711 13.6403 14.8711C11.6703 14.8711 9.81031 15.5411 8.32031 16.7811V16.7811Z" fill="white"/>
        <path d="M4.29297 11.0902L5.07297 12.1802C5.52297 12.8202 6.39297 12.9802 7.05297 12.5602C9.01297 11.3402 11.283 10.6802 13.653 10.6802C16.023 10.6802 18.293 11.3402 20.253 12.5602C20.913 12.9702 21.783 12.8102 22.233 12.1802L23.013 11.0902C20.343 9.03016 17.093 7.91016 13.663 7.91016C10.233 7.91016 6.97297 9.03016 4.31297 11.0902H4.29297Z" fill="white"/>
        <path d="M13.6417 0.941406C8.75172 0.941406 4.10172 2.51141 0.261719 5.40141L1.03172 6.49141C1.48172 7.12141 2.35172 7.30141 3.01172 6.87141C6.15172 4.82141 9.81172 3.72141 13.6517 3.72141C17.4917 3.72141 21.1517 4.82141 24.2917 6.87141C24.9417 7.30141 25.8217 7.12141 26.2717 6.49141L27.0417 5.40141C23.1917 2.51141 18.5417 0.941406 13.6417 0.941406Z" fill="white"/>
      </svg>
    },
    {
      title: 'Portal',
      description: 'umfassender Self-Service',
      icon: <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8317 0.941406H2.85172C1.42172 0.941406 0.261719 2.10141 0.261719 3.53141V24.2714C0.261719 25.7014 1.42172 26.8614 2.85172 26.8614H11.8317C13.2617 26.8614 14.4217 25.7014 14.4217 24.2714V3.53141C14.4217 2.10141 13.2617 0.941406 11.8317 0.941406ZM5.86172 18.1914L2.22172 14.5514L3.63172 13.1414L5.86172 15.3714L11.6017 9.64141L13.0117 11.0514L5.86172 18.2014V18.1914Z" fill="white"/>
      </svg>
    },
    {
      title: 'APP',
      description: 'volle Transparenz',
      icon: <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8317 0.941406H2.85172C1.42172 0.941406 0.261719 2.10141 0.261719 3.53141V24.2714C0.261719 25.7014 1.42172 26.8614 2.85172 26.8614H11.8317C13.2617 26.8614 14.4217 25.7014 14.4217 24.2714V3.53141C14.4217 2.10141 13.2617 0.941406 11.8317 0.941406ZM5.86172 18.1914L2.22172 14.5514L3.63172 13.1414L5.86172 15.3714L11.6017 9.64141L13.0117 11.0514L5.86172 18.2014V18.1914Z" fill="white"/>
      </svg>
    },
    {
      title: 'Command Line',
      description: 'volle Kontrolle',
      icon: <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.29172 17.6314L0.261719 15.6014L6.58172 9.2814L0.261719 2.97141L2.29172 0.941406L10.6417 9.2814L2.29172 17.6314Z" fill="white"/>
        <path d="M22.0806 16.6133H10.6406V19.4833H22.0806V16.6133Z" fill="white"/>
      </svg>
    },
    {
      title: 'AirZen Team',
      description: 'Managed Service',
      icon: <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8217 1.91141L11.3117 6.41141L12.6017 9.8714L16.0517 11.1514L20.5617 6.6514L21.5217 10.2514L16.1517 15.6214L12.5517 14.6514L5.00172 22.2014H0.261719V17.4614L7.81172 9.91141L6.85172 6.3214L12.2217 0.941406L15.8217 1.91141Z" fill="white"/>
      </svg>
    }
  ]
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-lg mb-10 uppercase text-center md:text-left'>Touchpoints</p>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        {
          points.map ( 
            (point, index) => 
            <IconItem key={index} title={point.title} description={point.description} iconWidth={28} itemWidth={170}>
              {point.icon}
            </IconItem>
          )
        }
      </div>
    </div>      
  )
}

export default Touchpoints