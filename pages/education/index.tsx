//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import gsap from "gsap";

//custom Components
import Mainlayout from '../../layout/main'
import ClassWiFi from '../../components/educationComponents/ClassWiFi'
import Reliable from '../../components/educationComponents/Reliable'
import Secure from '../../components/educationComponents/Secure'
import Easy from '../../components/educationComponents/Easy'
import Contact from '../../components/educationComponents/Contact'
import ContactForm from '../../components/common/form/ContactForm'
import AnimateFooter from '../../components/common/footer/AnimateFooter'




const Education: NextPage = () => {
	const { t } = useTranslation()


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

	const refSectionClassWifi = React.useRef<any>(null);
	const refSectionReliable = React.useRef<any>(null);
	const refSectionSecure = React.useRef<any>(null);
	const refSectionEasy = React.useRef<any>(null);
	const refSectionContact = React.useRef<any>(null);
	const refSectionFooter = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionClassWifi,
		refSectionReliable,
		refSectionSecure,
		refSectionEasy,
		refSectionContact,
		refSectionFooter
	];


	const currentSectionIndex = React.useRef<number>(-1);
	const gotoScene = (index: number) => {
		if ( window.innerWidth < 920 ) return;
		let direction: string = 'DOWN';
		let currentIndex = currentSectionIndex.current;
		if ( currentIndex > index ) direction = 'UP';

		refSections.forEach(section=>gsap.set(section.current.container, {zIndex: 10}));

		if ( currentIndex != -1 && refSections[currentIndex] != refSections[index] && refSections[currentIndex].current?.startAnim ) refSections[currentIndex].current?.startAnim(direction, false);
		currentIndex = currentSectionIndex.current = index;
		if ( refSections[currentIndex].current?.startAnim ) {
			refSections[currentIndex].current?.startAnim(direction, true, index);
			gsap.set(refSections[currentIndex].current?.container, {zIndex: 11});
		}
	}

	// scroll
	let isLockScroll = false;
	const onKeyDown = (e: KeyboardEvent) => {
		if ( window.innerWidth < 920 || isLockScroll ) return;

		const currentIndex = currentSectionIndex.current;
		let scrollOffset = 0;
		switch( e.key ) {
			case 'ArrowDown':
				scrollOffset = -17;
				break;
			case 'PageDown':
				scrollOffset = -100;
				break;
			case 'ArrowUp':
				scrollOffset = 17;
				break;
			case 'PageUp':
				scrollOffset = 100;
				break;
			default:
				return;
		}
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll && refSections[currentIndex].current?.scroll(e.key, scrollOffset) ) return;

		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 1500);
		let index = 0;
		switch( e.key ) {
			case 'ArrowDown':
			case 'PageDown':
				index = currentIndex + 1;
				if ( index >= refSections.length ) return;
				break;

			case 'ArrowUp':
			case 'PageUp':
				index = currentIndex - 1;
				if ( index < 0 ) return;
				break;
			default:
				return;
		}

		gotoScene(index);

	}

	const onMouseWheel = (e: WheelEvent) => {
		if ( window.innerWidth < 920 || isLockScroll ) return;

		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll && refSections[currentIndex].current?.scroll('Wheel', 0-e.deltaY) ) return;

		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 1500);

		let index = 0;
		if ( e.deltaY > 0 ) { 
			index = currentIndex + 1;
			if ( index >= refSections.length ) return;
		}
		else {
			index = currentIndex - 1;
			if ( index < 0 ) return;
		}

		gotoScene(index);

	}

	React.useEffect(() => {
		gotoScene(0);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('wheel', onMouseWheel);
		return ()=>{
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('wheel', onMouseWheel);
		}	
	}, [])


	return (
		<div className='relative back-right-bottom-gradient-primary md:h-screen'>
			<Mainlayout navItems={navItems} hasFooter={false}>
				{/* <ContactForm /> */}
				<ClassWiFi ref={refSectionClassWifi}/>
				<Reliable ref={refSectionReliable}/>
				<Secure ref={refSectionSecure}/>
				<Easy ref={refSectionEasy}/>
				<Contact ref={refSectionContact}/>
				<AnimateFooter ref={refSectionFooter} />
			</Mainlayout>
		</div>
	)
}

export default Education

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
