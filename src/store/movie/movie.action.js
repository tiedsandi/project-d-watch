import { MOVIES_ACTION_TYPES } from "./movie.types";
import { createAction } from "../../utils/reducer.utils";

import apiBaseUrl from "../api/apiBaseUrl";

export const fetchMoviesStart = () =>
	createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_START);

export const fetchMoviesSuccess = (moviesArray) =>
	createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS, {
		movies: moviesArray,
	});

export const fetchMoviesFailure = (error) =>
	createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED, error);

export const fetchMoviesStartAsync = (page, type) => {
	if (page === 0 || page === undefined || page === null) {
		page = 1;
	}
	let typeMovies = "";
	switch (type) {
		case "Top rated":
			typeMovies = "top_rated";
			break;
		case "Now Playing":
			typeMovies = "now_playing";
			break;
		case "Upcoming":
			typeMovies = "upcoming";
			break;
		case "Popular":
			typeMovies = "popular";
			break;
		default:
			break;
	}
	return async (dispatch) => {
		dispatch(fetchMoviesStart());
		try {
			const MoviesArray = await apiBaseUrl.get(`/movie/${typeMovies}`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
					page: page,
				},
			});
			dispatch(fetchMoviesSuccess(MoviesArray));
		} catch (error) {
			dispatch(fetchMoviesFailure(error));
		}
	};
};
