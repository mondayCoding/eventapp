import { useState, useEffect } from 'react';
import { firebase } from '../Firebase/';

export const useAuthState = () => {
	const [userAuth, setAuthUser] = useState({} as firebase.User);

	useEffect(() => {
		firebase.onAuthStateChanged((auth) => {
			console.log({ current: userAuth, new: auth });
			auth ? setAuthUser(auth) : setAuthUser(null as any);
		});
		return () => {
			console.log('need to remove listener here');
		};
	}, []);
	return { userAuth };
};
