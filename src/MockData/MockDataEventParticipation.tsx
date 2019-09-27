import React from 'react';
import { MockStatistic } from './MockEvents';
import { useContext } from 'react';
import { ThemeContext } from '../Theme/theme';
import { Doughnut } from 'react-chartjs-2';

export const EventParticipationByRolesGraph = () => {
	const theme = useContext(ThemeContext);

	const MockDataEventParticipation = {
		labels: MockStatistic.registeredByRole.map((item) => item.role),
		borderColor: '#fff',
		datasets: [
			{
				data: MockStatistic.registeredByRole.map((item) => item.total),
				backgroundColor: [theme.primary_color, theme.secondary_color, '#FFCE56'],
				hoverBackgroundColor: [theme.primary_color, theme.secondary_color, , '#FFCE56']
			}
		]
	};

	const options = {
		elements: {
			center: {
				text: '90%',
				color: '#FF6384', // Default is #000000
				fontStyle: 'Arial', // Default is Arial
				sidePadding: 20 // Defualt is 20 (as a percentage)
			}
		}
	};

	return <Doughnut data={MockDataEventParticipation} options={options}></Doughnut>;
};
