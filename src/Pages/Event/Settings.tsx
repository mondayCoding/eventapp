import React, { FC } from 'react';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import { TextField } from '../../Components/TextInput/Textinput';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { SelectField, SelectFieldBase } from '../../Components/Select/Select';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';
import SliderCheckbox from '../../Components/CheckBox/SliderCheckBox';
import { Button } from '../../Components/Button/Button';
import Icons from '../../Components/Icons/icons';

export const Settings: FC<{ event?: IEvent }> = ({ event }) => {
	useDocumentTitle('Tapahtumat');
	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading
							text="Perustiedot"
							isUnderlined
							ingress="Määritä tapahtuman pohjatiedot. Näitä käytetetään määrittämään tapahtuman kesto ja lomakkeiden perusarvot"
						></Heading>
						<EventForm event={event!} />
					</CardWrapper>

					<CardWrapper>
						<Heading
							text="Laskuttajan tiedot"
							isUnderlined
							ingress="Anna laskuttajan tiedot. Näitä tarvitaan jos tapahtumassa on maksullisia tuotteita tai ilmoittautumisia"
						></Heading>
					</CardWrapper>

					<CardWrapper>
						<OrganizerForm></OrganizerForm>

						<h2> ASETUKSET</h2>
						<div style={{ marginLeft: '1.25rem' }}>
							<ol>
								<li>nimi ()</li>
								<li>alkaa/päättyy ()</li>
								<li>kuvaus ()</li>
								<li>
									tila (päättynyt => alkanut => käynnissä => julkaisematon => peruutettu )
								</li>
								<li>osoite ()</li>
								<li>
									järjestäjä (nimi, puh, email, ytun, osoit, postnum, postitoimpaik, maa)
								</li>
								<li>laskuttaja laskuttajatiedot ()</li>
								<li>tapahtuman roolit (valittavaissa lomakkeilla)</li>
								<li>kuva ()</li>
								<li>palkkiot()</li>
								<li>onsite(on/off)</li>
								<li>some(linkit)</li>
							</ol>
						</div>
					</CardWrapper>

					<CardWrapper>
						<SomeAndImageForm></SomeAndImageForm>
					</CardWrapper>
				</div>

				<div className="col-lg-4">
					<CardWrapper>
						<img
							alt=""
							className="card__image"
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						/>
						<Button
							icon={Icons.download}
							text="Hallitse tapahtuman kuvia"
							className="card__button--large"
						></Button>

						<Button
							icon={Icons.plus}
							text="Luo ilmoittautumislomake"
							className="card__button--large"
						></Button>
					</CardWrapper>

					<CardWrapper>
						<ModuleSettings event={event!} />
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const SomeAndImageForm: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<Heading
					text="Kuvat ja Sometiedot"
					isUnderlined
					ingress="Kuvia käytetään tapahtuman viestinnässä ja lomakkeilla."
				></Heading>

				<Heading text="Kuvat" type="h4" hasSpaceAbove isUnderlined></Heading>

				<SelectField
					name="city"
					label="Pääkuva"
					options={[
						{ label: 'Turku', value: '62000' },
						{ label: 'Muuninka', value: '41002' },
						{ label: 'Helsinki', value: '79100' },
						{ label: 'Sipoo', value: '84200' }
					]}
				/>
				<SelectField
					name="city"
					label="Kalenteri"
					options={[
						{ label: 'Turku', value: '62000' },
						{ label: 'Muuninka', value: '41002' },
						{ label: 'Helsinki', value: '79100' },
						{ label: 'Sipoo', value: '84200' }
					]}
				/>

				<Heading text="Somen kotisivustot" hasSpaceAbove isUnderlined type="h4"></Heading>

				<TextField label="Facebook " name="9"></TextField>
				<TextField label="Instagram" name="3"></TextField>
				<TextField label="Youtube" name="4"></TextField>
				<TextField label="Facebook" name="1"></TextField>
				<TextField label="Twitter" name="6"></TextField>
				<TextField label="Muu" name="6"></TextField>
			</>
		)}
	</Formik>
);

