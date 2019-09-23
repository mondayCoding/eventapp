import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Content, Main } from '../AppStyles';
import { Events } from '../Pages/Events/Events';
import { AddCollectible } from '../Pages/AddCollectible/AddCollectible';
import { Event } from '../Pages/Event/Event';
import { MyCollectionPage } from '../Pages/MyCollection/MyCollection';
import { MyWishlistPage } from '../Pages/Wishlist/Wishlist';
import { DashBoard } from '../Pages/Dashboard/Dashboard';
import { TopPanel } from './TopPanel';
import * as routes from '../Constants/routes';
import { Customers } from '../Pages/Customers/Customers';
import { Customer } from '../Pages/Customer/Customer';

export const MainPage = () => (
	<Content>
		<TopPanel />
		<Main>
			<Switch>
				<Route exact path={routes.customers.path} component={Customers} />
				<Route exact path={routes.customer.path + '/:id'} component={Customer} />
				<Route exact path={routes.dashboard.path} component={DashBoard} />

				<Route exact path={routes.events.path} component={Events} />
				<Route path={routes.event.path + '/:id'} component={Event} />
				<Route exact path={routes.createNewEvent.path} component={AddCollectible} />

				<Route exact path={routes.myCollection.path} component={MyCollectionPage} />
				<Route exact path={routes.myWishlist.path} component={MyWishlistPage} />
				{/* <Redirect to={routes.dashboard.path} /> */}
			</Switch>
		</Main>
	</Content>
);
