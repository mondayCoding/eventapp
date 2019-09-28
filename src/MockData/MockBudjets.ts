export interface IRevenue {
	name: string;
	value: number;
	editable: boolean;
}

export interface IExpense {
	name: string;
	value: number;
	editable: boolean;
}

export const MockExpenseList: IExpense[] = [
	{
		name: 'Palkat',
		value: 21000,
		editable: true
	},
	{
		name: 'Tilan vuokra',
		value: 11900,
		editable: true
	},
	{
		name: 'Vakuutukset',
		value: 3000,
		editable: true
	},
	{
		name: 'Irtaimisto',
		value: 4300,
		editable: true
	}
];

export const MockRegistrationForms: IRevenue[] = [
	{
		name: 'Ilmoittautumismaksut',
		value: 43320,
		editable: false
	},
	{
		name: 'Tuet',
		value: 10200,
		editable: true
	},
	{
		name: 'Veronpalautus',
		value: 1700,
		editable: true
	}
];

interface IBudget {
	revenueTarget: number;
	revenueFeed: number[];
	outstandingRevenueFeed: number[];
}

export const MockBudjet: IBudget = {
	revenueTarget: 45000,
	revenueFeed: [1420, 1890, 4210, 9429, 17020, 36070, 42606],
	outstandingRevenueFeed: [2900, 7500, 6400, 5340, 4502, 2680, 1230]
};
