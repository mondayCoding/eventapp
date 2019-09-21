import { useState, useEffect } from 'react';
import { MockCustomers, ICustomer } from '../MockData/MockCustomers';

export const useCustomers = () => {
	const [customers, setCustomers] = useState([] as ICustomer[]);

	useEffect(() => {
		setCustomers(MockCustomers);
	}, []);

	return { customers };
};
