import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useOvermind } from "../overmind";
import LikeButton from "./LikeButton";

export const MovieStyled = styled.li`
	list-style: none;
	margin: auto;
	display: flex;
	justify-content: space-between;
	padding: 10px 0;

	a:before {
		counter-increment: movies;
		content: counter(movies) "- ";
	}
`;

const Movie = ({ id, likes, movie }) => {
	const { actions } = useOvermind();
	const [liked, setLiked] = useState(false);

	const likeClicked = () => {
		actions.likeMovie(id);
		setLiked(true);
		window.setTimeout(() => setLiked(false), 500);
	};

	return (
		<MovieStyled>
			<Link to={`movie/${id}`}>{movie}</Link>
			<section>
				{likes} likes
				<LikeButton id={id} onClick={likeClicked} liked={liked} />
			</section>
		</MovieStyled>
	);
};

export default Movie;
