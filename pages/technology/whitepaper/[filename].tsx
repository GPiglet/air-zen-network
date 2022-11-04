//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import path from 'path';
import { promises as fs } from 'fs';

import OwnLayout from '../../../layout/own';
import CloseIcon from '../../../components/common/widgets/icons/CloseIcon';
import CustomInput from '../../../components/common/widgets/input';
import CustomCheckbox from '../../../components/common/widgets/checkbox';
import FriendlyCaptcha from '../../../components/common/FriendlyCaptcha';

const WhitePaper: NextPage = (props:any) => {
    const { t } = useTranslation();
    const router = useRouter()
    const whitepaper = props.whitepaper;

    const [dataProtection, setDataProtection] = useState<boolean>(false);
    const [dataCollection, setDataCollection] = useState<boolean>(false);
    
    const [validDSGVOProtection, setValidDSGVOProtection] = useState<boolean>(true);
    const [validDSGVOCollection, setValidDSGVOCollection] = useState<boolean>(true);

    const refCaptcha = useRef<any>(null);
    const [captchaSolution, setCaptchaSolution] = useState<any>(null);

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
    const onCaptchaReady = () => {
        setCaptchaSolution(null);
    }
    
    const onCaptchaDone = (solution: any) => {
        setCaptchaSolution(solution);
    }
    return (
        <OwnLayout hasFooter={false} className='relative flex flex-col items-center mx-auto pt-[6rem] md:pt-[12rem]'>
            <div className='relative flex gap-8 md:gap-10 flex-col max-w-[1220px] w-full p-8 md:px-16 md:py-10 text-white'>
                {/* <CloseIcon color="#fff" className='absolute right-4 top-8 md:right-10 md:top-10 cursor-pointer' onClick={() => router.back()} /> */}
                <div className='flex flex-col md:flex-row gap-8 md:gap-20'>
                    <div className='w-[80%] md:w-1/3 h-fit'>
                    <img src={`/images/${whitepaper?.image}`} className='shadow shadow-white'/>
                    </div>
                    <div>
                    <p className='font-bold text-[20px] md:text-[30px]'>{whitepaper?.heading}</p>
                    <p className='text-[20px] md:text-[30px] mb-4 md:mb-8'>{whitepaper?.title}</p>
                    <p>{whitepaper?.description}</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col md:flex-row md:gap-10'>
                    <CustomInput placeholder="Firmenname (optional)" className="max-w-[500px] mb-5"/>
                    <CustomInput placeholder="Ihre-Email" className="max-w-[500px] mb-5"/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                    <CustomInput placeholder="Vorname" className="max-w-[500px]"/>
                    <CustomInput placeholder="Nachname" className="max-w-[500px]"/>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <div className={`relative top-[0.25rem] ml-10 font-lato font-base`}>
                    {t('landing.contact.DSGVOLabel')}
                    </div>
                    <div className='flex gap-4'>
                        <CustomCheckbox checked={dataProtection} valid={validDSGVOProtection} onClick={() => changeCheck('dataProtection')}>
                            {t('landing.contact.description').split('\n')[0]}
                            <a target="blank" href={t('landing.contact.href')} className="underline text-base">{t('landing.contact.description').split('\n')[1]}</a>
                            {t('landing.contact.description').split('\n')[2]}
                        </CustomCheckbox>
                    </div>
                    <div className='flex gap-4'>
                        <CustomCheckbox checked={dataCollection} valid={validDSGVOCollection} onClick={() => changeCheck('dataCollection')}>
                            {t('landing.contact.description').split('\n')[3]}
                        </CustomCheckbox>
                    </div>
                    <FriendlyCaptcha widgetRef={refCaptcha} onReady={onCaptchaReady} onDone={onCaptchaDone} style="dark"/>
                </div>
                <div className='text-center'>
                    <button className='bg-white border border-[#01ACE6] rounded-[32px] text-center px-12 py-3 text-black/70 uppercase'>
                        PDF erhalten
                    </button>
                </div>
            </div>
        </OwnLayout>
    )
}
export default WhitePaper

export async function getStaticPaths() {
    const whitepaperPath = path.join(process.cwd(), 'public/whitepapers');
    const locales = await fs.readdir(whitepaperPath);
    const paths: any = [];
    await Promise.all(locales.map( async locale => {
        const files = await fs.readdir(path.join(whitepaperPath, locale));
        paths.push(...files.map(file => {
            return {params: {filename: file.substring(0, file.length-5)}, locale};
        }))
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const filePath = path.join(process.cwd(), 'public/whitepapers/', locale||'', params?.filename + '.json');
  const whitepaper = JSON.parse(await fs.readFile(filePath, 'utf8'));
  return {
    props: {
      whitepaper,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
