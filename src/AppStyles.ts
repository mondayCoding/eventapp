import styled from './Theme/theme';

const topPanelHeight = '3rem';

export const Body = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	min-height: 100vh;
	background: ${(p) => p.theme.body_background_color};
`;

export const Nav = styled.nav`
	flex: 0 0 ${(p) => p.theme.navbar_width};
	display: flex;
	flex-direction: column;
	color: ${(p) => p.theme.text_color_nav};
	background-color: ${(p) => p.theme.menu_background_color};

	.nav-heading {
		display: flex;
		align-items: center;
		padding: 1rem;
		font-size: 1.25rem;
		color: ${(p) => p.theme.primary_color};
		height: ${topPanelHeight};
		background-color: ${(p) => p.theme.primary_color};
		color: #fff;
	}

	.nav-link {
		display: flex;
		align-items: center;
		padding: 0.75rem 1rem;
		color: ${(p) => p.theme.text_color_nav};
		text-decoration: none;
		border: none;
		outline: none;
		transition: border-right 0.2s ease-in-out, background-color 0.2s ease-in-out;
		border-right: 0px solid ${(p) => p.theme.secondary_color};

		&:hover {
			background-color: black;
			border-right: 4px solid ${(p) => p.theme.secondary_color};
		}

		&.active {
			color: ${(p) => p.theme.primary_color};
			font-weight: 800;
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
`;

export const Main = styled.main`
	flex: 1 1 auto;
	width: 100%;

	.main__footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 0.5rem;
		height: ${topPanelHeight};
		background-color: rgba(0, 0, 0, 0.15);
		justify-content: flex-end;
	}
	.main__top-panel {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 0.5rem;
		height: ${topPanelHeight};
		background-color: rgba(0, 0, 0, 0.15);
		justify-content: flex-end;
	}
`;

export const MainContent = styled.main`
	min-height: calc(100vh - 4.5rem);
	padding: 1rem;
`;
