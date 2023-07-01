import { TV_ACTION_TYPES } from "./tvserial.types";

export const TV_INITIAL_STATE = {
	tv: [],
	isLoading: false,
	error: null,
	currentPage: 1,
	totalPage: 100,
};

export const tvReducer = (state = TV_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case TV_ACTION_TYPES.FETCH_TV_START:
			return {
				...state,
				isLoading: true,
			};
		case TV_ACTION_TYPES.FETCH_TV_SUCCESS:
			return { ...state, isLoading: false, tv: payload.tv.data.results };
		case TV_ACTION_TYPES.FETCH_TV_FAILED:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};
