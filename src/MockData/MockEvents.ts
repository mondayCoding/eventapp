import { EventTagType } from '../Constants/EventTags';

//*********************************************************** */
// Event
//*********************************************************** */

enum EventState {
	ended,
	cancelled,
	ongoing,
	unPublished
}

export interface IEvent {
	id: string;
	name: string;
	description: string;
	location: string;
	city: string;
	postNumber: string;
	address: string;
	state: EventState;
	country: string;
	department: string;
	organizer: string;
	homepage: string;
	tags: EventTagType[];
	created: Date;
	start: Date;
	end: Date;
	image?: string;
	statistics?: IEventStatistic;
}

interface IEventStatistic {
	registeredTotal: number;
	registeredByRole: {
		role: string;
		total: number;
	}[];
	registrationsByDay: {
		day: string;
		count: number;
	}[];
}

export const MockStatistic: IEventStatistic = {
	registeredTotal: 732,
	registeredByRole: [
		{
			role: 'Osallistuja',
			total: 530
		},
		{
			role: 'VIP Osallistuja',
			total: 70
		},
		{
			role: 'Pomomies',
			total: 32
		},
		{
			role: 'Gerbiili',
			total: 100
		}
	],
	registrationsByDay: [
		{
			day: '19.09.',
			count: 26
		},
		{
			day: '20.09.',
			count: 39
		},
		{
			day: '21.09.',
			count: 56
		},
		{
			day: '22.09.',
			count: 40
		},
		{
			day: '23.09.',
			count: 15
		},
		{
			day: '24.09.',
			count: 10
		},
		{
			day: '25.09.',
			count: 4
		}
	]
};

