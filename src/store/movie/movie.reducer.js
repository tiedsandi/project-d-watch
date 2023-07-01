import { MOVIES_ACTION_TYPES } from "./movie.types";

export const MOVIES_INITIAL_STATE = {
	movies: [],
	isLoading: false,
	error: null,
};

export const movieReducer = (state = MOVIES_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case MOVIES_ACTION_TYPES.FETCH_MOVIES_START:
			return {
				...state,
				isLoading: true,
			};
		case MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS:
			// console.log(payload.movies.data);
			return {
				...state,
				isLoading: false,
				movies: payload.movies.data.results,
			};
		case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};
