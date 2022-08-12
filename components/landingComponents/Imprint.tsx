import React, {FC} from 'react'

import Footer from '../common/footer'

const Imprint: FC = () => {
    return (
        <>
            <div className='relative py-[100px] md:py-[100px] flex justify-center overflow-x-hidden'>
            <h1 className="text-title-sm">Impressum</h1>
            </div>
            <Footer />  
        </>
    )
}

export default Imprint
