import { Link } from "react-router-dom";
import "./contentList.style.scss";
const movieList = {
	page: 1,
	results: [
		{
			id: 1,
			title: "Extraction 2",
			img: "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
		},
		{
			id: 2,
			title: "Extraction 2",
			img: "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
		},
		{
			id: 3,
			title: "Extraction 2",
			img: "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
		},
		{
			id: 4,
			title: "Extraction 2",
			img: "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
		},
		{
			id: 4,
			title: "Extraction 2",
			img: "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
		},
	],
	totalPage: 4,
};
const ContentList = () => {
	return (
		<div className="contentList">
			{movieList.results.map((movie) => (
				<Link to={`/${movie.id}`} className="list">
					<img src={movie.img} alt="img" className="img-list" />
				</Link>
			))}
		</div>
	);
};

export default ContentList;
