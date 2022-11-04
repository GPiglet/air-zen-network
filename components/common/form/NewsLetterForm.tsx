import React, {FC, useEffect, useState, useRef} from 'react'
import { useTranslation } from 'next-i18next';
import CustomCheckbox from '../widgets/checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';
import NewsletterApi from '../../../services/newsletter.service';
import CustomInput from '../widgets/input';
import SendButton from '../widgets/button/SendButton';

type NewsLetterFormProps = {
}

const NewsLetterForm :FC<NewsLetterFormProps> = () => {
  const { t } = useTranslation();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [dataProtection, setDataProtection] = useState(false);
  const [dataCollection, setDataCollection] = useState(false);
  const [captchaSolution, setCaptchaSolution] = useState<any>(null);

  const [validEmailAddress, setValidEmailAddress] = useState<boolean>(true);
  const [validDSGVOProtection, setValidDSGVOProtection] = useState<boolean>(true);
  const [validDSGVOCollection, setValidDSGVOCollection] = useState<boolean>(true);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const refEmailAddress = useRef<HTMLInputElement>(null);
  const refCaptcha = useRef<any>(null);

  const changeCheck = (type: string) => {
    switch (type) {
        case 'dataProtection':
            setDataProtection(!dataProtection);
            if ( !dataProtection ) setValidDSGVOProtection(true);
            else setValidDSGVOProtection(false);
            break;
        case 'dataCollection':
            setDataCollection(!dataCollection);
            if ( !dataCollection ) setValidDSGVOCollection(true);
            else setValidDSGVOCollection(false);
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

    if ( !dataProtection ) {
      setValidDSGVOProtection(false);
      return;
    }

    if ( !dataCollection ) {
      setValidDSGVOCollection(false);
      return;
    }

    if ( !captchaSolution ) return;

    setButtonDisabled(true);
    NewsletterApi.create(
      {
        emailAddress,
        captchaSolution,
      },
      (res: any) => {
        alert(t('landing.contact.successMessage'));
        setButtonDisabled(false);
        setEmailAddress('');
        refCaptcha.current.reset();
      },
      (err: any) => {
        alert(t('landing.contact.failedMessage'));
        setButtonDisabled(false);
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
      <p className={`text-left mb-2`}>{t('landing.contact.emailLabel')}</p>
      <CustomInput className="mb-5" ref={refEmailAddress} invalid={!validEmailAddress} value={emailAddress}
        placeholder={t('landing.contact.namePlaceholder')}
        onChange={(e: any)=>onChangeInput(e.target.value, setEmailAddress, setValidEmailAddress)}
      />
      <div className={`mb-4`}>
        <FriendlyCaptcha style="dark" widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone}/>
      </div>
      <div className='flex justify-between items-end mb-4'>
        <div className='relative ml-10 font-lato font-base'>
          { (!validDSGVOCollection || !validDSGVOProtection) ? 'Please check DSGVO.' : ''}
        </div>
        <SendButton title={t('landing.contact.send')} disabled={buttonDisabled} onClick={()=>onClickSend()} className='flex items-center justify-center text-lgx text-white button-gradient border-primary py-2 px-4 w-[120px] h-[42px] rounded-md border relative z-10' />
      </div>
      <div className={`relative top-5 ml-10 font-lato font-base`}>
        {t('landing.contact.DSGVOLabel')}
      </div>
      <div className='flex relative z-40'>
        <CustomCheckbox checked={dataProtection} valid={validDSGVOProtection} onClick={() => changeCheck('dataProtection')}>
          {t('landing.contact.description').split('\n')[0]}
          <a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
          {t('landing.contact.description').split('\n')[2]}
        </CustomCheckbox>
      </div>
      <div className='flex relative z-40'>
        <CustomCheckbox checked={dataCollection} valid={validDSGVOCollection} onClick={() => changeCheck('dataCollection')}>
          {t('landing.contact.description').split('\n')[3]}
        </CustomCheckbox>
      </div>
    </>
  );
};

export default NewsLetterForm;