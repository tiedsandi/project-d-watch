import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ContentList from "../../components/contentList/contentList.component";
import Filter from "../../components/filter/filter.component";
import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from "../../components/pagination/pagination.component";

import "./list.style.scss";

import { fetchDataStartAsync } from "../../store/dataApi/dataApi.action";
import { loadingDatas } from "../../store/dataApi/dataApi.selector";
import LoadingSection from "../../components/loadingSection/loadingSection.component";

const List = () => {
	const [selectedType, setSelectedType] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedSort, setSelectedSort] = useState("");
	const isLoadingData = useSelector(loadingDatas);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { filter } = useParams();

	useEffect(() => {
		const filterParams = filter.split("-");
		const type = filterParams[0];
		const genre = filterParams[1];
		const sort = filterParams[2];
		const page = parseInt(filterParams[3]);

		setSelectedType(type);
		setSelectedGenre(genre);
		setSelectedSort(sort);

		dispatch(fetchDataStartAsync(type, page, sort, genre));
	}, [filter]);

	const handelFilterResult = () => {
		dispatch(fetchDataStartAsync(selectedType, 1, selectedSort, selectedGenre));
		navigate(`/list/${selectedType}-${selectedGenre}-${selectedSort}-1`);
	};

	return (
		<div className="list">
			<Navbar center={true} />
			<div className="wrapper-list">
				<Filter
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					selectedGenre={selectedGenre}
					setSelectedGenre={setSelectedGenre}
					selectedSort={selectedSort}
					setSelectedSort={setSelectedSort}
					applyFilter={handelFilterResult}
				/>
				{isLoadingData ? (
					<LoadingSection />
				) : (
					<ContentList type={selectedType} />
				)}

				<Pagination
					selectedType={selectedType}
					selectedGenre={selectedGenre}
					selectedSort={selectedSort}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default List;
