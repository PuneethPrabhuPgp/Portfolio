import { HEADER_NAV } from "../utils/Constants";

const Header = () => {
	return (
		<div>
			<nav>
				<ul>
					{HEADER_NAV.map((section) => (
						<li key={section}>{section}</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
