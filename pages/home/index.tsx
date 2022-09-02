//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'



//custom Components
import Mainlayout from '../../layout/main'
import SimplyNetwork from '../../components/homeComponents/SimplyNetwork'
import SafeHome from '../../components/homeComponents/SafeHome'
import Reliable from '../../components/homeComponents/Reliable'
import Easy from '../../components/homeComponents/Easy'
import OurNode from '../../components/homeComponents/OurNode'
import HomeForm from '../../components/homeComponents/homeForm'





const Home: NextPage = () => {
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

	return (
		<div className='back-left-top-gradient-primary overflow-x-hidden relative'>
			<Mainlayout navItems={navItems}>
				<HomeForm />
				<SimplyNetwork />
				<SafeHome />
				{/* <Reliable />
				<Easy /> */}
				<OurNode />
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
