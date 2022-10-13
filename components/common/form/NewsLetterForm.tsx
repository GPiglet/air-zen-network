import React, {FC, useEffect, useState, useRef} from 'react'
import { useTranslation } from 'next-i18next';
import CustomCheckbox from '../checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';
import NewsletterApi from '../../../services/newsletter.service';

type NewsLetterFormProps = {
}

const NewsLetterForm :FC<NewsLetterFormProps> = () => {
  const { t } = useTranslation();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [dataProtection, setDataProtection] = useState(false);
  const [dataCollection, setDataCollection] = useState(false);
  const [captchaSolution, setCaptchaSolution] = useState<any>(null);

  const [validEmailAddress, setValidEmailAddress] = useState<boolean>(true);
  const [validDSGVO, setValidDSGVO] = useState<boolean>(true);

  const refEmailAddress = useRef<HTMLInputElement>(null);
  const refCaptcha = useRef<any>(null);

  const changeCheck = (type: string) => {
    switch (type) {
        case 'dataProtection':
            setDataProtection(!dataProtection);
            if ( !dataProtection && dataCollection ) setValidDSGVO(true);
            else setValidDSGVO(false);
            break;
        case 'dataCollection':
            setDataCollection(!dataCollection);
            if ( dataProtection && !dataCollection ) setValidDSGVO(true);
            else setValidDSGVO(false);
            break;

        default:
            break;
    }
  }

  // onchange input
  const onChangeInput = (value:string, setValue: (value: string)=>void, setValid: (valid: boolean)=>void) => {
    if ( value.trim() )
      setValid(true);
    else
      setValid(false);

    setValue(value);
  }

  //onclick send
  const onClickSend = () => {
    if ( !captchaSolution && refCaptcha.current ) refCaptcha.current.start();

    if ( !emailAddress.trim() ) {
      setValidEmailAddress(false);
      refEmailAddress.current?.focus();
      return;
    }

    if ( !dataCollection || !dataProtection ) {
      setValidDSGVO(false);
      return;
    }

    if ( !captchaSolution ) return;

    NewsletterApi.create(
      {
        emailAddress,
        captchaSolution,
      },
      (res: any) => {
        alert(t('landing.contact.successMessage'));
        setEmailAddress('');
        refCaptcha.current.reset();
      },
      (err: any) => {
        alert(t('landing.contact.failedMessage'));
      }
    )
  }

  const onCaptchaReady = () => {
    setCaptchaSolution(null);
  }

  const onCaptchaDone = (solution: any) => {
    setCaptchaSolution(solution);
  }

  return (
    <>
      <p className={`text-left ${validEmailAddress ? 'text-slate-300' : 'text-red-300'} mb-2`}>{t('landing.contact.emailLabel')}</p>
      <div className='custom-input-gradient w-full mb-5'>
          <input
              ref={refEmailAddress}
              className="custom-input-dark text-left w-full "
              placeholder={t('landing.contact.emailPlaceholder')}
              type="email"
              value={emailAddress}
              onChange={(e)=>onChangeInput(e.target.value, setEmailAddress, setValidEmailAddress)}
          />
      </div>
      <div className={`mb-4`}>
        <FriendlyCaptcha style="dark" widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone}/>
      </div>
      <div className='flex justify-between items-end mb-4'>
          <div className={`relative top-5 ml-10 font-lato font-base ${validDSGVO ? '' : 'text-red-300'}`}>
          {t('landing.contact.DSGVOLabel')}
          </div>
          <button className='text-lgx text-white button-gradient py-2 px-8 rounded-md border border-primary relative z-10' onClick={()=>onClickSend()}>
              {t('landing.contact.send')}
          </button>
      </div>
      <div className='flex relative z-40'>
          <div className='mt-5 mr-3'>
              <CustomCheckbox checked={dataProtection} onClick={() => changeCheck('dataProtection')} />
          </div>
          <p className='font-lato font-light text-left text-sm text-white tracking-[2px] my-4'>
              {t('landing.contact.description').split('\n')[0]}
              <a href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
              {t('landing.contact.description').split('\n')[2]}
          </p>
      </div>
      <div className='flex relative z-40'>
          <div className='mt-5 mr-3'>
              <CustomCheckbox checked={dataCollection} onClick={() => changeCheck('dataCollection')} />
          </div>
          <p className='font-lato font-light text-left text-sm text-white tracking-[2px] my-4'>
              {t('landing.contact.description').split('\n')[3]}
          </p>
      </div>
    </>
  );
};

export default NewsLetterForm;