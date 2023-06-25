import React from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import "./detail.style.scss";
import { useNavigate } from "react-router-dom";

const detailMovie = {
	bg: "https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
	overview:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laboriosam nulla, fuga sequi, accusantium assumenda maiores non exercitationem illo voluptates rerum dolores velit repellat quasi excepturi consectetur. Facere, voluptate soluta.",
	genre: "Adventure",
	directory: "Billy Onko",
	writer: "BlackHole",
	title: "Black Demon",
};

const Detail = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	return (
		<div
			className="detail-container"
			style={{ backgroundImage: `url(${detailMovie.bg})` }}
		>
			<div className="detail-overlay">
				<div onClick={goBack}>
					<BackIcon className="back-button" />
				</div>
				<div className="detail-info">
					<div className="detail-group right">
						<h2 className="detail-heading">Director</h2>
						<h3 className="detail-subheading">{detailMovie.directory}</h3>
					</div>
					<div className="detail-group left">
						<h2 className="detail-heading">Genre</h2>
						<h3 className="detail-subheading">{detailMovie.genre}</h3>
					</div>
					<div className="detail-group right">
						<h2 className="detail-heading">Writer</h2>
						<h3 className="detail-subheading">{detailMovie.writer}</h3>
					</div>
				</div>
				<div className="detail-title">
					<h1>{detailMovie.title}</h1>
					<p>{detailMovie.overview}</p>
				</div>
			</div>
		</div>
	);
};

export default Detail;
