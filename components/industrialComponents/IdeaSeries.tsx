//modules
import React, { FC } from "react"


const IdeaSeries: FC = () => {

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
        <div className="pb-16 container mx-auto relative flex items-center ">
            <svg className="absolute 
                left-[0%]            md:left-[-23%] lg:left-[-34%] xl:left-[-17%]
                top-[83%] sm:top-[70%] md:top-[13%] lg:top-[10%] xl:top-[-1%]
                w-[100%] sm:w-[100%] md:w-[77%] lg:w-[83%] xl:w-[820px]" 
            viewBox="0 0 821 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                <circle opacity="0.7" cx="410.101" cy="409.515" r="277.477" transform="rotate(-180 410.101 409.515)" fill="url(#paint0_radial_0_1)"/>
                <circle opacity="0.3" cx="410.099" cy="409.515" r="290.225" transform="rotate(-180 410.099 409.515)" stroke="#7BB690"/>
                <path opacity="0.6" d="M0.499695 409.599C0.499695 183.661 183.969 0.501099 410.291 0.501099C636.613 0.501099 820.082 183.661 820.082 409.599C820.082 635.537 636.613 818.697 410.291 818.697C183.969 818.697 0.499695 635.537 0.499695 409.599Z" stroke="url(#paint1_radial_0_1)"/>
                <circle opacity="0.7" cx="410.098" cy="409.507" r="207.742" transform="rotate(60 410.098 409.507)" fill="url(#paint2_radial_0_1)"/>
                </g>
                <image href="/images/phone-home.png" x="29%" y="20%" className="w-[41%]" />
                <path opacity="0.8" d="M303.843 695.245C368.051 674.697 403.759 606.863 383.6 543.734C363.44 480.605 295.048 446.086 230.84 466.634C166.633 487.182 130.924 555.016 151.084 618.145C171.243 681.274 239.636 715.793 303.843 695.245Z" fill="url(#paint3_radial_0_1)"/>
                <foreignObject  className="font-lato-light  italic w-[260px] text-lg text-white hidden md:block" x="36%" y="93%" width="260px" height="100px">
                    <p 
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block"  x="30.9%" y="92%" cx="511.828" cy="696.377" />
                <defs>
                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(371.081 262.105) rotate(68.4205) scale(571.724)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.6126 552.369) rotate(-36.2932) scale(812.584 813.959)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(380.884 299.144) rotate(68.4205) scale(428.038)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(265.04 496.811) rotate(79.2367) scale(240.017 244.135)">
                    <stop stop-color="#479CDA"/>
                    <stop offset="1" stop-color="#60A9AF" stop-opacity="0"/>
                    </radialGradient>
                </defs>
            </svg>


            <div className="relative items-center px-10 md:px-0 md:h-[70%] pt-[10%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-[35%] m-auto">
                        <div className="relative">
                            <p className="font-lato-light italic font-light text-[22px] text-white">Zuverlässig</p>
                            <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">Ideen in Serie</h1>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3">Ein sicherer Zugang auf zentrale Alles aus einer Hand - von der Idee bis zur Hardware. Sie
                                brauchen ein zuverlässiges Netzwerk oder haben eine neue
                                Anforderung an ihr Bestehendes? </p>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3">Ein sicherer Zugang auf zentrale Die AirZen Technologien
                                sind für den Einsatz in der Industrie konzipiert und sorgen
                                für ein äußerst effizientes Netzwerk auch bei speziellen,
                                industriellen Anforderungen. Egal ob Automatisierung,
                                smartes Management, Fernsteuerung oder Ferndiagnosen -<br/>
                                AirZen entwickelt gemeinsam mit Ihnen eine ideale
                                Netzwerk-Variante. Halten Sie alles am Laufen –<br/>
                                mit einer
                                außergewöhnlich zuverlässigen und stabilen
                                Netzwerkabdeckung von AirZen. </p>
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

export default IdeaSeries
