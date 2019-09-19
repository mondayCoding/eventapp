import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../AppStyles';
import Icons from '../Components/Icons/icons';
import * as routes from '../Constants/routes';

export const Navigation = () => {
	return (
		<Nav>
			<h2 className="nav-heading">{Icons.home} Mumu App</h2>
			<Links></Links>
			<hr style={{ color: 'green' }}></hr>
		</Nav>
	);
};

const Links: FC = () => (
	<>
		<Link route={routes.collection} />
		<Link route={routes.AddToCollection} />
		<Link route={routes.Item} />
		<Link route={routes.myCollection} />
		<Link route={routes.myWishlist} />
		<Link route={routes.dashboard} />
	</>
);

const Link: FC<{
	route: routes.routeConfig;
}> = (props) => (
	<NavLink to={props.route.path} className="nav-link">
		<span className="nav-link__icon">{props.route.icon}</span>
		<span className="nav-link__text">{props.route.text}</span>
	</NavLink>
);
