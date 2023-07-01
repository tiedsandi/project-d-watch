import { createSelector } from "reselect";

const selectTv = (state) => state.tvserial;

export const allTv = createSelector([selectTv], (tv) => tv.tv.slice(0, 5));

export const loadingTv = createSelector([selectTv], (tv) => tv.isLoading);

export const errorTv = createSelector([selectTv], (tv) => tv.error);
