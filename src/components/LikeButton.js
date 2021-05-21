import styled from "styled-components";
import { useOvermind } from "../overmind";
import Star from "./Star";

const ButtonWrapper = styled.div`
	position: relative;
	display: inline-flex;
`;

const Button = styled.button`
	position: relative;
	background: #65b891;
	border: none;
	padding: 8px 13px;
	color: #2d3047;
	border-radius: 4px;
	cursor: pointer;
	font-weight: bold;
	box-shadow: -3px 4px 7px rgb(0 0 0 / 25%);
	margin-left: 10px;
	transition: all 200ms ease;

	&[disabled] {
		cursor: initial;
		background: #456b59;
	}

	:hover {
		box-shadow: -3px 4px 7px rgb(0 0 0 / 45%);
	}
`;

const LikeButton = ({ liked, onClick, id }) => {
	const { state } = useOvermind();

	return (
		<ButtonWrapper>
			<Star liked={liked} />
			<Button disabled={state.hasLikes(id)} onClick={onClick}>
				Like Movie
			</Button>
		</ButtonWrapper>
	);
};

export default LikeButton;
