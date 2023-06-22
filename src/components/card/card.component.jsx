import "./card.style.scss";

const Card = ({ data }) => {
	const { bg, rating, name, year } = data;

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
		<div className="card">
			<img src={bg} className="cardImg" />
			<div className="wrapperCard">
				<div className={`cardRating ${getRatingColor()}`}>
					{rating.toFixed(1)}
				</div>
				<div className="cardTitles">
					<h1>{name}</h1>
					<h2>{year}</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
