//modules
import React, { FC } from "react"

const DigitalEducation: FC = () => {

    return (
        <section className="md:pb-16 md:pl-8 relative overflow-x-clip">
            
            <div className="container mx-auto relative items-center px-10 md:px-0 pt-[30%] md:pt-[13%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-2/5 m-auto">
                        <div className="relative">
                            <p className="font-lato-light italic font-light text-[22px] text-white">Zuverlässig</p>
                            <h1 className="text-title-sm">Klassenzimmer digital!</h1>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3">
                            AirZen hat die Komplettlösung für komplexe Anforderungen von Schulen jeder Art und Größe – und ist dabei kinderleicht zu bedienen. <br/><br/>Neben lückenloser WLAN-Abdeckung sorgt AirZen auch für eine zuverlässige Netzstabilität, auch wenn viele Geräte online sind. Administratoren können unkompliziert Zugänge ermöglichen und mobil verwalten - ganz einfach vom Handy aus. <br/><br/>Dazu braucht es keine ITSchulung, denn die Bedienung funktioniert ganz intuitiv über die App. Mit AirZen sorgen Sie für ein erst- klassiges Netz in ihrer Schule.
                            </p>
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                <div className="flex mb-12">
                                    <picture>
                                        <source srcSet="/images/check-icon.svg" type="image/webp" />
                                        <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                    </picture>
                                    <div className="text-white tracking-[0.08em] w-2/3">
                                        <p className="font-lato text-lg font-medium">Sicheres Wlan für Kinder</p>
                                        <p className="font-lato-light text-lg font-light italic">inclusive Internet-Filter und Pause Knopf</p>
                                    </div>
                                </div>
                                <div className="flex mb-12">
                                    <picture>
                                        <source srcSet="/images/check-icon.svg" type="image/webp" />
                                        <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                    </picture>
                                    <div className="text-white tracking-[0.08em] w-2/3">
                                        <p className="font-lato text-lg font-medium">Sicheres Wlan für Kinder </p>
                                        <p className="font-lato-light text-lg font-light italic">inclusive Internet-Filter und Pause Knopf</p>
                                    </div>
                                </div>
                                <div className="flex mb-12">
                                    <picture>
                                        <source srcSet="/images/check-icon.svg" type="image/webp" />
                                        <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                    </picture>
                                    <div className="text-white tracking-[0.08em] w-2/3">
                                        <p className="font-lato text-lg font-medium">Sicheres Wlan für Kinder </p>
                                        <p className="font-lato-light text-lg font-light italic">inclusive Internet-Filter und Pause Knopf</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="relative md:absolute mx-auto 
            left-[-6%] md:left-[-18%] lg:left-[-14%] 2xl:left-[-100px]
            md:top-0
            w-[100%] md:w-[60%] 2xl:w-[723px]" viewBox="0 0 723 797" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M497.478 697.949C666.249 643.996 760.109 465.886 707.12 300.129C654.13 134.372 474.358 43.7363 305.587 97.689C136.816 151.642 42.9562 329.752 95.9454 495.509C148.935 661.266 328.707 751.902 497.478 697.949Z" fill="url(#paint0_radial_1376_7045)"/>
                <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_7045)"/>
                <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.259 586.13 339.163Z" stroke="url(#paint2_linear_1376_7045)"/>
                <image href="/images/phone-home.png" x="33%" y="18%" fillOpacity='0.5' className="w-[48%]" />
                <defs>
                <radialGradient id="paint0_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.279) rotate(72.664) scale(635.151 646.7)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="paint2_linear_1376_7045" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                <stop stopColor="#159BDE"/>
                <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>

        </section>

    );
};

export default DigitalEducation