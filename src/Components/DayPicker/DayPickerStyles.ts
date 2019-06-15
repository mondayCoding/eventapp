import styled, { css } from '../../Theme/theme';
import { lighten, mix } from 'polished';

interface IStyleProps {
	hasTimeSelect?: boolean;
}

export const DayInput = styled.input`
	border: 1px solid ${(p) => p.theme.gray_light};
	width: 100%;
	padding: 4px 8px;
	border-top-left-radius: ${(p) => p.theme.global_border_radius};
	border-bottom-left-radius: ${(p) => p.theme.global_border_radius};
	font-size: ${(p) => p.theme.global_font_size};
	text-align: right;

	&:hover {
		border-color: ${(p) => p.theme.primary_color};
	}
`;

export const CalenderSpacing = styled.div`
	flex: 0 0 0.5rem;
`;

export const CalenderIcon = styled.span`
	display: flex;

	& > :last-child {
		margin-left: 0.35rem;
	}
`;

const withTimePickerCSS = css`
	.react-datepicker-wrapper {
		max-width: 140px;
	}
`;

const withoutTimePickerCSS = css`
	.react-datepicker-wrapper {
		max-width: 100px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
   flex-direction: row;
   
   & > button {
      border-top-right-radius: ${(p) => p.theme.global_border_radius};
		border-bottom-right-radius: ${(p) => p.theme.global_border_radius};
   }

	${(p: IStyleProps) => (p.hasTimeSelect ? withTimePickerCSS : withoutTimePickerCSS)}

	/* Popup */
	.react-datepicker {
		box-shadow: ${(p) => p.theme.global_shadow};

		.react-datepicker__header {
			/* background-color: ${(p) => mix(0.33, '#fff', p.theme.primary_color)}; */
			color: ${(p) => p.theme.primary_color};
		}

		.react-datepicker__header--time {
			padding-top: 20px;
			padding-bottom: 21px;
		}
	}
`;
