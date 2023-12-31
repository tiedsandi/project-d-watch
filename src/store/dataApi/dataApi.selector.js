import { createSelector } from "reselect";

const selectDatas = (state) => state.data;

export const allData = createSelector([selectDatas], (data) => data.data);

export const movieData = createSelector([selectDatas], (data) =>
	data.movies.slice(0, 5)
);

export const tvData = createSelector([selectDatas], (data) =>
	data.tv.slice(0, 5)
);

export const detailData = createSelector([selectDatas], (data) => data.detail);

export const writerArr = createSelector([selectDatas], (data) =>
	data.cast.filter((crew) => crew.known_for_department === "Writing")
);

export const directingArr = createSelector([selectDatas], (data) =>
	data.cast.filter((crew) => crew.known_for_department === "Directing")
);

export const resultSearchArr = createSelector([selectDatas], (data) =>
	data.searchResult.slice(0, 10)
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
	(datas) => datas.isLoadingData
);
export const loadingMovie = createSelector(
	[selectDatas],
	(datas) => datas.isLoadingMovie
);
export const loadingTV = createSelector(
	[selectDatas],
	(datas) => datas.isLoadingTv
);
export const loadingDetail = createSelector(
	[selectDatas],
	(datas) => datas.isLoadingDetail
);
// export const loadingCast = createSelector(
// 	[selectDatas],
// 	(datas) => datas.isLoadingCast
// );
export const loadingSearch = createSelector(
	[selectDatas],
	(datas) => datas.isLoadingSearch
);
export const errorDatas = createSelector([selectDatas], (datas) => datas.error);
