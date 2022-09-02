//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

//custom Components
import Mainlayout from '../../layout/main'
import KeepEverything from '../../components/industrialComponents/KeepEverything'
import IdeaSeries from '../../components/industrialComponents/IdeaSeries'
import ReferenceProjects from '../../components/industrialComponents/ReferenceProjects'
import SimpleProductive from '../../components/industrialComponents/SimpleProductive'
import FutureProof from '../../components/industrialComponents/FutureProof'
import Contact from '../../components/industrialComponents/Contact'
import ContactForm from '../../components/common/form/ContactForm'




const Industrial: NextPage = () => {
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
		<div className='relative back-left-top-gradient-secondary overflow-hidden'>
			<Mainlayout navItems={navItems} >
				<ContactForm />
				<KeepEverything />
				<IdeaSeries />
				<ReferenceProjects />
				<SimpleProductive />
				<FutureProof />
				<Contact />
			</Mainlayout>
		</div>
	)
}

export default Industrial

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["common"])),
		},
	};
}
