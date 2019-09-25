import styled from '../../Theme/theme';
import { mix } from 'polished';

export const LoginWrapper = styled.div`
	height: 100vh;
	width: 100%;
	font-family: ${(p) => p.theme.body_font};
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(p) => p.theme.body_background_color};

	.loginbox {
		background: ${(p) => p.theme.menu_background_color};
		width: 100%;
		max-width: 500px;
		min-height: 10rem;
		border: 0;
		color: ${(p) => p.theme.text_color_nav};
		box-shadow: ${(p) => p.theme.shadow.card};
		border-radius: 0.5rem;
		padding: 2rem;
		text-align: center;
		position: relative;

		&__heading {
			display: block;
			margin: 0 0 1rem 0;
			font-size: 3rem;
			justify-content: center;
			color: ${(p) => p.theme.primary_color};
			padding-bottom: 0.5rem;
			border-bottom: 2px solid ${(p) => p.theme.primary_color};

			&__logo {
				display: inline-block;
				margin-right: 1rem;
			}
		}

		&__ingress {
			display: block;
			margin: 0 0 0.5rem 0;
			justify-content: center;
			color: ${(p) => p.theme.text_color_nav};
			padding-bottom: 0.5rem;
		}

		&__inputs {
			color: ${(p) => p.theme.text_color_nav} !important;

			&__input {
				padding: 0.5rem 1rem;
				margin-top: 1rem;
			}
		}

		&__nightmode {
			position: absolute;
			top: 1rem;
			right: 1rem;
		}

		&__buttonfooter {
			margin-top: 2.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			&__btn {
				flex: 0 0 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 2rem;
				border-radius: 0.5rem 0 0 0.5rem;
				padding: 0.5rem 1rem;
				transition: background-color 0.2s ease-in-out;
				background: ${(p) => p.theme.primary_color};
				text-align: center;
				border: 2px solid transparent;
				color: #fff;
				line-height: 1;
				font-weight: 500;

				&:hover {
					background: ${(p) => mix(0.2, '#000', p.theme.primary_color)};
				}
			}

			&__linkbtn {
				flex: 0 0 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 2rem;
				border-radius: 0 0.5rem 0.5rem 0;
				text-decoration: none;
				padding: 0.5rem 1rem;
				transition: background-color 0.2s ease-in-out;
				background: ${(p) => p.theme.link_color};
				text-align: center;
				border: 2px solid transparent;
				color: #fff;
				line-height: 1;
				font-weight: 500;

				&:hover {
					background: ${(p) => mix(0.2, '#000', p.theme.link_color)};
				}
			}
		}
	}
`;
