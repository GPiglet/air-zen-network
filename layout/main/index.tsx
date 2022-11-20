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

type MainlayoutProps = {
    children: ReactNode,
    navItems?: Array<any>,
    hasFooter?: boolean,
};

const Mainlayout: FC<MainlayoutProps> = ({ children, navItems, hasFooter = true }) => {
    const [cookie, setCookie] = useState(true)
    useEffect(() => {
        //const cookie = useContext(StoreContext)
        const cookie = getStorage('cookieAllow')
        setCookie(Boolean(cookie))
    }, [])

    // useEffect( () => {
	// 	if ( window.innerWidth < 920 ) {
    //         gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	// 		const smoother = ScrollSmoother.create({
	// 			wrapper: "#smoother-wrapper",
	// 			content: "#smoother-content",
	// 			smooth: 3,
	// 			effects: true
	// 		});
	// 		return () => {
	// 			smoother.kill();
	// 		}
	// 	}
    // }, [])

    return (
        <>
            <Navbar navItems={navItems} />
            <div id="smoother-wrapper">
                <div id="smoother-content">
                    {!cookie && <Sticky />}
                    {children}
                    {hasFooter && <Footer />}
                </div>
            </div>

        </>
    );
};

export default Mainlayout;
