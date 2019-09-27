import React, { FC } from 'react';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import { TextField } from '../../Components/TextInput/Textinput';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { SelectField, SelectFieldBase } from '../../Components/Select/Select';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';

export const Settings: FC<{ event?: IEvent }> = ({ event }) => {
	useDocumentTitle('Tapahtumat');
	return (
		<>
			<CardWrapper>
				<div className="card__heading">
					<Heading text="Tapahtuman tiedot" isUnderlined></Heading>
				</div>
				<div className="row">
					<div className="col-md-8">
						<EventForm event={event!} />
					</div>
					<div className="col-md-4">
						<img
							style={{ display: 'block', maxWidth: '100%' }}
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						/>
					</div>
				</div>
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
		</>
	);
};

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
									{ label: '4', value: '4' }
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
									{ label: 'Huhtikuu', value: '4' }
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
						<div className="col-sm-2"></div>
					</div>
				</FieldContainer>
			</>
		)}
	</Formik>
);

const initialValues: IEvent = {
	id: '123',
	description: '',
	name: '',
	created: new Date(),
	location: '',
	start: new Date(),
	end: new Date(),
	tags: []
};
