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

    React.useEffect( () => {
        document.body.style.overflowY = 'auto'
    }, [])

	useEffect( () => {
		if ( useSmoother && window.innerWidth > 920 ) {
			gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
			const smoother = ScrollSmoother.create({
				wrapper: "#smoother-wrapper-own",
				content: "#smoother-content-own",
				smooth: 3,
				effects: true
			});
			return () => {
				smoother.kill();
				ScrollTrigger.killAll();
			}
		}
    }, [])

    return (
        <>
            <Navbar navItems={navItems} isHideItems={true}/>
            <div ref={containerRef} id="smoother-wrapper-own" className={wrapperClassName}>
				<div id="smoother-content-own" className={`container ${className}`}>
					{!cookie && <Sticky />}
					{children}
					{hasFooter && <Footer />}
				</div>
            </div>
        </>
    );
};

export default OwnLayout;
