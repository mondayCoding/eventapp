import Icons from '../Components/Icons/icons';

export interface routeConfig {
	path: string;
	params?: string;
	icon: React.ReactNode;
	text: string;
	title: string;
	description: string;
}

export const dashboard: routeConfig = {
	path: '/dashboard',
	icon: Icons.info,
	text: 'Dashboard',
	title: 'Dashboard',
	description: 'kuvaus pitkä ja tosi'
};

export const events: routeConfig = {
	path: '/events',
	icon: Icons.calendar,
	text: 'Tapahtumat',
	title: 'Tapahtumat',
	description: 'Events management and status'
};

export const event: routeConfig = {
	path: '/event',
	params: '/:id',
	icon: Icons.address_book,
	text: 'Tapahtuma',
	title: 'Tapahtuma',
	description: 'kuvaus pitkä ja tosi'
};

export const customers: routeConfig = {
	path: '/customers',
	icon: Icons.users,
	text: 'Asiakkaat',
	title: 'Asiakkaat',
	description: 'kuvaus pitkä ja tosi'
};

export const customer: routeConfig = {
	path: '/customer',
	params: '/:id',
	icon: Icons.user,
	text: 'Asiakas',
	title: 'Asiakas',
	description: 'kuvaus pitkä ja tosi'
};

export const registrationform: routeConfig = {
	path: '/registrationform',
	params: '/:id',
	icon: Icons.list,
	text: 'Ilmoittautuminen',
	title: 'Ilmoittautuminen',
	description: 'kuvaus pitkä ja tosi'
};

export const registration: routeConfig = {
	path: '/registration',
	params: '/:id',
	icon: Icons.list,
	text: 'Ilmoittautuminen',
	title: 'Ilmoittautuminen',
	description: 'kuvaus pitkä ja tosi'
};

export const sendEmail: routeConfig = {
	path: '/sendemail',
	params: '/:id?',
	icon: Icons.envelope,
	text: 'Email',
	title: 'Email',
	description: 'kuvaus pitkä ja tosi'
};

export const signIn: routeConfig = {
	path: '/signin',
	icon: Icons.user,
	text: 'Kirjaudu sisään',
	title: 'Kirjaudu sisään',
	description: 'kuvaus pitkä ja tosi'
};

export const signUp: routeConfig = {
	path: '/signuop',
	icon: Icons.globe,
	text: 'Luo tili',
	title: 'Luo tili',
	description: 'kuvaus pitkä ja tosi'
};

export const signOut: routeConfig = {
	path: '/signout',
	icon: Icons.sign_out,
	text: 'Kirjaudu ulos',
	title: 'Kirjaudu ulos',
	description: 'kuvaus pitkä ja tosi'
};

export const settings: routeConfig = {
	path: '/settings',
	icon: Icons.cog,
	text: 'Asetukset',
	title: 'Asetukset',
	description: 'kuvaus pitkä ja tosi'
};

export const mediabank: routeConfig = {
	path: '/mediabank',
	icon: Icons.image,
	text: 'Mediapankki',
	title: 'Mediapankki',
	description: 'kuvaus pitkä ja tosi'
};
