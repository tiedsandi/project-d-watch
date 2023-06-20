import "./hero.style.scss";
import Navbar from "../navbar/navbar.component";
import Button from "../button/button.component";

const Hero = () => {
	const navigatePage = () => {};

	return (
		<div className="hero">
			<Navbar />
			<div className="textHero">
				<h1 className="title">
					D`Reviews: Unraveling the Magic of Films and TV Series.
				</h1>
				<h5 className="subTitle">
					Exploring In-Depth Reviews, Insights, and Recommendations
				</h5>

				<Button buttonType="inverted" onClick={navigatePage}>
					Explore Now
				</Button>

				<p className="displayText">Watching</p>
			</div>
		</div>
	);
};

export default Hero;
