import React from "react";
import { Link } from "react-router-dom";
import contactList from "../../img/contact-list.png";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="text-center mt-4">
			<h1>Contact List Manager</h1>
			<p>
				<img className="contactsBook" src={contactList} />
			</p>
			<div className="ml-auto">
				<Link to="/book">
					<button className="btn OpenContactsButton"
					>Open your contacts book</button>
				</Link>
			</div>
		</div>
	);
}


