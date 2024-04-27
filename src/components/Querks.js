import React from "react";
import { QUERKS, SOMETIMES_I } from "../utils/Constants";

const Querks = () => {
	return (
		<div
			className="text-center"
			id="Querks"
		>
			<div className="text-5xl text-black mt-16 ">Querks.</div>
			<div className="text-2xl mt-7">
				{QUERKS.map((item) => (
					<div
						key={item}
						className="text-center text-gray-500  mt-1"
					>
						{item}
					</div>
				))}
			</div>
			<div>
				<p className="text-gray-500 text-center text-4xl m-auto mt-9">Sometimes I</p>
				<div className="text-2xl mt-7">
					{SOMETIMES_I.map((item) => (
						<div
							key={item}
							className="text-center text-gray-500 mt-1"
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Querks;
