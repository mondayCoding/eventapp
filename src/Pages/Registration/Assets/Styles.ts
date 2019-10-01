import styled from '../../../Theme/theme';

export const RegistrationPage = styled.div<{ editing: boolean }>`
	width: 100%;
	background: ${(p) => p.theme.body_background_color};
	font-family: ${(p) => p.theme.body_font};
	color: ${(p) => p.theme.text_color};

	.registration {
		&__top {
			padding: 0.5rem;
			background: ${(p) => p.theme.menu_background_color};
		}

		/* Pääsisältö */
		&__content {
			max-width: 64rem;
			background: ${(p) => p.theme.card_background_color};
			margin: 1.5rem auto;
			box-shadow: 0 0 5px 6px rgba(0, 0, 0, 0.2);
			border-radius: 0.5rem;
			position: relative;

			.TEST {
				position: absolute;
				width: 220px;
				padding: 1rem;
				background: ${(p) => p.theme.menu_background_color};
				right: calc(-230px);
				top: 0;
				border-radius: 0.5rem;

				&__BUTTON {
					margin: 0 0 0.5rem 0 !important;
					width: calc(220px - 2rem);

					&--THEME {
						background: ${(p) => p.theme.secondary_color};
					}
				}
			}

			/* Pääsisällän yläkuva */
			&__header {
				background: lightgray;
				border-radius: 0.5rem 0.5rem 0 0;
				overflow: hidden;

				&__image {
					display: block;
					width: 100%;
					max-height: 20rem;
					object-fit: cover;
				}
			}

			/* Yksittäinen osio */
			&__section {
				padding: 1.5rem;
				position: relative;
				border-bottom: ${(p) => (p.editing ? `1px solid ${p.theme.link_color}` : 'none')};

				&__editing {
					position: absolute;
					top: -1px;
					right: -1rem;
					padding: 0.25rem 0.5rem;
					background: ${(p) => p.theme.menu_background_color};
					display: flex;
					align-items: center;
					flex-direction: row;
					border: 1px solid ${(p) => p.theme.link_color};
					border-radius: 0 0 0 1rem;
					box-shadow: 0 6px 6px 5px rgba(0, 0, 0, 0.15);
				}

				/* Johdanto */
				&__introduction {
					&__heading {
						text-align: center;
						font-size: 1.5rem;
					}
					&__dates {
						display: block;
						text-align: center;
						margin-bottom: 1rem;
					}
					&__ingress {
						display: block;
						padding: 1rem;
						box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
						background: rgba(0, 0, 0, 0.015);

						&__text {
							display: block;
						}
					}
				}

				&--afterword {
					.submit-wrapper {
						display: flex;
						justify-content: center;
						height: 6.5rem;
						align-items: center;
						border-bottom: 1px solid ${(p) => p.theme.border_color};
						border-top: 1px solid ${(p) => p.theme.border_color};

						&__submit-btn {
							padding: 0.5rem 1rem;
							font-size: 1.15rem;
							border-radius: 1rem;
						}
					}
					.organisers {
						display: flex;
						justify-content: space-between;
						padding-top: 1rem;

						&__organiser {
							flex: 0 0 33.33333%;
							display: flex;
							flex-direction: column;

							&__list {
								list-style: none;
							}
						}
					}
				}
			}
		}
		&__footer {
			padding: 1rem;
			background: ${(p) => p.theme.menu_background_color};
			text-align: center;
			display: flex;
			justify-content: center;
			color: gray;
		}
	}
`;
