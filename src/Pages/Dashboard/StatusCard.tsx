import React, { FC } from 'react';
import styled from '../../Theme/theme';
import { mix } from 'polished';

interface IStatCardProps {
	text: string;
	value: string;
	icon: React.ReactNode;
	description?: string;
	onClick?: () => void;
}

export const StatCard: FC<IStatCardProps> = (props) => {
	return (
		<StatusCard onClick={props.onClick}>
			<div className="card__body" title={props.description}>
				<div className="card__body__icon">{props.icon}</div>
				<div className="card__body__text">
					<div className="card__body__text__genre">{props.text}</div>
					<div className="card__body__text__value">{props.value}</div>
				</div>
			</div>
		</StatusCard>
	);
};

const StatusCard = styled.div`
	background: ${(p) => p.theme.card_background_color};
	display: flex;
	flex-direction: column;
	border-radius: ${(p) => p.theme.global_border_radius};
	box-shadow: ${(p) => p.theme.shadow.card};
	font-family: ${(p) => p.theme.heading_font};
	margin: 0 0 1rem 0;
	padding: 1rem;
	border-bottom: 3px solid ${(p) => p.theme.primary_color};

	.card__body {
		display: flex;
		flex-direction: row;

		&__icon {
			flex: 0 0 4.5rem;
			height: 4.5rem;
			margin-right: 1rem;
			background: ${(p) => p.theme.menu_background_color};
			border-radius: 0.5rem;
			font-size: 2.8rem;
			color: ${(p) => mix(0.75, p.theme.primary_color, '#fff')};
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__text {
			flex: 1 1 auto;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			text-align: right;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			&__genre {
				font-size: 1.1rem;
				color: gray;
				min-height: 2rem;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			&__value {
				border-top: 1px solid ${(p) => p.theme.border_color};

				font-size: 1.5rem;
				color: ${(p) => p.theme.text_color};
				font-weight: 600;
			}
		}
	}
`;
