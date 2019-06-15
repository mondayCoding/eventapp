import styled, { css } from '../../Theme/theme';
import { mix } from 'polished';

// tslint:disable-next-line: no-var-requires
const Textarea = require('react-textarea-autosize').default;

export interface IInputStyleProps {
	'data-haserror'?: boolean;
}

export const TextAreaThemed = styled(Textarea)`
	flex: 1 1 auto;
	width: 100%;
	padding: 6px 8px;
	border-radius: ${(p) => p.theme.global_border_radius};
	transition: border-color 0.2s ease-in-out;
	border: 1px solid #ccc;
	resize: vertical;
	max-height: 20rem;
	min-height: 4rem;
	font-family: ${(p) => p.theme.body_font};
	font-size: ${(p) => p.theme.global_font_size};

	&:hover {
		border-color: ${(p) => p.theme.primary_color};
	}

	&:invalid {
		box-shadow: none;
	}

	&:focus {
		box-shadow: 0 0 4px ${(p) => p.theme.focus_color};
	}

	&:disabled {
		opacity: 0.5;
		cursor: default;
		pointer-events: none;
		resize: none;

		&:hover {
			border-color: #ccc;
		}
	}

	${(p: IInputStyleProps) => p['data-haserror'] && errorCSS}
`;

export const TooltipWrap = styled.div`
	position: relative;
	flex: 0 0 50px;
	align-self: center;
`;

const errorCSS = css`
	background-color: ${(p) => mix(0.8, 'white', p.theme.error_color)};
`;
