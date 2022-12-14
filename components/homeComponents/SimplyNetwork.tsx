//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

// Custom components
import Breadcrumb from '../../components/common/breadcrumb'


const SimplyNetwork: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {

    //transalte
    const { t } = useTranslation()

    // animation
    const getShowTimeline = (duration: number = 1) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if ( window.innerWidth < 920 ) {
            setIsMobile(true);
        }
    }, [])

    const containerRef = React.useRef<any>();
    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'UP' && shown) prevAnimation.current = getShowTimeline().delay(1);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <section ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:fixed md:h-screen md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="relative items-center px-10 pt-[190px] sm:pt-[200px] md:top-1/2 md:translate-y-[-50%] md:px-0 md:pt-0">
                <Breadcrumb />
                <div className="flex flex-wrap mt-12 relative z-10">
                    <div className="w-full sm:w-[400px] md:w-[510px]">
                        <h1 className="text-title-sm"> {t("home.simply.title")}</h1>
                        {
                            t('home.simply.description').split('\n').map((item, index) => (
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-4" key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
                <svg className="z-0 left-0 top-[-55px] absolute w-[140%] sm:left-auto sm:top-[-20%] sm:w-[120%] sm:right-[-33%] md:translate-x-0 md:top-1/2 md:translate-y-[-50%] md:w-[100%] md:right-[-53%]  xl:w-[120%] xl:right-[-44%] " viewBox="0 0 817 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M259.493 676.355C116.557 593.32 67.3899 408.41 149.686 263.345C231.983 118.279 414.572 68.0028 557.507 151.038C700.443 234.072 749.61 418.982 667.314 564.048C585.017 709.114 402.428 759.389 259.493 676.355Z" stroke="url(#paint0_linear_1376_4715)" />
                    <path opacity="0.6" d="M156.234 267.676C76.0933 408.942 124.025 588.918 263.293 669.663C402.561 750.408 580.427 701.346 660.568 560.079C740.709 418.813 692.777 238.837 553.509 158.092C414.241 77.3475 236.375 126.41 156.234 267.676Z" fill="url(#paint1_radial_1376_4715)" />
                    <path opacity="0.6" d="M207.243 296.694C143.239 409.515 181.519 553.25 292.744 617.735C403.968 682.221 546.018 643.038 610.022 530.218C674.025 417.398 635.745 273.663 524.521 209.177C413.297 144.691 271.246 183.874 207.243 296.694Z" fill="url(#paint2_radial_1376_4715)" />
                    <path opacity="0.6" d="M170.266 269.414C196.873 319.921 258.548 338.68 308.023 311.311C357.498 283.943 376.036 220.812 349.429 170.305C322.823 119.797 261.147 101.039 211.672 128.408C162.198 155.776 143.659 218.906 170.266 269.414Z" fill="url(#paint3_radial_1376_4715)" />
                    <path opacity="0.3" d="M424.577 500.01C410.309 554.202 441.15 609.471 493.462 623.456C545.775 637.442 599.749 604.847 614.017 550.655C628.285 496.463 597.444 441.194 545.132 427.209C492.819 413.223 438.845 445.818 424.577 500.01Z" fill="url(#paint4_radial_1376_4715)" />
                    <mask id="mask0_1376_4721" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="768" height="769">
                        <circle cx="50%" cy="54%" r="180" fill="url(#paint0_linear_1376_4721)" />
                    </mask>
                    <g mask="url(#mask0_1376_4721)"><rect x="-21%" y="-27%" width="767.11" height="787.11" rx="0" fill="url(#pattern0)"></rect></g>
                    {/* <image href="/images/HomeContentPic1.png" className=" w-[44%]"  x="28.5%" y="29%"  /> */}
                    <defs>
                        <clipPath id="myCircle"><circle cx="413" cy="415" r="200" fill="#FFFFFF"></circle></clipPath>
                        <linearGradient id="paint0_linear_1376_4715" x1="300.536" y1="135.46" x2="504.148" y2="674.285" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#669AB4" />
                            <stop offset="1" stopColor="#669AB4" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_1376_4715" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320.849 192.16) rotate(64.4557) scale(385.489 387.812)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_4715" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(338.71 236.384) rotate(64.4557) scale(307.866 309.721)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_1376_4715" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178.59 205.412) rotate(5.96913) scale(133.541 138.176)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint4_radial_1376_4715" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(482.632 462.667) rotate(64.843) scale(190.492 192.712)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_1376_4721" transform="translate(-0.375957 -0.125) scale(0.00296532 0.00301907)" />
                        </pattern>
                        <linearGradient id="paint0_linear_1376_4721" x1={isMobile ? '500' : '400'} y1="400" x2="250" y2={isMobile ? '500' : '360'} gradientUnits="userSpaceOnUse">
                            <stop stopColor="#d9d9d9" />
                            <stop offset="1" stopColor="#d9d9d9" stopOpacity="0.2" />
                        </linearGradient>
                        <image id="image0_1376_4721" href="/images/homeContent1.png" className="gradient-image" width="400" height="180" x="22.5%" y="27%" clipPath="url(#myCircle)" fillOpacity="0.5"></image>
                    </defs>
                </svg>


            </div>
        </section>

    );
});
SimplyNetwork.displayName = 'SimplyNetwork';
export default SimplyNetwork
