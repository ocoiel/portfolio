import type { NextPage } from 'next'
import { useEffect } from 'react';
import HomeHeroSection from '../components/HomeHeroPage'
import { NavMenu } from '../components/Navbar'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <NavMenu />
      <Hero />
      <HomeHeroSection />
    </>
  )
}

export default Home
