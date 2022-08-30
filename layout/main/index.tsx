//import modules
import React, { FC, ReactNode } from 'react';

//import components
import Navbar from '../../components/common/navbar'
import Sticky from '../../components/common/sticky'
import Footer from '../../components/common/footer'

type MainlayoutProps = {
    children: ReactNode,
    navItems: Array<any>,
    hasFooter?: boolean,
};

const Mainlayout: FC<MainlayoutProps> = ({ children, navItems, hasFooter=true }) => {

    return (
        <div>
            <Navbar navItems={navItems}/>
            {/* <Sticky /> */}
            {children}
            {hasFooter && <Footer />}

        </div>
    );
};

export default Mainlayout;
