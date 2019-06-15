import styled, { css } from '../../Theme/theme';
import { darken, lighten } from 'polished';

export interface IButtonStyleProps {
	isRounded?: boolean;
	isRound?: boolean;
	isIconBtn?: boolean;
	isUppercase?: boolean;
	isFooterBtn?: boolean;
	isLinkBtn?: boolean;
	isLarge?: boolean;
	isEllipsed?: boolean;
	isWide?: boolean;
}

const linkButtonCSS = css`
	color: ${(p) => p.theme.link_color};
	border-radius: ${(p) => p.theme.global_border_radius};
	background: none;
	font-weight: 400;

	&:hover {
		background: ${(p) => p.theme.link_hover_color};
	}
`;

const footerButtonCSS = css`
	background-color: ${(p) => p.theme.gray_black};
	color: #fff;
	font-weight: 500;

	&:hover {
		background-color: ${(p) => lighten(0.33, p.theme.gray_black)};
	}
`;

const roundedButtonCSS = css`
	border-radius: ${(p) => p.theme.global_border_radius};
`;

const ellipsedContentCSS = css`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const roundButtonCSS = css`
	border-radius: 100%;
	height: 1.55rem;
	width: 1.55rem;
	padding: 0;
	font-size: 0.9rem;
`;

const iconButtonCSS = css`
	width: auto;
	height: auto;
	padding: 0;
	font-size: 1.15rem;
	color: ${(p) => p.theme.link_color};
	border-radius: 100%;
	background: none;

	&:hover {
		background: ${(p) => p.theme.link_hover_color};
	}
`;

const largeButtonCSS = css`
	padding: 0.6rem 0.7rem;
`;

const wideButtonCSS = css`
	width: 100%;
	display: block;
`;

const uppercasedButtonCSS = css`
	text-transform: uppercase;
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
   ${(p) => p.isFooterBtn && footerButtonCSS}
   ${(p) => p.isUppercase && uppercasedButtonCSS}
   ${(p) => p.isRounded && roundedButtonCSS}
   ${(p) => p.isRound && roundButtonCSS}
   ${(p) => p.isIconBtn && iconButtonCSS}
   ${(p) => p.isLarge && largeButtonCSS}
   ${(p) => p.isEllipsed && ellipsedContentCSS}
   ${(p) => p.isWide && wideButtonCSS}


	& + & {
		margin-left: 0.5rem;
	}

	& > span:not(:first-child) {
		margin-left: 0.35rem;
   }
`;

//** Upload inputtien tyylittelyä varten, upload elementtejä ei voi toteuttaa buttonilla */
export const LabelWithButtonStyle = styled.label`
	color: #fff;
	font-size: ${(p) => p.theme.global_font_size};
	border: 0.15rem solid transparent;
	font-weight: 700;
	width: auto;
	padding: 0.1rem 0.25rem;
	text-align: center;
	line-height: 1;
	transition: background-color 0.2s;
	background-color: ${(p) => p.theme.primary_color};
	cursor: pointer;

	&:hover {
		background-color: ${(p) => darken(0.2, p.theme.primary_color)};
	}

	&:focus {
		border: 0.15rem solid $white;
		box-shadow: 0 0 5px ${(p) => p.theme.focus_color};

		&::-moz-focus-inner {
			border: 0;
		}
	}

   ${(p: IButtonStyleProps & { isDisabled?: boolean }) => p.isLinkBtn && linkButtonCSS}
   ${(p) => p.isFooterBtn && footerButtonCSS}
   ${(p) => p.isUppercase && uppercasedButtonCSS}
   ${(p) => p.isRounded && roundedButtonCSS}
   ${(p) => p.isLarge && largeButtonCSS}
   ${(p) => p.isWide && wideButtonCSS}
   ${(p) =>
			p.isDisabled &&
			css`
				filter: grayscale(90%);
				cursor: not-allowed;
				pointer-events: none;
				opacity: 0.7;
			`}


	& + &,
	& + .themeupload,
	.themeButtonField + & {
		margin-left: 0.5rem;
	}

	& > span:nth-child(2) {
		margin-left: 0.35rem;
   }

   input[type='file'] {
		display: none;
	}

`;
