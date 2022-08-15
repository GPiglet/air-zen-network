//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

//custom Components
import Mainlayout from '../../layout/main'
import ClassWiFi from '../../components/educationComponents/ClassWiFi'
import Reliable from '../../components/educationComponents/Reliable'
import Secure from '../../components/educationComponents/Secure'
import Easy from '../../components/educationComponents/Easy'
import Contact from '../../components/educationComponents/Contact'
import Footer from '../../components/common/footer'




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
