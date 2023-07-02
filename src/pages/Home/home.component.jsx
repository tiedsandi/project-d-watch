import { useEffect } from "react";
import Hero from "../../components/Hero/hero.component";
import Featured from "../../components/featured/featured.component";
import Footer from "../../components/footer/footer.component";
import "./home.style.scss";
import { useDispatch } from "react-redux";
import {
	fetchMovieStartAsyncs,
	fetchTvStartAsyncs,
} from "../../store/dataApi/dataApi.action";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovieStartAsyncs());
		dispatch(fetchTvStartAsyncs());
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
