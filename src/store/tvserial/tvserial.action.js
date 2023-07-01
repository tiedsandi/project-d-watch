import { TV_ACTION_TYPES } from "./tvserial.types";
import { createAction } from "../../utils/reducer.utils";

import apiBaseUrl from "../api/apiBaseUrl";

export const fetchTVStart = () => createAction(TV_ACTION_TYPES.FETCH_TV_START);

export const fetchTVSuccess = (tvArrays) =>
	createAction(TV_ACTION_TYPES.FETCH_TV_SUCCESS, {
		tv: tvArrays,
	});

export const fetchTVFailure = (error) =>
	createAction(TV_ACTION_TYPES.FETCH_TV_FAILED, error);

export const fetchTvStartAsync = (page, type) => {
	if (page === 0 || page === undefined || page === null) {
		page = 1;
	}
	let typeTv = "";
	switch (type) {
		case "Top rated":
			typeTv = "top_rated";
			break;
		case "Airing Today":
			typeTv = "airing_today";
			break;
		case "On The Air":
			typeTv = "on_the_air";
			break;
		case "Popular":
			typeTv = "popular";
			break;
		default:
			break;
	}
	return async (dispatch) => {
		dispatch(fetchTVStart());
		try {
			const tvArrays = await apiBaseUrl.get(`/tv/${typeTv}`, {
				params: {
					api_key: "b0039237e6e50a87fc14ce83712d689e",
					language: "en-US",
					page: page,
				},
			});
			dispatch(fetchTVSuccess(tvArrays));
		} catch (error) {
			dispatch(fetchTvStartAsync(error));
		}
	};
};
