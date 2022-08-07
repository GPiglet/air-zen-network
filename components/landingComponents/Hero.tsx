//modules
import React, { FC, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




const Hero: FC = () => {
   //Animate With GSAP
    const circleRef1 = React.useRef<any>();
    const circleRef2 = React.useRef<any>();
    const circleRef3 = React.useRef<any>();
    const circleRef4 = React.useRef<any>();
    const circleRef5 = React.useRef<any>(); 

    useEffect(() => {
        gsap.to( circleRef1.current, { 
            scale: 2, 
            opacity: 0, 
            transformOrigin: "50% 50%", 
            duration: 3, y: '200px', ease: 'linear', 
            scrollTrigger: {
              scrub: true,
              trigger: circleRef1.current,
              start: 0,
              end: 700,
              // toggleActions: 'play none none reverse'
          } }, 
          
        );
    

    }, [])

    return (
            <section className="container mx-auto pb-16 relative  pt-32 ">
                <svg className="absolute right-[-52%] bottom-[-56%] sm:top-[20%] md:top-[-5%] lg:top-[-16%] md:w-[70%]   sm:w-[120%] sm:right-[-20%] w-[174%] md:right-[-27%] lg:right-[-25%] md:w-[90%] " viewBox="0 0 1245 2114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.33" d="M50.0812 701.846C55.2566 989.408 335.109 1200.06 627.722 1301.88C920.334 1403.71 1234.95 1659.84 1242.99 2106.91C1245.57 2250.91 1245.77 155.351 1242.99 0.000182753C1013.21 121.659 900.23 166.66 594.437 171.818C288.643 176.976 44.9057 414.284 50.0812 701.846Z" fill="url(#paint0_linear_967_2268)" />
                    <circle opacity="0.7" ref={circleRef1} cx="511.729" cy="696.732" r="346.322" fill="url(#paint1_radial_967_2268)" />
                    <foreignObject  className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block" x="68%" y="23.4%" width="260px" height="100px">
                        <p 
                        >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                    </foreignObject>
                    <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block"  x="64.5%" y="23%" cx="511.828" cy="696.377" />
                    <circle opacity="0.3" cx="512.408" cy="696.273" r="362.358" stroke="#7BB690" />
                    <image href="/images/sparkle.svg" className="w-[50px] h-[47px] hidden md:block"  x="59.5%" y="43%" cx="511.828" cy="696.377" />
                    <foreignObject  className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block" x="63%" y="43.4%" width="260px" height="100px">
                        <p 
                        >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                    </foreignObject>
                    <path opacity="0.6" d="M1023.68 696.224C1023.68 978.288 794.632 1206.95 512.089 1206.95C229.545 1206.95 0.5 978.288 0.5 696.224C0.5 414.16 229.545 185.5 512.089 185.5C794.632 185.5 1023.68 414.16 1023.68 696.224Z" stroke="url(#paint2_radial_967_2268)" />
                    <circle opacity="0.7" cx="511.828" cy="696.377" r="259.285" transform="rotate(-90.105 511.828 696.377)" fill="url(#paint3_radial_967_2268)" />
                    <image href="/images/model.png"  x="28.5%" y="25%" cx="511.828" cy="696.377"  transform="translate(0,0)"/>
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
                <div className="relative px-10 z-10 flex items-center md:h-[70%]">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-2/5">
                           <h1 className="text-title-md">Smart Wifi </h1>
                           <h1 className="text-title-md"> for Smart People </h1>
                           <p className="font-lato font-light tracking-widest text-white text-lg mt-3">Das Leben ist zu kurz für schlechtes WIFI. AirZen bietet Highend-Netzwerk-Technologien für einen entspannteren Alltag und Arbeitswelt. Und das außergewöhnlich einfach, sicher und zuverlässig.</p>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default Hero
