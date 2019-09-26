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
`;
