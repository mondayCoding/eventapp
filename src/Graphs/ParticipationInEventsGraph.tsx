import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ThemeContext } from '../Theme/theme';
import { MockRegistratinData } from '../MockData/MockRegistrationData';

export const ParticipationInEventsGraph = () => {
	const theme = useContext(ThemeContext);

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

	return <Doughnut data={data}></Doughnut>;
};
