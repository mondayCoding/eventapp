export interface IEventTag {
	name: string;
	type: EventTagType;
	description: string;
}

enum EventTagType {
	Continous,
	Training,
	Orders,
	Accommodations
}

export const EventTag = {
	Continous: {
		name: 'Jatkuva',
		type: EventTagType.Continous,
		description: 'Tapahtumalla on käynnissä jatkuvasti, eikä sillä ole määrättyä loppua'
	},
	Training: {
		name: 'Koulutus',
		type: EventTagType.Training,
		description: 'Tapahtuma on koulutus'
	},
	Orders: {
		name: 'Tilauksia',
		type: EventTagType.Orders,
		description: 'Tapahtumassa on tilattavia tai ostettavia tuotteita'
	},
	Accommodations: {
		name: 'Majoituksia',
		type: EventTagType.Accommodations,
		description: 'Tapahtuman yhteydessä voi varata majoituksia'
	}
};
