import ContentList from "../../components/contentList/contentList.component";
import Filter from "../../components/filter/filter.component";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from "../../components/pagination/pagination.component";
import "./list.style.scss";

const List = () => {
	return (
		<div className="list">
			<Navbar center={true} />
			<div className="contentList">
				<Filter />
				<ContentList />
				<Pagination />
			</div>
			<Footer />
		</div>
	);
};

export default List;
