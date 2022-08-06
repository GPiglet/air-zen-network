import React, { FC, useState } from 'react'

const HomeForm: FC = () => {

    const [formView, setFormView] = useState(false)


    return (
        <div>
            <div className='absolute right-[-40px] top-[10%] bg-white w-[100px] cursor-pointer  py-4 px-4 rounded-full z-100' onClick={() => setFormView(!formView)}>
                <picture className='max-w-[40px]'>
                    <source srcSet="/images/chat-icon.svg" type="image/webp" />
                    <img src="/images/chat-icon.svg" alt="" />
                </picture>


            </div>
            {
                    <div className={`w-full absolute  ${formView ? ' block right-[-40px]' : 'right-[-100%] md:right-[-600px]'} top-[25%] bg-white  md:w-[600px] rounded-xl py-[58px] pl-[80px] pr-0 font-lato form-animate`}>
                    <div className='w-[80%] relative' >
                        <h1 className='text-[22px] uppercase w-1/2 tracking-[0.08em] '>Startklar in Minuten</h1>
                        <p className='text-lg mt-2 tracking-widest'> Für Home-Office und die Familie: AirZen bietet eine
                            störungsfreie und sorglose Highend-Netzwerk-Lösung
                            für Ihr Zuhause.</p>
    
                        <svg width="214" height="219" className='absolute top-[-110px] left-[-135px]' viewBox="0 0 214 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M129.297 215.398C71.848 227.511 15.2634 189.912 2.92615 131.397C-9.41115 72.8825 27.177 15.6397 84.6257 3.52718C142.074 -8.58532 198.659 29.013 210.996 87.5279C223.334 146.043 186.745 203.286 129.297 215.398Z" stroke="url(#paint0_linear_0_1)" />
                            <path opacity="0.2" d="M106.958 199.708C58.0336 199.708 18.3419 159.321 18.3419 109.463C18.3419 59.6043 58.0336 19.217 106.958 19.217C155.882 19.217 195.574 59.6043 195.574 109.463C195.574 159.321 155.882 199.708 106.958 199.708Z" stroke="url(#paint1_linear_0_1)" strokeWidth="2" />
                            <defs>
                                <linearGradient id="paint0_linear_0_1" x1="131.076" y1="129.791" x2="30.2186" y2="24.9748" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_0_1" x1="151.105" y1="198.052" x2="132.642" y2="114.961" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#159BDE" />
                                    <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
    
    
                    </div>
                    <button className='text-lg py-[12px] px-12 float-right border border-primary rounded-lg drop-shadow-lg mt-12'>zum Konfigurator</button>
    
                </div>
            }
           
        </div>
    )
}

export default HomeForm