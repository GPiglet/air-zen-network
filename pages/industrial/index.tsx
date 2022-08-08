//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'

//custom Components
import Mainlayout from '../../layout/main'
import KeepEverything from '../../components/industrialComponents/KeepEverything'
import IdeaSeries from '../../components/industrialComponents/IdeaSeries'
import Credential from '../../components/industrialComponents/Credential'
import SimpleProductive from '../../components/industrialComponents/SimpleProductive'
import FutureProof from '../../components/industrialComponents/FutureProof'
import Contact from '../../components/industrialComponents/Contact'




const Industrial: NextPage = () => {

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
		<div className='back-left-top-gradient-primary overflow-x-clip min-w-[428px]'>
			<Mainlayout navItems={navItems} >
				<KeepEverything />
				<IdeaSeries />
				<Credential />
				<SimpleProductive />
				<FutureProof />
				<Contact />
			</Mainlayout>
		</div>
	)
}

export default Industrial
