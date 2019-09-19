import styled, { css } from '../../Theme/theme';
import { darken, lighten, mix } from 'polished';

export interface IButtonStyleProps {
	isRounded?: boolean;
	isRound?: boolean;
	isLinkBtn?: boolean;
}

const linkButtonCSS = css`
	color: ${(p) => p.theme.link_color};
	border-radius: ${(p) => p.theme.global_border_radius};
	background: none;
	font-weight: 400;

	&:hover {
		background: ${(p) => mix(0.2, 'black', p.theme.link_color)};
	}
`;

const roundedButtonCSS = css`
	border-radius: ${(p) => p.theme.global_border_radius};
`;

const roundButtonCSS = css`
	border-radius: 100%;
	height: 1.55rem;
	width: 1.55rem;
	padding: 0;
	font-size: 0.9rem;
`;

export const ThemedButton = styled.button`
	font-size: ${(p) => p.theme.global_font_size};
	font-family: ${(p) => p.theme.body_font};
	background-color: ${(p) => p.theme.primary_color};
	color: #fff;
	border: 0.15rem solid transparent;
	font-weight: 700;
	width: auto;
	padding: 0.1rem 0.25rem;
	text-align: center;
	line-height: 1;
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

   ${(p: IButtonStyleProps) => p.isLinkBtn && linkButtonCSS}

   ${(p) => p.isRounded && roundedButtonCSS}
   ${(p) => p.isRound && roundButtonCSS}

	& + & {
		margin-left: 0.5rem;
	}

	& > span:not(:first-child) {
		margin-left: 0.35rem;
   }
`;
