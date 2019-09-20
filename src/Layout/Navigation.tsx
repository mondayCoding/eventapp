import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../AppStyles';
import Icons from '../Components/Icons/icons';
import * as routes from '../Constants/routes';

export const Navigation = () => {
	return (
		<Nav>
			<div className="navigation">
				<h2 className="navigation__heading">{Icons.home} Mumu App</h2>
				<Links></Links>
				<hr style={{ color: 'green' }}></hr>
			</div>
		</Nav>
	);
};

const Links: FC = () => (
	<>
		<div className="navigation__group-title">Event Management</div>
		<Link route={routes.dashboard} />
		<Link route={routes.events} />
		<Link route={routes.event} />

		<Link route={routes.createNewEvent} />

		<div className="navigation__group-title">Customer Management</div>
		<Link route={routes.customers} />
		<Link route={routes.customer} />

		<hr></hr>
		<Link route={routes.myCollection} />
		<Link route={routes.myWishlist} />
	</>
);

const Link: FC<{
	route: routes.routeConfig;
}> = (props) => (
	<NavLink to={props.route.path} className="navigation__link">
		<span className="navigation__link__icon">{props.route.icon}</span>
		<span className="navigation__link__text">{props.route.text}</span>
	</NavLink>
);
