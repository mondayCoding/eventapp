import React, { useContext, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { ThemeContext } from '../Theme/theme';
import { MockBudjet } from '../MockData/MockBudjets';
import { ButtonLink } from '../Components/Button/ButtonLink';

export const BudjetProgressionGrap = () => {
	const theme = useContext(ThemeContext);
	const [showLineGraph, setShowLineGraph] = useState(false);
	const data = MockBudjet;

	const attendanceData = {
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
				label: 'Tulot',
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
				data: data.revenueFeed
			},
			{
				label: 'Saatavat',
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
				data: data.outstandingRevenueFeed
			},
			{
				label: 'Menot',
				type: 'line',
				fill: false,
				lineTension: 0.1,
				backgroundColor: theme.warning_color,
				borderColor: theme.warning_color,
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: theme.warning_color,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: theme.warning_color,
				pointHoverBorderColor: theme.warning_color,
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [21000, 21000, 21000, 21000, 21000, 21000, 21000]
			},
			{
				label: 'Tavoite',
				type: 'line',
				fill: false,
				lineTension: 0.1,
				backgroundColor: theme.success_color,
				borderColor: theme.success_color,
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: theme.success_color,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 2,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: theme.success_color,
				pointHoverBorderColor: theme.success_color,
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [23000, 23000, 23000, 23000, 23000, 23000, 23000]
			}
		]
	};

	const usageOptionsBar = {
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
					data.datasets[item.datasetIndex].data[item.index] + ' Kertymä',
				afterLabel: (item: any, data: any) => data.datasets[item.datasetIndex].label
			}
		},
		scales: {
			xAxes: [
				{
					stacked: true
				}
			],
			yAxes: [
				{
					stacked: true,
					ticks: {
						beginAtZero: true,
						max: data.revenueTarget
					}
				}
			]
		}
	};

	const usageOptionsLine = {
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
					data.datasets[item.datasetIndex].data[item.index] + ' Kertymä',
				afterLabel: (item: any, data: any) => data.datasets[item.datasetIndex].label
			}
		},
		scales: {
			xAxes: [
				{
					// stacked: true
				}
			],
			yAxes: [
				{
					stacked: true,
					ticks: {
						beginAtZero: true,
						max: data.revenueTarget
					}
				}
			]
		}
	};

	return (
		<div>
			{showLineGraph ? (
				<Line data={attendanceData} height={80} options={usageOptionsLine}></Line>
			) : (
				<Bar data={attendanceData} height={80} options={usageOptionsBar}></Bar>
			)}
			<ButtonLink
				text={showLineGraph ? 'Näytä Palkkidiagrammi' : 'Näytä Linjadiagrammi'}
				onClick={() => setShowLineGraph(!showLineGraph)}
			></ButtonLink>
		</div>
	);
};
