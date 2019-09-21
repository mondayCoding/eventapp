import { useState, useEffect } from 'react';
import { MockSystemEvents, ISystemEvent } from '../MockData/MockSystemEventFeed';

export const useSystemEvents = () => {
	const [systemEvents, setSystemEvents] = useState([] as ISystemEvent[]);

	useEffect(() => {
		setSystemEvents(MockSystemEvents);
	}, []);

	return { systemEvents };
};
