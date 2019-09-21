import { Icons } from 'library';

interface IEventTag {
	name: string;
	type: EventTagType;
	description: string;
	icon: React.ReactNode;
}

export enum EventTagType {
	Continous,
	Training,
	Orders,
	Accommodations,
	HasEnded
}

export const EventTag: { [x: number]: IEventTag } = {
	[EventTagType.Continous]: {
		name: 'Jatkuva',
		type: EventTagType.Continous,
		description: 'Tapahtumalla on käynnissä jatkuvasti, eikä sillä ole määrättyä loppua',
		icon: Icons.calendar
	},
	[EventTagType.Training]: {
		name: 'Koulutus',
		type: EventTagType.Training,
		description: 'Tapahtuma on koulutus',
		icon: Icons.teacher
	},
	[EventTagType.Orders]: {
		name: 'Tilauksia',
		type: EventTagType.Orders,
		description: 'Tapahtumassa on tilattavia tai ostettavia tuotteita',
		icon: Icons.dollar
	},
	[EventTagType.Accommodations]: {
		name: 'Majoituksia',
		type: EventTagType.Accommodations,
		description: 'Tapahtuman yhteydessä voi varata majoituksia',
		icon: Icons.home
	},
	[EventTagType.HasEnded]: {
		name: 'Päättynyt',
		type: EventTagType.HasEnded,
		description: 'Tapahtuma on päättynyt',
		icon: Icons.stopwatch
	}
};
