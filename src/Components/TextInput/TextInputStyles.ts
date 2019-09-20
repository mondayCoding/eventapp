import styled, { css } from '../../Theme/theme';
import { mix } from 'polished';

export interface IInputStyleProps {
	hasError?: boolean;
}

export const ThemedTextInput = styled.input`
	flex: 1 1 auto;
	width: 100%;
	max-width: 100%;
	padding: 4px 8px;
	border-radius: ${(p) => p.theme.global_border_radius};
	transition: border-color 0.2s ease-in-out;
	border: 1px solid #e3e3e3;
	font-family: ${(p) => p.theme.body_font};
	font-size: ${(p) => p.theme.global_font_size};
	color: ${(p) => p.theme.text_color};
	background: ${(p) => p.theme.card_background_color};

	&:hover {
		border-color: ${(p) => p.theme.primary_color};
	}

	&:disabled {
		filter: grayscale(90%);
		cursor: not-allowed;
		pointer-events: none;
		opacity: 0.7;
	}

	&:focus {
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}

	&[type='number'] {
		-moz-appearance: textfield;

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			background-color: black !important;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			margin: 0;
		}
	}

	&:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	&:not(:last-child) + button {
		border-top-right-radius: ${(p) => p.theme.global_border_radius};
		border-bottom-right-radius: ${(p) => p.theme.global_border_radius};
	}

	${(p: IInputStyleProps) => p.hasError && errorCSS}
`;

const errorCSS = css`
	background-color: ${(p) => mix(0.8, 'white', p.theme.error_color)};
`;
