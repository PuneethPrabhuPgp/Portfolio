import { Fragment } from "react";
import { HEADER_NAV } from "../utils/Constants";

const Header = () => {
	return (
		<div>
			<nav className="bg-[#41b0bf] p-6">
				<ul className="list-none flex justify-end text-3xl text-white ">
					{HEADER_NAV.map((header) => (
						<li
							key={header}
							className="mx-5"
						>
							{header}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
