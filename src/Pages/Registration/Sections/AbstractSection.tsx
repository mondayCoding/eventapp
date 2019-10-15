import React, { FC, useState } from 'react';
import { ISectionHelpers, IAbstractSection } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';
import { Heading } from '../../../Components/Text/Heading';
import { TextFastField, TextField } from '../../../Components/TextInput/Textinput';
import { FieldArray } from 'formik';
import {
	SelectField,
	CreatableMultiSelectField
} from '../../../Components/Select/Select';
import { Button } from '../../../Components/Button/Button';
import { SliderCheckboxInline } from '../../../Components/CheckBox/SliderCheckBox';
import { CheckBoxField } from '../../../Components/CheckBox/CheckBox';
import { FieldContainer } from '../../../Components/FieldContainer/FieldContainer';
import Icons from '../../../Components/Icons/icons';
import { IconButton } from '../../../Components/Button/IconButton';
import { TextAreaField } from '../../../Components/TextArea/TextArea';

//************************************************** */
// Abstactit (asetukset  + puhujat)
//************************************************** */

interface IAbstractSectionProps {
	content: IAbstractSection['content'];
	helpers: ISectionHelpers;
}

export const AbstractSection: FC<IAbstractSectionProps> = (props) => {
	const [editMode, setEditMode] = useState(false);
	const content = props.content;
	const sectionIndex = props.helpers.sectionIndex;
	const path = `sections.${sectionIndex}.content`;

	const toggleEditMode = () => setEditMode(!editMode);

	return (
		<section className="registration__content__section custom-gutter">
			<Heading text={content.title} isUnderlined ingress={content.titleDescription} />

			{editMode ? (
				<AbstactSectionConfig path={path} content={content} />
			) : (
				<AbstractSectionUser content={content} path={path} sectionIndex={sectionIndex} />
			)}

			{/* <Heading
				text={'Sisältö'}
				isUnderlined
				ingress={'Voit kopida erikoismerkin tai lisätä ne painamalla'}
			/> */}

			<EditSectionBar
				isInEditMode={props.helpers.isInEditMode}
				helpers={props.helpers}
				onEditClick={toggleEditMode}
			/>
		</section>
	);
};

const newAuthor: IAbstractSection['content']['authors'][0] = {
	firstname: '',
	lastname: '',
	title: '',
	city: '',
	email: '',
	isPresenter: false
};

interface IAbstractSectionUserProps {
	content: IAbstractSection['content'];
	path: string;
	sectionIndex: number;
}

const AbstractSectionUser: FC<IAbstractSectionUserProps> = ({
	content,
	path,
	sectionIndex
}) => {
	return (
		<div>
			<TextFastField name={path + '.abstractTitle'} label={content.abstractTitleLabel} />
			<SelectField
				name={path + '.type'}
				label={content.typeLabel}
				options={content.typeOptions}
				placeholder="Valitse"
			/>
			<CreatableMultiSelectField
				options={content.tagsOptions}
				label={content.tagsLabel}
				name={path + '.tags'}
			/>

			<FieldContainer label={content.topicLabel}>
				<div style={{ flex: '1 1 auto' }}>
					{content.topicOptions.map((topic, index) => (
						<CheckBoxField
							label={topic.text}
							name={path + '.topics.' + index + 'checked'}
						/>
					))}
				</div>
			</FieldContainer>

			{/* TODO: change this, only used field array to gain access to form context */}
			<FieldContainer label="Symbols">
				<FieldArray
					name={''}
					render={(helpers) => (
						<div>
							<Button
								text="Ω"
								onClick={() =>
									helpers.form.setFieldValue(
										path + '.content',
										helpers.form.values.sections[sectionIndex].content.content + 'Ω'
									)
								}
							/>
							<Button
								text="⊄"
								onClick={() =>
									helpers.form.setFieldValue(
										path + '.content',
										helpers.form.values.sections[sectionIndex].content.content + '⊄'
									)
								}
							/>
							<Button
								text="∑"
								onClick={() =>
									helpers.form.setFieldValue(
										path + '.content',
										helpers.form.values.sections[sectionIndex].content.content + '∑'
									)
								}
							/>
							<Button
								text="±"
								onClick={() =>
									helpers.form.setFieldValue(
										path + '.content',
										helpers.form.values.sections[sectionIndex].content.content + '±'
									)
								}
							/>
							<Button
								text="≠"
								onClick={() =>
									helpers.form.setFieldValue(
										path + '.content',
										helpers.form.values.sections[sectionIndex].content.content + '≠'
									)
								}
							/>
						</div>
					)}
				/>
			</FieldContainer>

			<TextAreaField
				label={content.contentLabel}
				name={path + '.content'}
			></TextAreaField>

			<Heading
				type="h4"
				text={content.authorsHeading}
				ingress={content.authorsDescription}
				isUnderlined
				hasSpaceAbove
			/>

			{content.authors.length > 0 && (
				<div className="row">
					<div className="col-lg-2">{content.authorLabels.firstname}</div>
					<div className="col-lg-2">{content.authorLabels.lastname}</div>
					<div className="col-lg-2">{content.authorLabels.title}</div>
					<div className="col-lg-2">{content.authorLabels.email}</div>
					<div className="col-lg-2">{content.authorLabels.city}</div>
					<div className="col-lg-2">{content.authorLabels.isPresenter}</div>
				</div>
			)}

			<FieldArray
				name={path + '.authors'}
				render={(helpers) => (
					<div>
						{content.authors.map((author, index) => (
							<div key={index} className="row">
								<div className="col-lg-2">
									<TextField
										name={`${path}.authors.${index}.firstname`}
										label={content.authorLabels.firstname}
										hideContainer
									/>
								</div>
								<div className="col-lg-2">
									<TextField
										name={`${path}.authors.${index}.lastname`}
										label={content.authorLabels.lastname}
										hideContainer
									/>
								</div>
								<div className="col-lg-2">
									<TextField
										name={`${path}.authors.${index}.title`}
										label={content.authorLabels.title}
										hideContainer
									/>
								</div>
								<div className="col-lg-2">
									<TextField
										name={`${path}.authors.${index}.email`}
										label={content.authorLabels.email}
										hideContainer
									/>
								</div>
								<div className="col-lg-2">
									<TextField
										name={`${path}.authors.${index}.city`}
										label={content.authorLabels.city}
										hideContainer
									/>
								</div>
								<div className="col-lg-1">
									<SliderCheckboxInline name={`${path}.authors.${index}.isPresenter`} />
								</div>
								<div className="col-lg-1">
									<IconButton
										onClick={() => helpers.remove(index)}
										icon={Icons.trashcan}
									/>
								</div>
							</div>
						))}
						<Button
							text={content.addAuthorBtnText}
							onClick={() => helpers.push(newAuthor)}
							icon={Icons.plus}
						/>
					</div>
				)}
			/>
		</div>
	);
};

