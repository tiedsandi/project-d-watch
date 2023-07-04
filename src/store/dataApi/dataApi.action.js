import { DATA_API_ACTION_TYPES } from "./dataApi.types";
import { createAction } from "../../utils/reducer.utils";

import apiBaseUrl from "../api/apiBaseUrl";

export const fetchDataStart = () =>
	createAction(DATA_API_ACTION_TYPES.FETCH_START);

export const fetchDataSuccess = (datasArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DATAS_SUCCESS, {
		data: datasArr.data,
	});

export const fetchMovieSuccess = (movieArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_MOVIE_SUCCESS, {
		movie: movieArr.data,
	});

export const fetchTvSuccess = (tvArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_TV_SUCCESS, {
		tv: tvArr.data,
	});

export const fetchDetailSuccess = (detail) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_DETAIL_SUCCESS, {
		detail: detail.data,
	});

export const fetechCrewSuccess = (crewArr) =>
	createAction(DATA_API_ACTION_TYPES.FETCH_CAST_SUCCESS, {
		cast: crewArr.data,
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

	let genreIds;
	if (genres != null) {
		genreIds = genres.join(",");
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
		dispatch(fetchDataStart());
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
		dispatch(fetchDataStart());
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
		dispatch(fetchDataStart());
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
