import Card from "../card/card.component";
import "./featuredItem.style.scss";

const FeaturedItem = ({ datas, type }) => {
	return (
		<div className="featuredItem">
			{datas.map((data) => (
				<Card key={data.id} data={data} type={type} />
			))}
		</div>
	);
};

export default FeaturedItem;
