//modules
import React, { FC } from "react"
import { useTranslation } from 'next-i18next';
import gsap from "gsap";

import ContactForm from "../common/form/ContactFormSide";


const Contact: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

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
        gsap.set([containerRef.current], { display: 'flex' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (

        <div id="technology" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="relative md:h-screen md:fixed md:hidden w-full">
            <div className="container mx-auto relative flex items-center">
                <div className="mx-auto relative">
                    <div className="z-0 relative md:initial h-[26rem] sm:h-[36rem] md:h-0">
                    <svg className="absolute translate-x-[-17%] w-[150%] sm:left-1/2 sm:translate-x-[-50%] sm:w-full md:top-[-10%] md:w-[60%] xl:top-[-10%] xl:w-[90%]" viewBox="0 0 802 806" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" d="M336.038 55.6223C521.295 20.2571 700.575 145.072 736.454 334.431C772.332 523.79 651.216 705.95 465.959 741.315C280.702 776.68 101.422 651.865 65.543 462.506C29.6645 273.148 150.781 90.9875 336.038 55.6223Z" stroke="url(#paint0_linear_1376_7348)" />
                        <path opacity="0.3" d="M491.731 682.458C650.905 631.382 739.427 462.771 689.451 305.853C639.475 148.936 469.926 63.1339 310.752 114.209C151.579 165.285 63.0564 333.896 113.032 490.814C163.008 647.731 332.557 733.533 491.731 682.458Z" fill="url(#paint1_radial_1376_7348)" />
                        <path opacity="0.5" d="M461.094 593.296C566.327 559.529 624.851 448.056 591.811 344.314C558.771 240.572 446.678 183.846 341.444 217.613C236.211 251.38 177.687 362.853 210.727 466.595C243.767 570.337 355.86 627.063 461.094 593.296Z" fill="url(#paint2_radial_1376_7348)" />
                        <path opacity="0.5" d="M555.542 355.946C582.287 439.923 534.917 530.184 449.697 557.53C364.478 584.875 273.729 538.933 246.983 454.956C220.238 370.979 267.608 280.718 352.828 253.373C438.047 226.028 528.796 271.969 555.542 355.946Z" stroke="url(#paint3_linear_1376_7348)" strokeWidth="2" />
                        <image href="/images/model-group.png" x="25.6%" y="35%" fillOpacity='0.5' className="w-[50%]" />
                        <defs>
                            <linearGradient id="paint0_linear_1376_7348" x1="133.706" y1="253.491" x2="598.633" y2="667.12" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#159BDE" />
                                <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_1376_7348" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(335.736 136.541) rotate(72.7249) scale(601.08 610.126)">
                                <stop stopColor="#2294C3" />
                                <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_1376_7348" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.962 232.377) rotate(72.7249) scale(397.388 403.369)">
                                <stop stopColor="#2294C3" />
                                <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint3_linear_1376_7348" x1="352.524" y1="252.42" x2="450.665" y2="558.269" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </div>
                    <div className="relative z-10 flex flex-wrap md:pt-[50%] xl:pt-[42%] align-center 4xl:pt-[55%]">
                        <div className="w-full md:w-[55%] px-10 mx-auto">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('education.ournode.tip')}</p>
                            <h1 className="text-title-sm-white mb-10">{t('education.ournode.title')}</h1>
                            {
                                t('education.ournode.description').split('\n').map((item, index) =>
                                    index % 2 === 0 ? (
                                        <p className="font-lato tracking-widest text-white text-lg font-normal mt-3" key={index}>{item}</p>
                                    ) : (
                                        <div key={index}>
                                            <p className="font-lato font-light tracking-widest text-white text-lg" >{item}
                                            </p><br />
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <ContactForm /> */}
        </div>

    );
});
Contact.displayName = 'Contact';
export default Contact
