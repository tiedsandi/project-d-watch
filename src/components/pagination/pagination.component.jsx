import "./pagination.style.scss";
import { ReactComponent as FirstBtn } from "../../assets/icons/left-_1_.svg";
import { ReactComponent as PrevBtn } from "../../assets/icons/left.svg";
import { ReactComponent as NextBtn } from "../../assets/icons/right.svg";
import { ReactComponent as LastButton } from "../../assets/icons/right-_1_.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pageData, totalPageData } from "../../store/dataApi/dataApi.selector";
import { fetchDataStartAsync } from "../../store/dataApi/dataApi.action";

const Pagination = ({ selectedType, selectedGenre, selectedSort }) => {
	const currentPage = useSelector(pageData);
	const allPage = useSelector(totalPageData);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerFirstPage = () => {
		dispatch(fetchDataStartAsync(selectedType, 1, selectedSort));
		navigate(`/list/${selectedType}-${selectedGenre}-${selectedSort}-1`);
	};
	const handlerPrevPage = () => {
		dispatch(fetchDataStartAsync(selectedType, currentPage - 1, selectedSort));
		navigate(
			`/list/${selectedType}-${selectedGenre}-${selectedSort}-${
				currentPage - 1
			}`
		);
	};
	const handlerNextPage = () => {
		dispatch(fetchDataStartAsync(selectedType, currentPage + 1, selectedSort));
		navigate(
			`/list/${selectedType}-${selectedGenre}-${selectedSort}-${
				currentPage + 1
			}`
		);
	};
	const handlerLastPage = () => {
		dispatch(fetchDataStartAsync(selectedType, allPage, selectedSort));
		navigate(
			`/list/${selectedType}-${selectedGenre}-${selectedSort}-${allPage}`
		);
	};

	return (
		<div id="pagination">
			<FirstBtn className="btn-pagination" onClick={handlerFirstPage} />
			<PrevBtn className="btn-pagination" onClick={handlerPrevPage} />
			<h2>
				{currentPage}/{allPage}
			</h2>
			<NextBtn className="btn-pagination" onClick={handlerNextPage} />
			<LastButton className="btn-pagination" onClick={handlerLastPage} />
		</div>
	);
};

export default Pagination;
