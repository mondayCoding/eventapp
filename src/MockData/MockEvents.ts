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
		location: '',
		created: new Date(),
		start: new Date(),
		end: new Date()
	},
	{
		id: '12',
		name: 'Porttikoulutus',
		tags: [EventTagType.Training, EventTagType.HasEnded, EventTagType.Orders],
		description: 'Tapahtuma "IO-Koulutus" alkoi',
		location: '',
		created: new Date(),
		start: new Date(),
		end: new Date()
	},
	{
		id: '2',
		name: 'Keravan Viinifestivaalit',
		tags: [EventTagType.Orders, EventTagType.Accommodations],
		description:
			'Akkreditointi edellyttää voimassa olevaa Journalistiliiton jäsenkorttia tai muuta vastaavaa todistusta siitä, että olet median edustaja. Akkreditoituna median edustajana pääset kulkemaan vapaasti Kuopio Wine Festivalien aluella.',
		location: '',
		created: new Date(),
		start: new Date(),
		end: new Date()
	}
];
