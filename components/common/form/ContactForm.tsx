import React, {FC, useEffect, useState, useRef} from 'react'
import { useTranslation } from 'next-i18next';
import CustomCheckbox from '../checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';
import ContactApi from '../../../services/contact.service';

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
  const [validDSGVO, setValidDSGVO] = useState<boolean>(true);
  const [autoSend, setAutoSend] = useState<boolean>(false);

  const refUsername = useRef<HTMLInputElement>(null);
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

    if ( !dataCollection || !dataProtection ) {
      setValidDSGVO(false);
      return;
    }

    if ( !captchaSolution ) {
      setAutoSend(true);
      return;
    }

    ContactApi.create(
      {
        username,
        emailAddress,
        description,
        captchaSolution,
      },
      (res: any) => {
        alert(t('landing.contact.successMessage'));
        setUsername('');
        setEmailAddress('');
        setDescription('');
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
  
  useEffect(() => {
    if ( autoSend ) {
      onClickSend();
      setAutoSend(false);
    }
  }, [captchaSolution])

  return (
    <>
      <p className={`text-left ${validUsername ? 'text-slate-300' : 'text-red-300'} mt-5 mb-2`}>{t('landing.contact.nameLabel')}</p>
      <div className='custom-input-gradient w-full mb-5'>
          <input
              ref={refUsername}
              className="custom-input-dark text-left w-full"
              placeholder={t('landing.contact.namePlaceholder')}
              value={username}
              onChange={(e)=>onChangeInput(e.target.value, setUsername, setValidUsername)}
          />
      </div>
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
          <div className={`relative top-5 ml-10 font-lato font-base ${validDSGVO ? '' : 'text-red-300'}`}>
          {t('landing.contact.DSGVOLabel')}
          </div>
          <button className={`text-lgx text-white button-gradient border-primary py-2 px-8 rounded-md border relative z-10`} onClick={()=>onClickSend()}>
              {t('landing.contact.send')}
          </button>
      </div>
      <div className='flex relative z-40'>
          <div className='mt-5 mr-3'>
              <CustomCheckbox checked={dataProtection} onClick={() => changeCheck('dataProtection')} />
          </div>
          <p className='font-lato font-light text-left text-sm text-white tracking-[2px] my-4'>
              {t('landing.contact.description').split('\n')[0]}
              <a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
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

export default ContactForm;