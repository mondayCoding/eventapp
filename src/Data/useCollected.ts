import { useState, useEffect } from 'react';
import axios from 'axios';

const route = '/collections';
const COLLECTED_KEY = 'COLLECTION_APP_COLLECTED_ITEMS';

const useCollected = () => {
	const [collected, setCollected] = useState([] as string[]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		setCollected(getSavedFromWebStorage());
	}, []);

	const toggleCollected = (id: string) => {
		collected.includes(id)
			? updateCollected(collected.filter((item) => item === id))
			: updateCollected([...collected, id]);
	};

	const updateCollected = (newCollected: string[]) => {
		setCollected(newCollected);
		saveCollectedToWebStorage(newCollected);
	};

	const saveCollectedToWebStorage = (collection: string[]) => {
		localStorage.setItem(COLLECTED_KEY, JSON.stringify(collection));
	};

	const getSavedFromWebStorage = (): string[] => {
		const collected = JSON.parse(localStorage.getItem(COLLECTED_KEY) || '[]');
		return Array.isArray(collected) ? collected : [];
	};

	return { collected, isLoading, toggleCollected };
};

export { useCollected };
