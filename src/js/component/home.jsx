import React from "react";
import Navbar from './navbar.js';
import Footer from './footer.js';
import Jumbotron from './jumbotron.js';
import Card from './card.js';
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="row m-1">
				<div className="col-sm-12 col-md-6 col-lg-3  ">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3  ">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3  ">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3  ">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
