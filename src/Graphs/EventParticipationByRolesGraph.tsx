import React from 'react';
import { MockStatistic } from '../MockData/MockEvents';
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
				hoverBackgroundColor: [theme.primary_color, theme.secondary_color, '#FFCE56']
			}
		]
	};

	return <Doughnut data={MockDataEventParticipation}></Doughnut>;
};
