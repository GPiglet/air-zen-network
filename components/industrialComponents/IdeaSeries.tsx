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
        <div ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:flex items-center md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

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
            <svg className="md:absolute 
                left-[-64%] sm:left-[-64%] md:left-[-43%]  xl:left-[-19%]
                top-[68%] sm:top-[46%] md:top-1/2 md:translate-y-[-50%]
                w-[100%] md:w-[100%] xl:w-[55%]"
                viewBox="0 0 800 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="410.101" cy="409.515" r="277.477" transform="rotate(-180 410.101 409.515)" fill="url(#paint0_radial_1376_7745)" />
                    <circle opacity="0.3" cx="410.099" cy="409.515" r="290.225" transform="rotate(-180 410.099 409.515)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.499695 409.599C0.499695 183.661 183.969 0.501099 410.291 0.501099C636.613 0.501099 820.082 183.661 820.082 409.599C820.082 635.537 636.613 818.697 410.291 818.697C183.969 818.697 0.499695 635.537 0.499695 409.599Z" stroke="url(#paint1_radial_1376_7745)" />
                    <circle opacity="0.7" cx="410.098" cy="409.507" r="207.742" transform="rotate(60 410.098 409.507)" fill="url(#paint2_radial_1376_7745)" />
                </g>
                <image href="/images/phone-home1.png" x="29%" y="15%" className="w-[44%]" />
                <foreignObject className="font-lato-light  w-[260px] text-lg text-white hidden md:block" x="45%" y="93%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block" x="39%" y="93%" cx="511.828" cy="696.377" />
                <defs>
                <radialGradient id="paint0_radial_1376_7745" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(261.499 262.676) rotate(68.4205) scale(571.724)">
                <stop stop-color="#7BB690"/>
                <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_1376_7745" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-40.9695 552.94) rotate(-36.2932) scale(812.584 813.959)">
                <stop stop-color="#7BB690"/>
                <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial_1376_7745" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(271.302 299.714) rotate(68.4205) scale(428.038)">
                <stop stop-color="#7BB690"/>
                <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                </radialGradient>
                </defs>
            </svg>
            <svg width="245" height="241" viewBox="0 0 245 241" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block md:absolute md:left-[-10%] md:top-[55%] md:scale-[0.8]">
            <path opacity="0.8" d="M159.261 234.815C223.469 214.267 259.177 146.434 239.018 83.3046C218.858 20.1755 150.466 -14.3433 86.258 6.20469C22.0505 26.7527 -13.6577 94.5864 6.50165 157.716C26.661 220.845 95.0538 255.363 159.261 234.815Z" fill="url(#paint0_radial_1376_7778)"/>
            <defs>
            <radialGradient id="paint0_radial_1376_7778" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.458 36.3818) rotate(79.2367) scale(240.017 244.135)">
            <stop stop-color="#479CDA"/>
            <stop offset="1" stop-color="#60A9AF" stop-opacity="0"/>
            </radialGradient>
            </defs>
            </svg>

        </div>

    );
});
IdeaSeries.displayName = 'IdeaSeries';
export default IdeaSeries
