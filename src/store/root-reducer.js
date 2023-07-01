import { combineReducers } from "redux";

import { movieReducer } from "./movie/movie.reducer";
import { tvReducer } from "./tvserial/tvserial.reducer";

export const rootReducer = combineReducers({
	movie: movieReducer,
	tvserial: tvReducer,
});
