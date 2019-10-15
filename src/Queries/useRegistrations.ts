import { useState, useEffect } from 'react';
import { IRegistrationForm } from '../Pages/Registration/Registration';
import { SectionType } from '../Pages/Registration/RenderSection';

export const useRegistrations = () => {
	const [registrations, setRegistrations] = useState([] as IRegistrationForm[]);

	useEffect(() => {
		setRegistrations([
			MockRegistrationAbstact,
			MockRegistration,
			MockRegistrationQuestions,
			MockRegistrationShort
		]);
	}, []);

	return { registrations };
};

export const MockRegistrationAbstact: IRegistrationForm = {
	images: {
		header:
			'https://cbsnews1.cbsistatic.com/hub/i/2016/09/29/d1a671d9-556e-468d-8639-159e2842f15b/logan-new-hamshire-cat-2016-09-29.jpg'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Abstracti',
				showDates: true,
				ingress:
					'Kissa eli kesykissa tai kotikissa (Felis catus, aiemmin Felis silvestris catus) on villikissasta (Felis silvestris) polveutuva ja petoeläinten (Carnivora) lahkon kissaeläinten (Felidae) heimoon kuuluva kesy nisäkäslaji. Kissat ovat suosittuja lemmikkieläimiä, ja etenkin maaseudulla ne ovat aina olleet hyödyllisiä hiirten ja muiden tuholaisten pyydystäjinä. ',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{
			type: SectionType.abstract,
			content: {
				title: 'Abstractin perustiedot',
				titleDescription: 'Anna esityksesi perustiedot',
				type: '',
				typeLabel: 'Tyyppi',
				typeOptions: [
					{ label: 'Tassutiede', value: 'Tassutiede' },
					{ label: 'Turkkioppi', value: 'Turkkioppi' },
					{ label: 'Viikset', value: 'Viikset' },
					{ label: 'Mauku', value: 'Mauku' }
				],
				topics: [],
				topicLabel: 'Aiheet',
				topicOptions: [
					{ text: 'Kissat - 101', checked: false },
					{ text: 'Verhoilu', checked: false },
					{ text: 'Felidie', checked: false },
					{ text: 'Kissanomistajan arkea - katasftrofin anatomia', checked: false },
					{ text: 'Kissat - 101', checked: false }
				],
				tags: [],
				tagsLabel: 'Avainsanat',
				tagsOptions: [
					{ label: 'Kissat', value: 'Kissat' },
					{ label: 'Tiede', value: 'Tiede' },
					{ label: 'Tassut', value: 'Tassut' }
				],
				abstractTitle: '',
				abstractTitleLabel: 'Abstrabtin titteli',
				authors: [],
				authorLabels: {
					firstname: 'Etunimi',
					lastname: 'Sukunimi',
					title: 'Titteli',
					city: 'Kaupunki',
					email: 'Email',
					isPresenter: 'Pääesittäjä'
				},
				content: '',
				contentDesctiption: 'string',
				contentLabel: 'Sisältö',
				addAuthorBtnText: 'Lisää',
				authorsDescription: 'Listaa esityksen luennoitsijat ja pääesittäjä',
				authorsHeading: 'Luennoitsijat'
			}
		},
		// {
		// 	type: SectionType.question_Checkbox,
		// 	content: {
		// 		title: 'Kissäni',
		// 		condition: false,
		// 		options: [
		// 			{
		// 				label: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua',
		// 				checked: false
		// 			},
		// 			{ label: 'Olet ankka, joka pelkää, että joku tuijottaa sinua', checked: false }
		// 		]
		// 	}
		// },
		{
			type: SectionType.afterword,
			content: {
				buttonText: 'Meow'
			}
		}
	]
};

