import React, { FC, useState } from 'react';
import { ThemeManager, Heading, Icons, SelectField, DayPickerField } from 'library';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import * as routes from './Constants/routes';
import { Body, Nav, Main, GlobalStyle } from './AppStyles';
import { useCollection } from './Data/useCollections';

// export const EventDataContext = React.createContext({} as IEventData);
// 		<EventDataContext.Provider value={data}>
// 		</EventDataContext.Provider>

const EventApplication: FC = () => {
	// const { isLoading, data, errors } = useEventAPI();
	const [sidebarIsopen, setSidebarIsOpen] = useState(undefined as any);

	return (
		<ThemeManager>
			<BrowserRouter>
				<Body>
					<GlobalStyle />
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
					<Main>
						<Switch>
							<Route exact path={routes.base_route1} component={Page1} />
							<Route exact path={routes.base_route2} component={Page2} />
							<Route exact path={routes.base_route3} component={Page3} />
							<Redirect to={routes.base_route} />
						</Switch>
					</Main>
				</Body>
			</BrowserRouter>
		</ThemeManager>
	);
};

const Page1 = () => {
	const { collection } = useCollection();
	return (
		<div>
			<Heading headingText="Sivu 1" isUnderlined />

			{collection.map((item) => (
				<span>{item.name}</span>
			))}
		</div>
	);
};
const Page2 = () => <div>sivu 2</div>;
const Page3 = () => <div>sivu 3</div>;

export default EventApplication;
