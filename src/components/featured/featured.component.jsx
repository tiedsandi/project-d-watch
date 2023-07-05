import { useSelector } from "react-redux";
import FeaturedItem from "../featuredItem/featuredItem.component";
import "./featured.style.scss";
import {
	loadingMovie,
	loadingTV,
	movieData,
	tvData,
} from "../../store/dataApi/dataApi.selector";

const Featured = () => {
	const movies = useSelector(movieData);
	const tv = useSelector(tvData);

	const isLoadingMovie = useSelector(loadingMovie);
	const isLoadingTV = useSelector(loadingTV);

	return (
		<div className="featured">
			<div className="featuredMovie">
				<p className="titleFeatured">
					Movie <span>/ now playing</span>
				</p>
				{isLoadingMovie ? (
					<p>Loading...</p>
				) : (
					<FeaturedItem datas={movies} type={"movie"} />
				)}
			</div>
			<div className="featuredTv">
				<p className="titleFeatured">
					TV <span>/ on the air</span>
				</p>
				{isLoadingTV ? (
					<p>Loading...</p>
				) : (
					<FeaturedItem datas={tv} type={"tv"} />
				)}
			</div>
		</div>
	);
};

export default Featured;
