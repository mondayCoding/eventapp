import React, { FC, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { Heading } from '../../Components/Text/Heading';
import { IEvent } from '../../MockData/MockEvents';
import { RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { SelectFieldBase, SelectField } from '../../Components/Select/Select';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';
import SliderCheckbox from '../../Components/CheckBox/SliderCheckBox';
import styled from '../../Theme/theme';
import ReactTable from 'react-table';

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
	question,
	accommodation,
	orders,
	lectures
}

interface IQuestionSectionRadio {
	type: SectionType.question;
	content: {
		title: string;
		condition: boolean;
		options: { value: string; label: string }[];
	};
}

interface IQuestionSectionSelect {
	type: SectionType.question;
	content: {
		title: string;
		condition: boolean;
		options: { value: string; label: string }[];
	};
}

interface IQuestionSectionCheckbox {
	type: SectionType.question;
	content: {
		title: string;
		condition: boolean;
		label: string;
		value: boolean;
	};
}

interface IQuestionSectionText {
	type: SectionType.question;
	content: {
		title: string;
		condition: boolean;
		label: string;
		value: string;
	};
}

interface IAccommodationSection {
	type: SectionType.accommodation;
	content: { title: string };
}

interface IIntroductionSection {
	type: SectionType.introduction;
	content: { headingtext: string; ingress?: string; start: Date; end: Date };
}

interface IQuestionSection {
	type: SectionType.question;
	content: { title: string; questions: { text: string }[] };
}

interface IBasicInformationSection {
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

interface IOrdersContent {
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
	| IQuestionSection
	| IAfterwordSection
	| ILecturesSection
	| IOrdersContent;

const MockRegistration: IRegistrationForm = {
	images: {
		header:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	},
	sections: [
		{
			type: SectionType.introduction,
			content: {
				headingtext: 'Tapahtuman nimi',
				start: new Date(2019, 11, 11),
				end: new Date(2020, 0, 3)
			}
		},
		{ type: SectionType.basicInformation, content: { title: 'Perustiedot' } },
		{
			type: SectionType.question,
			content: {
				title: 'Suunnittelutyöstä',
				questions: [{ text: 'Dynaamisten lohkojen rakentaminen on vaikeaa' }]
			}
		},
		{
			type: SectionType.question,
			content: {
				title: 'Kysymyksiä vai ajatuksia',
				questions: [
					{ text: 'Gerbiilit muuttavat keväisin Sipooseen' },
					{ text: 'Kukaan ei ole koskaan ollut tyhjässä huoneessa' },
					{ text: 'Tummat teemat ovat turhia eikö kukaan käytä niitä' }
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
			type: SectionType.question,
			content: {
				title: 'Jos olet Anatidaephobiaani',
				questions: [
					{ text: 'Pelkäät, että jossakin on ankka, joka tuijottaa sinua' },
					{ text: 'Olet ankka, joka pelkää, että joku tuijottaa sinua' }
				]
			}
		}
	]
};

const RenderSection = (section: RegistrationFormSection, editing: boolean) => {
	switch (section.type) {
		case SectionType.introduction:
			return <IntroductionSection section={section} editing={editing} />;

		case SectionType.afterword:
			return <div>Loppu</div>;

		case SectionType.basicInformation:
			return <BasicInformation section={section} editing={editing} />;

		case SectionType.question:
			return <QuestionSection section={section} editing={editing} />;

		case SectionType.orders:
			return <OrdersSection section={section} editing={editing} />;

		case SectionType.accommodation:
			return <AccommdationSection section={section} editing={editing} />;

		default:
			return <h2>Lohko tyyppiä: {section.type}</h2>;
	}
};

export const Registration: FC<formProps> = ({ match }) => {
	useDocumentTitle('Ilmoittautumislomake');
	const [editing, setEditing] = useState(true);
	const data = MockRegistration;

	return (
		<RegistrationPage>
			<div className="registration">
				<nav className="registration__top">top</nav>

				<main className="registration__content">
					{data.images.header && (
						<div className="registration__content__header">
							<img src={data.images.header} alt="" />
						</div>
					)}

					{data.sections.map((section) => RenderSection(section, editing))}
				</main>

				<footer className="registration__footer">footer</footer>
			</div>
		</RegistrationPage>
	);
};

const RegistrationPage = styled.div`
	width: 100%;
	background: ${(p) => p.theme.body_background_color};
	font-family: ${(p) => p.theme.body_font};
	color: ${(p) => p.theme.text_color};

	.registration {
		&__top {
			padding: 0.5rem;
			background: ${(p) => p.theme.menu_background_color};
		}

		/* Pääsisältö */
		&__content {
			max-width: 64rem;
			background: ${(p) => p.theme.card_background_color};
			margin: 1.5rem auto;
			box-shadow: 0 0 5px 6px rgba(0, 0, 0, 0.2);
			border-radius: 0.5rem;

			/* Pääsisällän yläkuva */
			&__header {
				background: lightgray;
				max-height: 20rem;
				border-radius: 0.5rem 0.5rem 0 0;
				overflow: hidden;
			}

			/* Yksittäinen osio */
			&__section {
				padding: 1.5rem;

				/* Johdanto */
				&__introduction {
					&__heading {
						text-align: center;
						font-size: 1.5rem;
					}
					&__dates {
						display: block;
						text-align: center;
						margin-bottom: 1rem;
					}
					&__ingress {
						display: block;
						padding: 1rem;
						box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
						background: rgba(0, 0, 0, 0.015);

						&__text {
							display: block;
						}
					}
				}
			}
		}
		&__footer {
			padding: 1rem;
			background: ${(p) => p.theme.menu_background_color};
			text-align: center;
			display: flex;
			justify-content: center;
		}
	}
`;

//************************************************** */
// Johdanto
//************************************************** */

interface IIntroductionSectionProps {
	section: IIntroductionSection;
	editing: boolean;
}

const IntroductionSection: FC<IIntroductionSectionProps> = (props) => (
	<section className="registration__content__section">
		<h2 className="registration__content__section__introduction__heading">
			{props.section.content.headingtext || 'NO_HEADING_TEXT_GIVEN'}
		</h2>
		<span className="registration__content__section__introduction__dates">
			{`${props.section.content.start.toLocaleDateString(
				'fi-FI'
			)} - ${props.section.content.end.toLocaleDateString('fi-FI')}`}
		</span>
		<div className="registration__content__section__introduction__ingress">
			<span className="registration__content__section__introduction__ingress__text">
				{props.section.content.ingress || 'NO_INGRESS_TEXT_GIVEN'}
			</span>
		</div>
	</section>
);

//************************************************** */
// Majoituslohko
//************************************************** */

interface IAccommodationSectionProps {
	section: IAccommodationSection;
	editing: boolean;
}

const AccommdationSection: FC<IAccommodationSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.section.content.title || 'Majoituslohko'}
			ingress="Tässä lohkossa voi varata majoituksia"
		></Heading>
		<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
			{() => (
				<>
					<TextAreaField name="description" label="Kuvaus" />
				</>
			)}
		</Formik>
	</section>
);

//************************************************** */
// Tilauslohko
//************************************************** */

interface IOrdersSectionProps {
	section: IOrdersContent;
	editing: boolean;
}

const OrdersSection: FC<IOrdersSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.section.content.title || 'Tilauslohko'}
			ingress="Tässä lohkossa voi varata majoituksia"
		></Heading>
		<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
			{() => (
				<>
					<ReactTable
						pageSize={props.section.content.products.length}
						showPagination={false}
						data={props.section.content.products}
						columns={[
							{
								Header: 'Tuote',
								accessor: 'name'
							},
							{
								Header: 'Saatavuus',
								accessor: 'avaibility'
							},
							{
								Header: 'Hinta',
								accessor: 'value',
								Cell: ({ original }: { original: any }) => {
									return new Intl.NumberFormat('fi-FI', {
										style: 'currency',
										currency: 'EUR'
									}).format(original.value);
								}
							}
						]}
					></ReactTable>
				</>
			)}
		</Formik>
	</section>
);

//************************************************** */
// Kysymyslohko (TODO: dynaamiset kysymystyypit)
//************************************************** */

interface IQuestionSectionProps {
	section: IQuestionSection;
	editing: boolean;
}

const QuestionSection: FC<IQuestionSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.section.content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on erilaisia kysymyksiä"
		></Heading>
		<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
			{() => (
				<>
					{props.section.content.questions.map((question, i) => (
						<SliderCheckbox
							label={question.text}
							id={'random_q_' + i + Math.random()}
						></SliderCheckbox>
					))}
				</>
			)}
		</Formik>
	</section>
);

