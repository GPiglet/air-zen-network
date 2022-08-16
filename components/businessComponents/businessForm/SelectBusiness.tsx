import React, { FC, useContext } from 'react'
import FadeIn from 'react-fade-in'
import { useTranslation } from 'next-i18next'

import { StoreContext } from '../../../contexts/Store'

import Form from '../../common/form'


const SelectBusiness: FC = () => {
    //translate
    const { t } = useTranslation()

    const buttons = t('business.form.businesstype.buttons', { returnObjects: true })

    const { changeBusinessOption, changeStep } = useContext(StoreContext)
    let step = useContext(StoreContext).step

    type businessButtonType = {
        business: string,
        detail: string
    }

    const BusinessButton: FC<businessButtonType> = ({ business, detail }) => {
        return (
            <button className={`w-full bg-primary-button text-left text-white pl-[40px] py-[20px] float-right drop-shadow-lg tracking-[0.08em] mt-12 cursor-pointer`}>
                <h1 className='text-[22px] '>{business}</h1>
                <h2 className='text-lg'>{detail}</h2>
            </button>
        )
    }

    const changeBusiness = (business: string) => {
        const businessOption = {
            business: business.replace(/\s/g, '')
        }
        console.log(businessOption)
        changeBusinessOption?.(businessOption)
        changeStep?.(++step)
    }

    return (
        <FadeIn delay={0} transitionDuration={1000}>
            <Form
                width='w-[95%] md:w-[100%]'
            >
                <h1 className='text-[22px]'>Was ist Ihr Geschäftsfeld?</h1>
                {
                    (buttons as unknown as any[]).map((item, index) =>
                    (<div key={index} onClick={() => changeBusiness(item.type)}>
                        <BusinessButton
                            business={item.type}
                            detail={item.content}
                        />
                    </div>)
                    )
                }
            </Form>
        </FadeIn>
    )
}

export default SelectBusiness