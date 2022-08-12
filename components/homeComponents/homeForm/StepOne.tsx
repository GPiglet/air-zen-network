import React, { FC, useState } from 'react'

import Form from '../../common/form'

const StepOne: FC = () => {

    const [formView, setFormView] = useState(true)


    return (
        <div>
            <Form 
                buttonType='border border-primary pl-5 pr-12'
                buttonActive={true}
                buttonString='zum Konfigurator'
                width='sm:w-[80%]'
            >
                 <h1 className='text-[22px] uppercase w-1/2 '>Startklar in Minuten</h1>
                <p className='text-lg mt-2 tracking-widest'> Für Home-Office und die Familie: AirZen bietet eine
                    störungsfreie und sorglose Highend-Netzwerk-Lösung
                    für Ihr Zuhause.</p>

            </Form>
        </div>
    )
}

export default StepOne