import { useState, useEffect } from 'react';
import { CustomerEventsMock, ICustomerEvent } from '../MockData/MockCustomerEventFeed';

export const useCustomerEvents = () => {
	const [customerEvents, setCustomerEvents] = useState([] as ICustomerEvent[]);

	useEffect(() => {
		setCustomerEvents(CustomerEventsMock);
	}, []);

	return { customerEvents };
};
