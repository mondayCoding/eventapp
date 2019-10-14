import React, { FC, useState } from 'react';
import { ISectionHelpers, IAbstractSection } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';
import { Heading } from '../../../Components/Text/Heading';
import { TextFastField, TextField } from '../../../Components/TextInput/Textinput';
import { FieldArray } from 'formik';
import {
	SelectField,
	MultiSelectField,
	CreatableMultiSelectField
} from '../../../Components/Select/Select';
import { Button } from '../../../Components/Button/Button';
import { SliderCheckboxInline } from '../../../Components/CheckBox/SliderCheckBox';
import { CheckBoxField } from '../../../Components/CheckBox/CheckBox';
import { FieldContainer } from '../../../Components/FieldContainer/FieldContainer';
import Icons from '../../../Components/Icons/icons';
import { IconButton } from '../../../Components/Button/IconButton';
import { TextAreaField } from '../../../Components/TextArea/TextArea';
import { ButtonLink } from '../../../Components/Button/ButtonLink';

//************************************************** */
// Abstactit (asetukset  + puhujat)
//************************************************** */

interface IAbstractSectionProps {
	content: IAbstractSection['content'];
	helpers: ISectionHelpers;
}

export const AbstractSection: FC<IAbstractSectionProps> = (props) => {
	const [editMode, setEditMode] = useState(true);
	const content = props.content;
	const sectionIndex = props.helpers.sectionIndex;
	const path = `sections.${sectionIndex}.content`;

	const toggleEditMode = () => setEditMode(!editMode);

	return (
		<section className="registration__content__section custom-gutter">
			<Heading text={content.title} isUnderlined ingress={content.titleDescription} />

			<TextFastField name={path + '.abstractTitle'} label={content.abstractTitleLabel} />
			<SelectField
				name={path + '.type'}
				label={content.typeLabel}
				options={content.typeOptions}
				placeholder="Valitse"
			/>
			<CreatableMultiSelectField
				options={content.tagsOptions.map((tag) => ({ value: tag, label: tag }))}
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

			<Heading
				text={'Sisältö'}
				isUnderlined
				ingress={'Voit kopida erikoismerkin tai lisätä ne painamalla'}
			/>

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
				text={content.authorsLabel}
				ingress={content.authorsDescripton}
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

interface IAbstractSectionConfigProps {}

const AbstactSectionConfig = () => {};

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
