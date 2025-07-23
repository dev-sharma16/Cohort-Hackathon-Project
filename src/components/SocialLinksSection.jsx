import React from 'react'
import { Link } from 'react-router'

function SocialLinksSection() {
  return (
    <div className='h-[35%] w-full bg-black'> 
        <h2 className="text-6xl font-semibold mb-33 text-center text-white ">
            Social's
        </h2>
        <div className='flex justify-evenly items-center flex-wrap mt-20 text-3xl text-gray-200'>
            <a 
                href="https://www.instagram.com/rajshamani/?hl=en" 
                target='_blank'
                className='hover:scale-125 hover:text-pink-500 hover:font-semibold transition'
            >
                <span ><i class="ri-instagram-line"></i></span> Instagram
            </a>
            <a 
                href="https://www.facebook.com/shamaniraj/" 
                target='_blank'
                className='hover:scale-125 hover:text-blue-400 hover:font-semibold transition'
            >
                <span><i class="ri-facebook-box-fill"></i></span> Facebook
            </a>
            <a 
                href="https://www.youtube.com/user/Rajshamani" 
                target='_blank'
                className='hover:scale-125 hover:text-red-600 hover:font-semibold transition'

            >
                <span><i class="ri-youtube-fill"></i></span> Youtube
            </a>
            <a 
                href="https://in.linkedin.com/in/rajshamani" 
                target='_blank'
                className='hover:scale-125 hover:text-blue-500 hover:font-semibold transition'
            >
                <span><i class="ri-linkedin-box-fill"></i></span> Linkedin
            </a>
        </div>
    </div>
  )
}

export default SocialLinksSection