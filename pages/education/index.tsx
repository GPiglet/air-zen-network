//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'


//custom Components
import Mainlayout from '../../layout/main'
import ClassWiFi from '../../components/educationComponents/ClassWiFi'
import Reliable from '../../components/educationComponents/Reliable'
import Secure from '../../components/educationComponents/Secure'
import Easy from '../../components/educationComponents/Easy'
import Contact from '../../components/educationComponents/Contact'
import ContactForm from '../../components/common/form/ContactForm'




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
		<div className='relative back-left-top-gradient-primary overflow-hidden'>
			<Mainlayout navItems={navItems}>
				<ContactForm />
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
