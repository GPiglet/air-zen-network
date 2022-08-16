//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";


const SimpleProductive: FC = () => {
    //translate
    const { t } = useTranslation()

    const hintList = [
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
        {
            title: 'Sicheres Wlan für Kinder',
            description: 'inclusive Internet-Filter und Pause Knopf'
        },
    ]

    return (

        <div id="easy" className="container mx-auto relative mb-[95%] sm:mb-[100%] md:mb-[15%]">

            <svg className="absolute 
                left-[-64%] sm:left-[-64%] md:left-[-92%] lg:left-[-88%] xl:left-[-69%]
                top-[93%] xs:top-[78%] sm:top-[46%] md:top-[-36%] lg:top-[-47%] xl:top-[-102%]
                w-[230%] sm:w-[230%] md:w-[200%] lg:w-[190%] xl:w-[155%]"
                viewBox="-600 -350 2000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="410.101" cy="410.511" r="277.477" transform="rotate(-180 410.101 410.511)" fill="url(#paint0_radial_0_1)" />
                    <circle opacity="0.3" cx="410.099" cy="410.513" r="290.225" transform="rotate(-180 410.099 410.513)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.499695 410.597C0.499695 184.659 183.969 1.49915 410.291 1.49915C636.613 1.49915 820.082 184.659 820.082 410.597C820.082 636.535 636.613 819.695 410.291 819.695C183.969 819.695 0.499695 636.535 0.499695 410.597Z" stroke="url(#paint1_radial_0_1)" />
                    <circle opacity="0.7" cx="410.096" cy="410.504" r="220.436" transform="rotate(60 410.096 410.504)" fill="url(#paint2_radial_0_1)" />
                </g>
                <image href="/images/phone-home.png" x="12%" y="11%" className="w-[17%]" />
                <path opacity="0.8" d="M733.385 433.689C806.258 410.368 846.785 333.38 823.905 261.731C801.025 190.083 723.402 150.906 650.53 174.227C577.657 197.548 537.13 274.536 560.01 346.185C582.89 417.833 660.512 457.01 733.385 433.689Z" fill="url(#paint3_radial_0_1)" />
                <foreignObject className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block" x="16%" y="53%" width="260px" height="100px">
                    <p
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block" x="14%" y="52.5%" cx="511.828" cy="696.377" />
                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(371.081 263.101) rotate(68.4205) scale(571.724)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.6126 553.367) rotate(-36.2932) scale(812.584 813.959)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(379.097 293.397) rotate(68.4205) scale(454.194)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(689.345 208.476) rotate(79.2367) scale(272.408 277.082)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>



            <div className="relative items-center px-10 md:px-0 md:h-[70%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-[35%] m-auto">
                        <div className="relative">
                            <p className="font-lato-light italic font-light text-[22px] text-white">{t('industrial.easy.tip')}</p>
                            <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">{t('industrial.easy.title')}</h1>
                            {
                                t('industrial.easy.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item} </p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                {
                                    hintList.map((item, index) => (
                                        <div className="flex mb-12" key={index}>
                                            <picture>
                                                <source srcSet="/images/check-icon.svg" type="image/webp" />
                                                <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                            </picture>
                                            <div className="text-white tracking-[0.08em] w-2/3">
                                                <p className="font-lato text-lg font-medium">{item.title} </p>
                                                <p className="font-lato-light text-lg font-light italic">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleProductive
