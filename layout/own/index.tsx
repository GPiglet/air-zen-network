//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';

//import components
import Navbar from '../../components/common/navbar'
import Sticky from '../../components/common/sticky'
import Footer from '../../components/common/footer'

import { getStorage } from '../../services/storage.service'

type props = {
    children: ReactNode,
    navItems?: Array<any>,
    hasFooter?: boolean,
	useSmoother?: boolean,
    className?: string,
	wrapperClassName?: string,
};

const OwnLayout: FC<props> = ({ children, navItems, hasFooter = true, useSmoother=false, className, wrapperClassName }) => {   
    const [cookie, setCookie] = useState(true)
    useEffect(() => {
        const cookie = getStorage('cookieAllow')
        setCookie(Boolean(cookie))
    }, [])

    const containerRef = React.useRef<any>();

  	// scroll
    // const customScrollBy = (offset: any) => {
    //     const rect = containerRef.current?.getBoundingClientRect();
    //     if( rect.top <= 0 && rect.top > -offset && offset > 0 ) {
    //         return false;
    //     }
    //     if( Math.abs(rect.top) + window.innerHeight - 100 > rect.height && offset < 0 ) {
    //         offset = 0;
    //     }
    //     gsap.set(containerRef.current, {
    //         y: '+=' + offset
    //     })
    //     return true;
    // }
	// const onKeyDown = (e: KeyboardEvent) => {
	// 	if ( window.innerWidth < 920 ) return;

	// 	let scrollOffset = 0;
	// 	switch( e.key ) {
	// 		case 'ArrowDown':
	// 			scrollOffset = -17;
	// 			break;
	// 		case 'PageDown':
	// 			scrollOffset = -100;
	// 			break;
	// 		case 'ArrowUp':
	// 			scrollOffset = 17;
	// 			break;
	// 		case 'PageUp':
	// 			scrollOffset = 100;
	// 			break;
	// 		default:
	// 			return;
	// 	}

    //     customScrollBy(scrollOffset);
	// }

	// const onMouseWheel = (e: WheelEvent) => {
	// 	if ( window.innerWidth < 920 ) return;
    //     customScrollBy(-e.deltaY);        
	// }

	// let startY = 0, prevY = 0;
	// const onTouchStart = (e: TouchEvent) => {
	// 	startY = prevY = e.changedTouches[0].pageY;
	// }

	// const onTouchEnd = (e: TouchEvent) => {
	// 	if ( window.innerWidth < 920 ) return;
    //     customScrollBy(e.changedTouches[0].pageY - prevY);
	// }

	// const onTouchMove = (e: TouchEvent) => {
	// 	if ( window.innerWidth < 920 ) return;
	// 	const deltaY = e.changedTouches[0].pageY - prevY;
	// 	prevY = e.changedTouches[0].pageY;
    //     customScrollBy(deltaY);
	// }

    // React.useEffect(() => {
	// 	window.addEventListener('keydown', onKeyDown);
	// 	window.addEventListener('wheel', onMouseWheel);
	// 	window.addEventListener('touchstart', onTouchStart);
	// 	window.addEventListener('touchend', onTouchEnd);
	// 	window.addEventListener('touchmove', onTouchMove);
	// 	return ()=>{
	// 		window.removeEventListener('keydown', onKeyDown);
	// 		window.removeEventListener('wheel', onMouseWheel);
	// 		window.removeEventListener('touchstart', onTouchStart);
	// 		window.removeEventListener('touchend', onTouchEnd);
	// 		window.removeEventListener('touchmove', onTouchMove);
	// 	}	
	// }, [])

    React.useEffect( () => {
        document.body.style.overflowY = 'auto'
    }, [])

	useEffect( () => {
		if ( useSmoother && window.innerWidth > 920 ) {
			gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
			const smoother = ScrollSmoother.create({
				wrapper: "#smoother-wrapper",
				content: "#smoother-content",
				smooth: 3,
				effects: true
			});
			return () => {
				smoother.kill();
			}
		}
    }, [])

    return (
        <>
            <Navbar navItems={navItems} isHideItems={true}/>
            <div ref={containerRef} id="smoother-wrapper" className={wrapperClassName}>
				<div id="smoother-content" className={`container ${className}`}>
					{!cookie && <Sticky />}
					{children}
					{hasFooter && <Footer />}
				</div>
            </div>
        </>
    );
};

export default OwnLayout;
