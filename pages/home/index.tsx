//modules
import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'



//custom Components
import Mainlayout from '../../layout/main'
import SimplyNetwork from '../../components/homeComponents/SimplyNetwork'
import SafeHome from '../../components/homeComponents/SafeHome'
import Reliable from '../../components/homeComponents/Reliable'
import Easy from '../../components/homeComponents/Easy'
import OurNode from '../../components/homeComponents/OurNode'





const Home: NextPage = () => {

	const navItems:Array<any> = [
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
		<div className='back-left-top-gradient-primary overflow-x-hidden'>
			<Mainlayout navItems={navItems}>
				<SimplyNetwork />
				<SafeHome />
				<Reliable /> 	
				<Easy />
				<OurNode />
			</Mainlayout>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps  = async ({locale}) => {
	return {
		props: {
		  ...(await serverSideTranslations(locale as string, ["common"])),
		},
	  };
  }
