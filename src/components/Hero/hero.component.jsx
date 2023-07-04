import "./hero.style.scss";
import Navbar from "../navbar/navbar.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/imgs/img-hero.jpg";
const Hero = () => {
	const navigate = useNavigate();

	const navigatePage = () => {
		const defaultType = "movie";
		const defaultGenre = "All";
		const defaultSort = "Popular";
		const defaultPage = 1;

		const filterUrl = `${defaultType}-${defaultGenre}-${defaultSort}-${defaultPage}`;
		navigate(`/list/${filterUrl}`);
	};

	return (
		<div className="hero">
			<Navbar />
			<div className="wrapperBanner">
				<img src={Banner} alt="banner" className="banner" />
			</div>
			<div className="textHero">
				<h1 className="title">
					D`Reviews: Unraveling the Magic of Films and TV Series.
				</h1>
				<h5 className="subTitle">
					Exploring In-Depth Reviews, Insights, and Recommendations
				</h5>
				<Button onClick={navigatePage}>Explore Now</Button>
				<p className="displayText">Watching</p>
			</div>
		</div>
	);
};

export default Hero;
