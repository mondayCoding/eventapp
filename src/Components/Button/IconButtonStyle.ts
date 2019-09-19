import styled, { css } from '../../Theme/theme';
import { darken, mix } from 'polished';

export interface IButtonStyleProps {
	isXl?: boolean;
	IsLg?: boolean;
}

const isExtraLargeCSS = css`
	width: 2.5rem;
	height: 2.5rem;
	font-size: 1.5rem;
`;

const isLargeCSS = css`
	width: 2rem;
	height: 2rem;
	font-size: 1.5rem;
`;

export const ThemedButton = styled.button<IButtonStyleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5rem;
	height: 1.5rem;
	font-size: 1rem;
	background-color: ${(p) => p.theme.primary_color};
	border-radius: 100%;
	color: #fff;
	border: 0.15rem solid transparent;
	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: ${(p) => darken(0.2, p.theme.primary_color)};
	}

	&:focus {
		border: 0.15rem solid white;
		box-shadow: 0 0 5px ${(p) => p.theme.focus_color};

		&::-moz-focus-inner {
			border: 0;
		}
	}

	&:disabled {
		filter: grayscale(90%);
		cursor: not-allowed;
		pointer-events: none;
		opacity: 0.7;
	}

	${(p) => p.isXl && isExtraLargeCSS}
	${(p) => p.IsLg && isLargeCSS}
`;
