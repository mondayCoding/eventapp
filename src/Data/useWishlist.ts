import { useState, useEffect } from 'react';
import axios from 'axios';

const route = '/collections';
const WISLIST_KEY = 'COLLECTION_APP_WISLIST_ITEMS';

const useWishlist = () => {
	const [wishlist, setWishlist] = useState([] as string[]);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		setWishlist(getWishlistFromWebStorage());
	}, []);

	const toggleOnWishlist = (id: string) => {
		wishlist.includes(id)
			? updateWislist(wishlist.filter((item) => item === id))
			: updateWislist([...wishlist, id]);
	};

	const getWishlistFromWebStorage = (): string[] => {
		const collected = JSON.parse(localStorage.getItem(WISLIST_KEY) || '[]');
		return Array.isArray(collected) ? collected : [];
	};

	const saveWishlistToWebStorage = (collection: string[]) => {
		localStorage.setItem(WISLIST_KEY, JSON.stringify(collection));
	};

	const updateWislist = (newWishlist: string[]) => {
		setWishlist(newWishlist);
		saveWishlistToWebStorage(newWishlist);
	};

	return { wishlist, isLoading, toggleOnWishlist };
};

export { useWishlist };
