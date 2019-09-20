import { useState, useEffect } from 'react';
import { CustomerEventsMock, ICustomerEvent } from '../MockData/CustomerEventsMockFeed';

export const useCustomerEvents = () => {
	const [customerEvents, setCustomerEvents] = useState([] as ICustomerEvent[]);

	useEffect(() => {
		setCustomerEvents(CustomerEventsMock);
	}, []);

	return { customerEvents };
};
