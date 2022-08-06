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
        <section className="pb-16 container mx-auto relative flex items-center  overflow-x-clip ">
            <svg className="absolute left-[-37%] top-[50%]  md:top-1/2 md:translate-y-[-50%] md:w-[65%] 2xl:w-[1000px]  sm:top-[40%] sm:w-[120%] sm:left-[-10%] w-[174%] md:left-[-14%]" viewBox="0 0 692 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="345.838" cy="345.661" rx="233.997" ry="234.212" transform="rotate(-180 345.838 345.661)" fill="url(#paint0_radial_1376_5616)" />
                    <path opacity="0.3" d="M101.168 345.66C101.168 210.409 210.711 100.766 345.838 100.766C480.965 100.766 590.508 210.409 590.508 345.66C590.508 480.912 480.965 590.555 345.838 590.555C210.711 590.555 101.168 480.912 101.168 345.66Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.5 345.732C0.5 155.066 155.185 0.500122 346 0.500122C536.815 0.500122 691.5 155.066 691.5 345.732C691.5 536.398 536.815 690.964 346 690.964C155.185 690.964 0.5 536.398 0.5 345.732Z" stroke="url(#paint1_radial_1376_5616)" />
                    <ellipse opacity="0.7" rx="161.634" ry="161.56" transform="matrix(0.499657 0.866223 -0.865827 0.500343 345.839 345.66)" fill="url(#paint2_radial_1376_5616)" />
                </g>
                <image href="/images/phone-home.png" x="33.5%" y="20%" className="w-[32%]" />

                <defs>
                    <radialGradient id="paint0_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(312.933 221.236) rotate(68.4384) scale(482.519 482.196)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.8615 466.241) rotate(-36.3183) scale(685.475 686.823)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5616" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(138.904 75.7314) rotate(68.4115) scale(332.905 333.016)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>


            <div className=" relative items-center px-10 md:px-0 md:h-[70%]">
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
                                smartes Management, Fernsteuerung oder Ferndiagnosen -
                                AirZen entwickelt gemeinsam mit Ihnen eine ideale
                                Netzwerk-Variante. Halten Sie alles am Laufen –
                                mit einer
                                außergewöhnlich zuverlässigen und stabilen
                                Netzwerkabdeckung von AirZen. </p>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3">
                                So arbeiten Sie und ihr Team überall zu den
                                Sicherheitsrichtlinien Ihres Unternehmens, selbst vom Sofa aus.</p>
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
        </section>

    );
};

export default IdeaSeries
