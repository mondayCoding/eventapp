import React, { FC } from 'react';
import styled from '../../Theme/theme';
import { mix } from 'polished';
interface IStatCardProps {
	text: string;
	value: string;
	footer: string;
	footerIcon: React.ReactNode;
	icon: React.ReactNode;
}

export const StatCard: FC<IStatCardProps> = (props) => {
	return (
		<StatusCard>
			<div className="card__body">
				<div className="card__body__icon">{props.icon}</div>
				<div className="card__body__text">
					<div className="card__body__text__genre">{props.text}</div>
					<div className="card__body__text__value">{props.value}</div>
				</div>
			</div>

			<div className="card__footer">
				<div className="card__footer__icon">{props.footerIcon}</div>
				<div className="card__footer__text">{props.footer}</div>
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
	margin: 1rem 0;
	padding: 1rem;

	.card__body {
		padding-bottom: 1rem;
		display: flex;
		flex-direction: row;

		&__icon {
			flex: 0 0 30%;
			font-size: 3rem;
			color: ${(p) => mix(0.75, p.theme.primary_color, '#fff')};
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__text {
			flex: 0 0 70%;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			text-align: right;

			&__genre {
				font-size: 1.1rem;
				color: gray;
				min-height: 2rem;
			}

			&__value {
				font-size: 1.5rem;
				color: ${(p) => p.theme.text_color};
				font-weight: 600;
			}
		}
	}

	.card__footer {
		padding-top: 1rem;
		border-top: 1px solid lightgray;
		display: flex;
		justify-content: center;

		&:hover {
			cursor: pointer;
			color: green;
		}

		&__icon {
			font-size: 0.9rem;
			color: gray;
			margin-right: 0.5rem;
		}

		&__text {
			color: gray;
		}
	}
`;
