import Card from "../card/card.component";
import "./featuredItem.style.scss";

const FeaturedItem = ({ datas }) => {
	return (
		<div className="featuredItem">
			{datas.map((data) => (
				<Card key={data.id} data={data} />
			))}
		</div>
	);
};

export default FeaturedItem;
