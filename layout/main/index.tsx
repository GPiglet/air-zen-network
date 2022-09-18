//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

//import components
import Navbar from '../../components/common/navbar'
import Sticky from '../../components/common/sticky'
import Footer from '../../components/common/footer'

import { StoreContext } from '../../contexts/Store'
import { getStorage } from '../../services/storage.service'


type MainlayoutProps = {
    children: ReactNode,
    navItems: Array<any>,
    hasFooter?: boolean,
};

const Mainlayout: FC<MainlayoutProps> = ({ children, navItems, hasFooter = true }) => {

    const [cookie, setCookie] = useState(false)
    useEffect(() => {
        //const cookie = useContext(StoreContext)
        const cookie = getStorage('cookieAllow')
        setCookie(Boolean(cookie))
    }, [])

    return (
        <div>
            <Navbar navItems={navItems} />
            {cookie ? '' : <Sticky />}

            {children}
            {hasFooter && <Footer />}

        </div>
    );
};

export default Mainlayout;
