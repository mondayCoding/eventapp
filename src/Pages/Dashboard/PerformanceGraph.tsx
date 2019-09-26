import React, { useContext } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { Line } from 'react-chartjs-2';
import { ThemeContext } from '../../Theme/theme';

export const PerformanceGraph = () => {
	const theme = useContext(ThemeContext);

	const performanceData = {
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

	const performanceOptions = {
		legend: {
			display: true,
			labels: {
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
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						max: 100
					}
				}
			]
		}
	};

	return (
		<>
			<Heading
				text="Järjestelmän käyttöaste"
				ingress="Serverin rasitus viimeisen puolentoista tunnin aikana"
				isUnderlined
			/>

			<Line data={performanceData} height={50} options={performanceOptions}></Line>
		</>
	);
};
