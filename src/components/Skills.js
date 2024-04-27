import React from "react";
import { SKILLS } from "../utils/Constants";

const Skills = () => {
	return (
		<div
			className="mt-14 mx-7 p-5 text-center"
			id="Skills"
		>
			<h1 className="text-5xl text-black">Skills.</h1>
			<ul className="list-none flex flex-row mt-20 m-auto ">
				{SKILLS?.map((item) => (
					<li
						key={item.type}
						className="float-left mx-5"
					>
						<img
							alt={item.type}
							src={item.src}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