const OrganizerForm: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<Heading
					text="Järjestän tiedot"
					ingress="Järjestäjän tietoja käytetään antamaan perustietoja tapahtuman viestintään ja lomakkeille."
					isUnderlined
				></Heading>
				<TextField label="Järjestäjä" name="organizer"></TextField>
				<TextField label="Puhelin" name="3"></TextField>
				<TextField label="Email" name="4"></TextField>
				<TextField label="Y-Tunnus" name="1"></TextField>
				<TextField label="Osoite" name="6"></TextField>
				<TextField label="Postinumero" name="6"></TextField>
				<TextField label="Postitoimipaikka" name="6"></TextField>
				<SelectField
					name="country"
					label="Maa"
					options={[
						{ label: 'Suomi', value: '1' },
						{ label: 'Kanada', value: '2' },
						{ label: 'Kiina', value: '3' },
						{ label: 'Ahvenanmaa', value: '4' }
					]}
				/>
			</>
		)}
	</Formik>
);

const ModuleSettings: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<Heading text="Valitse käytettävät toiminnot" isUnderlined></Heading>
				<SliderCheckbox label="Budjetointi" name="2"></SliderCheckbox>
				<SliderCheckbox label="Tuotteistus" name="3"></SliderCheckbox>
				<SliderCheckbox label="Majoitukset" name="4"></SliderCheckbox>
				<SliderCheckbox label="Omahallinta" name="1"></SliderCheckbox>
				<SliderCheckbox label="Laskutus" name="6"></SliderCheckbox>
			</>
		)}
	</Formik>
);

const EventForm: FC<{ event?: IEvent }> = (props) => (
	<Formik
		onSubmit={() => {}}
		initialValues={props.event || initialValues}
		enableReinitialize
	>
		{() => (
			<>
				<TextField name="name" label="Nimi" />
				<TextAreaField name="description" label="Kuvaus" />
				<TextField name="location" label="Sijainti" />

				<SelectField
					name="city"
					label="Kaupunki"
					options={[
						{ label: 'Turku', value: '62000' },
						{ label: 'Muuninka', value: '41002' },
						{ label: 'Helsinki', value: '79100' },
						{ label: 'Sipoo', value: '84200' }
					]}
				/>

				<TextField name="address" label="Osoite" />
				<TextField name="city" label="Postinumero" />
				<TextField name="department" label="Osasto" />
				<FieldContainer label="Alkaa">
					<div className="row" style={{ flex: '1 1 auto' }}>
						<div className="col-sm-3">
							<SelectFieldBase
								name="day"
								placeholder="Päivä"
								options={[
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
								]}
							/>
						</div>
						<div className="col-sm-4">
							<SelectFieldBase
								name="month"
								placeholder="Kuukausi"
								options={[
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
								]}
							/>
						</div>
						<div className="col-sm-3">
							<SelectFieldBase
								name="year"
								placeholder="Vuosi"
								options={[
									{ label: '2016', value: '1' },
									{ label: '2017', value: '2' },
									{ label: '2018', value: '3' },
									{ label: '2019', value: '4' }
								]}
							/>
						</div>
						<div className="col-sm-2">
							<SelectFieldBase
								name="time"
								placeholder="Aika"
								options={[
									{ label: '12:00', value: '1' },
									{ label: '12:15', value: '2' },
									{ label: '12:30', value: '3' },
									{ label: '12:45', value: '4' }
								]}
							/>
						</div>
					</div>
				</FieldContainer>
				<FieldContainer label="Loppuu">
					<div className="row" style={{ flex: '1 1 auto' }}>
						<div className="col-sm-3">
							<SelectFieldBase
								name="day"
								placeholder="Päivä"
								options={[
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
								]}
							/>
						</div>
						<div className="col-sm-4">
							<SelectFieldBase
								name="month"
								placeholder="Kuukausi"
								options={[
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
								]}
							/>
						</div>
						<div className="col-sm-3">
							<SelectFieldBase
								name="year"
								placeholder="Vuosi"
								options={[
									{ label: '2016', value: '1' },
									{ label: '2017', value: '2' },
									{ label: '2018', value: '3' },
									{ label: '2019', value: '4' }
								]}
							/>
						</div>
						<div className="col-sm-2">
							<SelectFieldBase
								name="time"
								placeholder="Aika"
								options={[
									{ label: '12:00', value: '1' },
									{ label: '12:15', value: '2' },
									{ label: '12:30', value: '3' },
									{ label: '12:45', value: '4' }
								]}
							/>
						</div>
					</div>
				</FieldContainer>
			</>
		)}
	</Formik>
);

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
