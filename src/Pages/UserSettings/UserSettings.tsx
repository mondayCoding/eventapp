import React, { useContext, useState } from 'react';
import * as routes from '../../Constants/Routes';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { Formik } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { SelectField } from '../../Components/Select/Select';
import { CheckBoxField } from '../../Components/CheckBox/CheckBox';

export const UserSettings = () => {
	useDocumentTitle('Luo tili');

	return (
		<div>
			<CardWrapper>
				<Heading text="Käyttäjäasetukset" isUnderlined />
				<UserSettingsForm></UserSettingsForm>
			</CardWrapper>
		</div>
	);
};

const UserSettingsForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
		>
			<>
				{/* <TextField name="sender" label="Lähettäjä"></TextField>
				<TextField name="title" label="Viestin otsikko"></TextField>
				<TextAreaField name="content" label="sisältö"></TextAreaField> */}
				<SelectField
					label="Teema"
					name="theme"
					options={[
						{
							label: 'Yö',
							value: 1
						},
						{
							label: 'Päivä',
							value: 2
						}
					]}
				></SelectField>
				<SelectField
					label="Etusivu"
					name="pageAfterLogin"
					options={[
						{
							label: 'Dash',
							value: 1
						},
						{
							label: 'Tapahtumavalikko',
							value: 2
						},
						{
							label: 'Asiakasvalikko',
							value: 2
						}
					]}
				></SelectField>
				<span>Valitse mikä sivu avataan kirjautumisen jälkeen </span>
				<CheckBoxField label="Perunut" name="nom"></CheckBoxField>
				<CheckBoxField label="Pääkäyttäjä" name="nom"></CheckBoxField>
				<CheckBoxField label="Asiantuntija" name="nom"></CheckBoxField>
			</>
		</Formik>
	);
};

const initialValues = {
	sender: '',
	title: '',
	theme: 2
};
