//modules
import React, { FC, useState, useRef, useContext, MouseEvent } from 'react'
import { useTranslation } from 'next-i18next'
import { WhitePaperFormContext } from '../../../contexts/WhitePaperFormContext'
import CloseIcon from '../widgets/icons/CloseIcon';
import CustomInput from '../widgets/input';
import CustomCheckbox from '../widgets/checkbox';
import FriendlyCaptcha from '../FriendlyCaptcha';

type props = {
}

const WhitePaperForm: FC<props> = ({}) => {
	const { t } = useTranslation();
	const refScreen = useRef<HTMLDivElement>(null);
	const whitePaperFormContext = useContext(WhitePaperFormContext);
	const whitePaper = whitePaperFormContext.whitePaper;
	const [dataProtection, setDataProtection] = useState<boolean>(false);
    const [dataCollection, setDataCollection] = useState<boolean>(false);
	const [validDSGVO, setValidDSGVO] = useState<boolean>(true);
	const refCaptcha = useRef<any>(null);
	const [captchaSolution, setCaptchaSolution] = useState<any>(null);

	const onClickScreen = (e: MouseEvent) => {
		if ( e.target == refScreen.current ) whitePaperFormContext.showForm(false);
	}

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

	const onCaptchaReady = () => {
        setCaptchaSolution(null);
    }

    const onCaptchaDone = (solution: any) => {
        setCaptchaSolution(solution);
    }

	return (
		<div ref={refScreen} className={`${whitePaperFormContext.isShow ? '' : 'hidden'} z-100 fixed flex justify-center items-center w-screen h-screen backdrop-blur-[6px] backdrop-brightness-50`} onClick={(e)=>onClickScreen(e)}>
			<div className='relative flex gap-8 md:gap-10 flex-col max-w-[1220px] md:shadow md:shadow-white md:bg-black md:bg-opacity-60 w-full h-[90vh] md:h-fit overflow-y-auto p-8 md:px-16 md:py-10 text-white'>
				<CloseIcon color="#fff" className='fixed md:absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer' onClick={() => whitePaperFormContext.showForm(false)} />
				<div className='flex flex-col md:flex-row gap-8 md:gap-20'>
					<div className='w-[80%] md:w-1/3 h-fit'>
						<img src={`/images/${whitePaper?.image}`} className='shadow shadow-white'/>
					</div>
					<div>
						<p className='font-bold text-[20px] md:text-[30px]'>{whitePaper?.heading}</p>
						<p className='text-[20px] md:text-[30px] mb-4 md:mb-8'>{whitePaper?.title}</p>
						<p>{whitePaper?.description}</p>
					</div>
				</div>
				<div>
					<div className='flex flex-col md:flex-row md:gap-10'>
						<CustomInput placeholder="Firmenname (optional)" className="max-w-[300px] mb-5"/>
						<CustomInput placeholder="Ihre-Email" className="max-w-[300px] mb-5"/>
					</div>
					<div className='flex flex-col md:flex-row gap-5 md:gap-10'>
						<CustomInput placeholder="Vorname" className="max-w-[300px]"/>
						<CustomInput placeholder="Nachname" className="max-w-[300px]"/>
					</div>
				</div>
				<div className='flex flex-col gap-4 w-full md:w-[80%]'>
					<div className={`relative top-[0.25rem] ml-10 font-lato font-base ${validDSGVO ? '' : 'text-red-300'}`}>
						{t('landing.contact.DSGVOLabel')}
					</div>
					<div className='flex gap-4'>
						<div className='mt-2'>
							<CustomCheckbox checked={dataProtection} onClick={() => changeCheck('dataProtection')} />
						</div>
						<p className='font-lato font-light text-left text-sm text-white tracking-[2px]'>
							{t('landing.contact.description').split('\n')[0]}
							<a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
							{t('landing.contact.description').split('\n')[2]}
						</p>
					</div>
					<div className='flex gap-4'>
						<div className='mt-1'>
							<CustomCheckbox checked={dataCollection} onClick={() => changeCheck('dataCollection')} />
						</div>
						<p className='font-lato font-light text-left text-sm text-white tracking-[2px]'>
							{t('landing.contact.description').split('\n')[3]}
						</p>
					</div>
					<FriendlyCaptcha widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone} style="dark"/>
				</div>
				<div className='text-center'>
					<button className='bg-white border border-[#01ACE6] rounded-[32px] text-center px-12 py-3 text-black/70 uppercase'>
						PDF erhalten
					</button>
				</div>
			</div>
		</div>
	)
}

export default WhitePaperForm
