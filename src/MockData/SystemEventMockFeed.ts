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
	link?: string;
	timestamp?: Date;
}

export const MockSystemEvents: ISystemEvent[] = [
	{
		eventType: SystemEventType.EventStarted,
		message: 'Tapahtuma "IO-Koulutus" alkoi',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.RegistrationEnded,
		message: 'Tapahtuman "IO-Koulutus" ilmoittauminen päättyi',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.SendCertificates,
		message: 'Päättyneen tapahtuman "Porttikoulutus" todistukset lähetettiin',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.AddedCustomer,
		message: 'Uusi Asiakas 92883 lisättiin manuaalisesti',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.RegistrationStarted,
		message: 'Tapahtuman "IO-Koulutus" ilmoittautuminen alkoi',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.EventEnded,
		message: 'Tapahtuma "Porttikoulutus" päättyi',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.ModifiedEvent,
		message: 'Tapahtuman IO-Koulutus tietoja muokattiin',
		link: 'url',
		timestamp: new Date()
	},
	{
		eventType: SystemEventType.AddedEvent,
		message: 'Uusi tapahtuma "IO-Koulutus" luotiin',
		link: 'url',
		timestamp: new Date()
	}
];
