//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from "gsap";

const IdeaSeries: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const hintList = [
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
    ]

    // animation
    const getShowTimeline = (duration: number=1.5) => {
        return gsap.timeline({onReverseComplete: ()=>{if (containerRef.current)gsap.set([containerRef.current], {display: 'none'});}})
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current)gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 0, opacity: 1 },
                { y: -100, opacity: 0, duration },
                0
            )
    }

    const containerRef = React.useRef<any>();
    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean, index: number) => {
        if ( prevAnimation.current ) prevAnimation.current.kill();
        gsap.set([containerRef.current], {display: 'block'});
        if ( direction == 'DOWN' && shown ) prevAnimation.current = getShowTimeline().play(0);
        else if ( direction == 'DOWN' && !shown ) prevAnimation.current = getHideTimeline().play(0);
        else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative flex items-center mb-[70%] md:mb-0 md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <svg className="absolute 
                left-[-64%] sm:left-[-64%] md:left-[-92%] lg:left-[-88%] xl:left-[-69%]
                top-[68%] sm:top-[46%] md:top-1/2 md:translate-y-[-50%]
                w-[230%] sm:w-[230%] md:w-[200%] lg:w-[190%] xl:w-[160%]"
                viewBox="-600 -350 2000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="410.101" cy="409.515" r="277.477" transform="rotate(-180 410.101 409.515)" fill="url(#paint0_radial_0_1)" />
                    <circle opacity="0.3" cx="410.099" cy="409.515" r="290.225" transform="rotate(-180 410.099 409.515)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.499695 409.599C0.499695 183.661 183.969 0.501099 410.291 0.501099C636.613 0.501099 820.082 183.661 820.082 409.599C820.082 635.537 636.613 818.697 410.291 818.697C183.969 818.697 0.499695 635.537 0.499695 409.599Z" stroke="url(#paint1_radial_0_1)" />
                    <circle opacity="0.7" cx="410.098" cy="409.507" r="207.742" transform="rotate(60 410.098 409.507)" fill="url(#paint2_radial_0_1)" />
                </g>
                <image href="/images/phone-home1.png" x="12%" y="11%" className="w-[17%]" />
                <path opacity="0.8" d="M303.843 695.245C368.051 674.697 403.759 606.863 383.6 543.734C363.44 480.605 295.048 446.086 230.84 466.634C166.633 487.182 130.924 555.016 151.084 618.145C171.243 681.274 239.636 715.793 303.843 695.245Z" fill="url(#paint3_radial_0_1)" />
                <foreignObject className="font-lato-light  w-[260px] text-lg text-white hidden md:block" x="16%" y="53%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block" x="14%" y="52.5%" cx="511.828" cy="696.377" />
                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(371.081 262.105) rotate(68.4205) scale(571.724)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.6126 552.369) rotate(-36.2932) scale(812.584 813.959)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(380.884 299.144) rotate(68.4205) scale(428.038)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(265.04 496.811) rotate(79.2367) scale(240.017 244.135)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>


            <div className="relative items-center px-10 md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-[35%] m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('industrial.reliable.tip')}</p>
                            <h1 className="text-title-sm-white">{t('industrial.reliable.title')}</h1>
                            {
                                t('industrial.reliable.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                {
                                    hintList.map((item, index) => (
                                        <div className="flex mb-12" key={index}>
                                            <picture>
                                                <source srcSet="/images/check-icon.svg" type="image/webp" />
                                                <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                            </picture>
                                            <div className="text-white tracking-[0.08em] w-2/3">
                                                <p className="font-lato text-lg font-medium">{item.title} </p>
                                                <p className="font-lato-light text-lg font-light">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default IdeaSeries
