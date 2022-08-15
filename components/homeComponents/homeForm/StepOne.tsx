import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'

import Form from '../../common/form'

const StepOne: FC = () => {
    //translate
    const { t } = useTranslation()

    return (
        <div>
            <Form
                buttonType='border border-primary pl-5 pr-12'
                buttonActive={true}
                buttonString={t('home.form.step1.button')}
                width='sm:w-[80%]'
            >
                <h1 className='text-[22px] uppercase w-1/2 '>{t('home.form.step1.title')}</h1>
                <p className='text-lg mt-2 tracking-widest'> {t('home.form.step1.description')}</p>

            </Form>
        </div>
    )
}

export default StepOne