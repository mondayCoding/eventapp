import React, { FC, useContext, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { CardWrapper } from '../../Components/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { EventParticipationByRolesGraph } from '../../Graphs/EventParticipationByRolesGraph';
import { MultiStatCard } from '../../Components/MultiStatusCard';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { SelectFieldBase, SelectField } from '../../Components/Select/Select';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';
import { useEvents } from '../../Queries/useEvents';
import SliderCheckbox from '../../Components/CheckBox/SliderCheckBox';
import { WarningNotification } from 'library';
import { Link } from 'react-router-dom';

interface RegistrationRouteProps {
	id: string;
}

type formProps = RouteComponentProps<RegistrationRouteProps>;

const modules = {
	useBasicInformation: true,
	useLimitations: false,
	useAccommodations: false,
	useInfoSafety: false,
	useProducts: false,
	useBillingInfo: false,
	useLectures: false
};

export const RegistrationForm: FC<formProps> = ({ match }) => {
	useDocumentTitle('Ilmoittautumislomake');
	const { events } = useEvents();
	const event = events.find((event) => event.id === match.params.id);
	const [usedModules, setUsedModules] = useState(modules);

	// const handleModuleToggle = (x: any) => {
	// 	setUsedModules({ ...usedModules, x });
	// };

	return (
		<>
			<WarningNotification text="Lomakkeen kautta on tehty ilmoittautumisia. Asetuksien muuttaminen on mahdollista, mutta ei suositeltavaa." />

			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading text="Lomakkeen perusasetukset" isUnderlined icon={Icons.cog} />
						<RegistrationFormSettings event={event} />
					</CardWrapper>

					{/* <div style={{ marginLeft: '1.25rem' }}>
							<ol>
								<li>nimi</li>
								<li>linkin teksti</li>
								<li>kuvaus</li>
								<li>aukeaa</li>
								<li>sulkeutuu</li>
								<li>näkyvyys ()</li>
								<li>kielet (1/2) </li>
								<li>
									<b>lomakkeella:</b>
								</li>
								<li>johdanto</li>
								<li>Otsikko</li>
								<li>Perustietolohkot (kentät mitkä) </li>
								<li>rajoitteet ( mitkä)</li>
								<li>tietosuojat ( mitkä)</li>
								<li>tuotteet ( mitkä)</li>
								<li>majoitukset ( mitkä)</li>
								<li>luentosarjat ( mitkä)</li>
								<li>Kysymyslohkot ( kysymykset)</li>
								<li>laskutuestiedot ( kysymykset)</li>
								<li>vahvistus ( millainen)</li>
							</ol>
                  </div> */}

					<CardWrapper>
						<Heading
							isUnderlined
							text="Johdanto"
							ingress="Lomakkeen alkulohko tämä on pakollinen osio"
						></Heading>
						<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
							{() => (
								<>
									<TextAreaField name="description" label="Kuvaus" />
								</>
							)}
						</Formik>
					</CardWrapper>

					{usedModules.useBasicInformation && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Perustiedot"
								ingress="Määritä lomakkeella kysyttävät perustiedot, voit myös muuttaa lomakkeella näkyvien kenttien nimi"
							></Heading>
							<Formik
								onSubmit={() => {}}
								initialValues={initialValues}
								enableReinitialize
							>
								{() => (
									<>
										<TextField name="name" label="Etunimi" />
										<TextField name="name" label="Sukunimi" />

										<TextField name="link" label="Linkin teksti" />
										<TextAreaField name="description" label="Kuvaus" />
										<TextField name="location" label="Sijainti" />
									</>
								)}
							</Formik>
						</CardWrapper>
					)}
					{usedModules.useBillingInfo && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Laskutustiedot"
								ingress="Lomakkeen alkulohko"
							></Heading>
						</CardWrapper>
					)}
					{usedModules.useLimitations && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Rajoitteet"
								ingress="Lomakkeen alkulohko"
							></Heading>
						</CardWrapper>
					)}
					{usedModules.useInfoSafety && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Tietosuojat"
								ingress="Lomakkeen alkulohko"
							></Heading>
						</CardWrapper>
					)}
					{usedModules.useAccommodations && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Majoitustenhallinta"
								ingress="Lomakkeen alkulohko"
							></Heading>
						</CardWrapper>
					)}
					{usedModules.useLectures && (
						<CardWrapper>
							<Heading
								isUnderlined
								text="Luentosarjat"
								ingress="Lomakkeen alkulohko"
							></Heading>
						</CardWrapper>
					)}
				</div>
				<div className="col-lg-4">
					<CardWrapper>
						<Link className="card__link" to={routes.registration.path + '/1'}>
							{Icons.eye} Esikatsele Ilmoittaumislomaketta
						</Link>
					</CardWrapper>

					<CardWrapper>
						<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
							{() => (
								<>
									<Heading
										isUnderlined
										text="Kieliversiot"
										ingress="Valitse millä kielillä lomake on tarjolla"
									></Heading>

									<SliderCheckbox
										defaultChecked
										label="Suomi"
										id="lang_1"
									></SliderCheckbox>
									<SliderCheckbox label="Englanti" id="lang_2"></SliderCheckbox>
									<SliderCheckbox label="Ahvenanmaa" id="lang_3"></SliderCheckbox>
								</>
							)}
						</Formik>
					</CardWrapper>

					<CardWrapper>
						<Formik onSubmit={() => {}} initialValues={initialValues} enableReinitialize>
							{() => (
								<>
									<Heading
										isUnderlined
										text="Lomakelohkot"
										ingress="Valitse lomakkeella käytettävät lohkot. Voit näyttää vain lohkoja joiden toiminnallisuus on käytössä tapahtumassa"
									></Heading>

									<SliderCheckbox
										label="Perustiedot"
										id="module_id_1"
										checked={usedModules.useBasicInformation}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useBasicInformation: !usedModules.useBasicInformation
											})
										}
									></SliderCheckbox>
									<SliderCheckbox
										label="Rajoitteet"
										id="module_id_2"
										checked={usedModules.useLimitations}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useLimitations: !usedModules.useLimitations
											})
										}
									></SliderCheckbox>

									<SliderCheckbox
										label="Tietosuojat"
										id="module_id_3"
										checked={usedModules.useInfoSafety}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useInfoSafety: !usedModules.useInfoSafety
											})
										}
									></SliderCheckbox>
									<SliderCheckbox
										label="Tuotteet"
										id="module_id_4"
										checked={usedModules.useProducts}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useProducts: !usedModules.useProducts
											})
										}
									></SliderCheckbox>
									<SliderCheckbox
										label="Laskutustiedot"
										id="module_id_5"
										checked={usedModules.useBillingInfo}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useBillingInfo: !usedModules.useBillingInfo
											})
										}
									></SliderCheckbox>
									<SliderCheckbox
										label="Luentosarjat"
										id="module_id_6"
										checked={usedModules.useLectures}
										onChange={() =>
											setUsedModules({
												...usedModules,
												useLectures: !usedModules.useLectures
											})
										}
									></SliderCheckbox>
									<SliderCheckbox
										label="Majoittuminen "
										id="module_id_7"
										title="Majoitukset on otettava käyttöön tapahtumassa, jotta majoituslohkoa voisi käyttää ilmoittautumisessa"
										checked={usedModules.useAccommodations}
										disabled
										onChange={() =>
											setUsedModules({
												...usedModules,
												useAccommodations: !usedModules.useAccommodations
											})
										}
									></SliderCheckbox>
								</>
							)}
						</Formik>
					</CardWrapper>

					<MultiStatCard
						stats={[
							{
								text: 'Ilmoittautuneita',
								icon: Icons.users,
								state: 'success',
								value: '2 234'
							},
							{
								text: 'Peruneita',
								icon: Icons.users,
								state: 'warning',
								value: '24'
							}
						]}
					></MultiStatCard>

					<CardWrapper>
						<EventParticipationByRolesGraph />
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const RegistrationFormSettings: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<TextField name="name" label="Nimi" />
				<TextField name="link" label="Linkin teksti" />

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

				<FieldContainer label="Aukeaa">
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
						<div className="col-sm-2">
							<SelectFieldBase name="time" placeholder="Aika" options={TimeOptions} />
						</div>
					</div>
				</FieldContainer>
				<FieldContainer label="Sulkeutuu">
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
						<div className="col-sm-2">
							<SelectFieldBase name="time" placeholder="Aika" options={TimeOptions} />
						</div>
					</div>
				</FieldContainer>
			</>
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
	homepage: ''
};
