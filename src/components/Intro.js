import React from "react";

const Intro = () => {
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
							className="ml-[250%] w-[30%]"
						/>
					</div>
					<br />
					<div className="absolute top-[2%] text-white">
						<span className="italic text text-white text-7xl font-bold font-serif text-center mx-[35rem]">
							Puneeth Prabhu
						</span>
						<br />
					</div>
					<div className="absolute top-[90%] text-white text-3xl text-center ml-[40%]">
						<span>I am</span>
						<span className="font-serif italic font-bold"> a web developer</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Intro;
