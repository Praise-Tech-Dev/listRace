import React from 'react'
import HeaderPart from '../components/HeaderPart'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Explore from '../components/Explore'
import ClientReviews from '../components/ClientReviews'
import Stats from '../components/Stats'
import NewsAndArticles from '../components/NewsAndArticles'
import Listing from '../components/Listing'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div>
      <div className='sticky top-0 z-50 shadow-lg'><HeaderPart/></div>
      <Hero/>
      <HowItWorks/>
      <Explore/>
      <ClientReviews/>
      <Stats/>
      <NewsAndArticles/>
      <Listing/>
      <Footer/>
    </div>
  )
}