export const MockRegistration: IRegistrationForm = {
	images: {
		header:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Testitapahtuma',
				showDates: true,
				ingress:
					'Tässä perustapahtumassa on esiteltynä kaikki peruslohkot. Suurimmassa osassa ei ole varsinaista toteutusta 😢',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{
			type: SectionType.basicInformation,
			content: {
				title: 'Henkilötiedot',
				firstname: '',
				firstnameLabel: '',
				firstnameInUse: true,
				firstnameRequired: true,

				lastname: '',
				lastnameLabel: '',
				lastnameInUse: true,
				lastnameRequired: true,

				department: '',
				departmentLabel: '',
				departmentInUse: true,
				departmentRequired: false,

				adress: '',
				adressLabel: '',
				adressInUse: true,
				adressRequired: false,

				phone: '',
				phoneLabel: '',
				phoneInUse: true,
				phoneRequired: false,

				email: '',
				emailLabel: '',
				emailInUse: true,
				emailRequired: false
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Suunnittelutyöstä',
				condition: false,
				options: [
					{ label: 'Dynaamisten lohkojen rakentaminen on vaikeaa', checked: false }
				]
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Kysymyksiä vai ajatuksia',
				condition: false,
				options: [
					{ label: 'Gerbiilit muuttavat keväisin Sipooseen', checked: false },
					{ label: 'Kukaan ei ole koskaan ollut tyhjässä huoneessa', checked: false },
					{ label: 'Tummat teemat ovat turhia eikö kukaan käytä niitä', checked: false }
				]
			}
		},
		{ type: SectionType.accommodation, content: { title: 'Majoituslohko' } },
		{
			type: SectionType.orders,
			content: {
				title: 'Tilauslohko',
				products: [
					{ name: 'Perustuote', value: 29.99, avaibility: '1294/3000' },
					{ name: 'Luxustuote', value: 299, avaibility: '4/30' },
					{ name: 'Superluxustuote', value: 3999.99, avaibility: '1/5' }
				]
			}
		},
		{
			type: SectionType.question_Radio,
			content: {
				title: 'Jos olet Anatidaephobiaani',
				condition: false,
				options: [
					{
						label: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua',
						value: 'false'
					},
					{ label: 'Olet ankka, joka pelkää, että joku tuijottaa sinua', value: 'true' },
					{ label: 'Gerbiili', value: 'true' }
				]
			}
		},
		{
			type: SectionType.question_Text,
			content: {
				title: 'Suosikki TV-sarjani on:',
				condition: false,
				label: 'tv-sarja',
				value: ''
			}
		},
		{
			type: SectionType.question_Select,
			content: {
				title: 'Olen erittäin väsynyt',
				condition: false,
				options: [
					{
						label: 'Useimmiten',
						value: '1'
					},
					{
						label: 'Silloin tällöin',
						value: '2'
					},
					{
						label: 'Jotenkuten',
						value: '3'
					},
					{
						label: 'Gerbiili',
						value: '4'
					}
				]
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Jos olet Anatidaephobiaani',
				condition: false,
				options: [
					{
						label: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua',
						checked: false
					},
					{ label: 'Olet ankka, joka pelkää, että joku tuijottaa sinua', checked: false }
				]
			}
		},
		{
			type: SectionType.afterword,
			content: {
				buttonText: 'Ilmoittaudu'
			}
		}
	]
};

export const MockRegistrationShort: IRegistrationForm = {
	images: {
		header:
			'https://cbsnews1.cbsistatic.com/hub/i/2016/09/29/d1a671d9-556e-468d-8639-159e2842f15b/logan-new-hamshire-cat-2016-09-29.jpg'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Kissatapahtuma',
				showDates: true,
				ingress:
					'Kissa eli kesykissa tai kotikissa (Felis catus, aiemmin Felis silvestris catus) on villikissasta (Felis silvestris) polveutuva ja petoeläinten (Carnivora) lahkon kissaeläinten (Felidae) heimoon kuuluva kesy nisäkäslaji. Kissat ovat suosittuja lemmikkieläimiä, ja etenkin maaseudulla ne ovat aina olleet hyödyllisiä hiirten ja muiden tuholaisten pyydystäjinä. ',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{
			type: SectionType.basicInformation,
			content: {
				title: 'Kissatiedot',
				firstnameLabel: 'Kissan Etunimi',
				lastnameLabel: 'Kissan Sukunimi',

				firstname: '',
				firstnameInUse: true,
				firstnameRequired: true,

				lastname: '',
				lastnameInUse: true,
				lastnameRequired: true,

				department: '',
				departmentLabel: '',
				departmentInUse: false,
				departmentRequired: false,

				adress: '',
				adressLabel: '',
				adressInUse: false,
				adressRequired: false,

				phone: '',
				phoneLabel: '',
				phoneInUse: false,
				phoneRequired: false,

				email: '',
				emailLabel: '',
				emailInUse: false,
				emailRequired: false
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Kissäni',
				condition: false,
				options: [
					{
						label: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua',
						checked: false
					},
					{ label: 'Olet ankka, joka pelkää, että joku tuijottaa sinua', checked: false }
				]
			}
		},
		{
			type: SectionType.afterword,
			content: {
				buttonText: 'Meow'
			}
		}
	]
};

