import React, { useState } from "react";
import { QUOTES } from "../utils/Constants";

const Quotes = () => {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		if (index === QUOTES.length - 1) setIndex(0);
		else setIndex((prevIndex) => prevIndex + 1);
	};

	const handlePrevious = () => {
		if (index === 0) setIndex(QUOTES.length - 1);
		else setIndex((prevIndex) => prevIndex - 1);
	};

	return (
		<div className="bg-[#e55c4c] h-[150%]">
			<div className="text-5xl text-white mt-16 p-7">Inspiring Quotes.</div>
			<div className=" flex mt-24 pb-28 relative  w-full text-center align-middle justify-center">
				<button
					className="px-[15%]"
					onClick={handlePrevious}
					title="Previous"
				>
					◀
				</button>
				<div>
					<div className="text-3xl text-white w-full">
						{QUOTES[index].quote} <br />
						<br />
						<br /> {QUOTES[index].by}
					</div>
				</div>
				<button
					className="px-[15%]"
					onClick={handleNext}
					title="Next"
				>
					▶
				</button>
			</div>
		</div>
	);
};

export default Quotes;
