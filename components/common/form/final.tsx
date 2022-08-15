import React, { FC, useContext, useRef, useState } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Form from './index'
import { StoreContext } from '../../../contexts/Store'
type FinalProps = {
    app: boolean
}

const Final: FC<FinalProps> = ({ app }) => {
    const { homeOption } = useContext(StoreContext)



    return (
        <FadeIn delay={0} transitionDuration={1000} className='leading-10'>
            <Form
                buttonType='border border-primary px-[70px] bg-primary-button text-white'
                buttonActive={true}
                bgImg='/images/phone-home.png'
                bgClassName='bottom-[-40%] w-[60%] right-[-30px]'
                width='sm:w-[90%]'
            >
                <div className='m-auto text-center relative'>
                    <p className='text-2xl py-[50px]'>Vielen Dank.</p>
                    {
                        app ? (
                            <>
                                <p>Wir melden uns bei Dir, <br />sobald deine Nodes versandt wurden.<br /><br />Das Setup erfolgt automatisch <br />über unsere App.</p>
                                <div className='pt-[150px] pb-[100px]'>
                                    <button className='py-[12px] rounded-lg cursor-pointer mt-5 px-[70px] bg-primary text-white relative z-10'>
                                        App herunterladen
                                    </button>
                                </div></>
                        ) : (
                            <p>Wir screenen Ihren Auftrag und melden uns umgehend bei Ihnen.</p>
                        )
                    }
                </div>
            </Form>
        </FadeIn>
    )
}

export default Final