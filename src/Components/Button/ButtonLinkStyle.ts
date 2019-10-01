import styled from '../../Theme/theme';

export interface IButtonStyleProps {}

export const ThemedButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	font-size: ${(p) => p.theme.global_font_size};
	font-family: ${(p) => p.theme.body_font};
	border-radius: ${(p) => p.theme.global_border_radius};
	color: ${(p) => p.theme.link_color};
	background-color: transparent;
	border: none;
	width: auto;
	padding: 0.15rem 0.25rem;
	text-align: center;
	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: ${(p) => p.theme.body_background_color};
	}

	&:focus {
		box-shadow: ${(p) => p.theme.shadow.focus};
		outline: none;
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
