import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import SliderCheckbox from '../../../Components/CheckBox/SliderCheckBox';
import { IQuestionSectionCheckbox, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Kysymyslohko (Checkbox)
//************************************************** */

interface ICheckBoxQuestionSection {
	content: IQuestionSectionCheckbox['content'];
	helpers: ISectionHelpers;
}

export const CheckboxQuestionSection: FC<ICheckBoxQuestionSection> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on erilaisia kysymyksiä"
		></Heading>

		{props.content.options.map((question, i) => (
			<SliderCheckbox
				label={question.label}
				defaultChecked={question.checked}
				id={'random_q_' + i + Math.random()}
			></SliderCheckbox>
		))}
		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
