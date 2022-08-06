//modules
import React, { FC } from "react";


const Professional: FC = () => {

    const list = [
        {
            title: 'Office & Teams',
            lists: [
                'Zerotrust: individuelle Kennwörter',
                'Self-Service Portal für Mitarbeiter ',
                'Managed Service & Live-Support per App, optional auch für Mitarbeiter'
            ]
        },
        {
            title: 'Homeoffice',
            lists: [
                'Security im Home-Office: Seperate Business und Privat-Netze',
                'SPlug & Play, keine  IT-Erfahrung nötig ',
                'Router-Set mit Mesh- Technologie'
            ]
        },
        {
            title: 'Kunden & Gäste WLAN',
            lists: [
                'Marketing im Gäste WLAN per App konfigurierbar',
                'kontinuierlich Rechtssicher und DSGVO-Konform',
                'Individalisierbar nach Branche (Premium-WLAN, Gäste-WLAN uvm.)'
            ]
        },

    ]

    return (
        <section className="pb-16 relative  overflow-x-clip  items-center md:flex ">





            <svg className="absolute left-[-75%] bottom-[-37%] sm:top-[12%] md:top-[-10%] lg:top-[-47%] md:w-[100%] 2xl:w-[1563px]  sm:w-[200%] sm:left-[-54%] w-[250%] md:left-[-41%] lg:left-[-35%] 2xl:left-[-34%] " viewBox="0 0 679 681" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="339.414" cy="340.579" rx="167.901" ry="168.624" transform="rotate(150 339.414 340.579)" fill="url(#paint0_radial_1376_5657)" />
                    <path opacity="0.3" d="M187.495 428.29C138.845 344.025 167.424 236.449 251.324 188.01C335.223 139.57 442.677 168.608 491.327 252.873C539.978 337.138 511.398 444.714 427.499 493.154C343.599 541.593 236.145 512.555 187.495 428.29Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M124.965 464.45C56.367 345.635 96.8264 193.852 215.33 125.434C333.834 57.0156 485.511 97.8679 554.11 216.684C622.708 335.5 582.249 487.282 463.745 555.7C345.241 624.119 193.564 583.266 124.965 464.45Z" stroke="url(#paint1_radial_1376_5657)" />
                    <ellipse opacity="0.7" rx="116.273" ry="116.023" transform="matrix(0.865095 0.501608 -0.498386 0.866955 339.415 340.579)" fill="url(#paint2_radial_1376_5657)" />
                </g>
                <image
                    href="/images/businessContent2.png"
                    width="370"
                    height="370"
                    clipPath="url(#businessContentPic2)"
                    x="13%"
                    y="23%"
                    fillOpacity="0.5"
                />
                <defs>
                    <clipPath id="businessContentPic2"><circle cx="340" cy="340" r="90" fill="#FFFFFF"></circle></clipPath>

                    <radialGradient id="paint0_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(315.803 250.997) rotate(68.5045) scale(347.238 346.15)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(203.869 519.08) rotate(-66.4108) scale(492.436 493.9)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(99.9221 54.386) rotate(68.3783) scale(239.128 239.503)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>


            <svg className="hidden md:block absolute right-[-42%] top-[66%] md:bottom-[-10%] lg:top-30%] md:w-[50%] 2xl:w-[900px]  sm:top-[43%] sm:w-[200%] sm:right-[-54%] w-[174%] md:right-[-13%] lg:right-[-13%] 2xl:right-[-15%] " viewBox="0 0 525 523" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <ellipse opacity="0.7" cx="262.611" cy="261.234" rx="177.521" ry="176.933" fill="url(#paint0_radial_1376_5511)" />
                    <path opacity="0.3" d="M448.111 261.233C448.111 363.338 365.063 446.114 262.614 446.114C160.165 446.114 77.1172 363.338 77.1172 261.233C77.1172 159.128 160.165 76.3525 262.614 76.3525C365.063 76.3525 448.111 159.128 448.111 261.233Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M524.483 261.179C524.483 405.146 407.188 521.859 262.491 521.859C117.795 521.859 0.500035 405.146 0.500023 261.179C0.50001 117.213 117.795 0.49999 262.491 0.499977C407.188 0.499964 524.483 117.212 524.483 261.179Z" stroke="url(#paint1_radial_1376_5511)" />
                    <ellipse opacity="0.7" rx="138.506" ry="138.736" transform="matrix(-0.501246 -0.865305 0.866743 -0.498756 262.612 261.234)" fill="url(#paint2_radial_1376_5511)" />
                </g>
                <image
                    href="/images/businessContent3.png"
                    width="500"
                    height="600"
                    clipPath="url(#businessContentPic3)"
                    x="-5%"
                    y="-9%"
                    fillOpacity="0.5"
                />
                <defs>
                    <clipPath id="businessContentPic3"><circle cx="263" cy="261" r="130" fill="#FFFFFF"></circle></clipPath>

                    <radialGradient id="paint0_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(237.647 167.238) rotate(68.3553) scale(364.723 365.606)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(481.086 170.142) rotate(143.797) scale(519.263 519.622)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5511" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(119.029 65.0327) rotate(68.453) scale(285.793 285.447)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="mt-[300px] sm:mt-[50%] md:mt-0 container mx-auto relative text-center text-white px-10">
                <div className="w-full">
                    <h1 className="text-title-sm">
                        Profesionelles Wlan
                    </h1>
                    <p className="font-lato-light font-light italic text-lg tracking-widest">für Teams, Büros und Kunden</p>
                    <div className="md:flex justify-between text-lg text-left mt-10">
                        <div className="w-[160px]"></div>
                        {
                            list.map((item, index) => (
                                <div key={index} className='md:px-5'>
                                    <p className="font-lato font-medium mb-4">{item.title}</p>
                                    <ul className='list-["-"] pl-2 unique-skill-list'>
                                        {item.lists.map((list, ind) => (
                                            <li className='font-lato text-base font-light' key={ind}>{list}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Professional;
