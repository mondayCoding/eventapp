import React from 'react';
import Icons from '../Components/Icons/icons';
import styled from '../Theme/theme';

export const AppLoader = () => (
	<LoaderWrapper>
		<div>{Icons.spinner}</div>
		<div>Working...</div>
	</LoaderWrapper>
);

const LoaderWrapper = styled.main`
	width: 100%;
	height: 100vh;
	background: #222;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	font-size: 2.5rem;
	color: lightgray;

	svg {
		font-size: 4rem;
		display: block;
		margin-bottom: 1rem;
	}
`;
