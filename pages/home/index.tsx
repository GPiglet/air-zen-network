//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';


//custom Components
import Mainlayout from '../../layout/main'
import SimplyNetwork from '../../components/homeComponents/SimplyNetwork'
import SafeHome from '../../components/homeComponents/SafeHome'
import OurNode from '../../components/homeComponents/OurNode'
import HomeForm from '../../components/homeComponents/homeForm'
import AnimateFooter from '../../components/common/footer/AnimateFooter'
import ContactFormSide from '../../components/common/form/ContactFormSide'

const Home: NextPage = () => {
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
			href: 'contact'
		},
	]

	const refSectionSimplyNetwork = React.useRef<any>(null);
	const refSectionSafeHome = React.useRef<any>(null);
	const refSectionOurNode = React.useRef<any>(null);
	const refSectionFooter = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionSimplyNetwork,
		refSectionSafeHome,
		refSectionSafeHome,
		refSectionSafeHome,
		// refSectionSafeHome,
		// refSectionSafeHome,
		refSectionOurNode,
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
		}, 1500);

		let index = 0;
		if ( deltaY > 10 ) { 
			index = currentIndex + 1;
			if ( index >= refSections.length ) return;
		}
		else if ( deltaY < -10 ) {
			index = currentIndex - 1;
			if ( index < 0 ) return;
		}
		else
			return;

		gotoScene(index);
	}

	const onTouchMove = (e: TouchEvent) => {
		if ( window.innerWidth < 920 ) return;

		const deltaY = e.changedTouches[0].pageY - prevY;
		prevY = e.changedTouches[0].pageY;
		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll )
			refSections[currentIndex].current?.scroll('Wheel', deltaY);

	}

	React.useEffect(() => {
		gotoScene(0);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('wheel', onMouseWheel);
		window.addEventListener('touchstart', onTouchStart);
		window.addEventListener('touchend', onTouchEnd);
		window.addEventListener('touchmove', onTouchMove);
		return ()=>{
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('wheel', onMouseWheel);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
			window.removeEventListener('touchmove', onTouchMove);
		}	
	}, [])

	return (
		<div className='back-left-top-gradient-primary back-right-bottom-gradient-primary relative md:h-screen'>
			<Mainlayout navItems={navItems} hasFooter={false}>
				<ContactFormSide />
				<SimplyNetwork ref={refSectionSimplyNetwork}/>
				<SafeHome ref={refSectionSafeHome}/>
				<OurNode ref={refSectionOurNode}/>
				<AnimateFooter ref={refSectionFooter}/>
			</Mainlayout>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
