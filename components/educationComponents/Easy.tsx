//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import Sparkle from "../common/sparkle";

const Easy: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
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
        <div id="easy" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="md:mb-[500px] relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="relative items-center px-10 md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <svg className="absolute hidden md:block w-[100%] top-[12%] md:top-[25%] xl:top-[5%] 
            left-[-30%] md:left-[-43%] xl:left-[-35%]" viewBox="0 0 1258 982" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M559.509 856.661C726.555 897.035 893.595 794.569 932.604 627.798C971.612 461.026 867.818 293.102 700.772 252.728C533.726 212.354 366.686 314.82 327.677 481.592C288.668 648.363 392.463 816.288 559.509 856.661Z" fill="url(#paint0_radial_1376_7310)" />
                    <path opacity="0.5" d="M700.026 794.638C825.22 753.955 894.846 619.652 855.538 494.662C816.231 369.673 682.876 301.33 557.681 342.013C432.486 382.696 362.861 516.999 402.169 641.988C441.476 766.977 574.831 835.321 700.026 794.638Z" fill="url(#paint1_radial_1376_7310)" />
                    <path d="M837.623 500.484C873.822 615.591 809.703 739.28 694.401 776.748C579.099 814.216 456.286 751.273 420.086 636.166C383.886 521.059 448.006 397.37 563.308 359.902C678.61 322.433 801.423 385.377 837.623 500.484Z" stroke="url(#paint2_linear_1376_7310)" />
                    <path opacity="0.3" d="M1106.97 412.959C1189.87 676.577 1043.02 959.845 778.966 1045.65C514.909 1131.46 233.643 987.311 150.739 723.692C67.8342 460.074 214.682 176.806 478.74 90.9986C742.797 5.19117 1024.06 149.34 1106.97 412.959Z" stroke="url(#paint3_linear_1376_7310)" />
                    <image href="/images/model.png" x="41%" y="45%" fillOpacity='0.5' className="w-[221px]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_7310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(710.943 286.105) rotate(103.551) scale(625.09 627.262)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_7310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(577.331 359.801) rotate(72.9291) scale(478.249 480.41)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_7310" x1="563.158" y1="359.425" x2="698.508" y2="775.939" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1376_7310" x1="478.59" y1="90.5216" x2="788.166" y2="1043.19" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute z-[2] md:block w-[100%] top-[12%] md:top-[25%] xl:top-[5%] left-[-30%] md:left-[-43%] xl:left-[-35%]">
                    <Sparkle className="relative w-[300px] left-[40%] top-[263px]">{t('education.easy.sparkle1')}</Sparkle>
                </div>
                <svg className="absolute hidden md:block w-[100%] top-[-5%] md:top-[-28%] xl:top-[-60%] right-[-15%] md:right-[-23%] xl:right-[-25%]" width="1081" height="811" viewBox="0 0 1081 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                        <path opacity="0.5" d="M435.17 228.461C401.1 310.48 436.947 406.911 515.236 443.847C593.525 480.782 684.611 444.234 718.681 362.215C752.752 280.196 716.905 183.765 638.616 146.83C560.326 109.895 469.241 146.442 435.17 228.461Z" fill="url(#paint0_radial_1376_7305)" />
                        <path opacity="0.5" d="M484.552 248.727C463.48 299.455 485.651 359.098 534.073 381.943C582.495 404.787 638.831 382.182 659.904 331.454C680.976 280.725 658.805 221.083 610.383 198.238C561.961 175.394 505.625 197.998 484.552 248.727Z" fill="url(#paint1_radial_1376_7305)" />
                        <path d="M528.828 394.577C473.798 368.615 448.546 300.793 472.53 243.053C496.515 185.313 560.605 159.641 615.635 185.603C670.666 211.565 695.918 279.387 671.933 337.127C647.948 394.867 583.859 420.539 528.828 394.577Z" stroke="url(#paint2_linear_1376_7305)" />
                        <path opacity="0.3" d="M453.361 576.243C302.561 505.098 233.458 319.314 299.12 161.242C364.783 3.17 540.295 -67.2101 691.096 3.93416C841.896 75.0784 910.999 260.863 845.336 418.935C779.674 577.007 604.161 647.387 453.361 576.243Z" stroke="url(#paint3_linear_1376_7305)" />
                    </g>
                    <image href="/images/model.png" x="49%" y="29%" fillOpacity='0.5' className="w-[82px]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_7305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(701.473 364.089) rotate(-154.349) scale(316.051 323.692)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_7305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(649.26 332.613) rotate(-154.349) scale(195.477 200.203)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_7305" x1="672.395" y1="337.345" x2="468.067" y2="252.468" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1376_7305" x1="845.798" y1="419.153" x2="287.73" y2="187.333" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute z-[2] w-[100%] top-[-5%] md:top-[-28%] xl:top-[-60%] right-[-15%] md:right-[-23%] xl:right-[-25%]">
                    <Sparkle className="relative w-[300px] left-[57.5%] top-[228px]">{t('education.easy.sparkle2')}</Sparkle>
                </div>
                <svg className="absolute hidden md:block w-[100%] top-[22%] xl:top-[-10%] right-[-28%] md:right-[-40%] xl:right-[-39%]" width="694" height="710" viewBox="0 0 694 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M567.326 342.479C557.336 241.826 468.571 166.103 369.064 173.347C269.558 180.59 196.991 268.057 206.981 368.71C216.972 469.362 305.736 545.085 405.243 537.842C504.749 530.598 577.316 443.131 567.326 342.479Z" fill="url(#paint0_radial_1376_7301)" />
                    <path d="M368.133 162.858C473.501 155.188 567.527 235.375 578.11 342.002C588.694 448.628 511.821 541.255 406.452 548.926C301.084 556.596 207.058 476.409 196.475 369.782C185.892 263.155 262.765 170.528 368.133 162.858Z" stroke="url(#paint1_linear_1376_7301)" />
                    <path opacity="0.3" d="M354.158 111.881C486.745 102.229 605.052 203.129 618.368 337.289C631.684 471.448 534.961 588.001 402.374 597.652C269.786 607.304 151.48 506.404 138.164 372.244C124.848 238.085 221.571 121.532 354.158 111.881Z" stroke="url(#paint2_linear_1376_7301)" />
                    <image href="/images/model.png" x="45%" y="36%" fillOpacity='0.5' className="w-[144px]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_7301" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(223.424 357.186) rotate(-3.77325) scale(364.21 368.979)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1376_7301" x1="195.971" y1="369.819" x2="577.619" y2="331.938" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1376_7301" x1="137.66" y1="372.281" x2="617.62" y2="324.642" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute z-[2] w-[100%] top-[22%] xl:top-[-10%] right-[-28%] md:right-[-40%] xl:right-[-39%]">
                    <Sparkle className="relative w-[300px] left-[42%] top-[550px]">{t('education.easy.sparkle3')}</Sparkle>
                </div>
                <svg className="absolute hidden md:block
            w-[100%] bottom-[-28%]
            xl:bottom-[-35%] translate-y-[37%]
            right-[0%]" width="337" height="337" viewBox="0 0 337 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <image href="/images/app-ellipse.svg" />
                </svg>
                <div className="flex flex-col mt-12 md:mt-0">
                    <div className="w-full md:w-1/2 xl:w-1/3 m-auto">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('education.easy.tip')}</p>
                        <h1 className="text-title-sm-white">{t('education.easy.title')}</h1>
                        {
                            t('education.easy.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    );
});
Easy.displayName = 'Easy';
export default Easy