import "./card.style.scss";
import ImgDefault from "../../assets/imgs/img-bg.png";
const Card = ({ data }) => {
	const {
		backdrop_path,
		vote_average,
		title,
		release_date,
		name,
		first_air_date,
		id,
	} = data;

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
		<a href={`/${id}`} className="card">
			<img
				src={
					backdrop_path
						? "https://image.tmdb.org/t/p/original" + backdrop_path
						: ImgDefault
				}
				className="cardImg"
				alt="backdrop"
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
