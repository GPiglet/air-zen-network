import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import DownloadButton from './DownloadButton'
import NodeItem from './NodeItem'

type props = {
  className?: string,
}

const OurNodes: FC<props> = ({className = ''}) => {
  const { t } = useTranslation();
  const items: Array<any> = t('technology.ournodes.items', { returnObjects: true });
  return (
    <div className={`relative text-white ${className}`}>
      {/* background */}
      <svg className='z-0 absolute left-1/2 translate-x-[-50%] top-[-5%]' width="1092" height="1082" viewBox="0 0 1092 1082" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M824.204 1000.94C1083.05 844.466 1168.3 511.531 1014.62 257.309C860.942 3.0862 526.525 -76.1546 267.68 80.3194C8.83508 236.793 -76.4179 569.729 77.2619 823.951C230.942 1078.17 565.359 1157.41 824.204 1000.94Z" fill="url(#paint0_radial_5857_2270)"/>
        <defs>
        <radialGradient id="paint0_radial_5857_2270" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(321.014 108.99) rotate(59.2387) scale(1084.24 1103.95)">
        <stop stopColor="#2294C3"/>
        <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
        </radialGradient>
        </defs>
      </svg>

      {/* Node M5 background */}
      <svg className='z-0 absolute hidden md:block top-[50%] right-0 w-[30%]' viewBox="0 0 638 637" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.8" d="M596.575 162.413C510.451 9.20278 316.252 -45.161 162.818 40.9879C9.38405 127.137 -45.1816 321.176 40.9421 474.386C127.066 627.596 321.266 681.959 474.699 595.81C628.133 509.662 682.699 315.623 596.575 162.413Z" fill="url(#paint0_radial_5857_2272)"/>
      <defs>
      <radialGradient id="paint0_radial_5857_2272" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(540.599 495.215) rotate(-140.464) scale(655.442 655.799)">
      <stop stopColor="#8ABE9C"/>
      <stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
      </radialGradient>
      </defs>
      </svg>

      <div className='z-10 relative'>
        <p className='text-center text-2xl mb-6 uppercase'>{t('technology.ournodes.title')}</p>
        <p className='text-center mb-10'><DownloadButton title={t('technology.ournodes.buttonTitle')} item={t('technology.ournodes.download', {returnObjects: true})}/></p>
        <div className='flex flex-col md:flex-row gap-20 justify-center text-lg'>
          {
            Array.isArray(items) && items.map(
              (nodes, index1) => 
              <div key={index1} className='flex flex-col gap-20'>
                {
                  nodes.map(
                    (node: any, index2: number) =>
                    <NodeItem key={index2} className={`${index1==0 ? '' : 'md:flex-row-reverse'}`} item={node}>
                      <img src={node.image} className={node.imageClass} />
                    </NodeItem>
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

export default OurNodes