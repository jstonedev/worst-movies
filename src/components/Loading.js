import React from "react";
import styled, { keyframes } from "styled-components";

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoadingBase = styled.div`
	display: inline-block;
	position: absolute;
	width: 80px;
	height: 80px;
	top: 50vh;
	left: 50vw;
	transform: translateX(-50%) translateY(-50%);

	div {
		position: absolute;
		border: 4px solid #fff;
		opacity: 1;
		border-radius: 50%;
		animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

		:nth-child(2) {
			animation-delay: -0.5s;
		}
	}
`;

const Loading = () => (
	<LoadingBase>
		<div></div>
		<div></div>
	</LoadingBase>
);

export default Loading;
