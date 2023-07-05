import { DATA_API_ACTION_TYPES } from "./dataApi.types";

export const DATAS_INTIAL_STATE = {
	data: [],
	movies: [],
	tv: [],
	detail: {},
	cast: [],
	searchResult: [],
	isLoadingData: false,
	isLoadingMovie: false,
	isLoadingTv: false,
	isLoadingDetail: false,
	// isLoadingCast: false,
	isLoadingSearch: false,
	error: null,
	currentPage: 1,
	totalPage: 500,
};

export const datasReducer = (state = DATAS_INTIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		// LIST API RESULT
		case DATA_API_ACTION_TYPES.FETCH_DATAS_START:
			return {
				...state,
				isLoadingData: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_DATAS_SUCCESS:
			let pages = Math.min(payload.data.total_pages, 500);
			return {
				...state,
				isLoadingData: false,
				data: payload.data.results,
				currentPage: payload.data.page,
				totalPage: pages,
			};

		// MOVIE API
		case DATA_API_ACTION_TYPES.FETCH_MOVIE_START:
			return {
				...state,
				isLoadingMovie: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_MOVIE_SUCCESS:
			return {
				...state,
				isLoadingMovie: false,
				movies: payload.movie.results,
			};

		// TV API
		case DATA_API_ACTION_TYPES.FETCH_TV_START:
			return {
				...state,
				isLoadingTv: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_TV_SUCCESS:
			return {
				...state,
				isLoadingTv: false,
				tv: payload.tv.results,
			};

		// DETAIL API
		case DATA_API_ACTION_TYPES.FETCH_DETAIL_START:
			return {
				...state,
				isLoadingDetail: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_DETAIL_SUCCESS:
			return {
				...state,
				isLoadingDetail: false,
				detail: payload.detail,
			};

		// CAST API
		// case DATA_API_ACTION_TYPES.FETCH_CAST_START:
		// 	return {
		// 		...state,
		// 		isLoadingCast: true,
		// 	};
		case DATA_API_ACTION_TYPES.FETCH_CAST_SUCCESS:
			return {
				...state,
				isLoadingDetail: false,
				cast: payload.cast.crew,
			};

		// SEARCH API
		case DATA_API_ACTION_TYPES.FETCH_SEARCH_START:
			return {
				...state,
				isLoadingSearch: true,
			};
		case DATA_API_ACTION_TYPES.FETCH_SEARCH_SUCCESS:
			return {
				...state,
				isLoadingSearch: false,
				searchResult: payload.searchResult.results,
			};

		case DATA_API_ACTION_TYPES.FETCH_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};

		default:
			return state;
	}
};
