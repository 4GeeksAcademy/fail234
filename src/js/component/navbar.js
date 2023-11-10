import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 ms-5 h1"><i class="fa-solid fa-phone"></i> Contact List with React</span>
			</Link>
		</nav>
	);
};
