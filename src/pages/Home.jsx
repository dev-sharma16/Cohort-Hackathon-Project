import React from 'react'
import HeroSection from '../components/HeroSection'
import PodcastSection from '../components/PodcastSection'
import BookSection from '../components/BookSection'
import SocialLinksSection from '../components/SocialLinksSection'
import CopyRightSection from '../components/CopyRightSection'

function Home() {
  return (
    <div className='h-screen bg-black'>
      <HeroSection/>
      <PodcastSection/>
      <BookSection/>
      <SocialLinksSection/>
      <CopyRightSection/>  
    </div>
  )
}

export default Home