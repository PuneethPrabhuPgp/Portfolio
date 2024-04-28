import React, { useEffect, useState } from "react";
import { INTRO_CAROUSEL } from "../utils/Constants";

const Intro = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			if (index === INTRO_CAROUSEL.length - 1) {
				setIndex(0);
			} else {
				setIndex((prevIndex) => prevIndex + 1);
			}
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [index]);

	return (
		<div>
			<section className="bg-[#33ADBD]">
				<div className="relative ">
					<img
						src="intro.gif"
						alt="intro"
						className="mx-auto"
					/>
					<div className="absolute top-[15%]">
						<img
							src="cloud.png"
							alt="intro"
							className="mx-16 w-[30%]"
						/>
						<img
							src="cloud.png"
							alt="intro"
							className="ml-[225%] w-[30%]"
						/>
					</div>
					<br />
					<div className="absolute top-[2%] text-white">
						<span className="italic text text-white text-7xl font-bold font-serif text-center mx-[35rem]">
							Puneeth G Prabhu
						</span>
						<br />
					</div>
					<div className="absolute top-[90%] text-white text-4xl text-center mx-[35rem]">
						<span>I am</span>
						<span className="font-serif italic font-bold"> {INTRO_CAROUSEL[index]}</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Intro;
