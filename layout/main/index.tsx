//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

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
				// neuter the cookie check as it doesn't do anything right now
        const cookie = true; //getStorage('cookieAllow')
        setCookie(Boolean(cookie))
    }, [])

    return (
        <>
            <Navbar navItems={navItems} />
            {!cookie && <Sticky />}
            {children}
            {hasFooter && <Footer />}
        </>
    );
};

export default Mainlayout;
