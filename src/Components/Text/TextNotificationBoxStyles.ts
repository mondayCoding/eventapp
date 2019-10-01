import styled, { css } from '../../Theme/theme';
import { mix } from 'polished';

export interface IStyleProps {
	isWarning?: boolean;
	isInfo?: boolean;
	isSuccess?: boolean;
	isError?: boolean;
}

export const NotificationBox = styled.div`
	padding: 0.5rem;
	font-size: ${(p) => p.theme.global_font_size};
	border-radius: ${(p) => p.theme.global_border_radius};
	display: flex;
	align-items: center;
	margin-bottom: 1rem;

	.themehighlight--close {
		flex: 0 0 1.5rem;
		font-size: 1.2rem;
		transition: color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			color: white !important;
		}
	}

	.themehighlight--text--content {
		flex: 1 1 auto;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		> svg {
			font-size: 1rem;
			margin-right: 0.5rem;
		}
	}

	${(p: IStyleProps) => p.isWarning && warningProperties}
	${(p: IStyleProps) => p.isSuccess && successProperties}
	${(p: IStyleProps) => p.isError && errorProperties}
	${(p: IStyleProps) => p.isInfo && infoProperties}
`;

const successProperties = css`
	background-color: ${(p) =>
		mix(0.2, p.theme.success_color, p.theme.body_background_color)};
	border: 0.1rem solid ${(p) => mix(0.2, 'black', p.theme.success_color)};

	> .themehighlight--text--content,
	> .themehighlight--close {
		color: ${(p) => mix(0.25, p.theme.text_color, p.theme.success_color)};
	}
`;

const warningProperties = css`
	background-color: ${(p) =>
		mix(0.2, p.theme.warning_color, p.theme.body_background_color)};
	border: 0.1rem solid ${(p) => mix(0.2, 'black', p.theme.warning_color)};

	> .themehighlight--text--content,
	> .themehighlight--close {
		color: ${(p) => mix(0.25, p.theme.text_color, p.theme.warning_color)};
	}
`;

const infoProperties = css`
	background-color: ${(p) => mix(0.2, p.theme.info_color, p.theme.body_background_color)};
	border: 0.1rem solid ${(p) => mix(0.2, p.theme.text_color, p.theme.info_color)};

	> .themehighlight--text--content,
	> .themehighlight--close {
		color: ${(p) => mix(0.25, p.theme.text_color, p.theme.info_color)};
	}
`;

const errorProperties = css`
	background-color: ${(p) =>
		mix(0.2, p.theme.error_color, p.theme.body_background_color)};
	border: 0.1rem solid ${(p) => mix(0.2, 'black', p.theme.error_color)};

	> .themehighlight--text--content,
	> .themehighlight--close {
		color: ${(p) => mix(0.25, p.theme.text_color, p.theme.error_color)};
	}
`;
