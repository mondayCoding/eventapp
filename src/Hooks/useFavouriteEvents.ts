import { useState, useEffect } from 'react';

const COLLECTED_KEY = 'EVENT_APP_FAVOURITE_EVENTS';

export const useFavouriteEvents = () => {
	const [favourites, setFavourites] = useState([] as string[]);

	useEffect(() => {
		setFavourites(getSavedFromWebStorage());
	}, []);

	const toggleFavourite = (id: string) => {
		favourites.includes(id)
			? updateFavourites(favourites.filter((item) => item !== id))
			: updateFavourites([...favourites, id]);
	};

	const updateFavourites = (newCollected: string[]) => {
		setFavourites(newCollected);
		saveCollectedToWebStorage(newCollected);
	};

	const saveCollectedToWebStorage = (collection: string[]) => {
		localStorage.setItem(COLLECTED_KEY, JSON.stringify(collection));
	};

	const getSavedFromWebStorage = (): string[] => {
		const collected = JSON.parse(localStorage.getItem(COLLECTED_KEY) || '[]');
		return Array.isArray(collected) ? collected : [];
	};

	return { favourites, toggleFavourite };
};
