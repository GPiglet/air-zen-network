//modules
import React, { FC } from "react"
import gsap from "gsap";
import { useTranslation } from 'next-i18next';

const Reliable: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {

    //usetranslate
    const { t } = useTranslation()
    const list = t('education.reliable.list', { returnObjects: true })


    // animation
    const getShowTimeline = (duration: number = 1) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                1
            )
    }

    const getHideTimeline = (duration: number = 1) => {
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
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="classroom" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <div className="relative h-[44rem] sm:h-[52rem] md:static md:h-auto">
                <svg className="absolute left-[50%] top-[-25px] translate-x-[-50%] w-[230%] sm:top-[100px] sm:w-[120%] md:left-[12%] md:top-1/2 md:translate-y-[-50%] md:translate-x-[-50%] md:w-[60%] 4xl:left-[12%] 4xl:w-[80%]" viewBox="0 0 800 790" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="box" opacity="0.4" d="M497.478 697.949C666.249 643.996 760.109 465.886 707.12 300.129C654.13 134.372 474.358 43.7363 305.587 97.689C136.816 151.642 42.9562 329.752 95.9454 495.509C148.935 661.266 328.707 751.902 497.478 697.949Z" fill="url(#paint0_radial_1376_7045)" />
                    <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_7045)" />
                    <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.259 586.13 339.163Z" stroke="url(#paint2_linear_1376_7045)" />
                    <image href="/images/phone-home1.png" x="33%" y="10%" fillOpacity="0.5" className="w-[34%] md:translate-y-[8%]"></image>
                    <defs>
                        <radialGradient id="paint0_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.279) rotate(72.664) scale(635.151 646.7)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_7045" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative px-10 md:px-0 pt-[0%] md:absolute md:top-1/2 md:translate-y-[-50%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-2/5 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('education.reliable.tip')}</p>
                            <h1 className="text-title-sm">{t('education.reliable.title')}</h1>
                            {
                                t('education.reliable.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}
                                    </p>

                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                {
                                    (list as unknown as any[]).map((item, index) =>
                                        <div className="flex mb-12" key={index}>
                                            <picture>
                                                <source srcSet="/images/check-icon.svg" type="image/webp" />
                                                <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                            </picture>
                                            <div className="text-white tracking-[0.08em] w-2/3">
                                                <p className="font-lato text-lg font-medium">{item.split('\n')[0]} </p>
                                                <p className="font-lato-light text-lg font-light">{item.split('\n')[1]}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});
Reliable.displayName = 'Reliable';
export default Reliable