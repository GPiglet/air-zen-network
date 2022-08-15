import React, { FC, useState } from 'react'

import ReadMore from '../readmoreless'

const Footer: FC = () => {

    const inprint = [
        {
            title: 'AirZen Networks Lda.',
            description: `Avenida Arriaga, nº30, 1ºA \n 9000-064 Funchal, Portugal`,
            subdes: 'VAT: PT516672169'
        }
    ]

    const readmore = [
        {
            title: 'Haftungsbeschränkung',
            content: 'Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.'
        },
        {
            title: 'Externe Links',
            content: 'Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.'
        },
        {
            title: 'Urheber- und Leistungsschutzrechte',
            content: 'Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.'
        },
    ]

    return (
            <div className='container m-auto md:fixed md:hidden'>
                <div className='relative py-[100px] md:py-[100px] flex justify-center overflow-x-hidden'>
            <h1 className="text-title-sm">Impressum</h1>
            </div>
            <div className='px-10  grid md:grid-cols-3 tracking-widest text-white pb-[300px]'>

                {
                    inprint.map((item, index) => (
                        <div className='w-full px-2 text-left text-lg font-lato mb-16' key={index}>
                            <p className='font-normal'>{item.title}</p>
                            <p className='font-light whitespace-pre-line'>{item.description}</p>
                            <p className='font-light mt-10'>{item.subdes}</p>
                        </div>
                    ))
                }
                {
                    readmore.map((item, index) => (
                        <div className='w-full px-2 text-left text-lg font-lato md:mb-16 relative' key={index}>
                            <p className='font-normal mb-10'>{item.title}</p>

                            <ReadMore>
                                {item.content}
                            </ReadMore>
                        </div>
                    ))
                }
            </div>
                
            </div>
    )
}

export default Footer
