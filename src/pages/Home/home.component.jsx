import { useEffect } from "react";
import Hero from "../../components/Hero/hero.component";
import Featured from "../../components/featured/featured.component";
import Footer from "../../components/footer/footer.component";
import "./home.style.scss";
import { useDispatch } from "react-redux";
import { fetchMoviesStartAsync } from "../../store/movie/movie.action";
import { fetchTvStartAsync } from "../../store/tvserial/tvserial.action";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMoviesStartAsync(1, "Now Playing"));
		dispatch(fetchTvStartAsync(1, "Airing Today"));
	});
	return (
		<div className="home">
			<Hero />
			<Featured />
			<Footer />
		</div>
	);
};

export default Home;
