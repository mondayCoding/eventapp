import React, { useContext, useState } from 'react';
import { Heading } from '../Components/Text/Heading';
import { Line, Bar } from 'react-chartjs-2';
import { ThemeContext } from '../Theme/theme';
import { MockRegistratinData } from '../MockData/MockRegistrationData';
import { ButtonLink } from '../Components/Button/ButtonLink';

export const EventAttendanceGraph = () => {
	const theme = useContext(ThemeContext);
	const [showLineGraph, setShowLineGrap] = useState(true);

	const event1Registered = MockRegistratinData.map((item) => item[0].registered);
	const event2Registered = MockRegistratinData.map((item) => item[1].registered);
	const event3Registered = MockRegistratinData.map((item) => item[2].registered);

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
				data: event1Registered
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
				data: event2Registered
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
				data: event3Registered
			}
		]
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

	return (
		<>
			<Heading
				text="Liikenne Avoimissa tapahtumissa"
				ingress="Ilmoittautumiset avoimiin tapahtumiin viimeisen seitsemän päivän ajalta"
				isUnderlined
			/>

			{showLineGraph ? (
				<Line data={attendanceData} height={60} options={usageOptions}></Line>
			) : (
				<Bar data={attendanceData} height={60} options={usageOptions}></Bar>
			)}
			<ButtonLink onClick={() => setShowLineGrap(!showLineGraph)}>
				{showLineGraph ? 'Näytä Palkkidiagrammi' : 'Näytä linjadiagrammi'}
			</ButtonLink>
		</>
	);
};
