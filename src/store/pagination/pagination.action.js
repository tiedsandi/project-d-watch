import { PAGINATION_ACTION_TYPES } from "./pagination.types";

export const setCurrentPage = (page) => ({
	type: PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE,
	payload: page,
});

export const setTotalPages = (totalPages) => ({
	type: PAGINATION_ACTION_TYPES.SET_TOTAL_PAGES,
	payload: totalPages,
});

export const setPageSize = (pageSize) => ({
	type: PAGINATION_ACTION_TYPES.SET_PAGE_SIZE,
	payload: pageSize,
});
