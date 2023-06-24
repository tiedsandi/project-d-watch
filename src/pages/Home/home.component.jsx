import Hero from "../../components/Hero/hero.component";
import Featured from "../../components/featured/featured.component";
import Footer from "../../components/footer/footer.component";
import "./home.style.scss";

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Featured />
			<Footer />
		</div>
	);
};

export default Home;
