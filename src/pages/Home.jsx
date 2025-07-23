import React from 'react'
import HeroSection from '../components/HeroSection'
import PodcastSection from '../components/PodcastSection'

function Home() {
  return (
    <div className='h-screen bg-black'>
      <HeroSection/>
      <PodcastSection/>  
    </div>
  )
}

export default Home