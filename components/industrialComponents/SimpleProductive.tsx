//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from "gsap";

const SimpleProductive: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
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
    const getShowTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
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
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (

        <div id="easy" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="relative items-center px-10 md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <div className="flex flex-wrap md:mt-28">
                    <div className="w-full md:w-[35%] m-auto">
                        <div className="relative">
                            <p className="font-lato-ligh font-light text-[22px] text-white">{t('industrial.easy.tip')}</p>
                            <h1 className="text-title-sm-white">{t('industrial.easy.title')}</h1>
                            {
                                t('industrial.easy.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item} </p>
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
                                                <p className="font-lato-light text-lg font-ligh">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="md:absolute 
                left-[-64%] sm:left-[-64%] md:left-[-43%]  xl:left-[-15%]
                top-[68%] sm:top-[46%] md:top-[50%] md:translate-y-[-50%]
                w-[100%] md:w-[100%] xl:w-[55%]"
                viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="410.101" cy="409.515" r="277.477" transform="rotate(-180 410.101 409.515)" fill="url(#paint0_radial_1376_7865)" />
                    <circle opacity="0.3" cx="410.099" cy="409.515" r="290.225" transform="rotate(-180 410.099 409.515)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.499695 409.599C0.499695 183.661 183.969 0.501099 410.291 0.501099C636.613 0.501099 820.082 183.661 820.082 409.599C820.082 635.537 636.613 818.697 410.291 818.697C183.969 818.697 0.499695 635.537 0.499695 409.599Z" stroke="url(#paint1_radial_1376_7865)" />
                    <circle opacity="0.7" cx="410.098" cy="409.507" r="207.742" transform="rotate(60 410.098 409.507)" fill="url(#paint2_radial_1376_7865)" />
                </g>
                <image href="/images/phone-home1.png" x="29%" y="23%" className="w-[44%]" />
                <path opacity="0.8" d="M303.843 695.245C368.051 674.697 403.759 606.863 383.6 543.734C363.44 480.605 295.048 446.086 230.84 466.634C166.633 487.182 130.924 555.016 151.084 618.145C171.243 681.274 239.636 715.793 303.843 695.245Z" fill="url(#paint3_radial_0_1)" />
                <foreignObject className="font-lato-light  w-[260px] text-sm text-white hidden md:block" x="40%" y="90%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block" x="33%" y="90%" cx="511.828" cy="696.377" />
                <defs>
                <radialGradient id="paint0_radial_1376_7865" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(261.499 262.103) rotate(68.4205) scale(571.724)">
                <stop stopColor="#7BB690"/>
                <stop offset="1" stopColor="#7BB690" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_1376_7865" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-40.9695 552.367) rotate(-36.2932) scale(812.584 813.959)">
                <stop stopColor="#7BB690"/>
                <stop offset="1" stopColor="#7BB690" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_1376_7865" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(269.515 292.397) rotate(68.4205) scale(454.194)">
                <stop stopColor="#7BB690"/>
                <stop offset="1" stopColor="#7BB690" stopOpacity="0"/>
                </radialGradient>
                </defs>
            </svg>
            <svg className="hidden md:block md:absolute md:left-[23%] md:top-[34%] md:translate-y-[-50%]" width="277" height="274" viewBox="0 0 277 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M179.803 266.689C252.676 243.368 293.203 166.38 270.323 94.7315C247.443 23.0828 169.82 -16.0944 96.9476 7.22662C24.0749 30.5477 -16.4522 107.536 6.42771 179.185C29.3076 250.833 106.93 290.01 179.803 266.689Z" fill="url(#paint0_radial_1376_7896)"/>
            <defs>
            <radialGradient id="paint0_radial_1376_7896" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135.763 41.4762) rotate(79.2367) scale(272.408 277.082)">
            <stop stopColor="#479CDA"/>
            <stop offset="1" stopColor="#60A9AF" stopOpacity="0"/>
            </radialGradient>
            </defs>
            </svg>

        </div>
    );
});
SimpleProductive.displayName = 'SimpleProductive';
export default SimpleProductive
