//modules
import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

const Professional: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()
    

    const list = t('business.professional.list', { returnObjects: true })

    // animation
    const getShowTimeline = (duration: number=1.5) => {
        return gsap.timeline({onReverseComplete: ()=>{gsap.set([containerRef.current], {display: 'none'});}})
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { gsap.set([containerRef.current], { display: 'none' }); } })
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
        gsap.set([containerRef.current], {display: 'flex'});
        if ( direction == 'DOWN' && shown ) prevAnimation.current = getShowTimeline().play(0);
        else if ( direction == 'DOWN' && !shown ) prevAnimation.current = getHideTimeline().play(0);
        else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
    }
    

    return (
        <section id="professional" ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className="pb-16 relative  items-center md:flex container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">


            <svg className="absolute left-[-75%] bottom-[-71%] sm:top-[45%] sm:w-[150%] sm:left-[-25%] w-[250%] xl:left-[-40%] md:top-[34%] md:w-[100%] md:left-[-41%] md:translate-y-[-50%]" viewBox="0 0 679 681" fill="none" stopOpacity='0.2' xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="339.414" cy="340.579" rx="167.901" ry="168.624" transform="rotate(150 339.414 340.579)" fill="url(#paint0_radial_1376_5657)" />
                    <path opacity="0.3" d="M187.495 428.29C138.845 344.025 167.424 236.449 251.324 188.01C335.223 139.57 442.677 168.608 491.327 252.873C539.978 337.138 511.398 444.714 427.499 493.154C343.599 541.593 236.145 512.555 187.495 428.29Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M124.965 464.45C56.367 345.635 96.8264 193.852 215.33 125.434C333.834 57.0156 485.511 97.8679 554.11 216.684C622.708 335.5 582.249 487.282 463.745 555.7C345.241 624.119 193.564 583.266 124.965 464.45Z" stroke="url(#paint1_radial_1376_5657)" />
                    <ellipse opacity="0.7" rx="116.273" ry="116.023" transform="matrix(0.865095 0.501608 -0.498386 0.866955 339.415 340.579)" fill="url(#paint2_radial_1376_5657)" />
                </g>
                <image
                    href="/images/businessContent2.png"
                    width="370"
                    height="370"
                    clipPath="url(#businessContentPic2)"
                    className="opacity-60"
                    x="13%"
                    y="23%"

                />
                <defs>
                    <clipPath id="businessContentPic2"><circle cx="340" cy="340" r="90" fill="#FFFFFF"></circle></clipPath>

                    <radialGradient id="paint0_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(315.803 250.997) rotate(68.5045) scale(347.238 346.15)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(203.869 519.08) rotate(-66.4108) scale(492.436 493.9)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.9221 54.386) rotate(68.3783) scale(239.128 239.503)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>


            <svg className="hidden md:block absolute right-[-42%] top-[66%] md:bottom-[-10%] lg:top-30%] md:w-[50%]   sm:top-[43%] sm:w-[200%] sm:right-[-54%] w-[174%] md:right-[-31%] xl:right-[-23%] " viewBox="0 0 525 523" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <ellipse opacity="0.7" cx="262.611" cy="261.234" rx="177.521" ry="176.933" fill="url(#paint0_radial_1376_5511)" />
                    <path opacity="0.3" d="M448.111 261.233C448.111 363.338 365.063 446.114 262.614 446.114C160.165 446.114 77.1172 363.338 77.1172 261.233C77.1172 159.128 160.165 76.3525 262.614 76.3525C365.063 76.3525 448.111 159.128 448.111 261.233Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M524.483 261.179C524.483 405.146 407.188 521.859 262.491 521.859C117.795 521.859 0.500035 405.146 0.500023 261.179C0.50001 117.213 117.795 0.49999 262.491 0.499977C407.188 0.499964 524.483 117.212 524.483 261.179Z" stroke="url(#paint1_radial_1376_5511)" />
                    <ellipse opacity="0.7" rx="138.506" ry="138.736" transform="matrix(-0.501246 -0.865305 0.866743 -0.498756 262.612 261.234)" fill="url(#paint2_radial_1376_5511)" />
                </g>
                <image
                    href="/images/businessContent3.png"
                    width="500"
                    height="600"
                    clipPath="url(#businessContentPic3)"
                    x="-5%"
                    y="-9%"
                    className="opacity-60"
                />
                <defs>
                    <clipPath id="businessContentPic3"><circle cx="263" cy="261" r="130" fill="#FFFFFF"></circle></clipPath>

                    <radialGradient id="paint0_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(237.647 167.238) rotate(68.3553) scale(364.723 365.606)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(481.086 170.142) rotate(143.797) scale(519.263 519.622)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(119.029 65.0327) rotate(68.453) scale(285.793 285.447)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="pt-[70%] md:pt-[0] md:mt-0 relative text-center text-white px-10">
                <div className="w-full">
                    <h1 className="text-title-sm">
                        {t('business.professional.title')}
                    </h1>
                    <p className="font-lato-light font-light text-lg tracking-widest">{t('business.professional.subtitle')}</p>
                    <div className="md:flex justify-between text-lg text-left mt-10 tracking-[0.08em]">
                        <div className="w-[160px]"></div>
                        {
                            (list as unknown as any[]).map((item, index) => (
                                <div key={index} className='md:px-5'>
                                    <p className="font-lato font-medium mb-4 mt-5">{item.title}</p>
                                    <ul className='list-["-"] pl-2 unique-skill-list'>
                                        {item.items.split('\n').map((list: string, ind: number) => (
                                            <li className='font-lato text-base font-light' key={ind}>{list}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Professional;
