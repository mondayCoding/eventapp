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
	text: 'Events',
	description: 'Events management and status'
};

export const event: routeConfig = {
	path: '/event',
	params: '/:id',
	icon: Icons.address_book,
	text: 'Event',
	description: 'kuvaus pitkä ja tosi'
};

export const createNewEvent: routeConfig = {
	path: '/addEvent',
	icon: Icons.plus,
	text: 'Create New Event',
	description: 'kuvaus pitkä ja tosi'
};

export const customers: routeConfig = {
	path: '/customers',
	icon: Icons.users,
	text: 'Customers',
	description: 'kuvaus pitkä ja tosi'
};

export const customer: routeConfig = {
	path: '/customer',
	params: '/:id',
	icon: Icons.user,
	text: 'Customer',
	description: 'kuvaus pitkä ja tosi'
};

export const myCollection: routeConfig = {
	path: '/myCollection',
	icon: Icons.list,
	text: 'Collected',
	description: 'kuvaus pitkä ja tosi'
};

export const myWishlist: routeConfig = {
	path: '/wishlist',
	icon: Icons.star,
	text: 'Wishlist',
	description: 'kuvaus pitkä ja tosi'
};