export const MockRegistrationQuestions: IRegistrationForm = {
	images: {
		header: 'https://i.ytimg.com/vi/XBPjVzSoepo/maxresdefault.jpg'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Tiedostelulomake',
				showDates: true,
				ingress:
					'Tällä lomakkeella keräämme tärkeää tietoa sinusta ja läheisistäsi. Avaamalla tämän lomakkeet olet jo hyväksynyt kaiken.',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{
			type: SectionType.basicInformation,
			content: {
				title: 'Perustiedot',

				firstname: '',
				firstnameLabel: '',
				firstnameInUse: true,
				firstnameRequired: true,

				lastname: '',
				lastnameLabel: '',
				lastnameInUse: true,
				lastnameRequired: true,

				department: '',
				departmentLabel: '',
				departmentInUse: true,
				departmentRequired: false,

				adress: '',
				adressLabel: '',
				adressInUse: true,
				adressRequired: false,

				phone: '',
				phoneLabel: '',
				phoneInUse: true,
				phoneRequired: false,

				email: '',
				emailLabel: '',
				emailInUse: true,
				emailRequired: false
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Jos olet Anatidaephobiaani',
				condition: false,
				options: [
					{
						label: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua',
						checked: false
					},
					{ label: 'Olet ankka, joka pelkää, että joku tuijottaa sinua', checked: false }
				]
			}
		},
		{
			type: SectionType.question_Checkbox,
			content: {
				title: 'Suunnittelutyöstä',
				condition: false,
				options: [
					{
						label: 'Dynaaminen takinkääntö on poliitikon paras ominaisuus',
						checked: false
					},
					{
						label: 'Tehokas poliitikko muistuttaa enemmän tuulimyllyä kuin asiamiestä',
						checked: false
					},
					{ label: 'Kepulla ei ole asiaa hallitukseen', checked: false },
					{
						label: 'Jos ei tähtää tarpeeksi korkealle, kapsahtaa katajaan',
						checked: false
					},
					{
						label:
							'Gerbiileistä ei ole tehokkaiksi poliitikoiksi, mutta niistä saa erinomaisia asiamiehia',
						checked: false
					}
				]
			}
		},
		{
			type: SectionType.question_Radio,
			content: {
				title: 'Politiikan tehokkain työeläin',
				condition: false,
				options: [
					{
						label: 'Ankka',
						value: 'false'
					},
					{ label: 'Supikoira', value: 'true' },
					{ label: 'Kenguru', value: 'true' },
					{ label: 'Mäyräkoira', value: 'true' },
					{ label: 'Pykäläkoira', value: 'true' },
					{ label: 'Viivoitin', value: 'true' },
					{ label: 'Kuplasammakko', value: 'true' },
					{ label: 'Gerbiili', value: 'true' }
				]
			}
		},
		{
			type: SectionType.question_Text,
			content: {
				title: 'Suosikki TV-sarjani on:',
				condition: false,
				label: 'tv-sarja',
				value: ''
			}
		},
		{
			type: SectionType.question_Text,
			content: {
				title: 'Valehtelit edellisessä kohdassa kirjoita tähän oikea vastaus',
				condition: false,
				label: 'tv-sarja',
				value: ''
			}
		},
		{
			type: SectionType.question_Select,
			content: {
				title: 'Olen erittäin väsynyt',
				condition: false,
				options: [
					{
						label: 'Joissakin',
						value: '1'
					},
					{
						label: 'Listoissa',
						value: '2'
					},
					{
						label: 'Pitäisi',
						value: '3'
					},
					{
						label: 'Olla',
						value: '4'
					},
					{
						label: 'Merkittävästi',
						value: '5'
					},
					{
						label: 'Vähemmän',
						value: '6'
					},
					{
						label: 'Vaihtoehtoja',
						value: '7'
					},
					{
						label: 'Mutta',
						value: '8'
					},
					{
						label: 'Ei',
						value: '9'
					},
					{
						label: 'Mahda',
						value: '10'
					},
					{
						label: 'Mitään',
						value: '11'
					}
				]
			}
		},
		{
			type: SectionType.afterword,
			content: {
				buttonText: 'Kyllä, Tahdon osallistua tapahtumaan'
			}
		}
	]
};
