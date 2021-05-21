import { useEffect } from "react";
import Main from "../components/Main";
import { useOvermind } from "../overmind";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import { H1 } from "../components/Headings";

const Movies = styled.ul`
	counter-reset: movies;
`;

const Home = () => {
	const {
		state: { orderedMovies },
		actions,
	} = useOvermind();

	useEffect(() => {
		actions.getMovies();
	}, []);

	return (
		<>
			<H1>Worst Movies of All Time</H1>
			<Main>
				<Movies>
					{orderedMovies.length ? (
						orderedMovies.map((movie) => <Movie key={movie.id} {...movie} />)
					) : (
						<Loading />
					)}
				</Movies>
			</Main>
		</>
	);
};

export default Home;
