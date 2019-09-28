import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useCollection } from './Hooks/useCollections';
import { ICollectionItem } from './Interfaces';
import { ThemeManager } from './Theme/ThemeManager';
import { database } from './Firebase';
import { useWishlist } from './Hooks/useWishlist';
import { useCollected } from './Hooks/useCollected';
import { themes } from './Theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from './Hooks/useAuthorization';
import { UnAuthorisedApp } from './Layout/AppUnAuthorised';
import { AuthorisedApp } from './Layout/AppAuthorised';

interface IAppDataContext {
	collection: ICollectionItem[];
	collected: string[];
	wishlist: string[];
	isDarkTheme: boolean;
	authorization?: firebase.User | null;
	addToCollected: (x: string) => void;
	addToWishlist: (x: string) => void;
	toggleTheme: () => void;
}

export const AppContext = React.createContext({} as IAppDataContext);

const Application: FC = () => {
	//remove
	const { collection } = useCollection();
	const { collected, toggleCollected } = useCollected();
	const { wishlist, toggleOnWishlist } = useWishlist();
	const [isDarkTheme, setIsDarkTheme] = useState(nightModeIsOn());
	const { auth } = useAuthState();

	// keep, rename
	const [collectionList, setCollectionList] = useState([] as any[]);

	const toggleNightMode = () => {
		setIsDarkTheme(!isDarkTheme);
		localStorage.setItem('APPLICATION_THEME_NIGHTMODE', (!isDarkTheme).toString());
	};

	useEffect(() => {
		// static (runs once)
		database
			.collection('events')
			.get()
			.then((collection) =>
				collection.docs.map((document) => ({
					id: document.id,
					...document.data()
				}))
			)
			.then((collection) => setCollectionList(collection));

		//listener (runs on events)
		// database.collection('events').onSnapshot((snapshot) => {
		// 	snapshot.docChanges().forEach((change) => {
		// 		if (change.type === 'added') {
		// 			// handle add
		// 		}
		// 		if (change.type === 'removed') {
		// 			//handle remove
		// 		}
		// 	});
		// });
	}, []);

	const applicationContext = {
		collection,
		collected,
		wishlist,
		addToCollected: toggleCollected,
		addToWishlist: toggleOnWishlist,
		toggleTheme: toggleNightMode,
		authorization: auth,
		isDarkTheme: isDarkTheme
	};

	return (
		<ThemeManager theme={isDarkTheme ? themes.dark : themes.default}>
			<BrowserRouter>
				<AppContext.Provider value={applicationContext}>
					{/* Visual App */}
					{auth ? <AuthorisedApp /> : <UnAuthorisedApp />}
					<ToastContainer
						draggablePercent={40}
						hideProgressBar={true}
						toastClassName={'TOAST'}
					/>
				</AppContext.Provider>
			</BrowserRouter>
		</ThemeManager>
	);
};

const nightModeIsOn = () =>
	localStorage.getItem('APPLICATION_THEME_NIGHTMODE') === 'true';

export default Application;
