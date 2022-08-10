import React, { FC, useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)




const Hero: FC = () => {

    //Language locale
    const { t } = useTranslation();

    //Animate Ref
    const heroCircleRef1 = React.useRef<any>();
    const heroCircleRef2 = React.useRef<any>();
    const heroCircleRef3 = React.useRef<any>();
    const heroCircleRef4 = React.useRef<any>();
    const heroCircleRef5 = React.useRef<any>();
    const heroTextRef = React.useRef<any>();
    const heroImgRef = React.useRef<any>();

    useEffect(() => {
        
        //Only Animation on desktop
        if(window.innerWidth > 920){
        //expand circle
        gsap.to( heroCircleRef5.current, { 
            scale: 3, 
            opacity: 0, 
            transformOrigin: "50% 50%", 
            scrollTrigger: {
              scrub: true,
              trigger: heroTextRef.current,
              start: 0,
              end: 700,
          } }, 
          
        );
    
        //getting smaller circles
        gsap.to( [heroCircleRef2.current, heroCircleRef3.current], { 
            scale: 0, 
            opacity: 0, 
            transformOrigin: "50% 50%", 
            scrollTrigger: {
              scrub: true,
              trigger: heroTextRef.current,
              start: 100,
              end: 700
          } }, 
          
        );
    
        //fade out paths
        gsap.to( [heroCircleRef1.current, heroCircleRef4.current], { 
          y: '-150px', 
          opacity: 0, 
          transformOrigin: "50% 50%", 
          scrollTrigger: {
            scrub: true,
            trigger: heroTextRef.current,
            start: 0,
            end: 700,
        } }, 
        
      );
      
      //fade in out parts
      gsap.utils.toArray('.hero-fade').forEach((section: any) => {
          const tl = gsap.timeline( { 
       
            scrollTrigger: {
              trigger: heroTextRef.current,
              start: 100,
              end: 500,
              scrub: true,
            //   markers: true,
            }
          });
          tl.to(section, {opacity:0, duration: 6})
      })
    }
      
    }, [])


    return (
        <section className="container mx-auto pb-16 relative  pt-32 ">
            <svg className="absolute right-[-52%] bottom-[-56%] sm:top-[20%] md:top-[-5%] xl:top-[-16%] sm:w-[120%] sm:right-[-20%] w-[174%] md:right-[-27%] lg:right-[-25%] md:w-[105%] " viewBox="-220 0 1450 2114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={heroCircleRef1} className='hero-fade' opacity="0.33" d="M50.0812 701.846C55.2566 989.408 335.109 1200.06 627.722 1301.88C920.334 1403.71 1234.95 1659.84 1242.99 2106.91C1245.57 2250.91 1245.77 155.351 1242.99 0.000182753C1013.21 121.659 900.23 166.66 594.437 171.818C288.643 176.976 44.9057 414.284 50.0812 701.846Z" fill="url(#paint0_linear_967_2268)" />
                <circle ref={heroCircleRef2}  opacity="0.7" cx="511.729" cy="696.732" r="346.322" fill="url(#paint1_radial_967_2268)" />
                <foreignObject className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block hero-fade" x="59%" y="23.4%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block hero-fade" x="55.5%" y="23%" cx="511.828" cy="696.377" />
                <circle ref={heroCircleRef3} opacity="0.3" cx="512.408" cy="696.273" r="362.358" stroke="#7BB690" />
                <image href="/images/sparkle.svg" className="w-[50px] h-[47px] hidden md:block hero-fade" x="50.5%" y="43%" cx="511.828" cy="696.377" />
                <foreignObject className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block hero-fade" x="54%" y="43.4%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <path ref={heroCircleRef4} className='hero-fade' opacity="0.6" d="M1023.68 696.224C1023.68 978.288 794.632 1206.95 512.089 1206.95C229.545 1206.95 0.5 978.288 0.5 696.224C0.5 414.16 229.545 185.5 512.089 185.5C794.632 185.5 1023.68 414.16 1023.68 696.224Z" stroke="url(#paint2_radial_967_2268)" />
                <circle ref={heroCircleRef5} opacity="0.7" cx="511.828" cy="696.377" r="259.285" transform="rotate(-90.105 511.828 696.377)" fill="url(#paint3_radial_967_2268)" />
                <image ref={heroImgRef}  className='hero-fade' href="/images/model.png" x="24.5%" y="25%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                <defs>
                    <linearGradient id="paint0_linear_967_2268" x1="278.213" y1="680.928" x2="1245.06" y2="732.717" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint1_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(463.027 512.748) rotate(68.4205) scale(713.575)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(938.541 518.031) rotate(143.707) scale(1014.19 1015.91)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(475.366 558.632) rotate(68.4205) scale(534.239)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div ref={heroTextRef} className="relative px-10 z-10 flex items-center md:h-[70%] hero-fade">
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-2/5">
                        <h1 className="text-title-md">{t("landing.header")} </h1>
                        {/* <h1 className="text-title-md"> for Smart People </h1> */}
                        <p className="font-lato font-light tracking-widest text-white text-lg mt-3">{t("landing.description")}</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero

