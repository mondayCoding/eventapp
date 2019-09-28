interface IUsedModules {
	usePortal: boolean;
	useAccommodations: boolean;
	useOrders: boolean;
}

export interface IUser {
	id: number;
	modules: IUsedModules;
	created?: Date;
}

export const MockCustomers: IUser[] = [];
