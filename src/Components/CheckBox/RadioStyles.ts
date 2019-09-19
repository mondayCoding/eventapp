import styled from '../../Theme/theme';
import { lighten } from 'polished';

export const RadioWrapDiv = styled.div`
	& > input[type='radio'] {
		position: absolute;
		left: -999rem;

		&:focus + label {
			box-shadow: 0 0 5px ${(p) => p.theme.focus_color};
		}

		&:disabled + label {
			color: ${lighten(0.4, 'black')};
			cursor: default;

			&::before {
				border-color: ${lighten(0.8, 'black')};
				background-color: ${lighten(0.8, 'black')};
				border: 0.1rem solid ${lighten(0.8, 'black')};
			}

			&::after {
				color: ${lighten(0.4, 'black')};
			}
		}

		&:not(:checked) + label::after {
			opacity: 0;
		}

		&:checked + label::after {
			opacity: 1;
		}
	}

	[type='radio'] + label {
		font-size: ${(p) => p.theme.global_font_size};
		text-align: left;
		font-weight: 400;
		position: relative;
		border-radius: 1rem;
		cursor: pointer;
		height: auto;
		display: flex;
		align-items: center;
		user-select: none;
		padding: 0.5rem 0.5rem 0.5rem 2.9rem;
		min-height: 1.6rem;

		&:hover {
			background-color: ${(p) => lighten(0.5, p.theme.primary_color)};
		}

		/* bg */
		&::before {
			content: '';
			width: 1.5rem;
			height: 1.5rem;
			position: absolute;
			left: 0.5rem;
			border-radius: 100%;
			background-color: #fff;
			transition: opacity 0.2s;
			border: 1px solid ${(p) => p.theme.separator_color};
			box-shadow: ${(p) => p.theme.global_shadow_inset};
		}

		/* checkmark */
		&::after {
			content: '';
			width: 1rem;
			height: 1rem;
			border-radius: 100%;
			/* border: 0.1rem solid white; */
			position: absolute;
			left: 0.75rem;
			line-height: 1.8;
			font-size: 1.5rem;
			transition: opacity 0.2s;
			color: ${(p) => p.theme.primary_color};
			background-color: ${(p) => p.theme.primary_color};
		}
	}

	[type='radio']:not(:checked) + label::after {
		opacity: 0;
	}

	[type='radio']:checked + label {
		&::after {
			opacity: 1;
		}
	}
`;