export const MockEvents: IEvent[] = [
	{
		id: '1',
		name: 'WebSocket ja IO:n perusteet tehokurssi',
		tags: [EventTagType.Training, EventTagType.Continous],
		description:
			'WebSocket-verkkotekniikka on ottanut kaksi tärkeää askelta kohti standardointia. Standardijärjestö IETF on julkaissut tekniikasta niin sanotun RFC-muistion, joka saatetaan hyväksyä standardiksi. Aliquam ut augue nec ex venenatis eleifend. Aliquam dictum lorem nec justo dictum, sit amet vulputate ante sollicitudin. Morbi pharetra placerat feugiat. Sed eleifend euismod velit, eu aliquet magna commodo vestibulum. Etiam dignissim ligula nibh, sit amet fermentum sem molestie eu.',
		location: 'Internet',
		created: new Date(),
		start: new Date(),
		end: new Date(),
		image: 'https://picsum.photos/326/250',
		statistics: MockStatistic,
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 1,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '2',
		name: 'Porttikoulutus',
		tags: [EventTagType.Training, EventTagType.HasEnded, EventTagType.Orders],
		description:
			'Porttikoulutus sisältää perustavanlaatuisen, mutta kattavat ohjeistuksen porttien toimintaan. Ut semper eros quis libero pretium, sed vehicula eros rutrum. Aliquam vulputate massa et arcu commodo viverra. Sed at malesuada tortor. Praesent imperdiet vel metus a egestas. Nulla arcu eros, sollicitudin ut lectus vitae, posuere maximus augue. Nunc lacinia orci vel nisi dignissim, a bibendum sapien ultricies. Sed quis condimentum ex. Curabitur vel enim in justo scelerisque viverra vitae in tellus. Curabitur sodales molestie lectus, non fermentum nunc laoreet eget. Integer in rutrum leo. Quisque in fermentum orci',
		location: 'Helsinki',
		created: new Date(),
		start: new Date(),
		end: new Date(),
		statistics: MockStatistic,
		image:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 2,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '3',
		name: 'Keravan Viinifestivaalit',
		tags: [EventTagType.Orders, EventTagType.Accommodations],
		description:
			'Viinimessut tuo ensimmäistä kertaa Hervantaan kattavan ja rattoisan viinitapahtuman, jossa on mahdollista tutustua neljäänkymmeneen eri viinitaloon, kymmenestä eri maasta. Valikoimasta löytyy reilusti yli 100 upeaa viiniä, moneen eri makuun',
		location: 'Kerava',
		created: new Date(),
		start: new Date(),
		end: new Date(),

		statistics: MockStatistic,
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 5,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '4',
		name: 'Markkinointikoulutus Syyskuu 2018',
		tags: [EventTagType.Training, EventTagType.HasEnded],
		description:
			'Koulutus on suunnattu henkilöille, joiden työtehtäviin kuuluu hyvinvoinnin edistäminen ja muutoksen aikaan saaminen ihmisten käyttäytymisessä. In hac habitasse platea dictumst. Integer sed porta est. Sed vel feugiat dui, sed facilisis arcu. Mauris condimentum enim non sagittis dictum. Fusce eu pellentesque lorem. Sed facilisis urna lorem, et sagittis mauris imperdiet sed. Ut vulputate venenatis suscipit',
		location: 'Muuninka',
		created: new Date(),
		image:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		start: new Date(),
		end: new Date(),
		statistics: MockStatistic,

		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 4,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '5',
		name: 'Ensiapukoulutus 101 - Elvytys ja jälkikipuinti',
		tags: [EventTagType.Training, EventTagType.HasEnded],
		description:
			'Koulutus on suunnattu henkilöille, joiden työtehtäviin kuuluu hyvinvoinnin edistäminen ja muutoksen aikaan saaminen ihmisten käyttäytymisessä. In hac habitasse platea dictumst. Integer sed porta est. Sed vel feugiat dui, sed facilisis arcu. Mauris condimentum enim non sagittis dictum. Fusce eu pellentesque lorem. Sed facilisis urna lorem, et sagittis mauris imperdiet sed. Ut vulputate venenatis suscipit',
		location: 'Kokemäki',
		created: new Date(),
		start: new Date(),
		end: new Date(),
		image: 'https://picsum.photos/326/250',
		statistics: MockStatistic,
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 3,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '6',
		name: 'Markkinoinnin perusteet - Miten myydä hiekkaa Saharaan',
		tags: [EventTagType.Training, EventTagType.HasEnded],
		description:
			'Koulutus on suunnattu henkilöille, joiden työtehtäviin kuuluu hyvinvoinnin edistäminen ja muutoksen aikaan saaminen ihmisten käyttäytymisessä. In hac habitasse platea dictumst. Integer sed porta est. Sed vel feugiat dui, sed facilisis arcu. Mauris condimentum enim non sagittis dictum. Fusce eu pellentesque lorem. Sed facilisis urna lorem, et sagittis mauris imperdiet sed. Ut vulputate venenatis suscipit',
		location: 'Sahara',
		created: new Date(),
		start: new Date(),
		end: new Date(),
		statistics: MockStatistic,
		image:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 2,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	},
	{
		id: '7',
		name: 'Osastokoulutus 2019 - Markkinoinnin tehokurssi',
		tags: [EventTagType.Training, EventTagType.HasEnded],
		description:
			'Koulutus on suunnattu henkilöille, joiden työtehtäviin kuuluu hyvinvoinnin edistäminen ja muutoksen aikaan saaminen ihmisten käyttäytymisessä. In hac habitasse platea dictumst. Integer sed porta est. Sed vel feugiat dui, sed facilisis arcu. Mauris condimentum enim non sagittis dictum. Fusce eu pellentesque lorem. Sed facilisis urna lorem, et sagittis mauris imperdiet sed. Ut vulputate venenatis suscipit',
		location: 'Muuninka',
		created: new Date(),
		start: new Date(),
		end: new Date(),
		image: 'https://picsum.photos/326/250',
		statistics: MockStatistic,
		city: 'Vantaa',
		postNumber: '92300',
		address: 'Muunmäentie 12 A B',
		state: 3,
		organizer: 'Keliakia OY',
		homepage: 'https://www.google.com',
		department: 'Tanssilattia',
		country: 'Ahvenanmaa'
	}
];
