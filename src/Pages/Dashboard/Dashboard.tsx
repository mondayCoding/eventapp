import React, { useContext, useState } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Line, Pie, Doughnut, Bar } from 'react-chartjs-2';
import { CardWrapper } from '../MyCollection/MyCollection';
import { FeedCustomers } from '../../Components/FeedCustomers/FeedCustomers';
import { FeedSystemEvents } from '../../Components/FeedSystemEvents/FeedSystemEvents';
import Icons from '../../Components/Icons/icons';
import styled, { ThemeContext } from '../../Theme/theme';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { MockRegistratinData } from '../../MockData/MockEvents';
import { Button } from '../../Components/Button/Button';
import { MultiStatCard } from './MultiStatusCard';
import { useHistory } from 'react-router';
import * as routes from '../../Constants/Routes';

export const DashBoard = () => {
	useDocumentTitle('Dash');
	const history = useHistory();
	const theme = useContext(ThemeContext);
	const [showLineGraph, setShowLineGrap] = useState(true);

	const data = {
		labels: [
			MockRegistratinData[0][0].name,
			MockRegistratinData[0][1].name,
			MockRegistratinData[0][2].name
		],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					theme.primary_color,
					theme.secondary_color,
					'rgba(75,192,192,1)'
				],
				hoverBackgroundColor: [
					theme.primary_color,
					theme.secondary_color,
					'rgba(75,192,192,1)'
				],
				borderColor: theme.primary_color,
				borderWidth: 0
			}
		]
	};

	const usage1 = MockRegistratinData.map((item) => item[0].registered);
	const usage2 = MockRegistratinData.map((item) => item[1].registered);
	const usage3 = MockRegistratinData.map((item) => item[2].registered);

	const usageData = {
		labels: [
			'To. 19.09.',
			'Pe. 20.09.',
			'La. 21.09.',
			'Su. 22.09.',
			'Ma. 23.09.',
			'Ti. 24.09.',
			'Ke. 25.09.'
		],
		datasets: [
			{
				label: MockRegistratinData[0][0].name,
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: usage1
			},
			{
				label: MockRegistratinData[0][1].name,
				fill: false,
				lineTension: 0.1,
				backgroundColor: theme.primary_color,
				borderColor: theme.primary_color,
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: theme.primary_color,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: theme.primary_color,
				pointHoverBorderColor: theme.primary_color,
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: usage2
			},
			{
				label: MockRegistratinData[0][2].name,
				fill: false,
				lineTension: 0.1,
				backgroundColor: theme.secondary_color,
				borderColor: theme.secondary_color,
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: theme.secondary_color,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: theme.secondary_color,
				pointHoverBorderColor: theme.secondary_color,
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: usage3
			}
		]
	};

	const options = {
		legend: {
			display: true,
			labels: {
				// This more specific font property overrides the global property
				fontColor: theme.text_color,
				fontFamily: '"Montserrat", Calibri, Helvetica, Sans'
			}
		},

		tooltips: {
			enabled: true,
			titleFontFamily: '"Montserrat", Calibri, Helvetica, Sans',
			bodyFontFamily: '"Montserrat", Calibri, Helvetica, Sans',
			fontColor: theme.text_color
		},

		scales: {
			// xAxes: [
			// 	{
			// 		scaleLabel: {
			// 			display: true,
			// 			labelString: 'Time in Seconds',
			// 			fontColor: 'red',
			// 			fontFamily: '"Montserrat", Calibri, Helvetica, Sans'
			// 		}
			// 	}
			// ],
			yAxes: [
				{
					// scaleLabel: {
					// 	display: true,

					// 	fontColor: 'red',
					// 	fontFamily: '"Montserrat", Calibri, Helvetica, Sans',
					// 	labelString: 'LABEL'
					// },
					ticks: {
						beginAtZero: true,
						max: 100
					}
				}
			]
		}
	};

	const usageOptions = {
		legend: {
			display: true,
			labels: {
				fontColor: theme.text_color,
				fontFamily: '"Montserrat", Calibri, Helvetica, Sans'
			}
		},

		tooltips: {
			enabled: true,
			titleFontFamily: theme.body_font,
			bodyFontFamily: theme.body_font,
			fontColor: theme.text_color,

			callbacks: {
				label: (item: any, data: any) =>
					data.datasets[item.datasetIndex].data[item.index] + ' ilmoittautui',
				afterLabel: (item: any, data: any) => data.datasets[item.datasetIndex].label
			}
		},

		scales: {
			// xAxes: [
			// 	{
			// 		scaleLabel: {
			// 			display: true,
			// 			labelString: 'Päivittäin',
			// 			fontColor: theme.text_color,
			// 			fontFamily: '"Montserrat", Calibri, Helvetica, Sans'
			// 		}
			// 	}
			// ],
			// yAxes: [
			// 	{
			// 		scaleLabel: {
			// 			display: true,
			// 			fontColor: theme.text_color,
			// 			fontFamily: '"Montserrat", Calibri, Helvetica, Sans',
			// 			labelString: 'Ilmoittautuneita'
			// 		}
			// 	}
			// ]
		}
	};

	const lineData = {
		labels: [
			'19.20',
			'19.30',
			'19.40',
			'19.50',
			'20.00',
			'20.10',
			'20.20',
			'20.30',
			'20.40',
			'20.50',
			'21.00',
			'21.10',
			'21.20',
			'21.30',
			'21.40'
		],

		datasets: [
			{
				label: 'CPU Usage (%)',
				fill: false,
				lineTension: 0.4,
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(75,192,192,1)',
				pointHoverBorderWidth: 3,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [12, 22, 45, 65, 44, 24, 34, 29, 23, 19, 15, 12, 19, 24, 29]
			},
			{
				label: 'Memory Usage (%)',
				fill: false,
				lineTension: 0.4,
				backgroundColor: theme.primary_color,
				borderColor: theme.primary_color,
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: theme.primary_color,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: theme.primary_color,
				pointHoverBorderColor: theme.primary_color,
				pointHoverBorderWidth: 3,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [32, 34, 45, 43, 34, 45, 47, 55, 47, 43, 55, 45, 34, 32, 25]
			}
		]
	};

	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<MultiStatCard
						onClick={() => history.push(routes.events.path)}
						stats={[
							{
								value: '723',
								icon: <span style={{ color: 'lightsalmon' }}>{Icons.user}</span>,
								text: 'Vierailijoita'
							},
							{
								value: '403',
								// state: 'success',
								text: 'Ilmoittautumisia'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								value: '2 301',
								icon: <span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>,
								text: 'Lähetettyjä viestejä'
							},
							{
								value: '1 023',
								// state: 'success',
								text: 'Avattuja viestejä'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								value: '12 930, 90 €',
								icon: Icons.dollar,
								text: 'Tulot'
							},
							{
								value: '2 620, 10 €',
								// state: 'success',
								text: 'Saatavat'
							}
						]}
					></MultiStatCard>
				</div>
			</div>

			<CardWrapper>
				<Heading
					text="Liikenne Avoimissa tapahtumissa"
					ingress="Ilmoittautumiset avoimiin tapahtumiin viimeisen seitsemän päivän ajalta"
					isUnderlined
				/>

				{showLineGraph ? (
					<Line data={usageData} height={60} options={usageOptions}></Line>
				) : (
					<Bar data={usageData} height={60} options={usageOptions}></Bar>
				)}
				<Button onClick={() => setShowLineGrap(!showLineGraph)}>
					{showLineGraph ? 'Näytä Palkkidiagrammi' : 'Näytä linjadiagrammi'}
				</Button>
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

			<CardWrapper>
				<Heading
					text="Järjestelmän käyttöaste"
					ingress="Serverin rasitus viimeisen puolentoista tunnin aikana"
					isUnderlined
				/>

				<Line data={lineData} height={50} options={options}></Line>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<Doughnut data={data}></Doughnut>
					</CardWrapper>
				</div>
				<div className="col-lg-6">
					<CardWrapper>
						<Doughnut data={data}></Doughnut>
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
