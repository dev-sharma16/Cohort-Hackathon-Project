import React from 'react'
import LoginForm from '../components/LoginForm'
import CopyRightSection from '../components/CopyRightSection'

function Login() {
  return (
    <>
    <div className='h-[94%] bg-black pt-45 px-6'>
        <LoginForm/>
    </div>
    <CopyRightSection/>
    </>
  )
}

export default Login