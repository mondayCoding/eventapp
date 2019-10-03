import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav } from './Assets/AppStyles';
import * as routes from '../Constants/Routes';
// import image from './favicon.png';
import image from './Assets/favicon_alternate.png';

export const Navigation = () => {
	return (
		<Nav>
			<div className="navigation">
				<Link to={routes.dashboard.path} className="navigation__heading">
					<img className="navigation__heading__image" src={image} alt=""></img> Mumu App
				</Link>
				<Links></Links>
			</div>
		</Nav>
	);
};

const Links: FC = () => (
	<>
		<div className="navigation__group-title">Tapahtumanhallinta</div>
		<NavigationLink route={routes.dashboard} />
		<NavigationLink route={routes.events} />

		<div className="navigation__group-title">Asiakashallinta</div>
		<NavigationLink route={routes.customers} />
		<NavigationLink route={routes.sendEmail} />

		<div className="navigation__group-title">Non-routable</div>
		<NavigationLink route={routes.mediabank} />
		<NavigationLink route={routes.postOffice} />
		<NavigationLink route={routes.productManagement} />

		<div className="navigation__group-title">Järjestelmä</div>

		<NavigationLink route={routes.settings} />
		<NavigationLink route={routes.signOut} />
	</>
);

const NavigationLink: FC<{ route: routes.routeConfig }> = (props) => (
	<NavLink to={props.route.path} className="navigation__link">
		<span className="navigation__link__icon">{props.route.icon}</span>
		<span className="navigation__link__text">{props.route.text}</span>
	</NavLink>
);
