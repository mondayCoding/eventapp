import styled from '../../Theme/theme';

const topPanelHeight = '3rem';

export const TopPanelThemed = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: right;
	align-items: center;
	width: 100%;
	padding: 0.5rem 1rem;
	height: ${topPanelHeight};
	border-bottom: 1px solid lightgray;

	.react-autosuggest__container {
		position: relative;
		flex: 1 1 auto;

		.react-autosuggest__input {
			border: ${(p) => p.theme.input_border};
			border: none;
			width: 100%;
			max-width: 400px;
			background: ${(p) => p.theme.input_background};
			padding: 0.5rem 1rem;
			color: ${(p) => p.theme.text_color};
			/* border-radius: ${(p) => p.theme.global_border_radius}; */
			border-radius: 1rem;
			margin-right: auto;
			box-shadow: inset 0px 0px 10px -6px rgba(0, 0, 0, 0.75);
		}

		.react-autosuggest__suggestions-container {
			display: none;
			width: 100%;
			max-width: 400px;
			background: ${(p) => p.theme.menu_background_color};
			color: ${(p) => p.theme.text_color_nav};
			padding: 0;
			border-radius: 0.35rem;
		}
		.react-autosuggest__suggestions-container--open {
			display: block;
			position: absolute;
			top: 100%;
			z-index: 100;
		}
		.react-autosuggest__suggestions-list {
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.react-autosuggest__suggestion {
			padding: 0.5rem 0.7rem;
			cursor: pointer;

			&:last-child {
				border-radius: 0 0 0.35rem 0.35rem;
			}
			&:first-child {
				border-radius: 0.35rem 0.35rem 0 0;
			}
		}
		.react-autosuggest__suggestion--highlighted {
			background: ${(p) => p.theme.primary_color};
			color: #fff;
		}
	}

   .panel__icon-and-text > svg {
      margin-right: .35rem;      
   }

	.panel__themebutton {
		flex: 0 0 2.3rem;    
	}
	.panel__menubutton {
		flex: 0 0 auto;
		position: relative;

		.panel__menubutton__menu {
			display: flex;
			flex-direction: column;
			white-space: nowrap;
			box-shadow: none !important;
			position: absolute;
			top: 100%;
			right: 0;
			border-radius: 0.3rem;
         z-index: 20;

			&[aria-orientation='vertical'] {
				padding: 0.25em 0;
			}

			&[aria-orientation='horizontal'] {
				padding: 0;
			}

			.panel__menubutton__menuitem {
				line-height: 1.5;
				padding: 0.5rem 0.75rem;
				text-align: left;
				justify-content: flex-start;
				border: 0;
				border-radius: 0;
				font-size: 100%;
				color: ${(p) => p.theme.text_color_nav};
				background: ${(p) => p.theme.menu_background_color};
				margin: 0;
				user-select: none;
				cursor: default;

				&:focus,
				&[aria-expanded='true'] {
					background-color: ${(p) => p.theme.primary_color};
					color: white;
					box-shadow: none !important;
				}
				&:active {
					background-color: ${(p) => p.theme.primary_color} !important;
				}

				&:last-child {
					border-radius: 0 0 0.35rem 0.35rem;
				}
				&:first-child {
					border-radius: 0.35rem 0.35rem 0 0;
				}
			}
		}
	}
`;
