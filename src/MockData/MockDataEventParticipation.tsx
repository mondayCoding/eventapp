import { MockStatistic } from './MockEvents';

export const MockDataEventParticipation = {
	labels: MockStatistic.registeredByRole.map((item) => item.role),
	borderColor: '#fff',
	datasets: [
		{
			data: MockStatistic.registeredByRole.map((item) => item.total),
			backgroundColor: ['#F37006', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#F37006', '#36A2EB', '#FFCE56']
		}
	]
};
