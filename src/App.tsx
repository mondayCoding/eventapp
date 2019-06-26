import React, { FC, useState, useEffect } from 'react';
import { Icons } from 'library';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import * as routes from './Constants/routes';
import { Nav, Main, Body } from './AppStyles';
import { useCollection } from './Data/useCollections';
import { ICollectionItem } from './Interfaces';
import { ThemeManager } from './Theme/ThemeManager';
import { database } from './Firebase';
import { Button } from './Components/Button/Button';
import { CollectionPage } from './Pages/CollectionPage/CollectionPage';
import { AddCollectionItemPage } from './Pages/AddCollectionItemPage/AddCollectionItemPage';
import { CollectionItemPage } from './Pages/CollectionItemPage/CollectionItemPage';

interface IAppDataContext {
	collection: ICollectionItem[];
	collected: string[];
	wishlist: string[];
	addToCollected: (x: string) => void;
	addToWishlist: (x: string) => void;
}

export const AppContext = React.createContext({} as IAppDataContext);

const Application: FC = () => {
	const { collection } = useCollection();
	const [collectionList, setCollectionList] = useState([] as any[]);

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

	const testCollection = () => console.log(collectionList);

	const handleAddToCollection = (item: string) => {
		alert(`id ${item} lisätty kokoelmaan`);
	};

	const handleAddToWishlist = (item: string) => {
		alert(`id ${item} lisätty toivelistalle`);
	};

	return (
		<ThemeManager>
			<BrowserRouter>
				<AppContext.Provider
					value={{
						collection,
						collected: ['2', '3'],
						wishlist: ['5', '6'],
						addToCollected: handleAddToCollection,
						addToWishlist: handleAddToWishlist
					}}
				>
					<Button buttonText="test" onClick={testCollection} />
					<ApplicationView />
				</AppContext.Provider>
			</BrowserRouter>
		</ThemeManager>
	);
};

const ApplicationView = () => (
	<Body>
		<NavigationBar />
		<PageContent />
	</Body>
);

const NavigationBar: FC = () => (
	<Nav>
		<NavLink to={routes.base_route1} className="nav-link">
			page 1
		</NavLink>
		<NavLink to={routes.base_route2} className="nav-link">
			page 2
		</NavLink>
		<NavLink to={routes.base_route3} className="nav-link">
			page 3
		</NavLink>
	</Nav>
);

const PageContent = () => (
	<Main>
		<Switch>
			<Route exact path={routes.base_route1} component={CollectionPage} />
			<Route exact path={routes.base_route3} component={CollectionItemPage} />
			<Route exact path={routes.base_route2} component={AddCollectionItemPage} />
			<Redirect to={routes.base_route} />
		</Switch>
	</Main>
);

export default Application;
