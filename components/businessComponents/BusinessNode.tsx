


//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";

import BusinessForm from "./businessForm";


const BusinessNode: FC = () => {
    //translate
    const { t } = useTranslation()

    return (
        <div className="pb-16 relative ">
            {/* mt-[600px] sm:mt-[100%] md:mt-[50%] */}

            <div className="relative px-10 md:px-0 container mx-auto ">
                <svg className="absolute left-[-37%] top-[-4%] w-[174%]  md:top-[34%] md:translate-y-[-50%] md:w-[60%] 2xl:w-[57%] 2xl:left-[0%]  sm:top-[-1%] sm:w-[80%] sm:left-[10%]  md:left-[-2%]" viewBox="0 0 700 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.5" cx="350.002" cy="353.94" rx="311.623" ry="315.088" fill="url(#paint0_radial_1376_6324)" />
                    <path opacity="0.3" d="M565.18 353.94C565.18 474.044 468.836 571.398 350 571.398C231.165 571.398 134.82 474.044 134.82 353.94C134.82 233.836 231.165 136.481 350 136.481C468.836 136.481 565.18 233.836 565.18 353.94Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M699.5 353.73C699.5 548.818 543.019 706.959 350 706.959C156.982 706.959 0.500048 548.818 0.500031 353.73C0.500014 158.641 156.981 0.499986 350 0.499969C543.019 0.499953 699.5 158.641 699.5 353.73Z" stroke="url(#paint1_radial_1376_6324)" />
                    <ellipse opacity="0.7" rx="133.751" ry="132.932" transform="matrix(-0.495398 -0.868666 0.863344 -0.504616 350.162 353.803)" fill="url(#paint2_radial_1376_6324)" />
                    <ellipse opacity="0.4" rx="203.013" ry="201.769" transform="matrix(-0.495398 -0.868666 0.863344 -0.504616 350.163 353.803)" fill="url(#paint3_radial_1376_6324)" />
                    <image href="/images/model-group.png" x="22.5%" y="35%" fillOpacity='0.5' className="w-[55%]" />

                    <defs>
                        <radialGradient id="paint0_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(306.18 186.549) rotate(68.6363) scale(648.257 643.031)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(641.47 230.433) rotate(143.37) scale(696.192 699.892)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(114.942 62.3117) rotate(68.2998) scale(274.126 275.355)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(174.464 94.5792) rotate(68.2998) scale(416.08 417.945)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="flex flex-wrap pt-[500px] md:pt-[42%]">
                    <div className="md:w-1/12"></div>
                    <div className="w-full md:w-[45%] px-10">
                        <p className="font-lato-light italic font-light text-[22px] text-white">{t('business.section7.tip')}</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em] mb-10">{t('business.section7.title')}</h1>
                        {
                            t('business.section7.description').split('\n').map((item, index) =>
                                index % 2 === 0 ? (
                                    <p className="font-lato tracking-widest text-white text-lg mt-3 font-normal" key={index}>{item}</p>
                                ) : (
                                    <>
                                        <p className="font-lato font-light tracking-widest text-white text-lg" key={index}>{item}
                                        </p><br />
                                    </>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <BusinessForm />
        </div>

    );
};

export default BusinessNode
