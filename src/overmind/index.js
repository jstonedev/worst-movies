import { derived } from "overmind";
import { createHook } from "overmind-react";
import { queries, fetchData } from "./gql";

export const config = {
	state: {
		movies: [],
		orderedMovies: derived(({ movies }) =>
			[...movies].sort((a, b) => b.likes - a.likes)
		),
		hasLikes: derived(
			({ movies }) =>
				(id) =>
					movies.find((movie) => movie.id === id).likes !== 0
		),
	},
	actions: {
		getMovies: async ({ state }) => {
			const { movies } = await fetchData({ query: queries.movies });

			state.movies = movies.map((movie) => ({
				...movie,
				likes: 0,
			}));
		},
		likeMovie: ({ state }, id) => {
			state.movies = state.movies.map((movie) => {
				if (movie.id === id) {
					return {
						...movie,
						likes: movie.likes + 1,
					};
				}

				return movie;
			});
		},
	},
};

export const useOvermind = createHook();
