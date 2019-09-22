import styled from '../../Theme/theme';
import { darken } from 'polished';

export interface IButtonStyleProps {
	isRounded?: boolean;
	isRound?: boolean;
	isLinkBtn?: boolean;
}

export const ThemedButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: ${(p) => p.theme.global_font_size};
	font-family: ${(p) => p.theme.body_font};
	background-color: ${(p) => p.theme.primary_color};
	border-radius: ${(p) => p.theme.global_border_radius};
	color: #fff;
	border: 0.15rem solid transparent;
	font-weight: 700;
	width: auto;
	padding: 0.24rem 0.5rem;
	text-align: center;
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

	& + & {
		margin-left: 0.5rem;
	}

	& > span:not(:first-child) {
		margin-left: 0.35rem;
	}
`;
