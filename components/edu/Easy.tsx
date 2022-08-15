//modules
import React, { FC } from "react"

const Easy: FC = () => {

    return (
        <div className="relative items-center px-10 md:px-0 md:pt-[10%] md:h-[70%]">
            <div className="flex flex-col mt-12 md:mt-18">
                <div className="w-full md:w-1/3 m-auto">
                    <p className="font-lato-light italic font-light text-[22px] text-white">Einfach</p>
                    <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em]">Das kleine Einmaleinfach!</h1>
                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3">Laptop raus und loslegen. Mit AirZen bekommen Schüler und Lehrer schnell und spielend einfach Zugang ins Netz über ein Self Service Portal. Damit sich alle auf den Unterricht konzentrieren können, läuft alles andere fast automatisch ab - Von der Einrichtung, bis hin zur Wartung mit selbstlernender Softwarepflege. <br/><br/>Es braucht also keine große IT-Abteilung oder Fachkenntnisse, dank Hardware und Support direkt vom Hersteller. Oder anders gesagt: Mit AirZen geht die Rechnung auf.</p>
                </div>
            </div>
        </div>

    );
};

export default Easy