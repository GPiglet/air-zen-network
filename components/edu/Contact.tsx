//modules
import React, { FC } from "react"
import ContactHome from "./ContactForm";


const Contact: FC = () => {
    return (
                <div className="mx-auto relative md:pl-[10%]">
                    <div className="w-full md:w-1/2 px-10">
                        <p className="font-lato-light italic font-light text-[22px] text-white">Einfach</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">Unsere Nodes</h1>
                        <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">Wifi 6.</span> <br />2 wlan module für Access- und Meshing</p>
                        <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">UPerfektes roaming mit Apple & Android </span><br /> unterstützt alle Roaming Standards von Apple iOS und Android Geräten für ein Seamless Romaing. </p>
                        <p className="font-lato font-light tracking-widest text-white text-lg mt-3"><span className="font-normal">Zero-Setup </span><br />Die AirZen App hilft dir bei der kinderleichten Installation. </p>
                    </div>
                </div>

    );
};

export default Contact
