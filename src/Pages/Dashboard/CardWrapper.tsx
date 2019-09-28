import styled from '../../Theme/theme';

export const CardWrapper = styled.div`
	padding: 1rem;
	border-radius: ${(p) => p.theme.global_border_radius};
	background: ${(p) => p.theme.card_background_color};
	box-shadow: ${(p) => p.theme.shadow.card};
	color: ${(p) => p.theme.text_color};
	margin-bottom: 1rem;

	& + & {
		margin-top: 1.5rem;
	}

	img.card__image {
		display: block;
		width: 100%;
		max-width: 100%;
		object-fit: cover;
	}

	button.card__button--large {
		display: block;
		padding: 0.5rem 1rem;
		width: 100%;
		margin: 0.5rem 0 0 0;
	}

	a.card__link {
		text-decoration: none;
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
			box-shadow: 0 0 3px ${(p) => p.theme.focus_color};
			outline: none;
		}
	}
`;
