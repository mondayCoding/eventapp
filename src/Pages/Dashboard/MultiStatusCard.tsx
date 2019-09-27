import React, { FC } from 'react';
import styled, { css } from '../../Theme/theme';
import { mix } from 'polished';

interface IStatCardProps {
	text: string;
	value: string;
	icon?: React.ReactNode;
	description?: string;
	onClick?: () => void;
	state?: 'success' | 'warning' | 'error' | 'info' | 'default';
}

interface IMultiStatusCardsProps {
	stats: IStatCardProps[];
	onClick?: () => void;
}

export const MultiStatCard: FC<IMultiStatusCardsProps> = ({ stats, onClick }) => {
	return (
		<StatusCard onClick={onClick} isInteractive={!!onClick}>
			{stats.map((props, i) => (
				<div
					key={i}
					className="card__body"
					title={props.description}
					onClick={props.onClick}
				>
					<div className={props.icon ? 'card__body__icon' : 'card__body__box'}>
						{props.icon}
					</div>
					<div className="card__body__text">
						<div className="card__body__text__genre">{props.text}</div>
						<div className={'card__body__text__value ' + props.state || 'default'}>
							{props.value}
						</div>
					</div>
				</div>
			))}
		</StatusCard>
	);
};

const StatusCard = styled.div<{ isInteractive: boolean }>`
	background: ${(p) => p.theme.card_background_color};
	display: flex;
	flex-direction: column;
	border-radius: ${(p) => p.theme.global_border_radius};
	box-shadow: ${(p) => p.theme.shadow.card};
	font-family: ${(p) => p.theme.heading_font};
	margin: 0 0 1rem 0;
	padding: 1rem;
	border-bottom: 3px solid ${(p) => p.theme.primary_color};
	transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

	${(p) => p.isInteractive && interactiveCSS}

	.card__body {
		display: flex;
		flex-direction: row;

		& + .card__body {
			margin-top: 0.5rem;
		}

		&__icon {
			flex: 0 0 4rem;
			height: 4rem;
			margin-right: 1rem;
			background: ${(p) =>
				p.theme.is_dark_theme
					? p.theme.body_background_color
					: p.theme.menu_background_color};
			border-radius: 0.5rem;
			font-size: 2.8rem;
			color: ${(p) => mix(0.75, p.theme.primary_color, '#fff')};
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__box {
			flex: 0 0 4rem;
			height: 4rem;
			margin-right: 1rem;
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
				font-size: 1rem;
				color: gray;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			&__value {
				border-top: 1px solid ${(p) => p.theme.border_color};
				font-size: 1.5rem;
				color: ${(p) => p.theme.text_color};
				font-weight: 600;

				&.success {
					color: ${(p) => p.theme.success_color};
				}
				&.warning {
					color: ${(p) => p.theme.warning_color};
				}
				&.error {
					color: ${(p) => p.theme.error_color};
				}
				&.info {
					color: ${(p) => p.theme.info_color};
				}
			}
		}
	}
`;

const interactiveCSS = css`
	cursor: pointer;

	&:hover {
		border-bottom: 3px solid ${(p) => p.theme.info_color};
		box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
	}
`;
