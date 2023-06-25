import "./card.style.scss";

const Card = ({ data }) => {
	const { bg, rating, name, year, id } = data;

	const getRatingColor = () => {
		if (rating < 5) {
			return "red";
		} else if (rating < 8) {
			return "yellow";
		} else {
			return "green";
		}
	};

	return (
		<a href={`/${id}`} className="card">
			<img src={bg} className="cardImg" alt="backdrop" />
			<div className="wrapperCard">
				<div className={`cardRating ${getRatingColor()}`}>
					{rating.toFixed(1)}
				</div>

				<h1>{name}</h1>
				<h2>{year}</h2>
			</div>
		</a>
	);
};

export default Card;
