import { createSelector } from "reselect";

const selectDatas = (state) => state.datas;

export const allData = createSelector([selectDatas], (data) => data.data);

export const movieData = createSelector([selectDatas], (data) =>
	data.movies.slice(0, 5)
);

export const tvData = createSelector([selectDatas], (data) =>
	data.tv.slice(0, 5)
);

export const pageData = createSelector(
	[selectDatas],
	(data) => data.currentPage
);

export const totalPageData = createSelector(
	[selectDatas],
	(data) => data.totalPage
);

export const loadingDatas = createSelector(
	[selectDatas],
	(datas) => datas.isLoading
);
export const errorDatas = createSelector([selectDatas], (datas) => datas.error);
