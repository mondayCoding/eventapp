import { CustomerTagType } from '../Constants/CustomerTags';

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
		email: 'ismo.alanko@mail.meil.com',
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
		email: 'harja.teräs@mail.meil.com',
		phone: '040114229940',
		address: 'Alakatu A B 12',
		city: 'Pietarsaari',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '6',
		created: new Date(2011, 4, 12)
	},
	{
		tags: [4, 0, 5, 4],
		firstname: 'Abraham',
		lastname: 'Dunhamn',
		email: 'a.dunhamn@mail.meil.com',
		phone: '040114229940',
		address: 'Kievari A B 12',
		city: 'Sipoo',
		department: 'Alasto',
		country: 'Alankomaat',
		id: '8',
		created: new Date(2018, 4, 12)
	},
	{
		tags: [0, 3],
		firstname: 'Abigail',
		lastname: 'Sjönsssön',
		email: 'a.sjönssön@mail.meil.com',
		phone: '040114229940',
		address: 'Puurtilan tie A B 12',
		city: 'Joensuu',
		department: 'Alasto',
		country: 'Matikkala',
		id: '9',
		created: new Date(2018, 4, 12)
	},
	{
		tags: [5],
		firstname: 'Anna',
		lastname: 'Kareliina',
		email: 'anna.liina@mail.meil.com',
		phone: '040114229940',
		address: 'Swanner A 7',
		city: 'Pariisi',
		department: 'Alasto',
		country: 'Ranska',
		id: '10',
		created: new Date(2018, 4, 12)
	}
];
