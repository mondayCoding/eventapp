//*********************************************************** */
// User
//*********************************************************** */

enum SystemEventType {
	ModifiedCustomer,
	ModifiedEvent,
	RemovedEvent,
	RemovedCustomer,
	AddedCustomer,
	AddedEvent,
	SendCertificates,
	EventStarted,
	EventEnded,
	RegistrationStarted,
	RegistrationEnded
}

export interface ISystemEvent {
	eventType: SystemEventType;
	message: string;
	id?: string;
	timestamp?: Date;
}

export const MockSystemEvents: ISystemEvent[] = [
	{
		eventType: SystemEventType.EventStarted,
		message: 'Tapahtuma "IO-Koulutus" alkoi',
		id: '1',
		timestamp: new Date(2019, 9, 9)
	},
	{
		eventType: SystemEventType.RegistrationEnded,
		message: 'Tapahtuman "IO-Koulutus" ilmoittauminen päättyi',
		id: '1',
		timestamp: new Date(2019, 7, 12)
	},
	{
		eventType: SystemEventType.SendCertificates,
		message: 'Päättyneen tapahtuman "Porttikoulutus" todistukset lähetettiin',
		id: 'url',
		timestamp: new Date(2018, 4, 5)
	},
	{
		eventType: SystemEventType.AddedCustomer,
		message: 'Uusi Asiakas 92883 lisättiin manuaalisesti',
		id: '12',
		timestamp: new Date(2018, 2, 2)
	},
	{
		eventType: SystemEventType.RegistrationStarted,
		message: 'Tapahtuman "IO-Koulutus" ilmoittautuminen alkoi',
		id: '1',
		timestamp: new Date(2019, 1, 3)
	},
	{
		eventType: SystemEventType.EventEnded,
		message: 'Tapahtuma "Porttikoulutus" päättyi',
		id: '12',
		timestamp: new Date(2018, 6, 9)
	},
	{
		eventType: SystemEventType.ModifiedEvent,
		message: 'Tapahtuman IO-Koulutus tietoja muokattiin',
		id: '1',
		timestamp: new Date(2018, 5, 2)
	},
	{
		eventType: SystemEventType.AddedEvent,
		message: 'Uusi tapahtuma "IO-Koulutus" luotiin',
		id: '1',
		timestamp: new Date(2018, 5, 2)
	},
	{
		eventType: SystemEventType.EventEnded,
		message: '"Keravan Viinifestivaalit" tapahtuma päättyi',
		id: '2',
		timestamp: new Date(2017, 12, 11)
	}
];
