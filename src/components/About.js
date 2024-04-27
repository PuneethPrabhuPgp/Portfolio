import React from "react";
import { Link } from "react-scroll";

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
				<div className="text-2xl mt-7 text-gray-500 p-3">
					<p>
						Greetings! I am{" "}
						<a
							href="https://github.com/PuneethPrabhuPgp/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-purple-600"
						>
							Puneeth Prabhu
						</a>
						, a 26 year old Web developer living in{" "}
						<a
							href="https://www.google.com/maps/d/viewer?mid=1jjdOnB91E1dK8dHGVI3h8cHWE40&hl=en_US&ll=13.072006049550708%2C77.63024850000004&z=11"
							target="_blank"
							rel="noreferrer"
							className="hover:text-purple-600"
						>
							Bengaluru, India.
						</a>{" "}
						I am a Computer Science Engineer, currently working with awesome folks at{" "}
						<a
							href="https://www.mbrdi.co.in/#/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-purple-600"
						>
							Mercedes Benz R&D India.
						</a>
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

					<button className="rounded-lg shadow-lg bg-[#33ADBD] text-white p-3 m-7">
						<Link
							activeClass="active"
							smooth
							spy
							to="Connect with me"
						>
							Connect
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
