import { Icons } from 'library';

export interface routeConfig {
	path: string;
	params?: string;
	icon: React.ReactNode;
	text: string;
	description: string;
}

export const dashboard: routeConfig = {
	path: '/dashboard',
	icon: Icons.info,
	text: 'Dashboard',
	description: 'kuvaus pitkä ja tosi'
};

export const events: routeConfig = {
	path: '/events',
	icon: Icons.calendar,
	text: 'Tapahtumat',
	description: 'Events management and status'
};

export const event: routeConfig = {
	path: '/event',
	params: '/:id',
	icon: Icons.address_book,
	text: 'Tapahtuma',
	description: 'kuvaus pitkä ja tosi'
};

export const createNewEvent: routeConfig = {
	path: '/addEvent',
	icon: Icons.plus,
	text: 'Luo uusi',
	description: 'kuvaus pitkä ja tosi'
};

export const customers: routeConfig = {
	path: '/customers',
	icon: Icons.users,
	text: 'Asiakkaat',
	description: 'kuvaus pitkä ja tosi'
};

export const customer: routeConfig = {
	path: '/customer',
	params: '/:id',
	icon: Icons.user,
	text: 'Asiakas',
	description: 'kuvaus pitkä ja tosi'
};

export const registrationform: routeConfig = {
	path: '/registrationform',
	params: '/:id',
	icon: Icons.list,
	text: 'Ilmoittautuminen',
	description: 'kuvaus pitkä ja tosi'
};

export const myCollection: routeConfig = {
	path: '/myCollection',
	icon: Icons.list,
	text: 'Collected',
	description: 'kuvaus pitkä ja tosi'
};

export const sendEmail: routeConfig = {
	path: '/sendemail',
	icon: Icons.envelope,
	text: 'Email',
	description: 'kuvaus pitkä ja tosi'
};

export const myWishlist: routeConfig = {
	path: '/wishlist',
	icon: Icons.star,
	text: 'Wishlist',
	description: 'kuvaus pitkä ja tosi'
};
