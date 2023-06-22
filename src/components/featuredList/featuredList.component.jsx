import Card from "../card/card.component";
import "./featuredList.style.scss";
const playlist = [
	{
		id: 1,
		bg: "https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
		rating: 8.7,
		name: "John Wick: Chapter 4",
		year: "2020"
	},
	{
		id: 2,
		bg: "https://image.tmdb.org/t/p/original/6l1SV3CWkbbe0DcAK1lyOG8aZ4K.jpg",
		rating: 4,
		name: "Spider-Man: Across the Spider-Verse",
		year: "2032"
	},
	{
		id: 3,
		bg: "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
		rating: 6.2,
		name: "Shark",
		year: "2000"
	}
];

const FeaturedList = () => {
	return (
		<div className="FLContainer">
			<div className="cardWrapper">
				{playlist.map((play) => (
					<Card key={play.id} data={play} />
				))}
			</div>
		</div>
	);
};

export default FeaturedList;
