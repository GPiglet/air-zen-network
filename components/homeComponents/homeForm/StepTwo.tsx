import React, { FC, useRef, useState, useContext, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { StoreContext } from '../../../contexts/Store'
import Form from '../../common/form'

const StepTwo: FC = () => {
    //translate
    const { t } = useTranslation()
    //translate
    const { t } = useTranslation()

    const [active, setActive] = useState(false)
    const { homeOption, changeHomeOption } = useContext(StoreContext)
    const roomRef = useRef<any>();
    const nodeRef = useRef<any>();

    useEffect(() => {
        if (homeOption?.roomSize && homeOption.node) {
            setActive(true)
        }
    }, [])
    const testValue = () => {
        const roomSize = Number(roomRef.current.value)
        const node = Number(nodeRef.current.value)
        if (roomSize && node) {
            setActive(true)
            var option = {
                roomSize,
                node
            }
            changeHomeOption?.(option)

        } else {
            setActive(false)
        }
    }

    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <Form
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={active}
                breadcrumb={t('home.form.step2.breadcrumb')}
                buttonString={t('home.form.step2.button')}
                width='sm:w-[80%]'
            >
                <div className='pb-10 flex items-center'>
                    <div>
                        <div className="sm:flex items-center">
                            <p>{t('home.form.step2.roomSize').split('\n')[0]}</p>
                            <input placeholder='z.B. 80' className='custom-input w-[50%] sm:w-[23%] text-inputColor mx-2' ref={roomRef} onChange={() => testValue()} defaultValue={homeOption?.roomSize} />
                            <span>{t('home.form.step2.roomSize').split('\n')[1]}</span>
                        </div>
                        <div className="sm:flex items-center mt-7">
                            <p>{t('home.form.step2.node').split('\n')[0]}</p>
                            <input placeholder='4' className='custom-input w-[30%] sm:w-[20%] text-inputColor mx-2' ref={nodeRef} onChange={() => testValue()} defaultValue={homeOption?.node} />
                            <span> {t('home.form.step2.node').split('\n')[1]}</span>
                        </div>
                    </div>
                </div>
                {
                    t('home.form.step2.description').split('\n').map((item, index) =>
                        <p className='text-lg mt-2 tracking-widest text-gray-500' key={index}> {item}</p>

                    )
                }
            </Form>
        </FadeIn>
    )
}

export default StepTwo