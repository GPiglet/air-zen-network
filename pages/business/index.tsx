//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'



//custom Components
import Mainlayout from '../../layout/main'
import Boost from '../../components/businessComponents/Boost'
import Professional from '../../components/businessComponents/Professional'
import NewWork from '../../components/businessComponents/Newwork'
import PrepareSuccess from '../../components/businessComponents/PrepareSuccess'
import CertainlySafe from '../../components/businessComponents/CertainlySafe'
import Solution360 from '../../components/businessComponents/Solution360'
import BusinessNode from '../../components/businessComponents/BusinessNode'
import WhitePaper from '../../components/businessComponents/WhitePaper'




const Business: NextPage = () => {

	const navItems: Array<any> = [
		{
			id: 1,
			title: 'Lösungen',
			href: 'solutions'
		},
		{
			id: 2,
			title: 'Über uns',
			href: 'aboutus'
		},
		{
			id: 3,
			title: 'REFERENZEN',
			href: 'credentials'
		},
		{
			id: 4,
			title: 'Kontakt',
			href: 'cantact'
		},
	]

	return (
		<div className='back-left-top-gradient-secondary overflow-x-hidden' id='business_page'>
			<Mainlayout navItems={navItems} >
				<Boost />
				<Professional />
				<NewWork />
				<PrepareSuccess />
				<CertainlySafe />
				<Solution360 />
				<BusinessNode />
				<WhitePaper />
			</Mainlayout>
		</div>
	)
}

export default Business

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
