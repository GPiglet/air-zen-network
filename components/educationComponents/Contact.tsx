//modules
import React, { FC } from "react"
import { useTranslation } from 'next-i18next';

import ContactHome from "../common/form/ContactForm";


const Contact: FC = () => {
    //translate
    const { t } = useTranslation()
    return (

        <div className="relative mt-[100%] sm:mt-[45%] md:mt-[60%] lg:mt-[50%]">
            <div className="container mx-auto relative">
                <svg className="absolute
                top-[-78%] xs:top-[-127%] sm:top-[-565px] md:top-[-130%] lg:top-[-150%] xl:top-[-250%]
                w-[220%] sm:w-[170%] md:w-[160%] lg:w-[160%] xl:w-[150%]
                left-[-60%] sm:left-[-38%] md:left-[-55%] lg:left-[-55%] xl:left-[-53%]"
                    viewBox="-600 -350 2000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.7" d="M376.09 41.1328C598.38 -1.14335 813.492 148.063 856.541 374.416C899.59 600.769 754.268 818.524 531.979 860.8C309.689 903.076 94.5768 753.871 51.5279 527.517C8.47893 301.164 153.8 83.4089 376.09 41.1328Z" stroke="url(#paint0_linear_0_1)" />
                    <path opacity="0.3" d="M562.868 790.362C753.811 729.321 860.001 527.812 800.051 340.279C740.1 152.746 536.711 50.2033 345.768 111.244C154.825 172.284 48.6346 373.793 108.585 561.326C168.536 748.86 371.925 851.402 562.868 790.362Z" fill="url(#paint1_radial_0_1)" />
                    <path opacity="0.5" d="M526.114 683.802C652.351 643.446 722.556 510.224 682.921 386.241C643.287 262.259 508.821 194.465 382.584 234.821C256.347 275.176 186.142 408.398 225.777 532.381C265.411 656.364 399.877 724.157 526.114 683.802Z" fill="url(#paint2_radial_0_1)" />
                    <path opacity="0.5" d="M639.605 400.089C671.721 500.553 614.838 608.535 512.505 641.249C410.172 673.963 301.199 619.002 269.082 518.537C236.966 418.073 293.849 310.091 396.182 277.377C498.516 244.663 607.489 299.624 639.605 400.089Z" stroke="url(#paint3_linear_0_1)" strokeWidth="2" />
                    <image href="/images/model-group.png" x="10.6%" y="20%" fillOpacity='0.5' className="w-[24%]" />
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="133.393" y1="277.702" x2="689.269" y2="774.1" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(375.738 137.933) rotate(72.664) scale(718.593 731.658)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(402.398 252.466) rotate(72.664) scale(475.079 483.717)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint3_linear_0_1" x1="395.878" y1="276.424" x2="512.809" y2="642.202" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>


                <div className="mx-auto relative md:pl-[10%]">
                    <div className="w-full md:w-1/2 px-10">
                        <p className="font-lato-light italic font-light text-[22px] text-white">{t('education.section5.tip')}</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">{t('education.section5.title')}</h1>
                        {
                            t('education.section5.description').split('\n').map((item, index) =>
                                index % 2 === 0 ? (
                                    <p className="font-lato tracking-widest text-white text-lg mt-3 font-normal" key={index}>{item}</p>
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
            <ContactHome />
        </div>

    );
};

export default Contact
