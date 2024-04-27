import React from "react";
import { CONNECT_ME } from "../utils/Constants";

const Contactme = () => {
	return (
		<div>
			<ul className="list-none flex flex-row mt-7 m-auto w-[25%]">
				{CONNECT_ME.map((item) => (
					<li
						key={item.type}
						className="float-left mx-5"
					>
						<a
							href={item.ref}
							target="_blank"
							rel="noreferrer"
						>
							<img
								alt={item.type}
								src={item.src}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contactme;
