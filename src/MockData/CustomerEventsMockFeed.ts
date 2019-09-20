export enum CustomerEventType {
	RegisteredToEvent,
	CancelledRegistrationToEvent,
	ModifiedRegistrationData,
	DataModifiedManually
}

export interface ICustomerEvent {
	eventType: CustomerEventType;
	message: string;
	link?: string;
	timestamp?: Date;
}

export const CustomerEventsMock: ICustomerEvent[] = [
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Aava Alanko ilmoittautui tapahtumaan "IO-Koulutus"',
		link: 'url',
		timestamp: new Date(2019, 8, 10)
	},
	{
		eventType: CustomerEventType.ModifiedRegistrationData,
		message: 'Robert Justin muokkasi ilmoittautumistietojaan',
		link: 'url',
		timestamp: new Date(2019, 8, 7)
	},
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Robert Justin ilmoittautui tapahtumaan "IO-Koulutus"',
		link: 'url',
		timestamp: new Date(2019, 7, 5)
	},
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Eila Kaisla ilmoittautui tapahtumaan "IO-Koulutus"',
		link: 'url',
		timestamp: new Date(2019, 7, 2)
	},
	{
		eventType: CustomerEventType.DataModifiedManually,
		message: 'Noora Nyrbens - asiakkaan tietoja muokattiin',
		link: 'url',
		timestamp: new Date(2019, 6, 30)
	},
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Noora Nyrbens ilmoittautui tapahtumaan "IO-Koulutus"',
		link: 'url',
		timestamp: new Date(2019, 6, 22)
	},
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Harja Teräs ilmoittautui tapahtumaan "IO-Koulutus"',
		link: 'url',
		timestamp: new Date(2019, 6, 12)
	},
	{
		eventType: CustomerEventType.CancelledRegistrationToEvent,
		message: 'Ismo Alanko perui osallistumisen tapahtumaan "Porttikoulutus"',
		link: 'url',
		timestamp: new Date(2019, 5, 29)
	},
	{
		eventType: CustomerEventType.RegisteredToEvent,
		message: 'Harja Teräs ilmoittautui tapahtumaan "Porttikoulutus"',
		link: 'url',
		timestamp: new Date(2019, 5, 11)
	}
];
