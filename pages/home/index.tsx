//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'
import gsap from 'gsap';


//custom Components
import Mainlayout from '../../layout/main'
import SimplyNetwork from '../../components/homeComponents/SimplyNetwork'
import SafeHome from '../../components/homeComponents/SafeHome'
import Reliable from '../../components/homeComponents/Reliable'
import Easy from '../../components/homeComponents/Easy'
import OurNode from '../../components/homeComponents/OurNode'
import HomeForm from '../../components/homeComponents/homeForm'
import AnimateFooter from '../../components/common/footer/AnimateFooter'

const Home: NextPage = () => {
	const { t } = useTranslation()
	const router = useRouter()

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

	const refSectionSimplyNetwork = React.useRef<any>(null);
	const refSectionSafeHome = React.useRef<any>(null);
	const refSectionOurNode = React.useRef<any>(null);
	const refSectionFooter = React.useRef<any>(null);
	const refSections: any[] = [
		refSectionSimplyNetwork,
		refSectionSafeHome,
		refSectionSafeHome,
		refSectionSafeHome,
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
		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 1500);
		let index = 0;
		switch( e.key ) {
			case 'ArrowDown':
			case 'PageDown':
				index = currentSectionIndex.current + 1;
				if ( index >= refSections.length ) return;
				break;

			case 'ArrowUp':
			case 'PageUp':
				index = currentSectionIndex.current - 1;
				if ( index < 0 ) return;
				break;
			default:
				return;
		}

		gotoScene(index);

	}

	const onMouseWheel = (e: WheelEvent) => {
		if ( window.innerWidth < 920 || isLockScroll ) return;
		isLockScroll = true;
		setTimeout(() => {
			isLockScroll = false;
		}, 1500);

		let index = 0;
		if ( e.deltaY > 0 ) { 
			index = currentSectionIndex.current + 1;
			if ( index >= refSections.length ) return;
		}
		else {
			index = currentSectionIndex.current - 1;
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

	const scrollAnchor = () => {
		console.log('----')
		router.push({
			pathname: '/home',
			query: { section: 'technology' }
		})
		// setFormView(!formView)
	}

	return (
		<div className='back-right-bottom-gradient-primary relative h-screen'>
			<Mainlayout navItems={navItems} hasFooter={false}>
				<HomeForm />
				<SimplyNetwork ref={refSectionSimplyNetwork}/>
				<SafeHome ref={refSectionSafeHome}/>
				{/* <Reliable />
				<Easy /> */}
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
