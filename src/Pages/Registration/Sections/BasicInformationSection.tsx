import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { IEvent } from '../../../MockData/MockEvents';
import { TextField } from '../../../Components/TextInput/Textinput';
import { SelectFieldBase, SelectField } from '../../../Components/Select/Select';
import { FieldContainer } from '../../../Components/FieldContainer/FieldContainer';
import { IBasicInformationSection, ISectionHelpers } from '../Registration';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Perustietolohko
//************************************************** */

interface IBasicInformationSectionProps {
	section: IBasicInformationSection;
	helpers: ISectionHelpers;
}

export const BasicInformationSection: FC<IBasicInformationSectionProps> = (props) => (
	<div className="registration__content__section">
		<Heading text={props.section.content.title || 'Perustietolohko'} isUnderlined />

		<TextField name="name" label={props.section.content.firstname || 'Etunimi'} />
		<TextField name="othername" label={props.section.content.lastname || 'Sukunimi'} />
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
					<SelectFieldBase name="month" placeholder="Kuukausi" options={monthOptions} />
				</div>
				<div className="col-sm-3">
					<SelectFieldBase name="year" placeholder="Vuosi" options={yearOptions} />
				</div>
			</div>
		</FieldContainer>

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</div>
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
