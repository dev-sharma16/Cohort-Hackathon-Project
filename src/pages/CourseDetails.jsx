import React from 'react'
import CourseCard from '../components/CourseCard'
import CopyRightSection from '../components/CopyRightSection'

function CourseDetails() {
  return (
    <>
    <div className='h-[94%] bg-black pt-45 px-6 flex justify-center items-start' >
      <CourseCard/>
    </div>
    <CopyRightSection/>
    </>
  )
}

export default CourseDetails