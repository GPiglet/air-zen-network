import React, {FC, useEffect, useState} from 'react'
import { useTranslation } from 'next-i18next';
import CustomCheckbox from '../checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';

type NewsLetterFormProps = {
}

const NewsLetterForm :FC<NewsLetterFormProps> = () => {
  const { t } = useTranslation();
  const [dataProtection, setDataProtection] = useState(false)
  const [dataCollection, setDataCollection] = useState(false)

  const changeCheck = (type: string) => {
    switch (type) {
        case 'dataProtection':
            setDataProtection(!dataProtection)
            break;
        case 'dataCollection':
            setDataCollection(!dataCollection)
            break;

        default:
            break;
    }
  }

  return (
    <>
      <p className='text-left text-slate-300 mb-2'>Email Address</p>
      <div className='custom-input-gradient w-full mb-5'>
          <input
              className="custom-input-dark text-left w-full "
              placeholder='Vorname Nachname'
              type="email"
          />
      </div>
      <FriendlyCaptcha />
      <div className='flex justify-between items-end mb-4'>
          <div className='relative top-5 ml-10 font-lato font-base'>
              DSGVO
          </div>
          <button className='text-lgx text-white button-gradient py-2 px-8 rounded-md border border-primary relative z-10'>
              {t('landing.contact.send')}
          </button>
      </div>
      <div className='flex relative z-40'>
          <div className='mt-5 mr-3'>
              <CustomCheckbox checked={dataProtection} onClick={() => changeCheck('dataProtection')} />
          </div>
          <p className='font-lato font-light text-left text-base text-white tracking-[2px] my-4'>
              {t('landing.contact.description').split('\n')[0]}
              <a href={t('landing.contact.href')} className="underline text-[1.125rem]">{t('landing.contact.description').split('\n')[1]}</a>
              {t('landing.contact.description').split('\n')[2]}
          </p>
      </div>
      <div className='flex relative z-40'>
          <div className='mt-5 mr-3'>
              <CustomCheckbox checked={dataCollection} onClick={() => changeCheck('dataCollection')} />
          </div>
          <p className='font-lato font-light text-left text-base text-white tracking-[2px] my-4'>
              {t('landing.contact.description').split('\n')[3]}
              {dataCollection}

          </p>
      </div>
    </>
  );
};

export default NewsLetterForm;