import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Main, MainContent } from '../AppStyles';
import { CollectionPage } from '../Pages/Collection/Collection';
import { AddCollectible } from '../Pages/AddCollectible/AddCollectible';
import { Collectable } from '../Pages/Collectable/Collectable';
import { MyCollectionPage } from '../Pages/MyCollection/MyCollection';
import { MyWishlistPage } from '../Pages/Wishlist/Wishlist';
import { DashBoard } from '../Pages/Dashboard/Dashboard';
import { TopPanel } from './TopPanel';
import * as routes from '../Constants/routes';
import { FooterPanel } from './MainFooter';

export const MainPage = () => (
	<Main>
		<TopPanel />

		<MainContent>
			<Switch>
				<Route exact path={routes.collection.path} component={CollectionPage} />
				<Route exact path={routes.AddToCollection.path} component={AddCollectible} />
				<Route exact path={routes.Item.path + '/:id'} component={Collectable} />
				<Route exact path={routes.myCollection.path} component={MyCollectionPage} />
				<Route exact path={routes.myWishlist.path} component={MyWishlistPage} />
				<Route exact path={routes.dashboard.path} component={DashBoard} />
				<Redirect to={routes.base_route.path} />
			</Switch>
		</MainContent>

		<FooterPanel />
	</Main>
);
