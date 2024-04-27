import { Link } from "react-scroll";
import { HEADER_NAV } from "../utils/Constants";

const Header = () => {
	return (
		<div>
			<nav className="bg-[#33ADBD] p-6 w-full">
				<ul className="list-none flex justify-end text-3xl text-white ">
					{HEADER_NAV.map((header) => (
						<li
							key={header}
							className="mx-5 hover:text-violet-600"
						>
							<Link
								activeClass="active"
								smooth
								spy
								to={header}
							>
								{header}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