//************************************************** */
// Perustietolohko
//************************************************** */

interface IBasicInformationSectionProps {
	section: IBasicInformationSection;
	editing: boolean;
}

const BasicInformation: FC<IBasicInformationSectionProps> = (props) => (
	<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
		{() => (
			<div className="registration__content__section">
				<Heading text={props.section.content.title || 'Perustietolohko'} isUnderlined />
				{/* {props.editing && <Button text="Muokkaa osiota"></Button>} */}
				<TextField name="name" label={props.section.content.firstname || 'Etunimi'} />
				<TextField
					name="othername"
					label={props.section.content.lastname || 'Sukunimi'}
				/>
				<TextField name="link" label="Osoite" />

				<SelectField
					name="roles"
					label="Roolit"
					options={[
						{ label: 'Gerbiili', value: '62000' },
						{ label: 'Pomomies', value: '41002' },
						{ label: 'VIP', value: '79100' }
					]}
				/>
				<SelectField
					name="state"
					label="Tila"
					options={[
						{ label: 'Avattu', value: '62000' },
						{ label: 'Peruttu', value: '41002' },
						{ label: 'Suunnitteilla', value: '79100' }
					]}
				/>

				<TextField name="location" label="Sijainti" />

				<FieldContainer label="Syntymäaika">
					<div className="row" style={{ flex: '1 1 auto' }}>
						<div className="col-sm-3">
							<SelectFieldBase name="day" placeholder="Päivä" options={dayOptions} />
						</div>
						<div className="col-sm-4">
							<SelectFieldBase
								name="month"
								placeholder="Kuukausi"
								options={monthOptions}
							/>
						</div>
						<div className="col-sm-3">
							<SelectFieldBase name="year" placeholder="Vuosi" options={yearOptions} />
						</div>
					</div>
				</FieldContainer>
			</div>
		)}
	</Formik>
);

