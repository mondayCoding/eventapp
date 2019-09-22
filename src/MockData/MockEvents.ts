import { EventTagType } from './EventTags';

//*********************************************************** */
// Event
//*********************************************************** */

export interface IEvent {
	id: string;
	name: string;
	description: string;
	location: string;
	tags: EventTagType[];
	created: Date;
	start: Date;
	end: Date;
}

export const MockEvents: IEvent[] = [
	{
		id: '1',
		name: 'IO-Koulutus',
		tags: [EventTagType.Training, EventTagType.Continous],
		description: 'Tapahtuma "IO-Koulutus" alkoi',
		location: 'Joensuu',
		created: new Date(),
		start: new Date(),
		end: new Date()
	},
	{
		id: '2',
		name: 'Porttikoulutus',
		tags: [EventTagType.Training, EventTagType.HasEnded, EventTagType.Orders],
		description: 'Tapahtuma "IO-Koulutus" alkoi',
		location: 'Helsinki',
		created: new Date(),
		start: new Date(),
		end: new Date()
	},
	{
		id: '3',
		name: 'Keravan Viinifestivaalit',
		tags: [EventTagType.Orders, EventTagType.Accommodations],
		description:
			'Akkreditointi edellyttää voimassa olevaa Journalistiliiton jäsenkorttia tai muuta vastaavaa todistusta siitä, että olet median edustaja. Akkreditoituna median edustajana pääset kulkemaan vapaasti Kuopio Wine Festivalien aluella.',
		location: 'Kerava',
		created: new Date(),
		start: new Date(),
		end: new Date()
	},
	{
		id: '4',
		name: 'Markkinointikoulutus Syyskuu 2018',
		tags: [EventTagType.Training, EventTagType.HasEnded],
		description:
			'Akkreditointi edellyttää voimassa olevaa Journalistiliiton jäsenkorttia tai muuta vastaavaa todistusta siitä, että olet median edustaja. Akkreditoituna median edustajana pääset kulkemaan vapaasti Kuopio Wine Festivalien aluella.',
		location: 'Muuninka',
		created: new Date(),
		start: new Date(),
		end: new Date()
	}
];
