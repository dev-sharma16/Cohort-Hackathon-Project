import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	{
		author: {
			fullName: "Arjun Khanna",
			picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
		},
		rating: 5,
		description:
			"This book motivated me to finally start my own project. Raj's insights are practical and encouraging.",
	},
	{
		author: {
			fullName: "Sneha Mehra",
			picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		},
		rating: 4,
		description:
			"Loved the real-life stories and easy language. A must-read for anyone new to entrepreneurship.",
	},
	{
		author: {
			fullName: "Rohit Agarwal",
			picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		},
		rating: 4,
		description:
			"Clear, straight to the point, and packed with actionable advice. Inspired me to focus on building, not just planning.",
	},
    {
		author: {
			fullName: "Priya Kaur",
			picture: "https://randomuser.me/api/portraits/women/65.jpg",
		},
		rating: 5,
		description:
			"Raj Shamani's writing style is relatable and honest. The book kept me hooked till the end!",
	},
    {
		author: {
			fullName: "Varun Sethi",
			picture: "https://randomuser.me/api/portraits/men/79.jpg",
		},
		rating: 3,
		description:
			"Interesting perspectives and good energy. Some tips felt basic but overall helpful for beginners.",
	},
    {
		author: {
			fullName: "Tanvi Kapoor",
			picture: "https://randomuser.me/api/portraits/women/49.jpg",
		},
		rating: 4,
		description:
			"The advice is simple but powerful. I recommend this book to students and young professionals.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<div className="bg-black dark:bg-black shadow-xl rounded-2xl p-6 scale-[0.75] md:scale-90 h-full transform duration-400  hover:shadow-[0_8px_20px_white] hover:scale-95 border">
		<img
			src={testimonial.author.picture}
			alt={testimonial.author.fullName}
			className="max-w-full h-auto rounded-full mb-6 border"
			width="100"
		/>
		<h4 className="text-xl font-medium mb-1">{testimonial.author.fullName}</h4>
		<Rating rating={testimonial.rating} showLabel={false} />
		<p className="opacity-80">{testimonial.description}</p>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial7 = () => {
	return (
		<section className="ezy__testimonial7 light py-14 px-25 md:py-24 bg-black dark:bg-black text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 mb-6 md:mb-12">
					<div className="col-span-12 lg:col-span-5">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
							Everyone should believe in What They Are Saying.
						</h2>
					</div>
					<div className="col-span-12 lg:col-span-4 lg:pl-12">
						<p className="text-lg opacity-80 text-red-500">
							It’s easier to reach your goals when you have the right
							guide. 
						</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-6 ">
					{testimonialList.map((testimonial, i) => (
						<div className="col-span-3 md:col-span-1 " key={i}>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial7
