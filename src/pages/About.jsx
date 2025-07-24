import React from 'react'
import CopyRightSection from '../components/CopyRightSection'


function About() {
  return (
    <>
    <div className=' bg-black pt-25 px-10 md:px-20'>
      <h2 className="text-center text-5xl font-bold mb-20 mt-5 text-white">Raj Shamani</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <img
          src="https://ik.imagekit.io/devsh16/Hackathon/About%20page%20assests/2dcaec58-450a-0df9-7a18-1464f00bcf6a.jpeg?updatedAt=1753367939872" 
          alt="Raj Shamani"
          className="rounded-lg w-72 object-cover shadow-lg"
        />

        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p className="text-lg leading-relaxed text-gray-300">
            Raj Shamani is an entrepreneur, motivational speaker and social media influencer. He has featured on the ‘Top 5 Young Influencers of India’ list (YourStory), as well as on the ‘Top 10 Young Entrepreneurs in India’ list (Asian Age).
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            His podcast, Figuring Out, is the top podcast on entrepreneurship in the country. He is the youngest Indian to speak at the United Nations Assembly. He has given four TEDx Talks and over 200 keynotes in over twenty-six countries.
          </p>
          <p className="text-lg font-semibold text-white">Founder, Shamani Industries</p>
          <p className="text-gray-400">Keynote Speaker in 26+ Countries • Social Media Content Creator • 1M+ Following on Social Media</p>
        </div>
      </div>

      {/* Social Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-black bg-yellow-400 rounded-xl p-6 mt-20 max-w-4xl mx-auto">
        <div>
          <p className="text-2xl font-bold">1.3M+</p>
          <p className="text-sm">Instagram</p>
        </div>
        <div>
          <p className="text-2xl font-bold">870K+</p>
          <p className="text-sm">YouTube</p>
        </div>
        <div>
          <p className="text-2xl font-bold">290K+</p>
          <p className="text-sm">Twitter</p>
        </div>
        <div>
          <p className="text-2xl font-bold">100K+</p>
          <p className="text-sm">LinkedIn</p>
        </div>
      </div>
      <div className=" py-10 px-4 md:px-20 text-center pt-22">
        <h2 className="text-center text-5xl font-bold mb-20 mt-5 text-white">Achievements & Recognition</h2>

        <div className="bg-yellow-400 text-black p-6 rounded-xl max-w-xl mx-auto mb-8 text-left shadow-md">
          <ul className="list-disc pl-6 space-y-2">
            <li>232M+ views in 12 months on YouTube</li>
            <li>300M+ views in 12 months on Instagram</li>
            <li>Forbes Top 100 Digital Creators</li>
            <li>Forbes 30 under 30 (Featured on Forbes Cover Magazine)</li>
          </ul>
        </div>

        <h3 className="text-center text-5xl font-bold mb-20 mt-5 text-white pt-25">
          Awarded By Top Organizations & Institutions
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center pb-10">
          <img src="https://ik.imagekit.io/devsh16/Hackathon/About%20page%20assests/1.webp?updatedAt=1753367858232" alt="Award 1" className="rounded-lg shadow-lg" />
          <img src="https://ik.imagekit.io/devsh16/Hackathon/About%20page%20assests/4.webp?updatedAt=1753367858191" alt="Award 2" className="rounded-lg shadow-lg" />
          <img src="https://ik.imagekit.io/devsh16/Hackathon/About%20page%20assests/2.webp?updatedAt=1753367858139" alt="Award 3" className="rounded-lg shadow-lg" />
          <img src="https://ik.imagekit.io/devsh16/Hackathon/About%20page%20assests/3.webp?updatedAt=1753367857956" alt="Award 4" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    <CopyRightSection/>
    </>
  )
}

export default About