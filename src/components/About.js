import React from "react";
import Contactme from "./Contactme";

const About = () => {
	return (
		<div
			className="mt-16 flex"
			id="About"
		>
			<img
				alt="me"
				src="puneeth.jpg"
				className="rounded-[90%] border-black ml-[10%] "
			/>

			<div className="px-14">
				<div className="text-5xl text-black float-start ">About Me.</div>
				<br />
				<br />
				<div className="text-2xl mt-7 text-gray-500">
					<p>
						Greetings! I am Puneeth Prabhu, a 26 year old Web developer living in Bengaluru, India.
						I am a Computer Science Engineer, currently working with awesome folks at Mercedes Benz
						R&D India.
					</p>
					<br />
					<p>
						Throughout my career, I've had the opportunity to work on a variety of projects, each
						presenting unique challenges and opportunities for growth. I thrive on the continuous
						learning and problem-solving inherent in the tech industry.
					</p>
					<br />
					<p>
						Beyond coding, I play games with my friends and also love to read articles. <br />I also
						love the idea of visting planets other than earth, and imagining how it would feel
						interacting with the environment.
					</p>
					<br />
					<p>
						Interested in discussing how we can collaborate on your next project? Feel free to get
						in touch. <br />
						Let's transform ideas into reality and make a meaningful impact together.
					</p>
					<Contactme width="w-96" />
				</div>
			</div>
		</div>
	);
};

export default About;
