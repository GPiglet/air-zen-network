//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";


const Easy: FC = () => {
    //translate
    const { t } = useTranslation()

    const easyList = t('home.easy.list', { returnObjects: true })

    return (
        <section id="easy" className="container mx-auto pb-16 relative">
            <svg className="hidden md:block absolute left-[-27%] top-[45%] w-[140%] sm:top-[37%]  md:top-1/2 md:translate-y-[-50%] sm:w-[120%] md:w-[100%] xl:w-[65%]   sm:left-[-10%]  md:left-[-45%] xl:left-[-20%]" viewBox="0 0 804 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M497.478 697.95C666.249 643.997 760.109 465.887 707.12 300.13C654.13 134.373 474.358 43.7373 305.587 97.69C136.816 151.643 42.9562 329.753 95.9454 495.51C148.935 661.267 328.707 751.903 497.478 697.95Z" fill="url(#paint0_radial_1376_4769)" />
                <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_4769)" />
                <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.258 586.13 339.163Z" stroke="url(#paint2_linear_1376_4769)" />
                <image href="/images/phone-home1.png" x="32.5%" y="20%" fillOpacity='0.5' className="w-[35%]" />
                <defs>
                    <radialGradient id="paint0_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.28) rotate(72.664) scale(635.151 646.7)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                        <stop stopColor="#2294C3" />
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint2_linear_1376_4769" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE" />
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>


            <div className=" relative md:flex items-center px-10 md:px-0 h-full">
                <div className="flex flex-wrap mt-[400px] md:mt-12">
                    <div className="w-full md:w-1/2 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('home.easy.tip')}</p>
                            <h1 className="text-title-sm-white">{t('home.easy.title')}</h1>
                            {
                                t('home.easy.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] pt-9 w-[80%]">
                                {
                                    (easyList as unknown as any[]).map((item, index) =>
                                        <div className="flex mb-12" key={index}>
                                            <picture>
                                                <source srcSet="/images/check-icon.svg" type="image/webp" />
                                                <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                            </picture>
                                            <div className="text-white tracking-[0.08em] w-2/3">
                                                <p className="font-lato text-lg font-medium">{item.split('\n')[0]} </p>
                                                <p className="font-lato-light text-lg font-light">{item.split('\n')[1]}</p>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
Easy.displayName = 'Easy';
export default Easy
