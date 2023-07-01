import { createSelector } from "reselect";

const selectPagination = (state) => state.pagination;

export const selectCurrentPage = createSelector(
	[selectPagination],
	(pagination) => pagination.currentPage
);

export const selectTotalPages = createSelector(
	[selectPagination],
	(pagination) => pagination.totalPages
);

export const selectPageSize = createSelector(
	[selectPagination],
	(pagination) => pagination.pageSize
);
