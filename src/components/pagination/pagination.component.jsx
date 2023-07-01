import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setCurrentPage,
	setTotalPages,
	setPageSize,
} from "../../store/pagination/pagination.action";
import {
	selectCurrentPage,
	selectTotalPages,
	selectPageSize,
} from "../../store/pagination/pagination.selector";

import "./pagination.style.scss";

const Pagination = () => {
	const dispatch = useDispatch();
	const currentPage = useSelector(selectCurrentPage);
	const totalPages = useSelector(selectTotalPages);
	const pageSize = useSelector(selectPageSize);

	useEffect(() => {
		fetchData();
	}, [currentPage, pageSize]);

	const fetchData = async () => {
		try {
			// Simulating API response
			const mockResponse = {
				data: [
					{ id: 1, title: "Movie 1" },
					{ id: 2, title: "Movie 2" },
					{ id: 3, title: "Movie 3" },
					// ...
				],
				currentPage: currentPage,
				totalPages: totalPages,
				pageSize: pageSize,
			};

			// Simulate a delay to mimic API response time
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Handle the fetched data, e.g., dispatch an action to update the store
			// dispatch(fetchMoviesSuccess(mockResponse.data));

			// Update the total pages and page size in the store
			// dispatch(setTotalPages(mockResponse.totalPages));
			// dispatch(setPageSize(mockResponse.pageSize));
		} catch (error) {
			// Handle any network errors or other exceptions
			// dispatch(fetchMoviesFailure(error.message));
		}
	};

	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	const handleFirstPage = () => {
		dispatch(setCurrentPage(1));
	};

	const handleLastPage = () => {
		dispatch(setCurrentPage(totalPages));
	};

	const renderPageButtons = () => {
		const pageButtons = [];

		const minPage = Math.max(1, currentPage - 2);
		const maxPage = Math.min(totalPages, currentPage + 2);

		for (let page = minPage; page <= maxPage; page++) {
			pageButtons.push(
				<button
					key={page}
					className={`pagination-button ${
						page === currentPage ? "active" : ""
					}`}
					onClick={() => handlePageChange(page)}
				>
					{page}
				</button>
			);
		}

		return pageButtons;
	};

	return (
		<div className="home-container">
			{/* Render your data */}
			<div className="pagination-container">
				<button
					className="pagination-button"
					onClick={handleFirstPage}
					disabled={currentPage === 1}
				>
					First
				</button>
				<button
					className="pagination-button"
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev
				</button>
				{renderPageButtons()}
				<button
					className="pagination-button"
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
				<button
					className="pagination-button"
					onClick={handleLastPage}
					disabled={currentPage === totalPages}
				>
					Last
				</button>
			</div>
		</div>
	);
};

export default Pagination;
