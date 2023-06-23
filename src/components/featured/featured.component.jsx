import FeaturedItem from "../featuredItem/featuredItem.component";
import "./featured.style.scss";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredMovie">
				<p className="titleFeatured">
					Movie <span>/ now playing</span>
				</p>
				<FeaturedItem />
			</div>
			<div className="featuredTv">
				<p className="titleFeatured">
					TV <span>/ now playing</span>
				</p>
				<FeaturedItem />
			</div>
		</div>
		// </div>
	);
};

export default Featured;
