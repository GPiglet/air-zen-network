// modules
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const UniqueSkill: FC = () => {

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

    // Animate Refs
    const uniqueHeaderRef = React.useRef<any>();
    const uniquesubRef = React.useRef<any>();
    const uniueItemRef = React.useRef<any>();
    const uniqueCircleRef = React.useRef<any>();


   
        useEffect(() => {
    
            //Only Animation on desktop
            if(window.innerWidth > 920){
                var tl = gsap.timeline({});
                tl.from(uniqueHeaderRef.current, { autoAlpha: 0 })
                    .from(uniquesubRef.current, { autoAlpha: 0 })
                    .from('.unique-skill-animate', { autoAlpha: 0, display: 'none' })
                    .from(uniqueCircleRef.current, { opacity: 0 })
        
                //expand Hero circle
                gsap.to(uniqueCircleRef.current, {
                    scale: 0.7,
                    duration: 1,
                    opacity: 1,
                    transformOrigin: "50% 50%",
                    scrollTrigger: {
                        //   scrub: true,
                        // pin: true,
                        toggleActions: "restart none none reverse",
                        trigger: '#solutions',
                        start: 700 * window.innerHeight / 982,
                        end: 1000 * window.innerHeight / 982,
                    }
                },
        
                );

                gsap.timeline({
        
                    scrollTrigger: {
                        trigger: '#solutions',
                        start: 1200 * window.innerHeight / 982,
                        end: 1400 * window.innerHeight / 982,
                        toggleActions: "play complete reverse reset"
    
                    }
                }).to(uniqueCircleRef.current, { autoAlpha: 0})
        
                //Head title and subtitle animation
        
                gsap.timeline({
        
                    scrollTrigger: {
                        trigger: '#solutions',
                        start: 100 * window.innerHeight / 982,
                        end: 700 * window.innerHeight / 982,
                        scrub: true
                    }
                }).to(uniqueHeaderRef.current, {
                    autoAlpha: 1,
                    display: "block",
                    duration: 6
                })
                gsap.timeline({
        
                    scrollTrigger: {
                        trigger: '#solutions',
                        start: 700 * window.innerHeight / 982,
                        end: 1000 * window.innerHeight / 982,
                        scrub: true
                    }
                }).to(uniquesubRef.current, {
                    autoAlpha: 1,
                    display: "block",
                    duration: 6
                })
                gsap.timeline({
        
                    scrollTrigger: {
                        trigger: '#solutions',
                        start: 1000 * window.innerHeight / 982,
                        end: 1200 * window.innerHeight / 982,
                        scrub: true,
                    }
                }).to(uniqueHeaderRef.current, { opacity: 0, duration: 4 })
                    .to(uniquesubRef.current, { opacity: 0, duration: 4 })
        
                //Unique skill items animation
                gsap.utils.toArray('.unique-skill-animate').forEach((section: any, i) => {
                    gsap.timeline({
        
                        scrollTrigger: {
                            trigger: '#solutions',
                            // scrub:true,
                            start: 700 * window.innerHeight / 982,
                            end: 1400 * window.innerHeight / 982,
                            toggleActions: "play complete reverse reset"
                        }
                    }).to(section, { autoAlpha: 0, y: "150px", duration: 0 })
                        .to(section, { autoAlpha: 1, y: "0", display: 'inline-block', ease: "expo.inOut", duration: 1, delay: i * 0.1 });
                    gsap.timeline({
        
                        scrollTrigger: {
                            trigger: '#solutions',
                            start: 1400 * window.innerHeight / 982,
                            end: 1600 * window.innerHeight / 982,
                            toggleActions: "play complete reverse reset"
        
                        }
                    }).to(section, { autoAlpha: 1, display: 'inline-block', y: "0", duration: 0 })
                        .to(section, { autoAlpha: 0, y: "-150px", ease: "expo.inOut", duration: 1, delay: i * 0.1 });
        
                })
        
                //Hover Animation
            }
    
           
    
    
        }, [])



    return (
        <div id='solutions' className='md:container mx-auto relative  md:flex justify-center items-center pb-[200px]'>
            <svg ref={uniqueCircleRef} className='hidden md:block absolute   top-[35%] left-1/2 center-transform w-[150%]' viewBox="-200 -200 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                <defs>
                    <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>


            <div className='mt-[200px] md:mt-[120px]'>
                <div className=" text-center">
                    <h1 ref={uniqueHeaderRef} className="text-title-sm">Einzigartige Technologie. </h1>
                    <p ref={uniquesubRef} className="font-lato font-light tracking-widest text-white text-[22px] mt-3">Unzählige Einsatzmöglichkeiten. Finden Sie Ihre:</p>
                </div>
                <div ref={uniueItemRef} className='w-full mt-[160px]'>
                <div className='md:m-auto md:w-max'>
                    {
                        skillList.map((item, index) => (
                            <div className='right-[-20px] sm:right-[-70px] w-full md:w-[200px] xl:w-[300px] md:inline-block align-top md:right-auto unique-skill-items relative px-5 py-5 flex-1 unique-skill-animate z-40' key={index} onClick={() => router.push(item.href)}>
                                <div className='border-[1px] bg-black  cursor-pointer border-slate-600 rounded-md h-full'>
                                    <div className='py-3 md:pt-[80px] md:pb-[100px] md:hover:pb-[50px]  px-[20px] text-white w-full relative'>
                                        <picture className=''>
                                            <source srcSet={item.graph} type="image/webp" />
                                            <img src={item.graph} className={`unique-graph w-[200px] md:w-auto absolute center-x-transform top-[-80px] opacity-50 z-10 ${index % 2 == 0 ? 'left-[80px]' : 'right-[-100px]'} md:left-1/2`} alt="" />
                                        </picture>
                                        <p className='font-lato text-[22px] uppercase unique-skill-title'>{item.title}</p>
                                        <p className='font-lato-light font-bold tracking-[0.08em] italic text-xl w-1/2 md:w-[80%]'>{item.subtitle}</p>
                                        <p className='font-lato font-thin text-xl text-lg unique-skill-description hidden'>{item.description}</p>
                                        <ul className='list-disc pl-2 unique-skill-list hidden'>
                                            {item.list.map((subitem, ind) => (
                                                <li className='font-lato text-base font-light' key={ind}>{subitem}</li>
                                            ))}
                                        </ul>
                                        <div className='w-[89px] h-[89px] md:w-[65px] md:h-[65px] top-[5px] md:top-auto sparkle absolute right-[70px] sm:right-[80px] md:right-[10px] md:bottom-[-2px]'>
                                        </div>
                                        <div className='hidden unique-skill-button absolute bottom-0'>
                                            <p className='text-base text-neutral-700 '>Unsere Lösung</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    )

}

export default UniqueSkill