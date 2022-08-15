import Breadcrumb from "../common/breadcrumb"
import ClassWiFi from "./ClassWiFi"
import Contact from "./Contact"
import ContactForm from "./ContactForm"
import Easy from "./Easy"
import Reliable from "./Reliable"
import Secure from "./Secure"

import { useRouter } from 'next/router'

const Edu = () => {
    
    const router = useRouter()
    return (
        
        <div className="">
            <div className="relative container m-auto">
                <div className="section1 h-[100vh] flex flex-col justify-center">
                    <div className='container relative z-20 pb-5 px-10 md:px-0' onClick={() => router.back()}>
                        <div className='flex items-center '>
                        <picture>
                            <source srcSet="/images/left-arrow.svg" type="image/webp" />
                            <img src="/images/left-arrow.svg" className='w-[14px] h-[26px] mr-2 cursor-pointer' alt="" />
                        </picture>
                        <p className='text-white font-lato uppercase cursor-pointer'>{router.pathname.split('/')[1]}</p>

                        </div>
                    </div>
                    <ClassWiFi />
                </div>
            </div>
            <div className="relative container m-auto">
                <div className="section2 h-[100vh] flex">
                    <Reliable />
                </div>
            </div>
            <div className="relative container m-auto">
                <div className="section3 h-[100vh] flex">
                    <Secure />
                </div>
            </div>
            <div className="relative container m-auto">
                <div className="section4 h-[100vh] flex">
                    <Easy />
                </div>
            </div>
            <div className="relative">
                <div className="relative container m-auto">
                    <div className="section5 h-[100vh] flex items-end md:pb-20">
                        <Contact />
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Edu