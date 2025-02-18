import NavMobile from '@/components/NavMobile'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import React, { useEffect, useState } from 'react'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Price from '@/components/Price'
import Reviews from '@/components/Reviews'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomePage = () => {
	const [showNav, setShowNav] = useState(false)
	const showNavHandler = () => setShowNav(true)
	const closeNavHandler = () => setShowNav(false)

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease',
			anchorPlacement: 'top-bottom',
		})
	}, [])

	return (
		<div className='overflow-hidden'>
			<NavMobile showNav={showNav} closeNav={closeNavHandler} />
			<Nav openNav={showNavHandler} />
			<Hero />
			<AboutMe />
			<Services />
			<Skills />
			<Projects />
			<Price />
			<Footer />
		</div>
	)
}

export default HomePage
