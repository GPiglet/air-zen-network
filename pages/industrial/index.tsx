//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'

//custom Components
import Mainlayout from '../../layout/main'
import KeepEverything from '../../components/industrialComponents/KeepEverything'
import IdeaSeries from '../../components/industrialComponents/IdeaSeries'
import ReferenceProjects from '../../components/industrialComponents/ReferenceProjects'
import SimpleProductive from '../../components/industrialComponents/SimpleProductive'
import FutureProof from '../../components/industrialComponents/FutureProof'
import Contact from '../../components/industrialComponents/Contact'




const Industrial: NextPage = () => {

	const navItems: Array<any> = [
		{
			id: 1,
			title: 'Referenzprojekte',
			href: 'reference'
		},
		{
			id: 2,
			title: 'Einfach',
			href: 'easy'
		},
		{
			id: 3,
			title: 'Sicher',
			href: 'secure'
		},
		{
			id: 4,
			title: 'Technik',
			href: 'technology'
		},
	]

	return (
		<div className='back-left-top-gradient-secondary overflow-hidden'>
			<Mainlayout navItems={navItems} >
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
