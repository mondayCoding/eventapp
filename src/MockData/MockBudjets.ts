export interface IRevenue {
	name: string;
	value: number;
}

interface IExpense {
	name: string;
	value: number;
}

export const MockExpenseList: IExpense[] = [
	{
		name: 'Palkat',
		value: 21000
	},
	{
		name: 'Tilan vuokra',
		value: 11900
	},
	{
		name: 'Vakuutukset',
		value: 3000
	},
	{
		name: 'Irtaimisto',
		value: 4300
	}
];

export const MockRegistrationForms: IRevenue[] = [
	{
		name: 'Ilmoittautumismaksut',
		value: 43320
	},
	{
		name: 'Tuet',
		value: 10200
	},
	{
		name: 'Veronpalautus',
		value: 1700
	}
];

interface IBudget {
	revenueTarget: number;
	revenueFeed: number[];
	outstandingRevenueFeed: number[];
}

export const MockBudjet: IBudget = {
	revenueTarget: 45000,
	revenueFeed: [420, 890, 4210, 9429, 17020, 36070, 42606],
	outstandingRevenueFeed: [900, 2300, 3400, 2340, 1502, 680, 230]
};
