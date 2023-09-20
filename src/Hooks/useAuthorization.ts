import { useState, useEffect } from 'react';

export const useAuthState = () => {
	const [auth, setAuth] = useState<null | { name: string }>(null);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		setAuth({ name: 'Käyttäjä' });
		setIsloading(false);

		return () => {
			console.log('need to remove listener here');
		};
	}, []);
	return { auth, isLoading };
};
