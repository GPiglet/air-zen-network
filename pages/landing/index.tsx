//modules
import React, { FC } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useRouter } from "next/router";

//custom Components
import Mainlayout from '../../layout/main'
import Hero from '../../components/landingComponents/Hero'
import UniqueSkill from '../../components/landingComponents/UniqueSkill'
import AboutUs from '../../components/landingComponents/AboutUs'
import Credential from '../../components/landingComponents/Credential'
import Contact from '../../components/landingComponents/Contact'

const Homepage: NextPage = () => {
	//translate
	const { t } = useTranslation()

	// animation

	const refSectionHero = React.useRef<any>(null);
	const refSectionUnequeSkill = React.useRef<any>(null);
	const refSectionAboutUs = React.useRef<any>(null);
	const refSectionCredential = React.useRef<any>(null);
	const refSectionContact = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionHero,
		refSectionUnequeSkill,
		refSectionAboutUs,
		refSectionCredential,
		refSectionContact
	];

	const navItems: Array<any> = [
		{
			id: 1,
			title: t('landing.menu').split('\n')[0],
			href: 'solutions'
		},
		{
			id: 2,
			title: t('landing.menu').split('\n')[1],
			href: 'aboutus'
		},
		{
			id: 3,
			title: t('landing.menu').split('\n')[2],
			href: 'credentials'
		},
		{
			id: 4,
			title: t('landing.menu').split('\n')[3],
			href: 'cantact'
		},
	]

	const router = useRouter();
	
	const currentSection = React.useRef<any>(null);
	const gotoScene = (name: string) => {
		if ( window.innerWidth < 920 ) return;
		let direction: string = 'DOWN', index: number = 0;
		switch( name ) {
			case '':	// hero
				if ( currentSection.current == refSections[0] ) return;
				index = 0;
				direction = 'UP';
				break;

			case navItems[0].href:
				if ( currentSection.current == refSections[1] ) return;
				if ( refSections.indexOf(currentSection.current) > 1 ) direction = 'UP';
				else direction = 'DOWN';
				index = 1;
				break;

			case navItems[1].href:
				if ( currentSection.current == refSections[2] ) return;
				if ( refSections.indexOf(currentSection.current) > 2 ) direction = 'UP';
				else direction = 'DOWN';
				index = 2;
				break;

			case navItems[2].href:
				if ( currentSection.current == refSections[3] ) return;
				if ( refSections.indexOf(currentSection.current) > 3 ) direction = 'UP';
				else direction = 'DOWN';
				index = 3;
				break;

			case navItems[3].href:
				if ( currentSection.current == refSections[4] ) return;
				if ( refSections.indexOf(currentSection.current) > 4 ) direction = 'UP';
				else direction = 'DOWN';
				index = 4;
				break;
		}

		if ( currentSection.current && currentSection.current.current?.startAnim ) currentSection.current.current?.startAnim(direction, false);
		currentSection.current = refSections[index];
		if ( currentSection.current && currentSection.current.current?.startAnim ) currentSection.current.current?.startAnim(direction, true);
	}

	const onKeyDown = (e: KeyboardEvent) => {
		if ( window.innerWidth < 920 ) return;
		let index = 0;
		switch( e.key ) {
			case 'ArrowDown':
			case 'PageDown':
				index = refSections.indexOf(currentSection.current) + 1;
				if ( index >= refSections.length ) return;
				break;

			case 'ArrowUp':
			case 'PageUp':
				index = refSections.indexOf(currentSection.current) - 1;
				if ( index < 0 ) return;
				break;
			default:
				return;
		}

		if ( index == 0 ) {
			router.push({
				pathname: '/landing',
			})
		}
		else {
			router.push({
				pathname: '/landing',
				query: {section: navItems[index-1].href}
			})
		}

	}

	React.useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin);
		// window.addEventListener('keydown', onKeyDown);
		// return ()=>{
		// 	window.removeEventListener('keydown', onKeyDown);
		// }	
	}, [])

	React.useEffect(() => {
		const sectionPos = router.asPath.indexOf('?section=');
		if (  sectionPos != -1 ) router.query.section = router.asPath.substring(sectionPos+9);
		if ( router.asPath == router.route || router.query.section ) gotoScene(router.query.section?.toString() || '');
	}, [router])

	return (
		<div className='back-left-top-gradient-primary overflow-x-hidden'>
			<Mainlayout navItems={navItems} hasFooter={false}>
				<Hero ref={refSectionHero}/>
				<UniqueSkill ref={refSectionUnequeSkill}/>
				<AboutUs ref={refSectionAboutUs}/>
				<Credential ref={refSectionCredential}/>
				<Contact ref={refSectionContact}/>
			</Mainlayout>
			{/* <div className='hidden md:block w-[100vw] h-[100vh]'></div> */}
		</div>
	)
}

export default Homepage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
