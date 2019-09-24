import Icons from '../Components/Icons/icons';

interface ICustomerTag {
	name: string;
	description: string;
	icon: React.ReactNode;
}

export enum CustomerTagType {
	MultipleParticipation,
	InactiveForMoreThanYear,
	HasUsedPortal,
	HasPaidOrders,
	HasUsedAccommodations,
	HasCancelledParticipations,
	HadUnpaidOrders
}

export const CustomerTag: { [x: number]: ICustomerTag } = {
	[CustomerTagType.HasCancelledParticipations]: {
		name: 'Peruja',
		description: 'Asiakas on perunut osallistumisen/osallistumisia',
		icon: Icons.undo
	},
	[CustomerTagType.HasPaidOrders]: {
		name: 'Ostaja',
		description: 'Asiakas on ostanut tuotteita',
		icon: Icons.dollar
	},
	[CustomerTagType.MultipleParticipation]: {
		name: 'Tehokäyttäjä',
		description: 'Asiakas on osallistunut useampaan tapahtumaan',
		icon: Icons.eye
	},
	[CustomerTagType.HasUsedAccommodations]: {
		name: 'Majoittuja',
		description: 'Asiakas on tehnyt majoitusvarauksia',
		icon: Icons.dollar
	},
	[CustomerTagType.HasUsedPortal]: {
		name: 'Käyttäjä',
		description: 'Asiakas on omatoimisesti muokannut tietojaan Portaalissa',
		icon: Icons.pen_alt
	},
	[CustomerTagType.InactiveForMoreThanYear]: {
		name: 'Ei aktiivinen',
		description: 'Asiakas ei ole käyttänyt palveluja yli vuoteen',
		icon: Icons.power_off
	},
	[CustomerTagType.HadUnpaidOrders]: {
		name: 'Saatavia',
		description: 'Asiakkaalla on saatavia',
		icon: Icons.exlamation_triangle
	}
};
