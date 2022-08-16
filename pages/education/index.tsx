//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'


//custom Components
import Mainlayout from '../../layout/main'
import ClassWiFi from '../../components/educationComponents/ClassWiFi'
import Reliable from '../../components/educationComponents/Reliable'
import Secure from '../../components/educationComponents/Secure'
import Easy from '../../components/educationComponents/Easy'
import Contact from '../../components/educationComponents/Contact'




const Home: NextPage = () => {

	const navItems: Array<any> = [
		{
			id: 1,
			title: 'Klassenzimmer ',
			href: 'classroom'
		},
		{
			id: 2,
			title: 'SCHUTZ',
			href: 'protection'
		},
		{
			id: 3,
			title: 'Einfach',
			href: 'easy'
		},
		{
			id: 4,
			title: 'Technik',
			href: 'technology'
		},
	]

	return (
		<div className='back-left-top-gradient-primary overflow-hidden'>
			<Mainlayout navItems={navItems}>
				<ClassWiFi />
				<Reliable />
				<Secure />
				<Easy />
				<Contact />
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
