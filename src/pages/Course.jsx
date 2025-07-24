import React from "react";
import heroImg from "../../public/2dcaec58-450a-0df9-7a18-1464f00bcf6a.jpeg"; // Update path if needed

const attendees = [
  { icon: "ri-user-star-line", label: "Personal brands" },
  { icon: "ri-briefcase-line", label: "Entrepreneurs" },
  { icon: "ri-team-line", label: "Influencers" },
  { icon: "ri-video-line", label: "Content Creators" },
  { icon: "ri-user-follow-line", label: "Aspiring Influencers" },
  { icon: "ri-graduation-cap-line", label: "Coaches/ Trainers" },
];

function Course() {
  return (
    <div className=" bg-black pt-33">
      <div className=" flex flex-col justify-center items-center px-10">
        <h2 className="text-xl font-semibold text-center lg:text-left">
          Learn Proven Techniques & Secrets to Grow Your Instagram
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold text-white mt-4 text-center lg:text-left">
          to 1 Million Followers
        </h1>
        <p className="mt-4 text-sm text-gray-300 text-center lg:text-left mb-20">
          By someone who has done it before..
        </p>
        <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-10 border py-25 border-gray-200 p-8 rounded-2xl shadow-lg mb-8">
          {/* Left Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[250px] h-[250px] bg-yellow-400 rounded-full overflow-hidden flex items-end">
              <img
                src={heroImg}
                alt="Raj Shamani"
                className="w-[80%] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="mt-6 font-semibold text-white text-lg mb-2">
              Why attend this workshop?
            </h3>
            <ul className="text-sm space-y-3 text-white">
              <li>
                <span className="text-yellow-400 text-xl">
                  <i class="ri-checkbox-circle-line"></i>
                </span>
                Learn secrets to {" "}
                <span className="font-bold text-yellow-400">
                  grow followers to 1 Million{" "}
                </span>
                on Instagram
              </li>
              <li>
                <span className="text-yellow-400 text-xl">
                  <i class="ri-checkbox-circle-line"></i>
                </span>
                <span className="font-bold text-yellow-400">Go Viral</span>{" "}
                and become the next big influencer, brand and celebrity
              </li>
              <li>
                <span className="text-yellow-400 text-xl">
                  <i class="ri-checkbox-circle-line"></i>
                </span>
                Learn to{" "}
                <span className="font-bold text-yellow-400">
                  make money using your personal brand
                </span>
              </li>
              <li>
                <span className="text-yellow-400 text-xl">
                  <i class="ri-checkbox-circle-line"></i>
                </span>{" "}
                <span className="font-bold text-yellow-400">
                  Start a Side Hustle
                </span>{" "}
                using Instagram
              </li>
            </ul>

            <button className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md hover:scale-105 hover:shadow-amber-50 border">
              JOIN NOW FOR <span className="text-xl">₹99</span>
            </button>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Start Language - Basic English.
            </p>
          </div>
        </div>
        {/* Whats in the worshop section */}
        <div className="py-15 md:px-10 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-15 text-white">
            What will be covered in this <span className="text-yellow-400">workshop?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-yellow-400 text-xl mt-1"></i>
              <p className="text-base ">
                How to increase the chances of trending on the algorithm
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-yellow-400 text-xl mt-1"></i>
              <p className="text-base">
                How to hook people and grab their attention in a noisy world
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-yellow-400 text-xl mt-1"></i>
              <p className="text-base">
                How you can grow your Instagram to 1M followers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-yellow-400 text-xl mt-1"></i>
              <p className="text-base">
                How to make viral content daily in just 5 mins
              </p>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <i className="ri-checkbox-circle-line text-yellow-400 text-xl mt-1"></i>
              <p className="text-base">
                How to come up with what kind of content to put to get maximum growth
              </p>
            </div>
          </div>
        </div>
        {/* Who should attend this workshop section*/}
        <section className="text-center py-10 mb-10">
          <h2 className="text-3xl font-semibold mb-17 text-white">
            Who should attend this <span className="text-yellow-400">workshop?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-8 ">
            {attendees.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3  border border-gray-200 rounded-xl px-5 py-3 w-[280px] hover:shadow-lg transition-all hover:shadow-gray-100 duration-200"
              >
                <div className="bg-yellow-400 p-3 rounded-md ">
                  <i className={`${item.icon} text-black text-xl`}></i>
                </div>
                <p className=" font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-sm text-gray-300">
            Anyone who wants to grow on Instagram and build their social media brand
          </p>
        </section>        
      </div>
    </div>
  );
}

export default Course;