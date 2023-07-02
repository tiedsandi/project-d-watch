import { Link } from "react-router-dom";
import "./contentList.style.scss";
import { useSelector } from "react-redux";
import { allData } from "../../store/dataApi/dataApi.selector";

const ContentList = () => {
	const movies = useSelector(allData);
	return (
		<div className="contentList">
			{movies.map((movie) => (
				<Link to={`/${movie.id}`} className="list" key={movie.id}>
					<img
						src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
						alt="img"
						className="img-list"
					/>
				</Link>
			))}
		</div>
	);
};

export default ContentList;
