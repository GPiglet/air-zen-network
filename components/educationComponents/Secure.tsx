//modules
import React, { FC } from "react"
import gsap from "gsap";
import { useTranslation } from 'next-i18next';
import Sparkle from "../common/sparkle";

const Secure: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
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
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="protection" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <div className="relative items-center px-10 md:px-0 sm:w-[60%] md:absolute md:top-1/2 md:translate-y-[-50%] md:w-full">
                <div className="flex flex-col mt-20">
                    <div className="w-full md:w-2/5 md:ml-[2%]">
                        <p className="font-lato-ligh font-light text-[22px] text-white">{t('education.secure.tip')}</p>
                        <h1 className="text-title-sm">{t('education.secure.title')}</h1>
                        {
                            t('education.secure.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="realtive z-0 md:static h-[20rem] sm:h-0">
                <svg className="absolute mx-auto top-[46%] w-[150%] left-1/2 translate-x-[-50%] sm:left-[75%] sm:translate-x-[-50%] sm:top-[-50%] sm:w-full md:left-[-12%] md:top-1/2 md:translate-y-[-48%] md:translate-x-[50%] md:w-[100%] xl:w-[85%]" viewBox="0 0 910 967" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M395.764 842.219C587.589 888.755 780.068 767.815 825.677 572.091C871.287 376.366 752.756 179.975 560.931 133.438C369.106 86.9012 176.628 207.842 131.018 403.566C85.4086 599.291 203.939 795.682 395.764 842.219Z" fill="url(#paint0_radial_1376_7128)" />
                    <path opacity="0.5" d="M554.63 729.8C685.678 687.055 757.952 544.008 716.059 410.296C674.165 276.584 533.969 202.841 402.92 245.586C271.872 288.331 199.598 431.378 241.491 565.09C283.385 698.802 423.582 772.545 554.63 729.8Z" fill="url(#paint1_radial_1376_7128)" />
                    <path d="M664.516 427.551C697.362 532.386 640.694 644.526 537.967 678.033C435.239 711.541 325.326 653.736 292.48 548.901C259.634 444.066 316.302 331.926 419.029 298.419C521.757 264.911 631.67 322.716 664.516 427.551Z" stroke="url(#paint2_linear_1376_7128)" className="translate-y-[9px]"/>
                    <path opacity="0.6" d="M840.613 370.114C904.549 574.181 794.244 792.48 594.262 857.709C394.28 922.939 180.323 810.407 116.387 606.341C52.4511 402.274 162.755 183.976 362.737 118.746C562.719 53.5162 776.676 166.048 840.613 370.114Z" stroke="url(#paint3_linear_1376_7128)" />
                    <path opacity="0.6" d="M774.024 391.831C826.204 558.376 736.182 736.532 572.974 789.767C409.767 843.002 235.152 751.164 182.972 584.62C130.792 418.075 220.815 239.918 384.022 186.684C547.229 133.449 721.844 225.287 774.024 391.831Z" stroke="url(#paint4_linear_1376_7128)" />
                    <image href="/images/education3.png" width="430" height="430" x="29%" y="29%" fillOpacity="0.5"></image>
                    <defs>
                        <radialGradient id="paint0_radial_1376_7128" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(572.468 172.523) rotate(103.496) scale(733.46 720.456)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_7128" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(423.621 264.694) rotate(72.9824) scale(511.461 503.035)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_7128" x1="418.88" y1="297.941" x2="542.542" y2="677.067" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1376_7128" x1="362.588" y1="118.269" x2="603.017" y2="855.38" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_1376_7128" x1="383.873" y1="186.207" x2="580.149" y2="787.953" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute z-[2] md:translate-x-[50%] md:right-[32%] md:top-1/2 md:translate-y-[-48%] md:w-[100%] xl:w-[85%]">
                    <Sparkle className="relative w-[300px] left-[46%] top-[-230px]">{t('education.secure.sparkle1')}</Sparkle>
                    <Sparkle className="relative w-[300px] left-[46%] top-[350px]">{t('education.secure.sparkle2')}</Sparkle>
                </div>
            </div>
        </div>

    );
});
Secure.displayName = 'Secure';
export default Secure