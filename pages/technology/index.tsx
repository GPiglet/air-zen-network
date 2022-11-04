//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import Intro from '../../components/technologyComponents/Intro';
import Heading from '../../components/technologyComponents/Heading';
import Hardware from '../../components/technologyComponents/Hardware';
import Touchpoints from '../../components/technologyComponents/Touchpoints';
import Services from '../../components/technologyComponents/Services';
import OurNodes from '../../components/technologyComponents/OurNodes';
import RoadMap from '../../components/technologyComponents/RoadMap';
import CompanyHistory from '../../components/technologyComponents/CompanyHistory';
import WhitePaper from '../../components/technologyComponents/WhitePaper';
import OwnLayout from '../../layout/own';

const Technology: NextPage = () => {
    const { t } = useTranslation();
    const router = useRouter()
    return (
        <OwnLayout hasFooter={true} className='relative flex flex-col justify-center m-auto gap-20 md:gap-40'>
            <div className='z-0 absolute top-0 w-full h-[600px] overflow-hidden'>
                {/* top background */}
                <svg className='absolute bottom-[-10%] left-1/2 translate-x-[-50%] w-[990px]' viewBox="0 0 994 985" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M615.476 863.499C824.278 796.749 940.401 576.393 874.843 371.319C809.285 166.245 586.872 54.1116 378.07 120.861C169.268 187.611 53.1451 407.968 118.703 613.041C184.261 818.115 406.674 930.249 615.476 863.499Z" fill="url(#paint0_radial_5689_2335)"/>
                    <path opacity="0.5" d="M586.48 770.269C743.242 720.156 830.423 554.72 781.204 400.757C731.986 246.795 565.006 162.609 408.244 212.723C251.483 262.836 164.302 428.272 213.52 582.234C262.739 736.196 429.719 820.382 586.48 770.269Z" fill="url(#paint1_radial_5689_2335)"/>
                    <path d="M725.268 419.576C764.801 543.241 694.778 676.138 568.843 716.397C442.908 756.656 308.779 689.022 269.246 565.356C229.713 441.691 299.736 308.794 425.671 268.535C551.606 228.276 685.735 295.91 725.268 419.576Z" stroke="url(#paint2_linear_5689_2335)"/>
                    <defs>
                    <radialGradient id="paint0_radial_5689_2335" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(410.843 150.047) rotate(72.664) scale(785.805 800.092)">
                        <stop stopColor="#2294C3"/>
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_5689_2335" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(432.849 234.634) rotate(72.664) scale(589.955 600.681)">
                        <stop stopColor="#2294C3"/>
                        <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint2_linear_5689_2335" x1="425.518" y1="268.059" x2="568.995" y2="716.873" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#159BDE"/>
                        <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* Headline */}
            <div className='z-10 text-center text-white pt-[120px] md:pt-[200px]'>
                <p className="font-lato font-light tracking-widest text-xl mb-3">{t('technology.headline.subtitle')}</p>
                <h1 className="text-title-sm">{t('technology.headline.title')}</h1>
            </div>
            {/* Intro */}
            <Intro>
            <div className='flex flex-col xl:flex-row xl:gap-20 justify-center'>
                <Heading className='top-[-2rem]'>
                    <div className='absolute left-1/2 xl:left-[55%] translate-x-[-50%] top-[62%] xl:top-[46%] translate-y-[-50%] w-[280px] text-center xl:text-left text-white tracking-widest'>
                        <p className=''>{t('technology.intro.heading.title')}</p>
                        <p className='font-light'>{t('technology.intro.heading.subtitle')}</p>
                    </div>
                </Heading>
                <div className='flex flex-col md:flex-row gap-20 justify-center'>
                    <Hardware className='mt-[-2rem] md:mt-0'/>
                    <Touchpoints />
                    <Services />
                </div>
            </div>
            </Intro>
            {/* WhitePaper */}
            <WhitePaper className='my-10'/>
            {/* Our Nodes */}
            <OurNodes className='my-10'/>
            {/* history */}
            <CompanyHistory/>
            {/* roadmap */}
            <RoadMap/>     
        </OwnLayout>     
    )
}
export default Technology

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
