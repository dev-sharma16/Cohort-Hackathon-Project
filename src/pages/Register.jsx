import React from 'react'
import RegisterForm from '../components/RegisterForm'
import CopyRightSection from '../components/CopyRightSection'

function Register() {
  return (
    <>
    <div className='h-[94%] bg-black pt-45 px-6'>
        <RegisterForm/>
    </div>
    <CopyRightSection/>
    </>
  )
}

export default Register