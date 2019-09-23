import React, { FC } from 'react';
import styled from '../../Theme/theme';
import { mix } from 'polished';

interface BadgeProps {
	description?: string;
	text: string;
}

export const Badge: FC<BadgeProps> = (props) => (
	<BadgeTagSpan title={props.description}>{props.text}</BadgeTagSpan>
);

const BadgeTagSpan = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0 0.5rem 0 0.5rem;
	height: 1.25rem;
	border-radius: 1rem;
	position: relative;
	background: ${(p) => mix(0.2, '#000', p.theme.menu_background_color)};
	color: ${(p) => p.theme.text_color_nav};
	cursor: pointer;

	& + & {
		margin-left: 0.25rem;
	}
`;
