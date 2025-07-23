import React from 'react'

function HeroSection() {
    return (
        
            <div className='bg-gray-400 flex pt-20 mb-20 gap-3 h-[80%] px-5 w-screen justify-center flex-row'>
                <div className='bg-gray-700 min-w-[40%] flex flex-col justify-center items-end gap-5'>
                    <h3 className='text-6xl'>i'm</h3>
                    <h2 className='text-8xl font-bold'>Raj</h2>
                    <h2 className='text-8xl font-bold'>Shamani</h2>
                </div>
                <div className='bg-gray-700 min-w-[40%] overflow-x-hidden'>
                    <img className='h-[100%] min-w-fit' src="public/Picsart_25-07-23_00-12-58-497.png" alt="" />
                </div>
            </div>
    )
}

export default HeroSection