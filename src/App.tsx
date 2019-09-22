import React, { FC, useState, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Body } from './AppStyles';
import { useCollection } from './Data/useCollections';
import { ICollectionItem } from './Interfaces';
import { ThemeManager } from './Theme/ThemeManager';
import { database } from './Firebase';
import { useWishlist } from './Data/useWishlist';
import { useCollected } from './Data/useCollected';
import { themes } from './Theme/theme';
import { MainPage } from './Layout/MainContent';
import { Navigation } from './Layout/Navigation';
// import PerfectScrollbar from 'perfect-scrollbar';

interface IAppDataContext {
	collection: ICollectionItem[];
	collected: string[];
	wishlist: string[];
	isDarkTheme: boolean;
	addToCollected: (x: string) => void;
	addToWishlist: (x: string) => void;
	toggleTheme: () => void;
}

export const AppContext = React.createContext({} as IAppDataContext);

// let ps: any;

const Application: FC = () => {
	//remove
	const { collection } = useCollection();
	const { collected, toggleCollected } = useCollected();
	const { wishlist, toggleOnWishlist } = useWishlist();
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	// const mainpanelRef: any = useRef({});

	// keep, rename
	const [collectionList, setCollectionList] = useState([] as any[]);

	const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

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

	// useEffect(() => {
	// 	if (navigator.platform.indexOf('Win') > -1) {
	// 		ps = new PerfectScrollbar(mainpanelRef.current);
	// 		document.body.classList.toggle('perfect-scrollbar-on');
	// 	}

	// 	return () => ps.destroy();
	// }, []);

	const applicationContext = {
		collection,
		collected,
		wishlist,
		addToCollected: toggleCollected,
		addToWishlist: toggleOnWishlist,
		toggleTheme: toggleTheme,
		isDarkTheme: isDarkTheme
	};

	return (
		<div>
			<ThemeManager theme={isDarkTheme ? themes.dark : themes.default}>
				<BrowserRouter>
					<AppContext.Provider value={applicationContext}>
						{/* Visual App */}
						<Body>
							<Navigation />
							<MainPage />
						</Body>
					</AppContext.Provider>
				</BrowserRouter>
			</ThemeManager>
		</div>
	);
};

export default Application;
