//modules
import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

// Custom components
import Breadcrumb from "../../components/common/breadcrumb";

const Boost: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const logos = ["volksbank", "adac", "sparkasse"];
    const [isMobile, setIsMobile] = React.useState(false);

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
        <section ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="pb-16 relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <div className="z-10 relative items-center px-10 pt-[190px] md:px-0 md:absolute md:top-[60%] md:translate-y-[-50%] md:pt-0 4xl:top-[50%]">
                <Breadcrumb />
                <div className="flex flex-wrap mt-12">
                    <div className="w-full md:w-[40%] sm:w-[60%]">
                        <h1 className="text-title-sm w-[70%] sm:w-full">
                            {t('business.boost.title')}
                        </h1>
                        {
                            t('business.boost.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>
                                    {item}
                                </p>
                            )
                        }
                        <div className="mt-12">
                            <p className="font-lato-light font-light text-lg text-white  ">
                                {t('business.boost.cooperation')}
                            </p>
                            <div className="flex justify-between items-center mt-12 w-[80%]">
                                {logos.map((item, index) => (
                                    <picture className="h-[50px] w-[40px] sm:w-auto" key={index}>
                                        <source
                                            srcSet={`/images/logos/${item}-logo.svg`}
                                            type="image/webp"
                                        />
                                        <img
                                            src={`/images/logos/logos/${item}-logo.svg`}
                                            className="w-full h-full mr-2 cursor-pointer"
                                            alt=""
                                        />
                                    </picture>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="z-0 absolute left-[-12%] top-[-55px] w-[174%] sm:w-[140%] sm:left-[10%] md:translate-x-0 md:top-[60%] md:left-[20%] md:translate-y-[-50%] md:w-[120%] 4xl:top-[50%]" viewBox="0 50 721 603" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="opacity-30 md:opacity-50" d="M487.811 220.384C496.618 193.795 482.244 164.751 455.706 155.514C429.169 146.277 400.516 160.344 391.709 186.933C382.901 213.523 397.275 242.566 423.813 251.803C450.351 261.04 479.003 246.973 487.811 220.384Z" fill="url(#paint0_linear_1376_5373)" />
                <path opacity="0.3" d="M184.445 435.678C248.808 517.946 367.101 534.24 448.66 472.071C530.219 409.903 544.16 292.814 479.797 210.546C415.434 128.278 297.141 111.984 215.582 174.153C134.023 236.321 120.083 353.41 184.445 435.678Z" fill="url(#paint1_radial_1376_5373)" />
                <path opacity="0.8" d="M216.811 413.726C268.577 477.999 362.169 489.533 425.854 439.488C489.539 389.443 499.201 296.77 447.434 232.497C395.668 168.224 302.076 156.69 238.391 206.735C174.706 256.78 165.044 349.454 216.811 413.726Z" fill="url(#paint2_radial_1376_5373)" />
                <path opacity="0.4" d="M425.1 441.956C360.042 491.547 265.667 478.557 214.312 412.915C162.957 347.274 174.088 253.862 239.146 204.272C304.205 154.681 398.579 167.67 449.934 233.312C501.289 298.954 490.158 392.365 425.1 441.956Z" stroke="url(#paint3_linear_1376_5373)" />
                <path className="opacity-0 md:opacity-70" d="M290.052 385.635C336.383 359.768 396.029 376.6 423.267 423.257C450.505 469.914 435.006 528.702 388.674 554.569C342.343 580.437 282.697 563.604 255.459 516.947C228.221 470.29 243.72 411.503 290.052 385.635Z" fill="url(#paint4_radial_1376_5373)" stroke="url(#paint5_linear_1376_5373)" />
                <path className="opacity-0 md:opacity-40" d="M614.524 316.524C587.151 269.636 527.2 252.708 480.62 278.714C434.04 304.721 418.47 363.813 445.843 410.702C473.216 457.59 533.167 474.518 579.747 448.512C626.327 422.506 641.897 363.413 614.524 316.524Z" fill="url(#paint6_radial_1376_5373)" />
                <path className="opacity-0 md:opacity-50" d="M592.486 386.581C604.294 350.931 585.023 311.991 549.442 299.606C513.86 287.221 475.443 306.081 463.635 341.732C451.827 377.382 471.098 416.322 506.679 428.707C542.261 441.092 580.678 422.232 592.486 386.581Z" fill="url(#paint7_radial_1376_5373)" />                
                <image
                    mask="url(#fade)"
                    href="/images/businessContent1.png"
                    width="480"
                    height="400"
                    clipPath="url(#businessContentPic1)"
                    x="15%"
                    y="18%"
                />
                <image
                    href="/images/business1.png"
                    className="w-[16%] hidden md:block"
                    x="39%"
                    y="58%"
                />
                <defs>
                    <clipPath id="businessContentPic1"><circle cx="333" cy="325" r="130" fill="#FFFFFF"></circle></clipPath>                                    
                    <linearGradient id="fadeGrad" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0" stopColor="white" stopOpacity="0"/>
                        <stop offset="0.6" stopColor="white" stopOpacity="1"/>
                    </linearGradient>
                    <mask id="fade" maskContentUnits="objectBoundingBox">
                        <rect width="1" height="1" fill="url(#fadeGrad)"/>
                    </mask>
                    <linearGradient id="paint0_linear_1376_5373" x1="406.242" y1="178.458" x2="502.469" y2="227.006" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint1_radial_1376_5373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.052 235.974) rotate(95.6299) scale(292.805 296.241)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(331.067 254.263) rotate(94.7931) scale(231.372 233.943)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint3_linear_1376_5373" x1="450.332" y1="233.009" x2="216.221" y2="416.167" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint4_radial_1376_5373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(243.063 448.725) rotate(1.51896) scale(194.316 192.647)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint5_linear_1376_5373" x1="345.325" y1="389.894" x2="287.954" y2="645.652" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint6_radial_1376_5373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(433.883 342.236) rotate(1.51896) scale(194.316 192.647)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint7_radial_1376_5373" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(462.721 358.23) rotate(14.4356) scale(153.722 153.643)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="relative h-[48rem] sm:h-[55rem] md:hidden">
                <svg className="absolute translate-x-[-50%] left-[50%] top-[-10%] w-[230%] sm:w-[135%]" viewBox="0 0 692 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <ellipse opacity="0.7" cx="345.838" cy="345.661" rx="233.997" ry="234.212" transform="rotate(-180 345.838 345.661)" fill="url(#paint0_radial_1376_5616)" />
                        <path opacity="0.3" d="M101.168 345.66C101.168 210.409 210.711 100.766 345.838 100.766C480.965 100.766 590.508 210.409 590.508 345.66C590.508 480.912 480.965 590.555 345.838 590.555C210.711 590.555 101.168 480.912 101.168 345.66Z" stroke="#7BB690" />
                        <ellipse opacity="0.7" rx="161.634" ry="161.56" transform="matrix(0.499657 0.866223 -0.865827 0.500343 345.839 345.66)" fill="url(#paint2_radial_1376_5616)" />
                    </g>
                    <image href="/images/Business1.png" x="33.5%" y="15%" className="w-[32%]" />

                    <defs>
                        <radialGradient id="paint0_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(312.933 221.236) rotate(68.4384) scale(482.519 482.196)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.8615 466.241) rotate(-36.3183) scale(685.475 686.823)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.904 75.7314) rotate(68.4115) scale(332.905 333.016)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

        </section>
    );
});
Boost.displayName = 'Boost';
export default Boost;
