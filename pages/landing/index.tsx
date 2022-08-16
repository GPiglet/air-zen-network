//modules
import React, { FC } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

//custom Components
import Mainlayout from '../../layout/main'
import Hero from '../../components/landingComponents/Hero'
import UniqueSkill from '../../components/landingComponents/UniqueSkill'
import AboutUs from '../../components/landingComponents/AboutUs'
import Credential from '../../components/landingComponents/Credential'
import Contact from '../../components/landingComponents/Contact'


const Homepage: NextPage = () => {
	//translate
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
		<div className='back-left-top-gradient-primary overflow-x-hidden'>
			<Mainlayout navItems={navItems}>
				<Hero />
				<UniqueSkill />
				<AboutUs />
				<Credential />
				<Contact />
			</Mainlayout>
		</div>
	)
}

export default Homepage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
