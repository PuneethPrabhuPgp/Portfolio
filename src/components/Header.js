import { Fragment } from "react";
import { HEADER_NAV } from "../utils/Constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
	return (
		<div>
			<Navbar
				style={{ backgroundColor: "#41b0bf" }}
				data-bs-theme="dark"
				expand="xxl"
				fixed="top"
				className="text-success "
			>
				<Container className="fs-5 fw-bold">
					<Nav className="me-auto">
						{HEADER_NAV.map((header) => (
							<Fragment key={header}>
								<Nav.Link>{header}</Nav.Link>
							</Fragment>
						))}
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
