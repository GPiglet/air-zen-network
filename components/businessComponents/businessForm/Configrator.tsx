import React, { FC, useRef, useState, useContext, useEffect, createRef } from 'react'
import { useTranslation } from 'next-i18next'
import FadeIn from 'react-fade-in/lib/FadeIn'
import Collapse from "@kunukn/react-collapse"

import { StoreContext } from '../../../contexts/Store'
import Form from '../../common/form'

const Configrator: FC = () => {
    //translate
    const { t } = useTranslation()

    const [active, setActive] = useState(false)
    const { changeBusinessOption } = useContext(StoreContext)
    const businessOption = useContext(StoreContext).businessOption
    const roomRefs = useRef<any>([])
    roomRefs.current = businessOption?.location?.map((_, i) => roomRefs.current[i] ?? createRef())

    useEffect(() => {
        if (businessOption?.location?.length) {
            setActive(true)
        }
    }, [businessOption?.location])
    const testValue = (i: number) => {
        const roomSize = Number(roomRefs.current[i].current.value)
        let node = null
        if (roomSize <= 180) {
            node = 3
        } else {
            node = Math.ceil(roomSize / 60)
        }
        if (roomSize) {
            setActive(true)
            Object.assign(businessOption?.location?.[i]!, { roomSize, node });
            changeBusinessOption?.({ location: businessOption?.location! })

        } else {
            setActive(false)
        }
    }

    const addLocation = () => {
        console.log('dfdf')
        businessOption?.location?.push({})
        changeBusinessOption?.({ location: businessOption?.location! })


    }

    const removeLocation = (index: number) => {
        console.log('object');
        // delete businessOption?.location?.[index]
        businessOption?.location?.splice(index, 1)
        changeBusinessOption?.({ location: businessOption?.location! })

    }

    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <Form
                buttonType='px-[70px] bg-primary-button text-white'
                buttonActive={active}
                breadcrumb={t('home.form.step2.breadcrumb') + ` / ${businessOption?.business}`}
                buttonString={t('home.form.step2.button')}
                width='sm:w-[80%]'
            >
                <div className='pb-10'>
                    {
                        (businessOption?.location?.length === 1 && !businessOption?.location?.[1]) ? (
                            businessOption?.location?.map((item, i) => (
                                <div key={i}>
                                    <div className="sm:flex items-center">
                                        <p>{t('home.form.step2.roomSize').split('\n')[0]}</p>
                                        <input placeholder='z.B. 80' className='custom-input w-[50%] sm:w-[23%] text-inputColor mx-2 text-center' ref={roomRefs.current[i]} onChange={() => testValue(i)} defaultValue={item.roomSize} />
                                        <span>{t('home.form.step2.roomSize').split('\n')[1]}</span>
                                    </div>
                                    <div className="sm:flex items-center mt-7">
                                        <p>{t('home.form.step2.node').split('\n')[0]}</p>
                                        <input className='custom-input w-[30%] sm:w-[20%] text-slate-400 mx-2 text-center' value={item.node} readOnly />
                                        <span> {t('home.form.step2.node').split('\n')[1]}</span>
                                    </div>
                                </div>

                            ))
                        ) : (
                            businessOption?.location?.map((item, index) => (
                                <div key={index} className='py-5' >
                                    <div className="flex items-center relative  locaton-edit" tabIndex={index} >
                                        <picture className='mr-5 cursor-pointer'>
                                            <source src="/images/primary-plus.svg" />
                                            <img src="/images/primary-plus.svg" alt="" />
                                        </picture>
                                        <picture className='mr-5 absolute top-0 right-0 md:right-[-20%] cursor-pointer' onClick={() => removeLocation(index)}>
                                            <source src="/images/multiple.svg" />
                                            <img src="/images/multiple.svg" alt="" />
                                        </picture>
                                        <p>Location {index + 1}<span className='ml-5 text-gray-400'>{(item.roomSize ? item.roomSize + ', ' : '') + (item.node ? item.node : '')}</span></p>
                                    </div>
                                    <div className="flex items-center pl-16 pt-5 location-edit-item">
                                        <p>{t('business.form.configrator.surface')}:</p>
                                        <input placeholder='z.B. 80' className='custom-input w-[50%] sm:w-[27%] text-inputColor mx-2 text-center' ref={roomRefs.current[index]} onChange={() => testValue(index)} defaultValue={item.roomSize} />
                                        <span>m<sup>2</sup></span>
                                    </div>
                                    <div className="flex items-center mt-5 pl-16 location-edit-item">
                                        <p>Nodes:</p>
                                        <input className='custom-input w-[50%] sm:w-[27%] text-slate-400 mx-2 text-center' value={item.node} readOnly />
                                    </div>

                                </div>

                            ))
                        )
                    }
                    <Collapse isOpen={true}>

                        <div className={`using-collapse-state-to-add-css-class `}>
                            <p>I know the collapse state:</p>
                        </div>

                    </Collapse>
                    <div className="flex items-center pt-10 cursor-pointer add" >
                        <picture className='mr-5' onClick={() => addLocation()} >
                            <source src="/images/primary-plus.svg" />
                            <img src="/images/primary-plus.svg" alt="" />
                        </picture>
                        <p>Location hinzufügen</p>
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

export default Configrator