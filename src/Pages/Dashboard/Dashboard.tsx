import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '../../Theme/theme';
import { mix } from 'polished';
import { Line, Pie } from 'react-chartjs-2';
import { CardWrapper } from '../MyCollection/MyCollection';
import { FeedCustomers } from '../FeedCustomers/FeedCustomers';
import { FeedSystemEvents } from '../FeedSystemEvents/FeedSystemEvents';
import Icons from '../../Components/Icons/icons';

export const DashBoard = () => {
	return (
		<div>
			<Heading headingText="System Dashboard"></Heading>

			<div className="row">
				<div className="col-lg-4">
					<FakeCardTemp
						value={'12 930, 90 €'}
						icon={Icons.dollar}
						text="Tulot"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></FakeCardTemp>
				</div>
				<div className="col-lg-4">
					<FakeCardTemp
						value={'10013'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
						text="Ilmoittautunutta"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></FakeCardTemp>
				</div>
				<div className="col-lg-4">
					<FakeCardTemp
						value={'428'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
						text="Avattuja viestejä"
						footer="Päivitä nyt"
						footerIcon={Icons.undo}
					></FakeCardTemp>
				</div>
			</div>

			<CardWrapper>
				<Heading
					headingText="Ilmoittautumiset"
					ingress="Tapahtumaan ilmoittautumiset hakuajan alkamisen jälkeen"
				></Heading>
				<Line
					data={dashboard24HoursPerformanceChart.data}
					options={dashboard24HoursPerformanceChart.options}
					width={400}
					height={100}
				/>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<FeedCustomers></FeedCustomers>
					</CardWrapper>
				</div>
				<div className="col-lg-6">
					<CardWrapper>
						<FeedSystemEvents></FeedSystemEvents>
					</CardWrapper>
				</div>
			</div>
		</div>
	);
};

interface IStatCardProps {
	text: string;
	value: string;
	footer: string;
	footerIcon: React.ReactNode;
	icon: React.ReactNode;
}

const FakeCardTemp: FC<IStatCardProps> = (props) => {
	return (
		<FakeCard>
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
		</FakeCard>
	);
};

const FakeCard = styled.div`
	background: ${(p) => p.theme.card_background_color};
	display: flex;
	flex-direction: column;
	border-radius: ${(p) => p.theme.global_border_radius};
	box-shadow: ${(p) => p.theme.global_shadow};
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
				/* font-weight: 900; */
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
			/* flex: 0 0 auto; */
			font-size: 0.9rem;
			color: gray;
			margin-right: 0.5rem;
		}

		&__text {
			/* flex: 1 1 auto; */
			color: gray;
		}
	}
`;

const dashboard24HoursPerformanceChart = {
	data: (canvas: any) => {
		return {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			datasets: [
				{
					borderColor: '#6bd098',
					backgroundColor: '#6bd098',
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 3,
					data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
				},
				{
					borderColor: '#f17e5d',
					backgroundColor: '#f17e5d',
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 3,
					data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
				},
				{
					borderColor: '#fcc468',
					backgroundColor: '#fcc468',
					pointRadius: 0,
					pointHoverRadius: 0,
					borderWidth: 3,
					data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
				}
			]
		};
	},
	options: {
		legend: {
			display: false
		},

		tooltips: {
			enabled: false
		},

		scales: {
			yAxes: [
				{
					ticks: {
						fontColor: '#9f9f9f',
						beginAtZero: false,
						maxTicksLimit: 5
						//padding: 20
					},
					gridLines: {
						drawBorder: false,
						zeroLineColor: '#ccc',
						color: 'rgba(255,255,255,0.05)'
					}
				}
			],

			xAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(255,255,255,0.1)',
						zeroLineColor: 'transparent',
						display: false
					},
					ticks: {
						padding: 20,
						fontColor: '#9f9f9f'
					}
				}
			]
		}
	}
};
