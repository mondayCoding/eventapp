import { useState, useEffect } from 'react';
import { IEvent, MockEvents } from '../MockData/MockEvents';

export const useEvents = () => {
	const [events, setEvents] = useState([] as IEvent[]);

	useEffect(() => {
		setEvents(MockEvents);
	}, []);

	return { events };
};
