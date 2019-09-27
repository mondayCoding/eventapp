import { useState, useEffect } from 'react';
import { MockCustomers, ICustomer } from '../MockData/MockCustomers';

export const useCustomer = (id?: string | number) => {
	const [customer, setCustomer] = useState(false as ICustomer | false);

	useEffect(() => {
		if (typeof id === 'number' || typeof id === 'string') {
			setCustomer(MockCustomers.find((cust) => cust.id === id) || false);
		}
	}, [id]);

	return { customer };
};
