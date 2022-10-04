//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next';
import gsap from 'gsap';


//custom Components
import Mainlayout from '../../layout/main'
import Boost from '../../components/businessComponents/Boost'
import Professional from '../../components/businessComponents/Professional'
import NewWork from '../../components/businessComponents/Newwork'
import PrepareSuccess from '../../components/businessComponents/PrepareSuccess'
import CertainlySafe from '../../components/businessComponents/CertainlySafe'
import Solution360 from '../../components/businessComponents/Solution360'
import BusinessNode from '../../components/businessComponents/BusinessNode'
import WhitePaper from '../../components/businessComponents/WhitePaper'
import BusinessForm from '../../components/businessComponents/businessForm';
import AnimateFooter from '../../components/common/footer/AnimateFooter';
import ContactFormSide from '../../components/common/form/ContactFormSide';




const Business: NextPage = () => {
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

	const refBackGradient = React.useRef<any>(null);
	const refSectionBoost = React.useRef<any>(null);
	const refSectionProfessional = React.useRef<any>(null);
	const refSectionNewWork = React.useRef<any>(null);
	const refSectionPrepareSuccess = React.useRef<any>(null);
	const refSectionCertainlySafe = React.useRef<any>(null);
	const refSectionSolution360 = React.useRef<any>(null);
	const refSectionBusinessNode = React.useRef<any>(null);
	const refSectionWhitePaper = React.useRef<any>(null);
	const refSectionFooter = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionBoost,
		refSectionProfessional,
		refSectionNewWork,
		refSectionPrepareSuccess,
		refSectionCertainlySafe,
		refSectionWhitePaper,
		refSectionSolution360,
		refSectionBusinessNode,
		refSectionFooter
	];
	const backGradientList = [
		'radial-gradient(100% 135% at 0% 0%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(100% 100% at 50% 0%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(100% 237.07% at 100% 0%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(99.27% 235.35% at 99.27% 51.83%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(98.94% 234.56% at 100% 100%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(98.22% 231.19% at 98.58% 100%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(101.26% 240.05% at 100% 53.87%, rgba(123, 182, 144, 0.6) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(100% 100% at 50% 0%, rgba(123, 182, 144, 0.4) 0%, rgba(123, 182, 144, 0) 100%), #000000',
		'radial-gradient(100% 100% at 50% 0%, rgba(123, 182, 144, 0.3) 0%, rgba(123, 182, 144, 0) 100%), #000000'
	]

	const currentSectionIndex = React.useRef<number>(-1);
	const gotoScene = (index: number) => {
		if (window.innerWidth < 920) return;
		let direction: string = 'DOWN';
		let currentIndex = currentSectionIndex.current;
		if (currentIndex > index) direction = 'UP';

		refSections.forEach(section => gsap.set(section.current.container, { zIndex: 10 }));

		if (currentIndex != -1 && refSections[currentIndex] != refSections[index] && refSections[currentIndex].current?.startAnim) refSections[currentIndex].current?.startAnim(direction, false);
		if (currentIndex == -1) gsap.set(refBackGradient.current, { background: backGradientList[index] });
		else gsap.to(refBackGradient.current, { background: backGradientList[index] });
		currentIndex = currentSectionIndex.current = index;
		if (refSections[currentIndex].current?.startAnim) {
			refSections[currentIndex].current?.startAnim(direction, true, index);
			gsap.set(refSections[currentIndex].current?.container, { zIndex: 11 });
		}
	}

	// scroll
	let isLockScroll = false;
	const onKeyDown = (e: KeyboardEvent) => {
		if (window.innerWidth < 920 || isLockScroll) return;
		
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
		switch (e.key) {
			case 'ArrowDown':
			case 'PageDown':
				index = currentIndex + 1;
				if (index >= refSections.length) return;
				break;

			case 'ArrowUp':
			case 'PageUp':
				index = currentIndex - 1;
				if (index < 0) return;
				break;
			default:
				return;
		}

		gotoScene(index);

	}

	const onMouseWheel = (e: WheelEvent) => {
		if (window.innerWidth < 920 || isLockScroll) return;

		const currentIndex = currentSectionIndex.current;
		if ( currentIndex != -1 && refSections[currentIndex].current?.scroll && refSections[currentIndex].current?.scroll('Wheel', 0-e.deltaY) ) return;

		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 1500);

		let index = 0;
		if (e.deltaY > 0) {
			index = currentIndex + 1;
			if (index >= refSections.length) return;
		}
		else {
			index = currentIndex - 1;
			if (index < 0) return;
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
		<div ref={refBackGradient} className='back-left-top-gradient-secondary relative md:h-screen' id='business_page'>
			<Mainlayout navItems={navItems} hasFooter={false}>
				<ContactFormSide />
				<Boost ref={refSectionBoost} />
				<Professional ref={refSectionProfessional} />
				<NewWork ref={refSectionNewWork} />
				<PrepareSuccess ref={refSectionPrepareSuccess} />
				<CertainlySafe ref={refSectionCertainlySafe} />
				<WhitePaper ref={refSectionWhitePaper} />
				<Solution360 ref={refSectionSolution360} />
				<BusinessNode ref={refSectionBusinessNode} />
				<AnimateFooter ref={refSectionFooter} />
			</Mainlayout>
		</div>
	)
}

export default Business

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
