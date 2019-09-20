import { useState, useEffect } from 'react';
import { ISystemEvent, MockSystemEvents } from '../MockData/SystemEventMockFeed';

export const useEvents = () => {
	const [systemEvents, setSystemEvents] = useState([] as ISystemEvent[]);

	useEffect(() => {
		setSystemEvents(MockSystemEvents);
	}, []);

	return { systemEvents };
};
