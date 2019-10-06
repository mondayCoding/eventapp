import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { SelectFieldBase } from '../../../Components/Select/Select';
import { IQuestionSectionSelect, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Kysymyslohko (Select)
//************************************************** */

interface IQuestionSectionSelectProps {
	content: IQuestionSectionSelect['content'];
	helpers: ISectionHelpers;
}

export const SelectQuestionSection: FC<IQuestionSectionSelectProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on valintalista"
		></Heading>

		<SelectFieldBase
			options={props.content.options.map((option) => ({
				value: option.value,
				label: option.label
			}))}
		></SelectFieldBase>

		{
			// TODO: conditional rakenne
			// task 1 ehdollinen / ei ehdollinen
			// task 2 kun mikä valittu
			// task 3 mikä on seuraava lohko
			props.content.condition
		}

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