const dayOptions = [
	{ label: '1', value: '1' },
	{ label: '2', value: '2' },
	{ label: '3', value: '3' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
	{ label: '6', value: '6' },
	{ label: '7', value: '7' },
	{ label: '8', value: '8' },
	{ label: '9', value: '9' },
	{ label: '10', value: '10' },
	{ label: '11', value: '11' },
	{ label: '12', value: '11' },
	{ label: '13', value: '12' },
	{ label: '14', value: '13' },
	{ label: '15', value: '14' }
];

const monthOptions = [
	{ label: 'Tammikuu', value: '1' },
	{ label: 'Helmikuu', value: '2' },
	{ label: 'Maaliskuu', value: '3' },
	{ label: 'Huhtikuu', value: '4' },
	{ label: 'Toukokuu', value: '5' },
	{ label: 'Kesäkuu', value: '6' },
	{ label: 'Heinäkuu', value: '7' },
	{ label: 'Elokuu', value: '8' },
	{ label: 'Syyskuu', value: '9' },
	{ label: 'Lokakuu', value: '10' },
	{ label: 'Marraskuu', value: '11' },
	{ label: 'Joulukuu', value: '12' }
];

const yearOptions = [
	{ label: '2016', value: '1' },
	{ label: '2017', value: '2' },
	{ label: '2018', value: '3' },
	{ label: '2019', value: '4' }
];

const TimeOptions = [
	{ label: '12:00', value: '1' },
	{ label: '12:15', value: '2' },
	{ label: '12:30', value: '3' },
	{ label: '12:45', value: '4' }
];

const initialValues: IEvent = {
	country: '',
	department: '',
	id: '123',
	description: '',
	name: '',
	created: new Date(),
	location: '',
	start: new Date(),
	end: new Date(),
	tags: [],
	city: '',
	postNumber: '',
	address: '',
	state: 6,
	organizer: '',
	homepage: '',
	forms: []
};
