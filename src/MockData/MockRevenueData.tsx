import { IExpense, IRevenue } from './MockBudjets';

export const MockRevenueData: IExpense[] = [
	{
		editable: false,
		name: 'Ilmoittautumistulot',
		value: 12034
	},
	{
		editable: true,
		name: 'Tuet',
		value: 7034
	},
	{
		editable: true,
		name: 'Ilmastobonus',
		value: 399
	}
];

export const MockexpenseData: IRevenue[] = [
	{
		editable: true,
		name: 'Palkat',
		value: 21034
	},
	{
		editable: true,
		name: 'Kiinteistön vuokra',
		value: 5034
	}
];
