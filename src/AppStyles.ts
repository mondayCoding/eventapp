import { styled } from 'library';

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	min-height: 100vh;
	background-color: white;
`;

export const Nav = styled.nav`
	flex: 0 0 auto;
	display: flex;
	width: 100%;
	color: lightgray;
	background-color: #222;
	padding: 0.25rem;

	.nav-link {
		display: block;
		padding: 0.25rem 0.75rem;
		color: lightgreen;
		text-decoration: none;
		border: none;
		outline: none;

		&.active {
			color: lightpink;
		}
	}
`;

export const Main = styled.main`
	flex: 1 1 auto;
	width: 100%;
	background-color: #333;
	padding: 0.5rem;
	color: lightgray;
`;
