//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

//import components
import Navbar from '../../components/common/navbar'
import Sticky from '../../components/common/sticky'
import Footer from '../../components/common/footer'

import { StoreContext } from '../../contexts/Store'
import { getStorage } from '../../services/storage.service'
import { useTranslation } from 'next-i18next'

type MainlayoutProps = {
    children: ReactNode,
    navItems?: Array<any>,
    hasFooter?: boolean,
};

const Mainlayout: FC<MainlayoutProps> = ({ children, navItems, hasFooter = true }) => {
    const { t } = useTranslation()

    const [cookie, setCookie] = useState(true)
    useEffect(() => {
        //const cookie = useContext(StoreContext)
        const cookie = getStorage('cookieAllow')
        setCookie(Boolean(cookie))
    }, [])

    const defaultNavItems: Array<any> = [
		{
			id: 1,
			title: t('landing.menu').split('\n')[0],
			href: 'solutions'
		},
        {
			id: 2,
			title: 'Technology',
			href: 'technology'
		},
        {
            id: 3,
            title: t('landing.menu').split('\n')[2],
            href: 'credentials'
        },
		{
			id: 4,
			title: t('landing.menu').split('\n')[1],
			href: 'aboutus'
		},
		{
			id: 5,
			title: t('landing.menu').split('\n')[3],
			href: 'contact'
		},
	]

    return (
        <div>
            <Navbar navItems={navItems ? navItems : defaultNavItems} />
            {!cookie && <Sticky />}

            {children}
            {hasFooter && <Footer />}

        </div>
    );
};

export default Mainlayout;
