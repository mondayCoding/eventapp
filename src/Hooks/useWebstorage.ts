import { useState, useEffect } from 'react';

const WISLIST_KEY = 'COLLECTION_APP_WISLIST_ITEMS';

export const useWebstorage = <T>(key: string) => {
	const [savedValue, setSavedValue] = useState({} as T);

	useEffect(() => {
		setSavedValue(JSON.parse(localStorage.getItem(key) || '{}'));
	}, [key]);

	const saveValue = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	return { savedValue, saveValue };
};
