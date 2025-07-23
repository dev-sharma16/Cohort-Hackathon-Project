import React from 'react'
import GooeyNav from './reactBits/GooeyNav'

const items = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/course" },
    { label: "About", href: "/about" },
    // { label: "", href: "#" },
];

function Nav() {
    return (
        <div className='w-screen flex items-center justify-center py-4 fixed z-10'>
            <div className=' py-2 rounded-2xl backdrop-blur-sm border-1'>
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            </div>
        </div>
    )
}

export default Nav