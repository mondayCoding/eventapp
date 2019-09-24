import React, { FC } from 'react';
import { Formik } from 'formik';
import { Heading } from '../../Components/Text/Heading';
import { TextField } from '../../Components/TextInput/Textinput';
import { SelectField } from 'library';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../MyCollection/MyCollection';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Data/useDocumentTitle';

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
