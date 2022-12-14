//modules
import React, { FC } from "react"
import gsap from "gsap";


// Custom components
import Breadcrumb from '../common/breadcrumb'
import { useTranslation } from 'next-i18next';

const ClassWiFi: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
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
        if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
    }

    return (
        <div ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <div className="z-10 container mx-auto relative px-10 sm:mx-0 sm:w-[60%] md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%] md:w-full pt-[150px] md:pt-0">
                <Breadcrumb />
                <div className="flex flex-wrap mt-12">
                    <div className="w-full md:w-7/12 md:max-w-[417px] lg:max-w-[617px]">
                        <h1 className="text-title-sm">{t('education.classwifi.title')}</h1>
                        {
                            t('education.classwifi.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <svg className="z-0 absolute left-[60px] top-[-55px] w-[140%] sm:left-auto sm:top-[-5%] sm:w-[100%] sm:right-[-33%] md:translate-x-0 md:right-[-40%] md:top-1/2 md:translate-y-[-40%] md:w-[100%] xl:w-[80%] xl:right-[-20%]"
                viewBox="0 0 1100 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M747.782 581.528C819.969 558.451 860.114 482.27 837.45 411.372C814.785 340.474 737.893 301.708 665.706 324.784C593.519 347.861 553.373 424.042 576.038 494.94C598.702 565.838 675.595 604.605 747.782 581.528Z" fill="url(#paint3_linear_0_1)" />
                <path opacity="0.6" d="M529.836 718.645C689.229 667.69 777.873 499.477 727.828 342.93C677.784 186.383 508 100.783 348.607 151.738C189.214 202.693 100.569 370.906 150.614 527.453C200.659 684 370.442 769.6 529.836 718.645Z" fill="url(#paint1_radial_0_1)" />
                <path opacity="0.6" d="M772.189 328.102C830.003 508.953 727.599 703.297 543.439 762.169C359.279 821.042 163.13 722.139 105.315 541.288C47.5009 360.437 149.905 166.094 334.065 107.221C518.225 48.3491 714.375 147.252 772.189 328.102Z" stroke="url(#paint2_linear_0_1)" />
                <path opacity="0.7" d="M295.42 565.648C309.691 610.291 284.415 658.275 238.94 672.812C193.465 687.35 145.041 662.926 130.77 618.284C116.499 573.641 141.775 525.657 187.25 511.12C232.725 496.582 281.149 521.006 295.42 565.648Z" stroke="url(#paint4_linear_0_1)" />
                <path opacity="0.4" d="M624.774 486.429C502.5 463.549 385.161 542.353 362.689 662.443C340.218 782.533 421.123 898.434 543.397 921.314C665.671 944.194 783.01 865.39 805.481 745.3C827.953 625.209 747.047 509.309 624.774 486.429Z" fill="url(#paint5_linear_0_1)" />
                <image href="/images/education1.png" width="500" height="500" clipPath="url(#myCircle1)" x="17%" y="17%" fillOpacity='1' />
                <path opacity="0.4" d="M422.931 610.715C370.622 701.317 400.353 816.411 489.337 867.786C578.32 919.161 692.86 887.361 745.169 796.76C797.478 706.158 767.747 591.063 678.764 539.689C589.78 488.314 475.24 520.114 422.931 610.715Z" fill="url(#paint6_linear_0_1)" />
                <image href="/images/education2.png" width="300" height="300" clipPath="url(#myCircle2)" x="39%" y="50%" className="opacity-30 md:opacity-100" />
                <path opacity="0.7" d="M242.271 683.229C293.59 666.824 322.13 612.665 306.017 562.262C289.905 511.859 235.24 484.299 183.921 500.705C132.602 517.111 104.062 571.27 120.175 621.672C136.287 672.075 190.952 699.635 242.271 683.229Z" fill="url(#paint3_linear_0_1)" />
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="120.324" y1="9.04857" x2="223.189" y2="330.823" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(390.049 243.439) rotate(72.1213) scale(528.722 538.335)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_0_1" x1="333.913" y1="106.745" x2="543.591" y2="762.646" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#669AB4" />
                        <stop offset="1" stopColor="#669AB4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_0_1" x1="183.921" y1="500.705" x2="242.271" y2="683.229" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_0_1" x1="187.098" y1="510.643" x2="239.092" y2="673.289" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_0_1" x1="543.397" y1="921.314" x2="624.774" y2="486.429" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_0_1" x1="745.169" y1="796.76" x2="422.931" y2="610.715" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="myCircle1">
                        <circle cx="440" cy="440" r="240" fill="#FFFFFF" />
                    </clipPath>
                    <clipPath id="myCircle2">
                        <circle cx="580" cy="700" r="152" fill="#FFFFFF" />
                    </clipPath>
                </defs>
            </svg>
        </div>

    );
});
ClassWiFi.displayName = 'ClassWiFi';
export default ClassWiFi
