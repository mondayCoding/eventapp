import React, { FC } from 'react';
import styled from '../Theme/theme';
import { mix } from 'polished';

interface BadgeProps {
	description: string;
	icon: React.ReactNode;
	name: string;
}

export const BadgeTag: FC<BadgeProps> = (props) => (
	<BadgeTagSpan title={props.description}>
		<span className="tag__icon">{props.icon}</span>
		{props.name}
	</BadgeTagSpan>
);

const BadgeTagSpan = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0 0.5rem 0 0;
	height: 1.5rem;
	border-radius: 1rem;
	position: relative;
	background: ${(p) => mix(0.2, '#000', p.theme.menu_background_color)};
	color: ${(p) => p.theme.text_color_nav};
	cursor: pointer;

	.tag__icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.25rem;
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 100%;
		font-size: 0.8rem;
		background: ${(p) => mix(0.2, '#000', p.theme.primary_color)};
	}

	& + & {
		margin-left: 0.25rem;
	}
`;
