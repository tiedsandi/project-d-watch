import { combineReducers } from "redux";

import { datasReducer } from "./dataApi/dataApi.reducer";

export const rootReducer = combineReducers({
	data: datasReducer,
});
