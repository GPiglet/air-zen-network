import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

const Breadcrumb: FC = () => {

    const router = useRouter()

    return (
        <div className='container relative z-20 m-auto hidden md:block' >
            <div className='flex items-center w-fit' onClick={() => router.push({
                pathname: '/landing',
                query: { section: 'solutions' }
            })}>
                <picture>
                    <source srcSet="/images/left-arrow.svg" type="image/webp" />
                    <img src="/images/left-arrow.svg" className='w-[14px] h-[26px] mr-2 cursor-pointer' alt="" />
                </picture>
                <p className='text-white font-lato uppercase cursor-pointer'>{router.pathname.split('/')[1]}</p>

            </div>
        </div>
    )
}

export default Breadcrumb