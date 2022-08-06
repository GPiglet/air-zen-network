//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

//custom Components
import Mainlayout from '../../layout/main'
import ClassWiFi from '../../components/educationComponents/ClassWiFi'
import DigitalEducation from '../../components/educationComponents/DigitalEducation'
import DigitalEducation1 from '../../components/educationComponents/DigitalEducation1'
import DigitalEducation2 from '../../components/educationComponents/DigitalEducation2'
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
		<div className='back-left-top-gradient-primary '>
			<Mainlayout navItems={navItems}>
				<ClassWiFi />
				<DigitalEducation />
				<DigitalEducation1 />
				<DigitalEducation2 />
				<Contact />
				<Footer />
			</Mainlayout>
		</div>
	)
}

export default Home
