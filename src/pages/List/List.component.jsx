import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContentList from "../../components/contentList/contentList.component";
import Filter from "../../components/filter/filter.component";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from "../../components/pagination/pagination.component";

import "./list.style.scss";

import { allData } from "../../store/dataApi/dataApi.selector";
import { fetchDataStartAsync } from "../../store/dataApi/dataApi.action";

const List = () => {
	/* @audit-info 
		- pindahin state filter ke list
		- pagination
		- genres
	*/
	const dispatch = useDispatch();
	const datas = useSelector(allData);
	useEffect(() => {
		if (datas.length === 0)
			dispatch(fetchDataStartAsync("movie", 1, "Now Playing"));
	});
	return (
		<div className="list">
			<Navbar center={true} />
			<div className="wrapper-list">
				<Filter />
				<ContentList />
				<Pagination />
			</div>
			<Footer />
		</div>
	);
};

export default List;
