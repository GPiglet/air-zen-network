// modules
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const UniqueSkill: FC = () => {

     //window size
     const [isMobile, setIsMobile] = useState(false)

     const handleResize = () => {
         if (window.innerWidth < 920) {
             setIsMobile(true)
         } else {
             setIsMobile(false)
         }
       }
 
     useEffect(() => {
         window.addEventListener("resize", handleResize)
       })
    
       useEffect(() => {
        
       }, [isMobile])

    const router = useRouter()

    const skillList = [
        {
            title: 'Home',
            subtitle: 'Für ein smartes Zuhause.',
            description: 'Störungsfreies und selbstoptimierendes Netz. Zuhause wie beim Profi.',
            list: ['Hochstabile Verbindung', 'Keine Erfahrung nötig', ' Automatische Updates', 'Videosupport'],
            graph: '/images/graph-home.svg',
            href: '/home'
        },
        {
            title: 'Business',
            subtitle: 'Für ein smartes Zuhause.',
            description: 'Störungsfreies und selbstoptimierendes Netz. Zuhause wie beim Profi.',
            list: ['Hochstabile Verbindung', 'Keine Erfahrung nötig', ' Automatische Updates', 'Videosupport'],
            graph: '/images/graph-business.svg',
            href: '/business'
        },
        {
            title: 'Education',
            subtitle: 'Für ein vernetztes Unternehmen.',
            description: 'Störungsfreies und selbstoptimierendes Netz. Zuhause wie beim Profi.',
            list: ['Hochstabile Verbindung', 'Keine Erfahrung nötig', ' Automatische Updates', 'Videosupport'],
            graph: '/images/graph-education.svg',
            href: '/education'
        },
        {
            title: 'Industrial',
            subtitle: 'Für den digitalen Fortschritt.',
            description: 'Störungsfreies und selbstoptimierendes Netz. Zuhause wie beim Profi.',
            list: ['Hochstabile Verbindung', 'Keine Erfahrung nötig', ' Automatische Updates', 'Videosupport'],
            graph: '/images/graph-industrial.svg',
            href: '/industrial'
        },
    ]

    return (
            <section id='solutions' className='md:container mx-auto relative  md:flex justify-center items-center'>
                <svg className='hidden md:block absolute   top-1/2 left-1/2 center-transform w-[55%]' viewBox="0 0 898 898" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                    <defs>
                        <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='  mt-[200px] md:mt-[120px]'>
                    <div className="text-center">
                        <h1 className="text-title-sm">Einzigartige Technologie. </h1>
                        <p className="font-lato font-light tracking-widest text-white text-[22px] mt-3">Unzählige Einsatzmöglichkeiten. Finden Sie Ihre:</p>
                    </div>
                    <div className='w-full md:flex  mt-[160px] z-50'>
                        {
                            skillList.map((item, index) => (
                                <div className='right-[-20px] sm:right-[-70px] md:right-auto unique-skill-items relative px-5 py-5 cursor-pointer flex-1' key={index} onClick={() => router.push(item.href)}>
                                    <div className='border-[1px] border-slate-600 rounded-md h-full'>
                                        <div className='bg-black rounded-md'>
                                            <div className='py-3 md:py-[80px] md:pb-[120px] md:hover:pb-[80px] px-[20px] text-white w-full relative'>
                                            <picture>
        <source srcSet={item.graph} type="image/webp" />
                                                <img src={item.graph} className={`w-[200px] md:w-auto absolute center-x-transform top-[-50px] opacity-50 z-10 ${index % 2 == 0 ? 'left-[80px]' : 'right-[-100px]'} md:left-1/2`} alt="" />
                                                </picture>
                                                <p className='font-lato text-[22px] uppercase unique-skill-title'>{item.title}</p>
                                                <p className='font-lato-light font-bold tracking-[0.08em] italic text-xl w-1/2 md:w-[100%]'>{item.subtitle}</p>
                                                <p className='font-lato font-thin text-xl text-lg unique-skill-description hidden'>{item.description}</p>
                                                <ul className='list-disc pl-2 unique-skill-list hidden'>
                                                    {item.list.map((subitem, ind) => (
                                                        <li className='font-lato text-base font-light' key={ind}>{subitem}</li>
                                                    ))}
                                                </ul>
                                                <div className='w-[89px] h-[89px] md:w-[65px] md:h-[65px] sparkle absolute top-[5px] right-[70px] sm:right-[80px] md:right-[10px] md:top-auto md:bottom-[28px]'>
                                                </div>
                                            <div className='hidden unique-skill-button absolute bottom-0'>
                                                <p className='text-base text-neutral-700 '>Unsere Lösung</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            ))
                        }
                    </div>

                </div>
            </section>
    )

}

export default UniqueSkill