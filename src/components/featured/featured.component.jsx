import { useSelector } from "react-redux";
import FeaturedItem from "../featuredItem/featuredItem.component";
import "./featured.style.scss";
import { allMovies } from "../../store/movie/movie.selector";
import { allTv } from "../../store/tvserial/tvserial.selector";

const Featured = () => {
	const movies = useSelector(allMovies);
	const tv = useSelector(allTv);
	// @audit loading error

	return (
		<div className="featured">
			<div className="featuredMovie">
				<p className="titleFeatured">
					Movie <span>/ now playing</span>
				</p>
				<FeaturedItem datas={movies} />
			</div>
			<div className="featuredTv">
				<p className="titleFeatured">
					TV <span>/ now playing</span>
				</p>
				<FeaturedItem datas={tv} />
			</div>
		</div>
	);
};

export default Featured;
