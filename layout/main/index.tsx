//import modules
import React, { FC, ReactNode, useContext } from 'react';

//import components
import Navbar from '../../components/common/navbar'
import Sticky from '../../components/common/sticky'
import Footer from '../../components/common/footer'

import { StoreContext } from '../../contexts/Store'


type MainlayoutProps = {
    children: ReactNode,
    navItems: Array<any>,
    hasFooter?: boolean,
};

const Mainlayout: FC<MainlayoutProps> = ({ children, navItems, hasFooter = true }) => {

    const { cookie } = useContext(StoreContext)

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
