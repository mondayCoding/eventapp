import { useState, useEffect } from 'react';
import { MockCustomers, ICustomer } from '../MockData/MockCustomers';

export const useRegistrationForm = (id?: string | number) => {
	const [form, setForm] = useState(false as ICustomer | false);

	useEffect(() => {
		if (typeof id === 'number' || typeof id === 'string') {
			setForm(MockCustomers.find((cust) => cust.id === id) || false);
		}
	}, [id]);

	return { customer: form };
};
