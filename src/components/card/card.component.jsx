import "./card.style.scss";
import ImgDefault from "../../assets/imgs/img-bg.png";
import { useState } from "react";
const Card = ({ data, type }) => {
	const {
		backdrop_path,
		vote_average,
		title,
		release_date,
		name,
		first_air_date,
		id,
	} = data;

	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	const getRatingColor = () => {
		if (vote_average < 5) {
			return "red";
		} else if (vote_average < 8) {
			return "yellow";
		} else {
			return "green";
		}
	};

	return (
		<a href={`/${type}/${id}`} className="card">
			<img
				src={
					backdrop_path
						? "https://image.tmdb.org/t/p/original" + backdrop_path
						: ImgDefault
				}
				alt="backdrop"
				className={`cardImg ${imageLoaded ? "imgLoaded" : "imgLoading"}`}
				onLoad={handleImageLoad}
			/>
			<div className="wrapperCard">
				<div className={`cardRating ${getRatingColor()}`}>
					{vote_average.toFixed(1)}
				</div>

				<h1>{title || name}</h1>
				<h2>{release_date || first_air_date}</h2>
			</div>
		</a>
	);
};

export default Card;
