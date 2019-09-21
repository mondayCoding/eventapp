import { CustomerTagType } from './CustomerTags';

export interface ICustomer {
	tags: CustomerTagType[];
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	department: string;
	country: string;
	id: string;
	created?: Date;
}

export const MockCustomers: ICustomer[] = [
	{
		tags: [1, 2, 3, 4],
		firstname: 'Aava',
		lastname: 'Alanko',
		email: 'a.alanko@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Helsinki',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '1',
		created: new Date(2017, 4, 12)
	},
	{
		tags: [4, 5],
		firstname: 'Robert',
		lastname: 'Justin',
		email: 'Robert.Justin@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Lontoo',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '2',
		created: new Date(2017, 4, 12)
	},
	{
		tags: [0, 2],
		firstname: 'Eila',
		lastname: 'Kaisla',
		email: 'Eila.Kaisla@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Kuopio',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '3',
		created: new Date(2017, 4, 12)
	},
	{
		tags: [0, 2],
		firstname: 'Noora',
		lastname: 'Nyrbens',
		email: 'Noora.Nyrbens@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Trernobyl',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '4',
		created: new Date(2017, 4, 12)
	},
	{
		tags: [0, 2],
		firstname: 'Ismo',
		lastname: 'Alanko',
		email: 'Ismo.Alanko@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Mynkää',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '5',
		created: new Date(2017, 4, 12)
	},
	{
		tags: [1, 4],
		firstname: 'Harja',
		lastname: 'Teräs',
		email: 'Harja.Teräs@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Pietarsaari',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '6',
		created: new Date(2011, 4, 12)
	}
];
