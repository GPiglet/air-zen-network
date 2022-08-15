import React, { FC, useRef, useState, useContext, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'

import Form from '../../common/form'
import { StoreContext } from '../../../contexts/Store'

const StepThree: FC = () => {
    //translate
    const { t } = useTranslation()
    //translate
    const { t } = useTranslation()

    const [active, setActive] = useState(false)
    const monthRef = useRef<any>();
    const { homeOption, changeHomeOption } = useContext(StoreContext)
    useEffect(() => {
        if (homeOption?.contractTerm) {
            setActive(true)
        }
        console.log(homeOption?.contractTerm, '-------')
    }, [])

    const testValue = () => {
        if (monthRef.current.value) {
            setActive(true)
            const option = {
                contractTerm: Number(monthRef.current.value),
                monthPay: 68
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
                breadcrumb={t('home.form.step3.breadcrumb')}
                buttonString={t('home.form.step3.button')}
                width='sm:w-[80%]'
            >
                <div className='pb-10 flex items-center'>
                    <div>
                        <div className="sm:flex items-center">
                            <p>{t('home.form.step3.month').split('\n')[0]}</p>
                            <select name="months" data-native-menu={false} className='custom-input w-[50%] sm:w-[22%] text-center text-inputColor mx-2' ref={monthRef} onChange={() => testValue()} defaultValue={homeOption?.contractTerm}>
                                <option value={undefined} className='text-gray-500' disabled hidden>3-60</option>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="60">60</option>
                            </select>
                            <span>{t('home.form.step3.month').split('\n')[1]}</span>
                        </div>
                        <div className="sm:flex items-center mt-7">
                            <p>{t('home.form.step3.price').split('\n')[0]}</p>
                            <input placeholder='z.B. monatlich' className='text-center custom-input w-[60%] sm:w-[40%] text-inputColor mx-2' value='68€ monatlich' disabled={true} />
                            <span> {t('home.form.step3.price').split('\n')[1]}</span>
                        </div>
                    </div>
                </div>
                {
                    t('home.form.step3').split('\n').map((item, index) =>
                        <p className='text-lg mt-2 tracking-widest text-gray-500' key={index}> {item}</p>
                    )
                }
            </Form>
        </FadeIn>
    )
}

export default StepThree