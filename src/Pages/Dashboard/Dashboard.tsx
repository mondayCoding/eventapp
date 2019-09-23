import React from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Line, Pie } from 'react-chartjs-2';
import { CardWrapper } from '../MyCollection/MyCollection';
import { FeedCustomers } from '../../Components/FeedCustomers/FeedCustomers';
import { FeedSystemEvents } from '../../Components/FeedSystemEvents/FeedSystemEvents';
import Icons from '../../Components/Icons/icons';
import { StatCard } from './StatusCard';
import styled from '../../Theme/theme';

export const DashBoard = () => {
	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<StatCard value={'12 930, 90 €'} icon={Icons.dollar} text="Tulot"></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'10 013'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.users}</span>}
						text="Ilmoittautuneita"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'428'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>}
						text="Avattuja viestejä"
					></StatCard>
				</div>
			</div>

			<CardWrapper>
				<Heading
					text="Ilmoittautumiset"
					ingress="Tapahtumaan ilmoittautumiset hakuajan alkamisen jälkeen"
					isUnderlined
				></Heading>

				<CanvasFix>
					<Line
						data={dashboard24HoursPerformanceChart.data}
						options={dashboard24HoursPerformanceChart.options}
						width={400}
						height={100}
					/>
				</CanvasFix>
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
		</>
	);
};
const CanvasFix = styled.div`
	.chartjs-render-monitor {
		max-width: 100%;
	}
`;

const dashboard24HoursPerformanceChart = {
	data: (canvas: any) => {
		return {
			labels: [
				'Tammi',
				'Helmi',
				'Maa',
				'Huhti',
				'Touko',
				'Kesä',
				'Heinä',
				'Elo',
				'Syys',
				'Loka'
			],
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
