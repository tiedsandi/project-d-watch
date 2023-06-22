import FeaturedList from "../featuredList/featuredList.component";
import "./featured.style.scss";

const Featured = () => {
	return (
		<div className="featuredContainer">
			<div className="featuredItem">
				<div className="featuredMovie">
					Movie <span>/ now playing</span>
					<FeaturedList />
				</div>
				<div className="featuredTv">
					TV <span>/ now playing</span>
					<FeaturedList />
				</div>
			</div>
		</div>
	);
};

export default Featured;
