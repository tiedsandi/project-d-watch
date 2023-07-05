import { DATA_API_ACTION_TYPES } from "./dataApi.types";
import { createAction } from "../../utils/reducer.utils";

import apiBaseUrl from "../api/apiBaseUrl";

export const fetchDataStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DATAS_START);

export const fetchDataSuccess = (datasArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DATAS_SUCCESS, {
		data: datasArr.data,
	});
//
export const fetchMovieStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_MOVIE_START);

export const fetchMovieSuccess = (movieArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_MOVIE_SUCCESS, {
		movie: movieArr.data,
	});

//
export const fetchTvStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_TV_START);
export const fetchTvSuccess = (tvArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_TV_SUCCESS, {
		tv: tvArr.data,
	});

//
export const fetchDetailStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DETAIL_START);
export const fetchDetailSuccess = (detail) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DETAIL_SUCCESS, {
		detail: detail.data,
	});

//
export const fetchCrewStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_CAST_START);
export const fetechCrewSuccess = (crewArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_CAST_SUCCESS, {
		cast: crewArr.data,
	});

//
export const fetchSearchStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_SEARCH_START);
export const fetchSearchSuccess = (searchArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_SEARCH_SUCCESS, {
		searchResult: searchArr.data,
	});

export const fetchDataFailed = (error) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_FAILED, error);

export const fetchDataStartAsync = (type, page, sort, genres) => {
	let sortData = "";
	switch (sort) {
		case "Top rated":
			sortData = "top_rated";
			break;
		case "Popular":
			sortData = "popular";
			break;
		case "Now Playing":
			sortData = "now_playing";
			break;
		case "Upcoming":
			sortData = "upcoming";
			break;
		case "On The Air":
			sortData = "on_the_air";
			break;
		case "Airing Today":
			sortData = "airing_today";
			break;
		default:
			break;
	}

	// let genreIds;
	// if (genres != null) {
	// 	genreIds = genres.join(",");
	// }

	let genreIds = 0;
	switch (genres) {
		case "Action & Adventure":
			if (type === "tv") {
				genreIds = 10759;
			} else genreIds = "";
			break;
		case "Crime":
			genreIds = 80;
			break;
		case "Kids":
			if (type === "tv") {
				genreIds = 10762;
			} else genreIds = "";
			break;
		case "Reality":
			if (type === "tv") {
				genreIds = 10764;
			} else genreIds = "";
			break;
		case "Sci-Fi & Fantasy":
			if (type === "tv") {
				genreIds = 10765;
			} else genreIds = "";
			break;
		case "War & Politic":
			if (type === "tv") {
				genreIds = 10768;
			} else genreIds = "";
			break;
		case "Action":
			genreIds = 28;
			break;
		case "Adventure":
			genreIds = 12;
			break;
		case "Animation":
			genreIds = 16;
			break;
		case "Comedy":
			genreIds = 35;
			break;
		// case "Crime":
		// 	genreIds = 80;
		// 	break;
		case "Drama":
			genreIds = 99;
			break;
		case "Family":
			genreIds = 18;
			break;
		case "Fantasy":
			genreIds = 10751;
			break;
		// case "History":
		// 	genreIds = 36;
		// 	break;
		case "Horror":
			genreIds = 27;
			break;
		// case "Music":
		// 	genreIds = 10402;
		// 	break;
		case "Mystery":
			genreIds = 9648;
			break;
		case "Romance":
			genreIds = 10749;
			break;
		case "Science Fiction":
			genreIds = 878;
			break;
		// case "TV Movie":
		// 	genreIds = 10770;
		// 	break;
		// case "Thriller":
		// 	genreIds = 53;
		// 	break;
		// case "War":
		// 	genreIds = 10752;
		// 	break;
		// case "Western":
		// 	genreIds = 37;
		// 	break;
		default:
			genreIds = "";
			break;
	}

	return async (dispatch) => {
		dispatch(fetchDataStart());
		try {
			const datasArr = await apiBaseUrl.get(`/${type}/${sortData}`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
					page: page || 1,
					with_genres: genreIds,
				},
			});
			dispatch(fetchDataSuccess(datasArr));
		} catch (error) {
			dispatch(fetchDataFailed(error));
		}
	};
};

export const fetchMovieStartAsyncs = () => {
	return async (dispatch) => {
		dispatch(fetchMovieStart());
		try {
			const movieArr = await apiBaseUrl.get(`/movie/now_playing`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
				},
			});
			dispatch(fetchMovieSuccess(movieArr));
		} catch (error) {
			dispatch(fetchDataFailed(error));
		}
	};
};

export const fetchTvStartAsyncs = () => {
	return async (dispatch) => {
		dispatch(fetchTvStart());
		try {
			const tvArr = await apiBaseUrl.get(`/tv/airing_today`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
				},
			});
			dispatch(fetchTvSuccess(tvArr));
		} catch (error) {
			dispatch(fetchDataFailed(error));
		}
	};
};

export const fetchDetailStartAsyncs = (type, id) => {
	return async (dispatch) => {
		dispatch(fetchDetailStart());
		dispatch(fetchCrewStart());
		try {
			const details = await apiBaseUrl.get(`/${type}/${id}`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
				},
			});
			const crewArr = await apiBaseUrl.get(`/${type}/${id}/credits`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
				},
			});
			dispatch(fetchDetailSuccess(details));
			dispatch(fetechCrewSuccess(crewArr));
		} catch (error) {
			dispatch(fetchDataFailed(error));
		}
	};
};

export const fetchSearchStartAsyncs = (query) => {
	return async (dispatch) => {
		dispatch(fetchSearchStart());
		try {
			const searchResult = await apiBaseUrl.get(`/search/multi`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					query: query,
					language: "en-US",
				},
			});
			dispatch(fetchSearchSuccess(searchResult));
		} catch (error) {
			dispatch(fetchDataFailed(error));
		}
	};
};
