//modules
import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";

// Custom components
import Breadcrumb from "../../components/common/breadcrumb";

const KeepEverything: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const logos = [
        'rexroth',
        'hilti',
        'lenze',
        'man'
    ]

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
        <div ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="pb-16 relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <svg className="absolute hidden md:block top-[30%] left-[-13%] md:w-[23%]"
                viewBox="0 0 356 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M212.963 306.349C274.488 286.66 308.704 221.66 289.387 161.169C270.07 100.678 204.535 67.601 143.01 87.2905C81.4851 106.98 47.2689 171.979 66.5859 232.471C85.9029 292.962 151.438 326.039 212.963 306.349Z" fill="url(#paint0_radial_1376_7680)" />
                <path opacity="0.8" d="M251.813 194.561C298.808 179.522 324.945 129.872 310.189 83.6651C295.434 37.4585 245.375 12.1929 198.379 27.2328C151.383 42.2726 125.247 91.9226 140.002 138.129C154.757 184.336 204.817 209.601 251.813 194.561Z" fill="url(#paint1_radial_1376_7680)" />
                <path opacity="0.8" d="M312.962 153.622C336.363 226.905 294.914 305.663 220.36 329.522C145.806 353.381 66.4066 313.298 43.005 240.015C19.6034 166.733 61.0524 87.975 135.607 64.1157C210.161 40.2565 289.56 80.3402 312.962 153.622Z" stroke="url(#paint2_linear_1376_7680)" />
                <defs>
                    <radialGradient id="paint0_radial_1376_7680" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.962 153.983) rotate(77.4843) scale(192.746 196.058)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_7680" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(223.411 49.3205) rotate(79.2367) scale(175.677 178.692)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1376_7680" x1="135.455" y1="63.6394" x2="220.679" y2="329.945" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="container mx-auto relative items-center text-white px-10 md:px-0 pt-[150px] md:pt-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <Breadcrumb />
                <div className="md:flex items-center mt-5 ">
                    <div className="md:w-[350px] xl:w-[30%]">
                        <h1 className="text-title-sm w-[90%]">
                            {t('industrial.everything.title')}
                        </h1>
                        <p className="font-lato font-light tracking-widest text-lg mt-3">
                            {t('industrial.everything.description')}
                        </p>

                    </div>
                </div>
            </div>
            {/* <div className="md:absolute md:bottom-[10%] w-full text-white z-20">
                <div className="flex items-end mt-20">
                    <p className="m-auto font-lato-light italic text-lg tracking-[0.08em]">In vertrauensvoller Kooperation mit:</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 text-center  items-center mx-auto md:h-[60px] ">
                    {
                        logos.map((item, index) => (
                            <picture key={index}>
                                <source srcSet={`/images/logos/${item}-logo.svg`} type="image/webp" />
                                <img src={`/images/logos/${item}-logo.svg`} className="h-[40%] mx-auto" alt="" />
                            </picture>
                        ))
                    }
                </div>
            </div> */}
            <svg className="md:absolute 
            right-[-35%] md:right-[-35%]  xl:right-[-47%] z-10
            top-[90%] xs:top-[75%] sm:top-[65%] md:top-1/2 md:translate-y-[-50%]
            w-[110%] md:w-[90%] xl:w-[105%]"
                viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M678.873 519.526C809.282 477.167 881.807 337.33 840.862 207.192C799.918 77.0538 661.008 5.89465 530.599 48.2536C400.19 90.6125 327.665 230.449 368.609 360.587C409.554 490.725 548.464 561.885 678.873 519.526Z" fill="url(#paint0_radial_0_1)" />
                <path opacity="0.8" d="M792.368 222.938C824.906 326.358 767.272 437.49 663.631 471.154C559.989 504.818 449.597 448.265 417.059 344.845C384.52 241.425 442.155 130.293 545.796 96.629C649.437 62.9648 759.829 119.518 792.368 222.938Z" stroke="url(#paint1_linear_0_1)" />
                <path opacity="0.8" d="M200.123 501.593C231.874 491.28 249.531 457.234 239.562 425.55C229.594 393.866 195.774 376.541 164.024 386.854C132.274 397.167 114.616 431.212 124.585 462.897C134.554 494.581 168.373 511.906 200.123 501.593Z" fill="url(#paint2_radial_0_1)" />
                <path opacity="0.8" d="M165.415 475.377C209.213 461.15 233.571 414.186 219.819 370.478C206.068 326.771 159.415 302.872 115.616 317.098C71.818 331.325 47.4602 378.289 61.2116 421.997C74.963 465.704 121.616 489.603 165.415 475.377Z" fill="url(#paint3_radial_0_1)" />
                <path opacity="0.8" d="M246.971 361.659C265.431 420.33 232.734 483.377 173.936 502.476C115.137 521.575 52.5096 489.49 34.0503 430.819C15.5911 372.148 48.2873 309.101 107.086 290.002C165.885 270.903 228.512 302.988 246.971 361.659Z" stroke="url(#paint4_linear_0_1)" />
                <path opacity="0.8" d="M663.002 219.861C722.228 200.624 755.165 137.116 736.57 78.0139C717.975 18.9113 654.889 -13.4058 595.663 5.83166C536.438 25.0691 503.5 88.5762 522.095 147.679C540.69 206.781 603.776 239.098 663.002 219.861Z" fill="url(#paint5_radial_0_1)" />
                <image href="/images/macbook.png" x="10%" y="17%" className="w-[61%]"></image>

                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(602.565 191.733) rotate(77.6632) scale(414.378 415.854)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint1_linear_0_1" x1="545.646" y1="96.1521" x2="667.242" y2="470.507" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(181.545 421.786) rotate(77.6632) scale(100.887 101.246)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(139.786 365.286) rotate(77.6632) scale(139.17 139.666)">
                        <stop stopColor="#8ABE9C" />
                        <stop offset="1" stopColor="#8ABE9C" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint4_linear_0_1" x1="106.936" y1="289.525" x2="176.053" y2="502.314" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint5_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(609.471 12.3114) rotate(75.7853) scale(273.857 274.954)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
});
KeepEverything.displayName = 'KeepEverything';
export default KeepEverything;
