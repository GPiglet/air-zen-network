//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

//custom Components
import Mainlayout from '../../layout/main'
import Hero from '../../components/landingComponents/Hero'
import UniqueSkill from '../../components/landingComponents/UniqueSkill'
import AboutUs from '../../components/landingComponents/AboutUs'
import Credential from '../../components/landingComponents/Credential'
import Contact from '../../components/landingComponents/Contact'
import { serverSideTranslations } from "next-i18next/serverSideTranslations"





const Homepage: NextPage = () => {

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
		<div className='back-left-top-gradient-primary overflow-x-clip'>
			<Mainlayout navItems={navItems}>
				<Hero/>
				<UniqueSkill />
				<AboutUs />	
				<Credential />
				<Contact />
			</Mainlayout>
		</div>
	)
}

export default Homepage

export const getStaticProps: GetStaticProps  = async ({locale}) => {
	return {
		props: {
		  ...(await serverSideTranslations(locale as string, ["common"])),
		},
	  };
  }
