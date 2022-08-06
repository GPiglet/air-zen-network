import React, {FC} from 'react'

const Sticky: FC = () => {
    
    return (
        <div className="hidden md:block bg-black fixed bottom-0 w-full py-7 z-60 border border-third border-opacity-30">
            <div className="container mx-auto flex  pl-16">
                <div className="flex flex-col mr-16">
                    <button className="w-max font-lato text-white text-base bg-gradient-to-r from-secondary to-[#669AB4] py-2.5 px-7 rounded-md">
                        Cookies akzeptierne
                    </button>
                    <div className="bg-gradient-to-r w-full p-[1px] rounded-md from-secondary to-[#669AB4] mt-3">
                        <button className=" font-lato w-full text-white text-base bg-black py-2.5 border- rounded-md">
                        Cookies anpassen
                        </button>

                    </div>
                </div>
                <span className="font-lato font-light text-base text-white tracking-[2px]">Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Dabei anonymisieren wir alle Datensätze und löschen sie nach der Auswertung. Wir geben Ihre Daten niemals weiter: auch nicht an Parnter. <a href="" className='underline'>Details anzeigen</a></span>
            </div>
        </div>
    )
}

export default Sticky