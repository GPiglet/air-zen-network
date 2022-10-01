//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";


const Reliable: FC = () => {    
    //translate
    const { t } = useTranslation()

    return (
        <section id="reliable" className="container mx-auto pb-16 relative flex items-center py-[150px]">

            <svg className="absolute right-[-52%] top-[76%] sm:top-[45%] md:top-[-26%] xl:top-[-20%] md:w-[120%] xl:w-[100%] sm:w-[140%] sm:right-[-20%] w-[204%] md:right-[-60%] xl:right-[-43%] " viewBox="0 0 907 907" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M538.472 704.59C686.17 656.921 768.31 499.556 721.937 353.106C675.564 206.655 518.239 126.576 370.541 174.245C222.842 221.913 140.702 379.278 187.075 525.729C233.448 672.179 390.774 752.258 538.472 704.59Z" fill="url(#paint0_radial_1376_4815)" />
                <path opacity="0.5" d="M512.183 639.605C615.95 606.114 673.659 495.555 641.079 392.664C608.499 289.773 497.968 233.513 394.2 267.003C290.433 300.493 232.724 411.052 265.304 513.943C297.884 616.834 408.415 673.095 512.183 639.605Z" fill="url(#paint1_radial_1376_4815)" />
                <path d="M621.253 399.063C650.392 491.089 598.779 589.983 505.956 619.941C413.134 649.898 314.27 599.571 285.13 507.544C255.99 415.517 307.604 316.624 400.426 286.666C493.249 256.708 592.113 307.036 621.253 399.063Z" stroke="url(#paint2_linear_1376_4815)" />
                <path opacity="0.6" d="M797.616 342.142C857.338 530.749 751.554 733.421 561.329 794.815C371.103 856.209 168.486 753.071 108.765 564.464C49.0433 375.857 154.827 173.185 345.052 111.791C535.278 50.3971 737.895 153.535 797.616 342.142Z" stroke="url(#paint3_linear_1376_4815)" />
                <image href="/images/homeContent2.png" width="600" height="350" clipPath="url(#reliableCircle)" x="18.5%" y="30%" fillOpacity='0.5' />
                <defs>
                    <clipPath id="reliableCircle">
                        <circle cx="454" cy="454" r="150" fill="#FFFFFF" />
                    </clipPath>
                    <radialGradient id="paint0_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(393.723 195.087) rotate(72.8188) scale(560.702 566.428)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(410.487 281.646) rotate(72.8188) scale(393.929 397.952)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1376_4815" x1="400.275" y1="286.19" x2="507.953" y2="619.822" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1376_4815" x1="344.901" y1="111.314" x2="565.257" y2="794.073" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>



            <div className="relative md:flex items-center px-10 md:px-0 h-full">
                <div className="flex flex-wrap">
                    {/* <div className="w-[20%]"></div> */}
                    <div className="w-full md:w-1/2 m-auto">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('home.reliable.tip')}</p>
                        <h1 className="text-title-sm-white">{t('home.reliable.title')}</h1>
                        {
                            t('home.reliable.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </section   >

    );
};
Reliable.displayName = 'Reliable';
export default Reliable
