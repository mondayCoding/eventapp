export interface IRegistrationForm {
	name: string;
	roles: roleType[];
	start: Date;
	end: Date;
	id: number;
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
		id: 1
	},
	{
		name: 'Ilmoittautumislomake Lokakuu 2019',
		start: new Date(2019, 9, 1),
		end: new Date(2019, 10, 1),
		roles: [4, 5],
		id: 2
	},
	{
		name: 'Ilmoittautumislomake Marraskuu 2019',
		start: new Date(2019, 10, 1),
		end: new Date(2019, 11, 1),
		roles: [3, 4],
		id: 3
	},
	{
		name: 'Ilmoittautumislomake Joulukuu 2019',
		start: new Date(2019, 11, 1),
		end: new Date(2020, 1, 1),
		roles: [1],
		id: 4
	}
];
