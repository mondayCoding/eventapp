import React from 'react';
import styled from '../Theme/theme';
import { ReactComponent as Loader } from './Assets/audio.svg';
// import { ReactComponent as Loader2 } from './Assets/puff.svg';
// import { ReactComponent as Loader3 } from './Assets/bars.svg';

export const AppLoader = () => {
	// const roll = Math.random() * 100;
	// const LoaderAnimation = roll < 33 ? Loader : roll < 66 ? Loader2 : Loader3;

	return (
		<LoaderWrapper>
			<div>
				<Loader />
			</div>
			<div>Fetching Data...</div>
		</LoaderWrapper>
	);
};

const LoaderWrapper = styled.main`
	width: 100%;
	height: 100vh;
	background: #222;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	color: lightgray;

	svg {
		font-size: 5rem;
		display: block;
		margin-bottom: 2.2rem;
	}
`;
