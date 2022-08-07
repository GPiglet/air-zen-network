//modules
import React, { FC } from "react"
import ContactHome from "./ContactForm";


const Contact: FC = () => {
    return (
        <div className="relative  md:pt-[10%] lg:mt-[20%]">
            <section className="container mx-auto relative flex items-center ">
                <svg  className="absolute
                top-[-60%] sm:top-[-6%] md:top-[-15%] lg:top-[-18%] xl:top-[-35%]
                xs:w-[100%] sm:w-[100%] md:w-[70%] max-w-[962px]
                left-[0] sm:left-[0%] md:left-[-5%]" 
                viewBox="0 0 912 911" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.5" cx="456" cy="455.5" rx="406" ry="405.5" fill="url(#paint0_radial_1376_8017)"/>
                    <path opacity="0.3" d="M736.5 455.5C736.5 610.139 610.917 735.5 456 735.5C301.083 735.5 175.5 610.139 175.5 455.5C175.5 300.861 301.083 175.5 456 175.5C610.917 175.5 736.5 300.861 736.5 455.5Z" stroke="#7BB690"/>
                    <path opacity="0.6" d="M911.5 455.23C911.5 706.369 707.567 909.959 456 909.959C204.434 909.959 0.500062 706.369 0.50004 455.23C0.500018 204.09 204.434 0.499982 456 0.49996C707.567 0.499938 911.5 204.09 911.5 455.23Z" stroke="url(#paint1_radial_1376_8017)"/>
                    <circle opacity="0.7" cx="456.212" cy="455.325" r="172.655" transform="rotate(-120 456.212 455.325)" fill="url(#paint2_radial_1376_8017)"/>
                    <circle opacity="0.4" cx="456.21" cy="455.325" r="262.062" transform="rotate(-120 456.21 455.325)" fill="url(#paint3_radial_1376_8017)"/>
                    <image href="/images/model-group.png" x="22.5%" y="35%" fillOpacity='0.5' className="w-[55%]" />
                    <defs>
                    <radialGradient id="paint0_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(398.906 240.078) rotate(68.3963) scale(835.646 836.397)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(835.743 296.554) rotate(143.707) scale(903.111 904.639)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(431.932 363.602) rotate(68.4205) scale(355.744)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(419.358 316.104) rotate(68.4205) scale(539.962)">
                    <stop stop-color="#7BB690"/>
                    <stop offset="1" stop-color="#7BB690" stop-opacity="0"/>
                    </radialGradient>
                    </defs>
                </svg>

                <div className="mx-auto relative md:pl-[10%]">
                    <div className="">
                        <div className="w-full md:w-1/2 px-10">
                            <p className="font-lato-light italic font-light text-[22px] text-white">Einfach</p>
                            <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">Unsere Nodes</h1>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">Wifi 6.</span> <br />2 wlan module für Access- und Meshing</p>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">UPerfektes roaming mit Apple & Android </span><br /> unterstützt alle Roaming Standards von Apple iOS und Android Geräten für ein Seamless Romaing. </p>
                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">Zero-Setup </span><br />Die AirZen App hilft dir bei der kinderleichten Installation. </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative md:static">
                <ContactHome />
            </div>
                
        </div>

    );
};

export default Contact
