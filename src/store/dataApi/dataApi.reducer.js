import { DATA_API_ACTION_TYPES } from "./dataApi.types";

export const DATAS_INTIAL_STATE = {
	data: [],
	movies: [],
	tv: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	totalPage: 100,
};

export const datasReducer = (state = DATAS_INTIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case DATA_API_ACTION_TYPES.FETCH_DATAS_START:
			return {
				...state,
				isLoading: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_DATAS_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: payload.data.results,
				currentPage: payload.data.page,
				totalPage: payload.data.total_pages,
			};
		case DATA_API_ACTION_TYPES.FETCH_MOVIE_SUCCESS:
			return {
				...state,
				isLoading: false,
				movies: payload.movie.results,
			};

		case DATA_API_ACTION_TYPES.FETCH_TV_SUCCESS:
			return {
				...state,
				isLoading: false,
				tv: payload.tv.results,
			};
		case DATA_API_ACTION_TYPES.FETCH_DATAS_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};

		default:
			return state;
	}
};
