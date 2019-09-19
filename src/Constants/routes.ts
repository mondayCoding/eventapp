import { Icons } from 'library';

export interface routeConfig {
	path: string;
	icon: React.ReactNode;
	text: string;
	description: string;
}

export const base_route: routeConfig = {
	path: '/',
	icon: Icons.home,
	text: 'root',
	description: 'kuvaus pitkä ja tosi'
};
export const collection: routeConfig = {
	path: '/collection',
	icon: Icons.home,
	text: 'Collection',
	description: 'kuvaus pitkä ja tosi'
};
export const AddToCollection: routeConfig = {
	path: '/addCollectable',
	icon: Icons.plus,
	text: 'Add Collectable',
	description: 'kuvaus pitkä ja tosi'
};
export const Item: routeConfig = {
	path: '/Collectable',
	icon: Icons.home,
	text: 'Collectable',
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
export const dashboard: routeConfig = {
	path: '/dashboard',
	icon: Icons.info,
	text: 'Dashboard',
	description: 'kuvaus pitkä ja tosi'
};
