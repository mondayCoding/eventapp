import React, { FC, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { RegistrationPage } from './Assets/Styles';
import { IntroductionSection } from './Sections/IntroductionSection';
import { AccommdationSection } from './Sections/AccommodationSection';
import { OrdersSection } from './Sections/OrdersSections';
import { CheckboxQuestionSection } from './Sections/QuestionSectionCheckbox';
import { RadioQuestionSection } from './Sections/QuestionSectionRadio';
import { TextQuestionSection } from './Sections/QuestionSectionText';
import { SelectQuestionSection } from './Sections/QuestionSectionSelect';
import { BasicInformationSection } from './Sections/BasicInformationSection';
import { Formik, FieldArray } from 'formik';
import { Button } from '../../Components/Button/Button';
import Icons from '../../Components/Icons/icons';
import { AutoFormDebug } from '../../Utils/FormDebug';
import { SelectBase } from '../../Components/Select/Select';

interface RegistrationRouteProps {
	id: string;
}

type formProps = RouteComponentProps<RegistrationRouteProps>;

interface IRegistrationForm {
	images: {
		header?: string;
		logo?: string;
	};
	sections: RegistrationFormSection[];
}

enum SectionType {
	basicInformation,
	introduction,
	afterword,
	question_Checkbox,
	question_Radio,
	question_Text,
	question_Select,
	accommodation,
	orders,
	lectures
}
//*********************************************************** */
// Question Sections
//*********************************************************** */

export interface IQuestionSectionRadio {
	type: SectionType.question_Radio;
	content: {
		title: string;
		condition: boolean;
		options: { value: string; label: string }[];
	};
}

export interface IQuestionSectionSelect {
	type: SectionType.question_Select;
	content: {
		title: string;
		condition: boolean;
		options: { value: string; label: string }[];
	};
}

export interface IQuestionSectionCheckbox {
	type: SectionType.question_Checkbox;
	content: {
		title: string;
		condition: boolean;
		options: { checked: boolean; label: string }[];
	};
}

export interface IQuestionSectionText {
	type: SectionType.question_Text;
	content: {
		title: string;
		condition: boolean;
		label: string;
		value: string;
	};
}

//*********************************************************** */
//*********************************************************** */

export interface IAccommodationSection {
	type: SectionType.accommodation;
	content: { title: string };
}

export interface IIntroductionSection {
	type: SectionType.introduction;
	content: { headingtext: string; ingress?: string; start: Date; end: Date };
}

export interface IBasicInformationSection {
	type: SectionType.basicInformation;
	content: { title?: string; firstname?: string; lastname?: string };
}

interface IAfterwordSection {
	type: SectionType.afterword;
	content: any;
}

interface ILecturesSection {
	type: SectionType.lectures;
	content: any;
}

export interface IOrdersContent {
	type: SectionType.orders;
	content: {
		title: string;
		products: { name: string; value: number; avaibility: string }[];
	};
}

type RegistrationFormSection =
	| IBasicInformationSection
	| IAccommodationSection
	| IIntroductionSection
	| IAfterwordSection
	| ILecturesSection
	| IOrdersContent
	| IQuestionSectionRadio
	| IQuestionSectionCheckbox
	| IQuestionSectionText
	| IQuestionSectionSelect;

export interface ISectionHelpers {
	isInEditMode: boolean;
	disableDown: boolean;
	disableUp: boolean;
	moveUp: () => void;
	moveDown: () => void;
	remove: () => void;
}

const RenderSection = (section: RegistrationFormSection, helpers: ISectionHelpers) => {
	switch (section.type) {
		case SectionType.introduction:
			return <IntroductionSection section={section} helpers={helpers} />;

		case SectionType.afterword:
			return <div>Loppu</div>;

		case SectionType.basicInformation:
			return <BasicInformationSection section={section} helpers={helpers} />;

		case SectionType.orders:
			return <OrdersSection section={section} helpers={helpers} />;

		case SectionType.accommodation:
			return <AccommdationSection section={section} helpers={helpers} />;

		case SectionType.question_Radio:
			return <RadioQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Checkbox:
			return <CheckboxQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Text:
			return <TextQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Select:
			return <SelectQuestionSection content={section.content} helpers={helpers} />;

		default:
			return <h2>Lohkotyypille ei löytynyt render-metodia: {section.type}</h2>;
	}
};

export const Registration: FC<formProps> = ({ match }) => {
	useDocumentTitle('Ilmoittautumislomake');
	const [editing, setEditing] = useState(true);
	const [showJSON, setShowJSON] = useState(false);
	const [data, setData] = useState(MockRegistration);

	return (
		<RegistrationPage editing={editing}>
			<div className="registration">
				<nav className="registration__top">top</nav>

				<main className="registration__content">
					{data.images.header && (
						<div className="registration__content__header">
							<img
								src={data.images.header}
								alt=""
								className="registration__content__header__image"
							/>
						</div>
					)}

					<div className="TEST">
						<Button
							text={editing ? 'Esikatsele' : 'Muokkaa'}
							className="TEST__BUTTON"
							icon={Icons.edit}
							onClick={() => setEditing(!editing)}
						/>
						<Button
							text={showJSON ? 'Piilota JSON' : 'Näytä JSON'}
							className="TEST__BUTTON"
							icon={showJSON ? Icons.eye : Icons.eye_slash}
							onClick={() => setShowJSON(!showJSON)}
						/>
						<Button
							text={'Pohja #1 (Pitkä)'}
							className="TEST__BUTTON TEST__BUTTON--THEME"
							icon={Icons.globe}
							onClick={() => setData(MockRegistration)}
						/>
						<Button
							text={'Pohja #2 (Lyhyt)'}
							className="TEST__BUTTON TEST__BUTTON--THEME"
							icon={Icons.globe}
							onClick={() => setData(MockRegistrationShort)}
						/>
						<Button
							text={'Pohja #3 (Kysymyksiä)'}
							className="TEST__BUTTON TEST__BUTTON--THEME"
							icon={Icons.globe}
							onClick={() => setData(MockRegistrationQuestions)}
						/>

						<Button
							text={'Lisää Perustietolohko'}
							className="TEST__BUTTON TEST__BUTTON"
							icon={Icons.list}
							onClick={() => setData(MockRegistrationQuestions)}
						/>
						<Button
							text={'Lisää Valintaruutu'}
							className="TEST__BUTTON TEST__BUTTON"
							icon={Icons.list}
							onClick={() => setData(MockRegistrationQuestions)}
						/>
						<Button
							text={'Lisää Monivalinta'}
							className="TEST__BUTTON TEST__BUTTON"
							icon={Icons.list}
							onClick={() => setData(MockRegistrationQuestions)}
						/>
						<Button
							text={'Lisää '}
							className="TEST__BUTTON TEST__BUTTON"
							icon={Icons.list}
							onClick={() => setData(MockRegistrationQuestions)}
						/>
					</div>

					<Formik
						initialValues={data}
						onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
					>
						{(formik) => (
							<>
								{showJSON ? (
									<AutoFormDebug />
								) : (
									<FieldArray name="sections">
										{(sectionHelpers) => {
											return formik.values.sections.map((section, index) => {
												const helpers = {
													isInEditMode: editing,
													disableUp: index === 0,
													disableDown: index === formik.values.sections.length - 1,
													moveUp: () => sectionHelpers.swap(index, index - 1),
													moveDown: () => sectionHelpers.swap(index, index + 1),
													remove: () => {
														if (window.confirm('Haluatko varmasti poistaa lohkon?')) {
															sectionHelpers.remove(index);
														}
													}
												};

												return RenderSection(section, helpers);
											});
										}}
									</FieldArray>
								)}
							</>
						)}
					</Formik>
				</main>

				<footer className="registration__footer">footer</footer>
			</div>
		</RegistrationPage>
	);
};

const MockRegistration: IRegistrationForm = {
	images: {
		header:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Testitapahtuma',
				ingress:
					'Tässä perustapahtumassa on esiteltynä kaikki peruslohkot. Suurimmassa osassa ei ole varsinaista toteutusta 😢',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{ type: SectionType.basicInformation, content: { title: 'Henkilötiedot' } },
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
		}
	]
};

const MockRegistrationShort: IRegistrationForm = {
	images: {
		header:
			'https://cbsnews1.cbsistatic.com/hub/i/2016/09/29/d1a671d9-556e-468d-8639-159e2842f15b/logan-new-hamshire-cat-2016-09-29.jpg'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Kissatapahtuma',
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
				firstname: 'Kissan Etunimi',
				lastname: 'Kissan Sukunimi'
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
		}
	]
};

const MockRegistrationQuestions: IRegistrationForm = {
	images: {
		header: 'https://i.ytimg.com/vi/XBPjVzSoepo/maxresdefault.jpg'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Tiedostelulomake',
				ingress:
					'Tällä lomakkeella keräämme tärkeää tietoa sinusta ja läheisistäsi. Avaamalla tämän lomakkeet olet jo hyväksynyt kaiken.',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{ type: SectionType.basicInformation, content: { title: 'Perustiedot' } },
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
		}
	]
};
