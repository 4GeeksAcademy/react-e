import React from "react";
import Navbar from './navbar.js';
import Footer from './footer.js';
import Jumbotron from './jumbotron.js';
import Card from './card.js';
const Home = () => {
	return (
		<div className="text center Container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div class="row">
					<div class="col">
						<Card />
					</div>
					<div class="col">
						<Card />
					</div>
					<div class="col">
						<Card />
					</div>
					<div class="col">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
