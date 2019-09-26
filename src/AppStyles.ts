import styled from './Theme/theme';
import { mix } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const topPanelHeight = '3rem';

export const Body = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	background: ${(p) => p.theme.body_background_color};
	font-family: ${(p) => p.theme.body_font};
	font-size: ${(p) => p.theme.global_font_size};
`;

export const Content = styled(PerfectScrollbar)`
	flex: 1 1 auto;
	width: 100%;
	height: 100vh !important;
`;

export const Main = styled.main`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 3rem);
	padding: 1rem;
`;

export const Nav = styled.nav`
	flex: 0 0 ${(p) => p.theme.navbar_width};
	display: flex;
	flex-direction: column;
	color: ${(p) => p.theme.text_color_nav};
	background-color: ${(p) => p.theme.menu_background_color};
	font-size: ${(p) => p.theme.global_font_size};
	position: relative;
	position: sticky;
	top: 0;

	.navigation {
		position: sticky;
		top: 0;

		&__heading {
			display: flex;
			align-items: center;
			padding: 1rem;
			font-size: 1.25rem;
			color: ${(p) => p.theme.primary_color};
			height: ${topPanelHeight};
			background-color: ${(p) => p.theme.primary_color};
			border-bottom: 1px solid ${(p) => p.theme.primary_color};
			color: #fff;

			&__image {
				flex: 0 0 2.5rem;
				margin-right: 0.75rem;
			}
		}

		&__group-title {
			color: ${(p) => mix(0.6, '#000', p.theme.text_color_nav)};
			font-size: 0.9rem;
			padding: 1.6rem 1rem 0.5rem 1rem;
			border-bottom: 1px solid ${(p) => mix(0.6, '#000', p.theme.text_color_nav)};
		}

		&__link {
			display: flex;
			align-items: center;
			padding: 0.5rem 1rem;
			color: ${(p) => p.theme.text_color_nav};
			text-decoration: none;
			border: none;
			outline: none;
			transition: background-color 0.2s ease-in-out;
			position: relative;

			&:hover {
				background-color: black;
			}

			&.active {
				color: ${(p) => p.theme.primary_color};
				/* font-weight: 800; */

				:after {
					border-right: 17px solid ${(p) => p.theme.body_background_color};
					border-top: 17px solid transparent;
					border-bottom: 17px solid transparent;
					content: '';
					display: inline-block;
					position: absolute;
					right: -0;
					opacity: 1;
					top: 7px;
					transition: opacity 150ms ease-in;
				}
			}

			&__icon {
				font-size: 1.35rem;
				flex: 0 0 2rem;
				color: gray;
			}

			&__text {
				padding-left: 0.5rem;
				flex: 1 1 auto;
			}
		}
	}
`;
