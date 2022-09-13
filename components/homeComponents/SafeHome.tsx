//modules
import React, { FC, useEffect } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';
import { useRouter } from "next/router";

const SafeHome: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()
    const router = useRouter()
    const easyList = t('home.easy.list', { returnObjects: true })

    // animation
    const refAnimContents = React.useRef<any>([]);
    const refAnimRightImage = React.useRef<any>(null);
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
    const rightImagePos = ['90%', '50%', '10%'];
    const startAnim = (direction: string, shown: boolean, index: number) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) {
            if (index == 1) prevAnimation.current = getShowTimeline().play(0);
            gsap.timeline()
                .to(
                    refAnimContents.current,
                    { opacity: 0, display: 'none' }
                )
                .to(
                    refAnimContents.current[index - 1],
                    { opacity: 1, display: 'flex' }
                )
                .to(
                    refAnimRightImage.current,
                    { top: rightImagePos[index - 1], duration: 1 },
                    0
                )
                .play();
        }
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) {
            if (index == 3) prevAnimation.current = getHideTimeline().reverse(0);
            gsap.timeline()
                .to(
                    refAnimContents.current,
                    { opacity: 0, display: 'none' }
                )
                .to(
                    refAnimContents.current[index - 1],
                    { opacity: 1, display: 'flex' }
                )
                .to(
                    refAnimRightImage.current,
                    { top: rightImagePos[index - 1], duration: 1 },
                    0
                )
                .play();
        }
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="secure" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className="relative md:flex md:hidden items-center md:mt-0 px-10 md:px-0 h-full">
                <div className="flex flex-wrap ">
                    {/* <div className="w-[20%]"></div> */}
                    <div className="w-full md:w-1/2 m-auto">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('home.safehome.tip')}</p>
                        <h1 className="text-title-sm-white">{t('home.safehome.title')}</h1>
                        {t('home.safehome.description').split('\n').map((item, index) =>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-4" key={index}>{item}</p>
                        )}
                    </div>
                </div>
            </div>
            <svg className="md:absolute translate-x-[-10%] left-[-27%] top-[28.5%] w-[140%] sm:top-[37%]  md:top-1/2 md:translate-y-[-50%] sm:w-[120%] md:w-[100%] xl:w-[80%]   sm:left-[-10%]  md:left-[-45%] xl:left-[-32%]" viewBox="0 0 804 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M497.478 697.95C666.249 643.997 760.109 465.887 707.12 300.13C654.13 134.373 474.358 43.7373 305.587 97.69C136.816 151.643 42.9562 329.753 95.9454 495.51C148.935 661.267 328.707 751.903 497.478 697.95Z" fill="url(#paint0_radial_1376_4769)" />
                <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_4769)" />
                <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.258 586.13 339.163Z" stroke="url(#paint2_linear_1376_4769)" />
                <image href="/images/phone-home1.png" x="32.5%" y="20%" fillOpacity='0.5' className="w-[35%]" />
                <defs>
                    <radialGradient id="paint0_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.28) rotate(72.664) scale(635.151 646.7)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1376_4769" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className=" relative md:fixed md:hidden items-center px-10 md:px-0 h-full md:mt-0">
                <div className="flex flex-wrap">
                    {/* <div className="w-[20%]"></div> */}
                    <div className="w-full md:w-1/2 m-auto">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('home.reliable.tip')}</p>
                        <h1 className="text-title-sm-white">{t('home.reliable.title')}</h1>
                        {
                            t('home.reliable.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>

            <svg ref={refAnimRightImage} className="md:absolute translate-x-[-15%] right-[-52%] top-[58%] sm:top-[32%] md:top-[90%] md:w-[120%] xl:w-[100%]   sm:w-[140%] sm:right-[-20%] w-[204%] md:right-[-70%] xl:right-[-53%] md:translate-y-[-50%]" viewBox="0 0 907 807" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M538.472 704.59C686.17 656.921 768.31 499.556 721.937 353.106C675.564 206.655 518.239 126.576 370.541 174.245C222.842 221.913 140.702 379.278 187.075 525.729C233.448 672.179 390.774 752.258 538.472 704.59Z" fill="url(#paint0_radial_1376_4815)" />
                <path opacity="0.5" d="M512.183 639.605C615.95 606.114 673.659 495.555 641.079 392.664C608.499 289.773 497.968 233.513 394.2 267.003C290.433 300.493 232.724 411.052 265.304 513.943C297.884 616.834 408.415 673.095 512.183 639.605Z" fill="url(#paint1_radial_1376_4815)" />
                <path d="M621.253 399.063C650.392 491.089 598.779 589.983 505.956 619.941C413.134 649.898 314.27 599.571 285.13 507.544C255.99 415.517 307.604 316.624 400.426 286.666C493.249 256.708 592.113 307.036 621.253 399.063Z" stroke="url(#paint2_linear_1376_4815)" />
                <path opacity="0.6" d="M797.616 342.142C857.338 530.749 751.554 733.421 561.329 794.815C371.103 856.209 168.486 753.071 108.765 564.464C49.0433 375.857 154.827 173.185 345.052 111.791C535.278 50.3971 737.895 153.535 797.616 342.142Z" stroke="url(#paint3_linear_1376_4815)" />
                <image href="/images/homeContent2.png" width="600" height="350" clipPath="url(#reliableCircle)" x="18.5%" y="32%" fillOpacity='0.5' />
                <defs>
                    <clipPath id="reliableCircle">
                        <circle cx="454" cy="454" r="150" fill="#FFFFFF" />
                    </clipPath>
                    <radialGradient id="paint0_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(393.723 195.087) rotate(72.8188) scale(560.702 566.428)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(410.487 281.646) rotate(72.8188) scale(393.929 397.952)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1376_4815" x1="400.275" y1="286.19" x2="507.953" y2="619.822" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1376_4815" x1="344.901" y1="111.314" x2="565.257" y2="794.073" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className="relative md:fixed md:hidden items-center px-10 md:px-0 h-full">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-1/2 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('home.easy.tip')}</p>
                            <h1 className="text-title-sm-white">{t('home.easy.title')}</h1>
                            {
                                t('home.easy.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] pt-9 w-[80%]">
                                {
                                    (easyList as unknown as any[]).map((item, index) =>
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
SafeHome.displayName = 'SafeHome';
export default SafeHome
