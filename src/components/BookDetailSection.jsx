import React from "react";
import CustomCarousel from "./Carousel";
import { Link } from "react-router";

const bkImages = [
  "https://ik.imagekit.io/devsh16/Hackathon/Book%20carousel%20assests/generated-image.png?updatedAt=1753368511115",
  "https://ik.imagekit.io/devsh16/Hackathon/Book%20carousel%20assests/generated-image%20(2).png?updatedAt=1753368510590",
  "https://ik.imagekit.io/devsh16/Hackathon/Book%20carousel%20assests/generated-image%20(1).png?updatedAt=1753368510810",
];

function BookDetailSection() {
  return (
    <div className=" px-10 md:px-20 bg-black pt-10 pb-0">
      <div className="flex flex-col-reverse md:flex-row gap-5 px-26 py-4 justify-center items-center mb-0">
        {/* Left section */}
        <div className="bg-black rounded-2xl px-4 w-full md:w-[90%] text-white flex flex-col justify-center py-17">
          <h2 className="text-6xl font-semibold mb-22  text-white">
            Build, <span className="line-through text-red-600">Don't</span> Talk
          </h2>
          <p className="text-base mb-3 text-gray-200 leading-relaxed">
            Written by{" "}
            <span className="font-semibold text-white">Raj Shamani</span>, this
            bestseller is your no-nonsense guide to stop overthinking and start
            executing. Whether you're an aspiring entrepreneur or just tired of
            "someday", this book gives you 𝘵𝘰𝘰𝘭𝘴 — not theory.
          </p>
          <ul className="list-disc list-inside mb-4 text-sm text-gray-300">
            <li>Practical lessons from real-world experiences</li>
            <li>Easy to read, hard to ignore</li>
            <li>No fluff — just action</li>
          </ul>
          <div className="flex flex-col gap-3 mt-10">
            <p className="text-5xl font-semibold text-white">
              <span className="text-red-600 font-light text-4xl">-54% </span> 
              ₹185
            </p>
            <p className="text-xl text-gray-200 mb-11">
              M.R.P ₹399
            </p>
            <a
              href="https://amzn.in/d/1I8kHeC"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:bg-yellow-500 text-white hover:text-black font-bold py-2 px-11 rounded-2xl w-fit transition-all duration-200 shadow-md hover:scale-105 hover:shadow-amber-50 border text-2xl"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-black rounded-2xl p-4 w-full md:w-1/2 flex justify-center items-center">
          <CustomCarousel
            images={bkImages}
            width="310px"
            height="400px"
            pauseOnHover={true}
            autoRotateSpeed={5000}
            showDots={true}
            showArrows={true}
            infiniteLoop={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BookDetailSection;
