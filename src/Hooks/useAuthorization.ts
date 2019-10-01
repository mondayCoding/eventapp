import { useState, useEffect } from 'react';
import { firebase } from '../Firebase';

export const useAuthState = () => {
	const [auth, setAuth] = useState(null as firebase.User | null);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		firebase.onAuthStateChanged((auth) => {
			console.info({
				currentAuthorization: auth,
				newAuthorization: auth
			});
			auth ? setAuth(auth) : setAuth(null);
			setIsloading(false);
		});
		return () => {
			console.log('need to remove listener here');
		};
	}, []);
	return { auth, isLoading };
};
