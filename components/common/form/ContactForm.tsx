import React, {FC, useEffect, useState, useRef} from 'react'
import { useTranslation } from 'next-i18next';
import CustomCheckbox from '../widgets/checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';
import ContactApi from '../../../services/contact.service';
import SendButton from '../widgets/button/SendButton';
import CustomInput from '../widgets/input';

type ContactFormProps = {
}

const ContactForm :FC<ContactFormProps> = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [captchaSolution, setCaptchaSolution] = useState<any>(null);

  const [dataProtection, setDataProtection] = useState<boolean>(false);
  const [dataCollection, setDataCollection] = useState<boolean>(false);

  const [validUsername, setValidUsername] = useState<boolean>(true);
  const [validEmailAddress, setValidEmailAddress] = useState<boolean>(true);
  const [validDSGVOProtection, setValidDSGVOProtection] = useState<boolean>(true);
  const [validDSGVOCollection, setValidDSGVOCollection] = useState<boolean>(true);
  const [autoSend, setAutoSend] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const refUsername = useRef<HTMLInputElement>(null);
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
    if ( !captchaSolution && refCaptcha.current ) {
      refCaptcha.current.start();      
    }

    if ( !username.trim() ) {
      setValidUsername(false);
      refUsername.current?.focus();
      return;
    }

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

    if ( !captchaSolution ) {
      setAutoSend(true);
      return;
    }

    setButtonDisabled(true);

    ContactApi.create(
      {
        username,
        emailAddress,
        description,
        captchaSolution,
      },
      (res: any) => {
        setButtonDisabled(false);
        alert(t('landing.contact.successMessage'));
        setUsername('');
        setEmailAddress('');
        setDescription('');
        refCaptcha.current.reset();
      },
      (err: any) => {
        setButtonDisabled(false);
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
  
  useEffect(() => {
    if ( autoSend ) {
      onClickSend();
      setAutoSend(false);
    }
  }, [captchaSolution])

  return (
    <>
      <p className='text-left mt-5 mb-2'>{t('landing.contact.nameLabel')}</p>
      <CustomInput className="mb-5" ref={refUsername} invalid={!validUsername} value={username}
        placeholder={t('landing.contact.namePlaceholder')}
        onChange={(e:any)=>onChangeInput(e.target.value, setUsername, setValidUsername)}
      />
      <p className='text-left mb-2'>{t('landing.contact.emailLabel')}</p>
      <CustomInput className="mb-5" ref={refEmailAddress} invalid={!validEmailAddress} value={emailAddress}
        placeholder={t('landing.contact.emailPlaceholder')}
        onChange={(e: any)=>onChangeInput(e.target.value, setEmailAddress, setValidEmailAddress)}
      />
      <div className='custom-input-gradient w-full mb-5 relative z-10'>
          <textarea
              rows={3}
              className="custom-input-dark text-left w-full "
              placeholder={t('landing.contact.descPlaceholder')}
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
          />
      </div>
      <div className={`mb-4`}>
        <FriendlyCaptcha style="dark" widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone}/>
      </div>
      <div className='flex justify-between items-end mb-4'>
          <div className='relative ml-10 font-lato font-base'>
            { (!validDSGVOCollection || !validDSGVOProtection) ? 'Please check DSGVO.' : ''}
          </div>
          <SendButton title={t('landing.contact.send')} disabled={buttonDisabled} onClick={()=>onClickSend()} className='flex items-center justify-center text-lgx text-white button-gradient border-primary py-2 px-4 w-[120px] h-[42px] rounded-md border relative z-10'/>
      </div>
      <div className='flex ml-10'>
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

export default ContactForm;