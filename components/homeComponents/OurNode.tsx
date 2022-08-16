//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";

import HomeForm from './homeForm/index'


const OurNode: FC = () => {
    //translation
    const { t } = useTranslation()

    return (
        <div id="technology" className="md:mb-[100px] relative  ">

            <div className="container mx-auto relative px-5 md:px-0 ">
                <svg className="absolute left-[-37%] bottom-[63%] w-[174%]  md:top-[34%] md:translate-y-[-50%] md:w-[60%] xl:w-[57%] xl:left-[-7%]  sm:top-[-83%] sm:w-[120%] sm:left-[-10%]  md:left-[-7%]" viewBox="0 0 561 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.7" d="M232.492 25.889C369.39 -0.783706 501.892 93.3524 528.41 236.198C554.929 379.044 465.409 516.438 328.511 543.111C191.614 569.784 59.1116 475.648 32.5932 332.802C6.0748 189.956 95.5947 52.5617 232.492 25.889Z" stroke="url(#paint0_linear_0_1)" />
                    <path opacity="0.3" d="M347.586 498.813C465.279 460.268 530.733 333.024 493.781 214.605C456.828 96.1858 331.464 31.4346 213.77 69.9791C96.0771 108.524 30.6237 235.768 67.5759 354.187C104.528 472.606 229.893 537.357 347.586 498.813Z" fill="url(#paint1_radial_0_1)" />
                    <path opacity="0.5" d="M324.934 431.525C402.744 406.042 446.017 321.918 421.587 243.628C397.157 165.339 314.275 122.53 236.465 148.013C158.655 173.496 115.383 257.62 139.813 335.909C164.243 414.199 247.124 457.008 324.934 431.525Z" fill="url(#paint2_radial_0_1)" />
                    <path opacity="0.5" d="M394.522 252.49C414.261 315.746 379.297 383.713 316.433 404.301C253.569 424.889 186.605 390.303 166.866 327.048C147.128 263.792 182.091 195.825 244.955 175.237C307.819 154.649 374.783 189.235 394.522 252.49Z" stroke="url(#paint3_linear_0_1)" strokeWidth="2" />
                    <image href="/images/model-group.png" x="22.5%" y="35%" fillOpacity='0.5' className="w-[55%]" />

                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="82.8653" y1="175.091" x2="432.822" y2="480.141" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(232.243 86.8322) rotate(73.054) scale(452.809 451.926)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.678 159.155) rotate(73.054) scale(299.363 298.779)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint3_linear_0_1" x1="244.657" y1="174.283" x2="319.955" y2="404.2" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="flex flex-wrap pt-[200px] md:pt-[42%]">
                    <div className="md:w-1/12"></div>
                    <div className="w-full md:w-[45%] px-10">
                        <p className="font-lato-light italic font-light text-[22px] text-white">{t('home.ournode.tip')}</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em] mb-10">{t('home.ournode.title')}</h1>
                        {
                            t('home.ournode.description').split('\n').map((item, index) =>
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
            <HomeForm />
        </div>

    );
};

export default OurNode
