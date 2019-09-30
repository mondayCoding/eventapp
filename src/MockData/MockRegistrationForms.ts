export interface IRegistrationForm {
	name: string;
	roles: roleType[];
	start: Date;
	end: Date;
	type: registrationType;
	id: number;
}

export enum registrationType {
	ended,
	planned,
	ongoing
}

export enum roleType {
	participant,
	bossman,
	lecturer,
	showerman,
	maid,
	gerbil
}

export const Role = {
	[roleType.participant]: 'Osallistuja',
	[roleType.bossman]: 'Pomomies',
	[roleType.lecturer]: 'Luennoitsija',
	[roleType.showerman]: 'Näytteilleasettaja',
	[roleType.maid]: 'Huoltoihminen',
	[roleType.gerbil]: 'Gerbiilinkasvattaja'
};

export const MockRegistrationForms: IRegistrationForm[] = [
	{
		name: 'Ilmoittautumislomake Syyskuu 2019',
		start: new Date(2019, 8, 1),
		end: new Date(2019, 9, 1),
		roles: [1, 2],
		type: registrationType.ended,
		id: 1
	},
	{
		name: 'Ilmoittautumislomake Lokakuu 2019',
		start: new Date(2019, 9, 1),
		end: new Date(2019, 10, 1),
		roles: [4, 5],
		type: registrationType.ongoing,
		id: 2
	},
	{
		name: 'Ilmoittautumislomake Marraskuu 2019',
		start: new Date(2019, 10, 1),
		end: new Date(2019, 11, 1),
		roles: [3, 4],
		type: registrationType.planned,
		id: 3
	},
	{
		name: 'Ilmoittautumislomake Joulukuu 2019',
		start: new Date(2019, 11, 1),
		end: new Date(2019, 1, 1),
		roles: [1],
		type: registrationType.planned,
		id: 4
	},
	{
		name: 'Ilmoittautumislomake Elokuu 2019',
		start: new Date(2019, 7, 1),
		end: new Date(2019, 8, 1),
		roles: [1],
		type: registrationType.ended,
		id: 5
	},
	{
		name: 'Ilmoittautumislomake Heinäkuu 2019',
		start: new Date(2019, 6, 1),
		end: new Date(2019, 7, 1),
		roles: [1],
		type: registrationType.ended,
		id: 6
	},
	{
		name: 'Ilmoittautumislomake Kesäkuu 2019',
		start: new Date(2019, 5, 1),
		end: new Date(2019, 6, 1),
		roles: [1],
		type: registrationType.ended,
		id: 6
	}
];
