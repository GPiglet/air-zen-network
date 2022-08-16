//modules
import React, { FC } from "react";
import { useTranslation } from "next-i18next";

const FutureProof: FC = () => {
    //translate
    const { t } = useTranslation()

    const logos = [
        'rexroth',
        'hilti',
        'lenze',
        'man'
    ]

    return (
        <div className="relative container mx-auto mb-[70%] sm:mb-[90%] md:mb-0">

            <svg className="absolute 
            left-[-49%] md:left-[-70%] lg:left-[-89%] xl:left-[-70%]
            top-[90%] xs:top-[75%] sm:top-[50%] md:top-[-15%] lg:top-[-45%] xl:top-[-34%]
            w-[170%] sm:w-[170%] md:w-[160%] lg:w-[180%] xl:w-[145%]"
                viewBox="-600 -350 2000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="581.442" cy="473.606" r="393.406" transform="rotate(-180 581.442 473.606)" fill="url(#paint0_radial_0_1)" />
                    <circle opacity="0.3" cx="581.436" cy="473.604" r="411.689" transform="rotate(-180 581.436 473.604)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.500122 473.727C0.500122 153.277 260.715 -106.5 581.709 -106.5C902.703 -106.5 1162.92 153.277 1162.92 473.727C1162.92 794.176 902.703 1053.95 581.709 1053.95C260.715 1053.95 0.500122 794.176 0.500122 473.727Z" stroke="url(#paint1_radial_0_1)" />
                    <circle opacity="0.7" cx="581.433" cy="473.596" r="312.533" transform="rotate(60 581.433 473.596)" fill="url(#paint2_radial_0_1)" />
                </g>
                <image href="/images/macbook.png" x="4.2%" y="14%" className="w-[48%]"></image>
                <path opacity="0.8" d="M356.221 443.186C429.094 419.864 469.621 342.876 446.741 271.228C423.861 199.579 346.238 160.402 273.366 183.723C200.493 207.044 159.966 284.032 182.846 355.681C205.726 427.329 283.348 466.507 356.221 443.186Z" fill="url(#paint3_radial_0_1)" />
                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(526.119 264.609) rotate(68.4205) scale(810.588)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(97.2791 676.146) rotate(-36.2932) scale(1152.08 1154.03)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(537.483 307.563) rotate(68.4205) scale(643.954)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(312.181 217.972) rotate(79.2367) scale(272.408 277.082)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            <svg className="absolute hidden md:block
            w-[100%]
            top-[60%] md:top-[95%] lg:top-[90%] xl:top-[70%]
            left-[0%] xl:left-[0%]" width="337" height="337" viewBox="0 0 337 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                <image href="/images/app-ellipse.svg" />
            </svg>



            <div className="container mx-auto flex self-center relative text-white px-10 xl:py-[18%]">
                <div className="md:flex justify-end items-center mt-5 md:mt-0  md:h-[60%]">
                    <div className="md:w-[40%]">
                        <p className="font-lato-light italic font-light text-[22px] text-white">{t('industrial.secure.tip')}</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">{t('industrial.secure.title')}</h1>
                        {
                            t('industrial.secure.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureProof;
