import NavMobile from '@/components/NavMobile'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import React, { useEffect, useState } from 'react'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head' // 👈 добавили

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
    <>
      <Head>
        <title>Виталий Колодченко — разработка сайтов, телеграм ботов</title>
        <meta
          name="description"
          content="Я Виталий Колодченко — фронтенд и фулл-стек разработчик. Создаю современные сайты на React и Next.js, backend на Node.js и Telegram-ботов."
        />
        <meta
          name="keywords"
          content="Виталий Колодченко, разработчик, фронтенд, fullstack, React, Next.js, сайт под ключ, телеграмм бот, веб разработка, frontend developer, fullstack developer"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Виталий Колодченко — разработка сайтов и телеграм ботов"
        />
        <meta
          property="og:description"
          content="Создаю современные сайты на React и Next.js, backend на Node.js и Telegram-ботов."
        />

        <meta property="og:image" content="images/preview-seo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:url" content="https://www.vitalykolodchenko.ru" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Виталий Колодченко — разработчик" />
        <meta
          name="twitter:description"
          content="Создаю современные сайты под ключ: frontend + backend + боты."
        />
        <meta name="twitter:image" content="images/preview-seo.jpg" />
      </Head>

      {/* 👇 Это уже сам контент страницы */}
      <div className="overflow-hidden">
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />
        <Nav openNav={showNavHandler} />
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
