import React from 'react'

function CopyRightSection() {
  return (
    <div className='text-center p-5 text-gl text-gray-300 bg-black hover:text-white transition'>
        <span><i className="ri-copyright-line"></i></span> {new Date().getFullYear()} Raj Shamani. All rights reserved.
    </div>
  )
}

export default CopyRightSection