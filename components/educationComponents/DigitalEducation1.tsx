//modules
import React, { FC } from "react"

const DigitalEducation1: FC = () => {

    return (
        <section className="md:pb-16 relative  overflow-x-clip">
            <div className="container md:w-[70%] relative items-center px-10 md:px-0 pt-[30%] md:pt-[10%] md:h-[70%]">
                <div className="flex flex-col mt-12 md:mt-18">
                    <div className="w-full md:w-3/5 m-auto">
                        <p className="font-lato-light italic font-light text-[22px] text-white">Sicher</p>
                        <h1 className="text-title-sm">SCHUTZ wird hier großsgeschrieben!</h1>
                        <p className="font-lato font-light tracking-widest text-white text-lg mt-3">Von der Grundschule bis zum Hörsaal - im schulischen Netzwerk gibt es viele sensible Daten. AirZen bietet durch die Kombi von hochqualitativem Hersteller- Service und EU- als auch DSGV- konformen Sicherheitskonzepten ein hohes Maß an IT-Sicherheit. <br/><br/>Schützen Sie Ihre Schüler und Lehrkräfte zudem mit eigenen WLAN-Passwörtern, Jugendschutzfiltern und separat getrennten Verbindungen.</p>
                    </div>
                </div>
            </div>

            <svg className="relative md:absolute mx-auto 
            right-[5%] sm:right-[-2%] md:right-[-35%] lg:right-[-15%] xl:right-[-150px]
            top-0 
            w-[120%] sm:w-[700px] md:w-[880px] 2xl:w-[950px]" viewBox="0 0 752 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M303.174 715.686C469.992 755.232 637.379 652.461 677.043 486.141C716.707 319.822 613.628 152.935 446.809 113.39C279.991 73.8448 112.604 176.616 72.94 342.935C33.2762 509.255 136.355 676.141 303.174 715.686Z" fill="url(#paint0_radial_1226_5560)"/>
                <image href="/images/education3.png" width="1000" height="370" clipPath="url(#myCircle)" x="-17%" y="32%" fillOpacity='0.5'/>
                <path opacity="0.5" d="M441.331 620.158C555.295 583.835 618.148 462.279 581.716 348.655C545.283 235.031 423.363 172.367 309.398 208.69C195.433 245.013 132.581 366.569 169.013 480.193C205.445 593.817 327.366 656.481 441.331 620.158Z" fill="url(#paint1_radial_1226_5560)"/>
                <path opacity="0.6" d="M689.967 314.529C745.553 487.891 649.656 673.358 475.771 728.779C301.886 784.201 115.864 688.588 60.278 515.226C4.69146 341.864 100.589 156.397 274.473 100.976C448.358 45.5548 634.38 141.167 689.967 314.529Z" stroke="url(#paint3_linear_1226_5560)"/>
                <path d="M536.827 363.337C565.377 452.376 516.124 547.633 426.815 576.098C337.507 604.562 241.966 555.455 213.416 466.416C184.867 377.377 234.12 282.121 323.428 253.656C412.737 225.191 508.278 274.299 536.827 363.337Z" stroke="url(#paint2_linear_1226_5560)"/>
                <foreignObject  className="font-lato-light  italic text-lg text-white hidden md:block" x="38%" y="7.2%" width="250px" height="100px">
                    <p 
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block"  x="32%" y="6%" cx="511.828" cy="696.377" />
                <foreignObject  className="font-lato-light  italic text-lg text-white hidden md:block" x="38%" y="87.2%" width="250px" height="100px">
                    <p 
                    >Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
                </foreignObject>
                <image href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block"  x="32%" y="86%" cx="511.828" cy="696.377" />
                <defs>
                <radialGradient id="paint0_radial_1226_5560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(456.842 146.603) rotate(103.799) scale(624.071 625.731)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="paint1_radial_1226_5560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.4 224.928) rotate(72.6081) scale(435.501 436.575)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="paint2_linear_1226_5560" x1="323.276" y1="253.18" x2="426.406" y2="576.753" gradientUnits="userSpaceOnUse">
                <stop stopColor="#159BDE"/>
                <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_1226_5560" x1="274.321" y1="100.5" x2="474.831" y2="729.604" gradientUnits="userSpaceOnUse">
                <stop stopColor="#159BDE"/>
                <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
                </linearGradient>
                <clipPath id="myCircle">
                    <circle cx="375" cy="414"  r="186"  fill="#FFFFFF" />
                </clipPath>
                </defs>
            </svg>
        </section>

    );
};

export default DigitalEducation1