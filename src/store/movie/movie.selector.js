import { createSelector } from "reselect";

const selectMovies = (state) => state.movie;

export const allMovies = createSelector(
	[selectMovies],
	(movies) =>
		// movies.movies.movies.data.results.slice(0, 5)
		movies.movies.slice(0, 5)
	// @audit blm get api sudah di slice jadi error
);

// export const currentPage = createSelector(
// 	[selectMovies],
// 	(movies) => movies.movies.data.page
// );

// export const totalPages = createSelector(
// 	[selectMovies],
// 	(movies) => movies.movies.data.total_pages
// );

export const loadingMovies = createSelector(
	[selectMovies],
	(movies) => movies.isLoading
);

export const errorMovies = createSelector(
	[selectMovies],
	(movies) => movies.error
);
