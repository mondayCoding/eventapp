import React from 'react';
import { CardWrapper } from '../../Components/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { Formik } from 'formik';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { SelectField, MultiSelectField } from '../../Components/Select/Select';
import { CheckBoxField } from '../../Components/CheckBox/CheckBox';
import { FieldContainer } from '../../Components/FieldContainer/FieldContainer';

export const UserSettings = () => {
	useDocumentTitle('Luo tili');

	return (
		<div>
			<CardWrapper>
				<Heading text="Järjestelmäasetukset" icon={Icons.computer} isUnderlined />
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
					label="Aloitussivu"
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
				<FieldContainer label="">
					<span>Valitse mikä sivu avataan kirjautumisen jälkeen </span>
				</FieldContainer>

				<Heading text="Käyttäjäasetukset" icon={Icons.user} hasSpaceAbove isUnderlined />

				<FieldContainer label="Oikeudet">
					<div style={{ width: '100%' }}>
						<br></br>
						<br></br>

						<CheckBoxField label="Pomomies" name="nom1"></CheckBoxField>
						<CheckBoxField label="Pääkäyttäjä" name="nom2"></CheckBoxField>
						<CheckBoxField
							label="Asiantuntija"
							disabled
							title="Tätä asetusta ei voi muuttaa"
							checked={true}
							name="nom3"
						></CheckBoxField>
					</div>
				</FieldContainer>

				<Heading
					text="Lomakkeiden perusasetukset"
					icon={Icons.list}
					hasSpaceAbove
					isUnderlined
					ingress="Näitä asetuksia käytetään perusasetuksina kun luot uusia lomakkeita. Asetuksien muuttaminen ei vaikuta aiemmin luotuihin lomakkeisiin."
				/>

				<MultiSelectField
					label="Kielet"
					name="pageAfterLogin"
					options={[
						{
							label: 'Suomi',
							value: 1
						},
						{
							label: 'Englanti',
							value: 2
						},
						{
							label: 'Ahvenanmaa',
							value: 3
						}
					]}
				></MultiSelectField>
				<FieldContainer label="">
					<span>Nämä kielet ovat automaattisesti valittuna kun luot uuden lomakkeen</span>
				</FieldContainer>
				<MultiSelectField
					label="Lomakelohkot"
					name="pageAfterLogin"
					options={[
						{
							label: 'Perustiedot',
							value: 1
						},
						{
							label: 'Majoitukset',
							value: 2
						},
						{
							label: 'Luennot',
							value: 3
						}
					]}
				></MultiSelectField>
				<FieldContainer label="">
					<span>
						Nämä lohkot ovat käytössä kun luot uuden lomakkeen. Tämä koskee vain Tyhjän
						pohjan päälle tehtyjä lomakkeita
					</span>
				</FieldContainer>

				<Heading text="Sähköpostin asetukset" isUnderlined icon={Icons.envelope} />
				<TextAreaField label="Sähköpostin allekirjoitus" name="nom" />
			</>
		</Formik>
	);
};

const initialValues = {
	sender: '',
	title: '',
	theme: 2
};
