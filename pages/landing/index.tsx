//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import gsap from 'gsap';
import { useRouter } from "next/router";

//custom Components
import Mainlayout from '../../layout/main'
import Hero from '../../components/landingComponents/Hero'
import UniqueSkill from '../../components/landingComponents/UniqueSkill'
import AboutUs from '../../components/landingComponents/AboutUs'
import Credential from '../../components/landingComponents/Credential'
import Contact from '../../components/landingComponents/Contact'

const Homepage: NextPage = () => {
	// animation
	const refSectionHero = React.useRef<any>(null);
	const refSectionUnequeSkill = React.useRef<any>(null);
	const refSectionAboutUs = React.useRef<any>(null);
	const refSectionCredential = React.useRef<any>(null);
	const refSectionContact = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionHero,
		refSectionUnequeSkill,
		refSectionCredential,
		refSectionAboutUs,
		refSectionContact
	];

	const navItemHrefs = [
			'solutions',
			'credentials',
			'aboutus',
			'contact'
	]

	const router = useRouter();
	
	const currentSectionIndex = React.useRef<any>(-1);
	const gotoScene = (name: string) => {		
		let direction: string = 'DOWN', index: number = 0;
		switch( name ) {
			case '':	// hero
				if ( currentSectionIndex.current == 0 ) return;
				index = 0;
				direction = 'UP';
				break;

			case navItemHrefs[0]:
				if ( currentSectionIndex.current == 1 ) return;
				if ( currentSectionIndex.current > 1 ) direction = 'UP';
				else direction = 'DOWN';
				index = 1;
				break;

			case navItemHrefs[1]:
				if ( currentSectionIndex.current == 2 ) return;
				if ( currentSectionIndex.current > 2 ) direction = 'UP';
				else direction = 'DOWN';
				index = 2;
				break;

			case navItemHrefs[2]:
				if ( currentSectionIndex.current == 3 ) return;
				if ( currentSectionIndex.current > 3 ) direction = 'UP';
				else direction = 'DOWN';
				index = 3;
				break;

			case navItemHrefs[3]:
				if ( currentSectionIndex.current == 4 ) return;
				if ( currentSectionIndex.current > 4 ) direction = 'UP';
				else direction = 'DOWN';
				index = 4;
				break;
		}

		if ( window.innerWidth < 920 ) {
			currentSectionIndex.current = index;	
			return;
		}

		refSections.forEach(section=>gsap.set(section.current.container, {zIndex: 10}));
		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.startAnim ) refSections[currentIndex].current?.startAnim(direction, false);
		const isFirst = currentIndex == -1 ? true : false;
		currentSectionIndex.current = index;
		if ( refSections[index].current && refSections[index].current?.startAnim ) {
			refSections[index].current?.startAnim(direction, true, isFirst);
			gsap.set(refSections[index].current?.container, {zIndex: 11});
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
		}, 3000);
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

		if ( index == 0 ) {
			router.push({
				pathname: '/landing',
			})
		}
		else {
			router.push({
				pathname: '/landing',
				query: {section: navItemHrefs[index-1]}
			})
		}

	}

	const onMouseWheel = (e: WheelEvent) => {
		e.stopImmediatePropagation();
		if ( window.innerWidth < 920 || isLockScroll ) return;

		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll && refSections[currentIndex].current?.scroll('Wheel', 0-e.deltaY) ) return;

		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 3000);

		let index = 0;
		if ( e.deltaY > 0 ) { 
			index = currentIndex + 1;
			if ( index >= refSections.length ) return;
		}
		else {
			index = currentIndex - 1;
			if ( index < 0 ) return;
		}

		if ( index == 0 ) {
			router.push({
				pathname: '/landing',
			})
		}
		else {
			router.push({
				pathname: '/landing',
				query: {section: navItemHrefs[index-1]}
			})
		}
	}

	let startY = 0, prevY = 0;
	const onTouchStart = (e: TouchEvent) => {
		startY = prevY = e.changedTouches[0].pageY;
	}

	const onTouchEnd = (e: TouchEvent) => {
		if ( window.innerWidth < 920 || isLockScroll ) return;

		const deltaY = startY - e.changedTouches[0].pageY;
		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll )
			refSections[currentIndex].current?.scroll('Wheel', e.changedTouches[0].pageY - prevY);

		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 3000);

		let index = 0;
		if ( deltaY > 10 ) { 
			index = currentIndex + 1;
			if ( index >= refSections.length ) return;
		}
		else if (deltaY < -10 ) {
			index = currentIndex - 1;
			if ( index < 0 ) return;
		}
		else
			return;

		if ( index == 0 ) {
			router.push({
				pathname: '/landing',
			})
		}
		else {
			router.push({
				pathname: '/landing',
				query: {section: navItemHrefs[index-1]}
			})
		}
	}

	const onTouchMove = (e: TouchEvent) => {
		if ( window.innerWidth < 920 ) return;

		const deltaY = e.changedTouches[0].pageY - prevY;
		prevY = e.changedTouches[0].pageY;
		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll )
			refSections[currentIndex].current?.scroll('Wheel', deltaY);
	}

	var prevWidth = 0;
	const onResize = (e: Event) => {
		if ( window.innerWidth < 920 && prevWidth >= 920 ) {
			// desktop -> mobile
			refSections.forEach(section=>gsap.set(section.current.container, {clearProps: 'display'}))
		}
		else if ( window.innerWidth >= 920 && prevWidth < 920 ) {
			// mobile -> desktop
			const scene = currentSectionIndex.current == 0 ? '' : navItemHrefs[currentSectionIndex.current-1];
			currentSectionIndex.current = -1;
			gotoScene(scene);
		}
		prevWidth = window.innerWidth;
	}

	React.useEffect(() => {
		prevWidth = window.innerWidth;
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('wheel', onMouseWheel, {capture: true});
		window.addEventListener('touchstart', onTouchStart);
		window.addEventListener('touchend', onTouchEnd);
		window.addEventListener('touchmove', onTouchMove);
		window.addEventListener('resize', onResize);
		return ()=>{
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('wheel', onMouseWheel, {capture: true});
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('resize', onResize);
		}	
	}, [])

	React.useEffect(() => {
		const sectionPos = router.asPath.indexOf('?section=');
		if (  sectionPos != -1 ) router.query.section = router.asPath.substring(sectionPos+9);
		if ( router.asPath == router.route || router.query.section ) gotoScene(router.query.section?.toString() || '');
	}, [router])

	return (
		<div className='back-left-top-gradient-primary'>
			<Mainlayout hasFooter={false}>
				<Hero ref={refSectionHero}/>
				<UniqueSkill ref={refSectionUnequeSkill}/>
				<Credential ref={refSectionCredential}/>
				<AboutUs ref={refSectionAboutUs}/>
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
