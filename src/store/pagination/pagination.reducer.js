import { PAGINATION_ACTION_TYPES } from "./pagination.types";

export const paginationInitialState = {
	currentPage: 1,
	totalPages: 0,
	pageSize: 10,
};

export const paginationReducer = (state = paginationInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case PAGINATION_ACTION_TYPES.SET_CURRENT_PAGE:
			return { ...state, currentPage: payload };
		case PAGINATION_ACTION_TYPES.SET_TOTAL_PAGES:
			return { ...state, totalPages: payload };
		case PAGINATION_ACTION_TYPES.SET_PAGE_SIZE:
			return { ...state, pageSize: payload };
		default:
			return state;
	}
};
