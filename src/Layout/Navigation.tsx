import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../AppStyles';
import * as routes from '../Constants/Routes';
// import image from './favicon.png';
import image from './Styles/favicon_alternate.png';

export const Navigation = () => {
	return (
		<Nav>
			<div className="navigation">
				<h2 className="navigation__heading">
					<img className="navigation__heading__image" src={image} alt=""></img> Mumu App
				</h2>
				<Links></Links>
			</div>
		</Nav>
	);
};

const Links: FC = () => (
	<>
		<div className="navigation__group-title">Tapahtumanhallinta</div>
		<Link route={routes.dashboard} />
		<Link route={routes.events} />

		<div className="navigation__group-title">Asiakashallinta</div>
		<Link route={routes.customers} />
		<Link route={routes.sendEmail} />

		<div className="navigation__group-title">Non-routable</div>
		<Link route={routes.signIn} />
		<Link route={routes.signUp} />
		<Link route={routes.signOut} />
		<Link route={routes.settings} />
		<Link route={routes.createNewEvent} />

		<div className="navigation__group-title">Poistuvat</div>
		<Link route={routes.myCollection} />
		<Link route={routes.myWishlist} />
	</>
);

const Link: FC<{ route: routes.routeConfig }> = (props) => (
	<NavLink to={props.route.path} className="navigation__link">
		<span className="navigation__link__icon">{props.route.icon}</span>
		<span className="navigation__link__text">{props.route.text}</span>
	</NavLink>
);