interface IAbstractSectionConfigProps {
	content: IAbstractSection['content'];
	path: string;
}

const AbstactSectionConfig: FC<IAbstractSectionConfigProps> = (props) => {
	return (
		<div className="registration__content__section__settings">
			<Heading
				type="h4"
				isUnderlined
				text="Vaihtoehdot"
				ingress="Valitse tarjottavat vaihtoehdot valinta ja monivalinta kenttiin"
			/>
			<CreatableMultiSelectField
				label="Tyyppivaihtoehdot"
				name={props.path + '.typeOptions'}
				options={props.content.typeOptions}
				value={props.content.typeOptions}
			/>

			<CreatableMultiSelectField
				label="Aihevaihtoehdot"
				name={props.path + '.topicOptions'}
				options={props.content.topicOptions.map((item) => ({
					label: item.text,
					value: item.text
				}))}
				value={props.content.topicOptions.map((item) => ({
					label: item.text,
					value: item.text
				}))}
			/>

			<CreatableMultiSelectField
				label="Avainsanat"
				name={props.path + '.tagsOptions'}
				options={props.content.tagsOptions}
				value={props.content.tagsOptions}
			/>

			<Heading
				type="h4"
				isUnderlined
				hasSpaceAbove
				text="Selitteet"
				ingress="Muokkaa lomakkeen tekstiselitteitä"
			/>
			<TextFastField name={props.path + '.title'} label={'Abstractin perustiedot'} />
			<TextFastField
				name={props.path + '.titleDescription'}
				label={'Perustietojen ohje'}
			/>
			<TextFastField
				name={props.path + '.abstractTitleLabel'}
				label={'Abstraktin otsikko'}
			/>
			<TextFastField name={props.path + '.contentLabel'} label={'Ohjeteksti'} />

			<TextFastField name={props.path + '.typeLabel'} label={'Tyyppi'} />
			<TextFastField name={props.path + '.topicLabel'} label={'Aiheet'} />
			<TextFastField name={props.path + '.tagsLabel'} label={'Avainsanat'} />

			<TextFastField name={props.path + '.contentLabel'} label={'Sisältö'} />
			<TextFastField name={props.path + '.authorsHeading'} label={'Luennoitsijat'} />
			<TextFastField
				name={props.path + '.authorsDescription'}
				label={'Luennoitsijat ohjeteksti'}
			/>
			<TextFastField name={props.path + '.authorLabels.firstname'} label={'Etunimi'} />
			<TextFastField name={props.path + '.authorLabels.lastname'} label={'Sukunimi'} />
			<TextFastField name={props.path + '.authorLabels.title'} label={'Titteli'} />
			<TextFastField name={props.path + '.authorLabels.city'} label={'Kaupunki'} />
			<TextFastField name={props.path + '.authorLabels.email'} label={'Email'} />

			<TextFastField
				name={props.path + '.addAuthorBtnText'}
				label={'Painikkeen teksti'}
			/>
		</div>
	);
};

/* <ReactTable
data={[
	{
		firstname: 'Hello',
		lastname: 'world',
		title: 'doctor',
		city: 'Kanada',
		email: 'hello@world.com'
	},
	{
		firstname: 'Hello2',
		lastname: 'world2',
		title: 'doctor2',
		city: 'Kanada2',
		email: 'hello2@world2.com'
	}
]}
columns={[
	{
		Header: content.authorLabels.firstname,
		accessor: 'firstname'
	},
	{
		Header: content.authorLabels.lastname,
		accessor: 'lastname'
	},
	{
		Header: content.authorLabels.email,
		accessor: 'email'
	},
	{
		Header: content.authorLabels.title,
		accessor: 'title'
	},
	{
		Header: content.authorLabels.city,
		accessor: 'city'
	}
]}
></ReactTable> */
