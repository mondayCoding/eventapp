import React, { FC, useState } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { IEvent } from '../../../MockData/MockEvents';
import { TextField, TextFastField } from '../../../Components/TextInput/Textinput';
import { SelectField } from '../../../Components/Select/Select';
import { FieldContainer } from '../../../Components/FieldContainer/FieldContainer';
import { IBasicInformationSection, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';
import { BirthDateSelect } from '../../../Components/Select/BirthDateSelect';
import { SliderField } from '../../../Components/CheckBox/SliderCheckBox';

//************************************************** */
// Perustietolohko
//************************************************** */

interface IBasicInformationSectionProps {
	section: IBasicInformationSection;
	helpers: ISectionHelpers;
}

export const BasicInformationSection: FC<IBasicInformationSectionProps> = (props) => {
	const [editMode, setEditMode] = useState(true);
	const content = props.section.content;
	const sectionIndex = props.helpers.sectionIndex;
	const path = `sections.${sectionIndex}.content`;

	const toggleEditMode = () => setEditMode(!editMode);

	return (
		<div className="registration__content__section">
			<Heading text={content.title || 'Perustietolohko'} isUnderlined />

			{editMode ? (
				<div>
					{content.firstnameInUse && (
						<TextFastField
							name={path + '.firstname'}
							label={content.firstnameLabel || 'Etunimi'}
							required={content.firstnameRequired}
						/>
					)}
					{content.lastnameInUse && (
						<TextFastField
							name={path + '.lastname'}
							label={content.lastnameLabel || 'Sukunimi'}
							required={content.lastnameRequired}
						/>
					)}
					{content.adressInUse && (
						<TextFastField
							name={path + '.adress'}
							label={content.adressLabel || 'Osoite'}
							required={content.adressRequired}
						/>
					)}
					{content.departmentInUse && (
						<TextFastField
							name={path + '.department'}
							label={content.departmentLabel || 'Osasto'}
							required={content.departmentRequired}
						/>
					)}
					{content.phoneInUse && (
						<TextFastField
							name={path + '.phone'}
							label={content.phoneLabel || 'Puhelin'}
							required={content.phoneRequired}
						/>
					)}
					{content.emailInUse && (
						<TextFastField
							name={path + '.email'}
							label={content.emailLabel || 'Email'}
							required={content.emailRequired}
						/>
					)}

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
					<FieldContainer label="Syntymäaika">
						<BirthDateSelect></BirthDateSelect>
					</FieldContainer>
				</div>
			) : (
				<div>
					{props.helpers.isInEditMode && (
						<div className="registration__content__section__settings">
							<FieldRow
								path={path}
								field="firstname"
								label="Etunimi"
								index={sectionIndex}
								disabled={!content.firstnameInUse}
							></FieldRow>

							<FieldRow
								path={path}
								field="lastname"
								label="Sukunimi"
								index={sectionIndex}
								disabled={!content.lastnameInUse}
							></FieldRow>
							<FieldRow
								path={path}
								field="department"
								label="Osasto"
								index={sectionIndex}
								disabled={!content.departmentInUse}
							></FieldRow>
							<FieldRow
								path={path}
								field="adress"
								label="Osoite"
								index={sectionIndex}
								disabled={!content.adressInUse}
							></FieldRow>
							<FieldRow
								path={path}
								field="phone"
								label="Puhelin"
								index={sectionIndex}
								disabled={!content.phoneInUse}
							></FieldRow>
							<FieldRow
								path={path}
								field="email"
								label="Email"
								index={sectionIndex}
								disabled={!content.emailInUse}
							></FieldRow>
						</div>
					)}
				</div>
			)}

			<EditSectionBar
				onEditClick={toggleEditMode}
				isInEditMode={props.helpers.isInEditMode}
				helpers={props.helpers}
			/>
		</div>
	);
};

interface IFieldRow {
	path: string;
	field: string;
	index: number;
	label: string;
	disabled: boolean;
}

const FieldRow = ({ path, field, index, label, disabled }: IFieldRow) => (
	<div className="registration__content__section__settings__field">
		<SliderField
			name={`${path}.${field}InUse`}
			// id={'basicInfo_isUse_' + index}
			label=""
		/>
		<TextField
			name={`${path}.${field}Label`}
			label={label}
			placeholder="Korvaa Selite"
			disabled={disabled}
		/>
		<SliderField
			name={`${path}.${field}Required`}
			// id={'basicInfo_required_' + index}
			disabled={disabled}
			label="Pakollinen"
		/>
	</div>
);

// const TimeOptions = [
// 	{ label: '12:00', value: '1' },
// 	{ label: '12:15', value: '2' },
// 	{ label: '12:30', value: '3' },
// 	{ label: '12:45', value: '4' }
// ];

export const initialValues: IEvent = {
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
