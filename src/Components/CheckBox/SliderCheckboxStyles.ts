import styled from '../../Theme/theme';
import { lighten, mix } from 'polished';

// ************************************
// Slider Checkbox
// ************************************

const box_size = '1.4rem';
const slider_width = '2.8rem';
const slider_height = '1.6rem';

export const SlideCheckboxInput = styled.input`
	left: -999rem;
	position: absolute;

	&:focus + label {
		box-shadow: 0 0 5px ${(p) => p.theme.focus_color};

		&:hover {
			box-shadow: none;
			outline: none;
		}
	}

	&:not(:checked):disabled + label,
	&:checked:disabled + label {
		color: ${lighten(0.8, 'black')};
		cursor: not-allowed;

		&::before {
			background-color: ${lighten(0.4, 'black')};
			border: 0.15rem solid ${lighten(0.4, 'black')};
		}

		&::after {
			background-color: ${lighten(0.8, 'black')};
			color: ${lighten(0.8, 'black')};
			opacity: 0.8;
		}
	}

	/* Ei valittu */
	&:not(:checked) + label {
		&::after {
			background-color: ${({ theme }) => mix(0.5, '#FFF', theme.border_color)};
			left: 0.575rem;
		}
		&::before {
			background-color: #fff;
			left: 0.5rem;
		}
	}

	/* Valittu */
	&:checked + label {
		&::after {
			background-color: ${({ theme }) => theme.primary_color};
			border-color: ${({ theme }) => mix(0.85, '#FFF', theme.primary_color)};
			left: 1.675rem;
		}
		&::before {
			background-color: ${({ theme }) => mix(0.85, '#FFF', theme.primary_color)};
			left: 0.5rem;
		}
	}
`;

export const SliderCheckboxLabel = styled.label`
	font-size: ${(p) => p.theme.global_font_size};
	text-align: left;
	cursor: pointer;
	border-radius: 1rem;
	display: flex;
	flex-direction: row;
	font-weight: 400;
	height: auto;
	justify-content: flex-start;
	padding-left: 3rem;
	align-items: center;
	position: relative;
	user-select: none;
	min-height: 1.8rem;
	padding: 0.35rem 1rem 0.35rem 4rem;
	transition: background-color 0.15s ease-in-out;
	/* width: 100%; */

	&:hover {
		background-color: ${({ theme }) => mix(0.8, '#FFF', theme.primary_color)};
	}

	/* Background */
	&::before {
		display: block;
		background-color: '#FFF';
		border: 1px solid ${({ theme }) => theme.border_color};
		box-shadow: ${({ theme }) => theme.global_shadow_inset};
		content: '';
		left: 0rem;
		position: absolute;
		transition: background-color 0.2s;
		border-radius: ${box_size};
		height: ${slider_height};
		width: ${slider_width};
	}

	/* Knob */
	&::after {
		display: block;
		background-color: ${({ theme }) => theme.primary_color};
		border: 0.2rem solid white;
		border-radius: ${box_size};
		width: ${box_size};
		height: ${box_size};
		content: '';
		font-size: 1.5rem;
		position: absolute;
		transition: left 0.2s, background-color 0.2s, border-color 0.2s;
	}
`;

//*********************************** */
// Inlined variant
//*********************************** */

export const SliderCheckboxLabelInlined = styled.label`
	text-align: left;
	cursor: pointer;
	border-radius: ${box_size};
	display: flex;
	flex-direction: column;
	font-size: 0.95rem;
	font-weight: 400;
	width: ${slider_width};
	height: ${slider_height};
	justify-content: center;
	position: relative;
	user-select: none;
	padding: 0;
	transition: background-color 0.15s ease-in-out;

	/* Background */
	&::before {
		display: block;
		background-color: ${({ theme }) => 'white'};
		border: 1px solid ${({ theme }) => theme.border_color};
		box-shadow: ${({ theme }) => theme.global_shadow_inset};
		content: '';
		position: absolute;
		transition: background-color 0.2s;
		border-radius: ${box_size};
		height: ${slider_height};
		width: ${slider_width};
		transition: border-color 0.2s ease-in-out;
	}

	/* Knob */
	&::after {
		display: block;
		background-color: ${({ theme }) => theme.primary_color};
		border-radius: ${box_size};
		width: ${box_size};
		height: ${box_size};
		content: '';
		border: 0.2rem solid white;
		font-size: 1.5rem;
		position: absolute;
		transition: left 0.2s, background-color 0.2s, border-color 0.2s;
	}
`;

export const SlideCheckboxInputInlined = styled.input`
	left: -999rem;
	position: absolute;

	&:focus + label::before {
		box-shadow: 0 0 5px ${(p) => p.theme.focus_color};
		border-color: ${(p) => p.theme.link_color};
	}

	&:hover + label::before {
		border-color: ${(p) => p.theme.primary_color};
	}

	&:not(:checked):disabled + label,
	&:checked:disabled + label {
		color: ${lighten(0.8, 'black')};
		cursor: not-allowed;

		&::before {
			background-color: ${lighten(0.4, 'black')};
			border: 0.15rem solid ${lighten(0.4, 'black')};
		}

		&::after {
			background-color: ${lighten(0.8, 'black')};
			color: ${lighten(0.8, 'black')};
			opacity: 0.8;
		}
	}

	/* Ei valittu */
	&:not(:checked) + label::after {
		background-color: ${({ theme }) => mix(0.5, '#FFF', theme.border_color)};
		left: 0.175rem;
	}

	/* Valittu */
	&:checked + label {
		&::after {
			background-color: ${({ theme }) => theme.primary_color};
			border-color: ${({ theme }) => mix(0.85, '#FFF', theme.primary_color)};
			left: 1.275rem;
		}
		&::before {
			background-color: ${({ theme }) => mix(0.85, '#FFF', theme.primary_color)};
		}
	}
`;
