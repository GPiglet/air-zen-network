//modules
import React, { FC, useEffect } from "react"


// Custom components
import Breadcrumb from '../../components/common/breadcrumb'
import { useTranslation } from "next-i18next";


const SimplyNetwork: FC = () => {



    const { t } = useTranslation()

    return (
        <section className="container mx-auto pb-16 relative">
            <svg className="absolute right-[-36%] bottom-[-20%] md:top-[-10%] xl:top-[-20%] md:w-[100%] md:right-[-53%]  xl:w-[120%]   sm:top-[37%] sm:w-[120%] sm:right-[-12%] w-[174%]  xl:right-[-44%] " viewBox="0 0 817 828" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M259.493 676.355C116.557 593.32 67.3899 408.41 149.686 263.345C231.983 118.279 414.572 68.0028 557.507 151.038C700.443 234.072 749.61 418.982 667.314 564.048C585.017 709.114 402.428 759.389 259.493 676.355Z" stroke="url(#paint0_linear_1376_4715)" />
                <path opacity="0.6" d="M156.234 267.676C76.0933 408.942 124.025 588.918 263.293 669.663C402.561 750.408 580.427 701.346 660.568 560.079C740.709 418.813 692.777 238.837 553.509 158.092C414.241 77.3475 236.375 126.41 156.234 267.676Z" fill="url(#paint1_radial_1376_4715)" />
                <path opacity="0.6" d="M207.243 296.694C143.239 409.515 181.519 553.25 292.744 617.735C403.968 682.221 546.018 643.038 610.022 530.218C674.025 417.398 635.745 273.663 524.521 209.177C413.297 144.691 271.246 183.874 207.243 296.694Z" fill="url(#paint2_radial_1376_4715)" />
                <path opacity="0.6" d="M170.266 269.414C196.873 319.921 258.548 338.68 308.023 311.311C357.498 283.943 376.036 220.812 349.429 170.305C322.823 119.797 261.147 101.039 211.672 128.408C162.198 155.776 143.659 218.906 170.266 269.414Z" fill="url(#paint3_radial_1376_4715)" />
                <path opacity="0.3" d="M424.577 500.01C410.309 554.202 441.15 609.471 493.462 623.456C545.775 637.442 599.749 604.847 614.017 550.655C628.285 496.463 597.444 441.194 545.132 427.209C492.819 413.223 438.845 445.818 424.577 500.01Z" fill="url(#paint4_radial_1376_4715)" />

                {/* <image href="/images/HomeContentPic1.png" className=" w-[44%]"  x="28.5%" y="29%"  /> */}
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="413" cy="415" r="170" fill="#FFFFFF" />
                    </clipPath>


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
                </defs>
                <image href="/images/homeContent1.png" width="600" height="350" clipPath="url(#myCircle)" x="12.5%" y="29%" fillOpacity='0.5' />
            </svg>


            <div className="relative items-center px-10 md:px-0 md:h-[70%]">
                <Breadcrumb />
                <div className="flex flex-wrap mt-12">
                    <div className="w-full md:w-[510px]">
                        <h1 className="text-title-sm"> {t("home.section1.header")}</h1>
                        {
                            t('home.section1.description').split('\n').map((item, index) => (
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SimplyNetwork
