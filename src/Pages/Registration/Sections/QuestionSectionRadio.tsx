import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import RadioField from '../../../Components/CheckBox/Radio';
import { IQuestionSectionRadio, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Kysymyslohko (Radio)
//************************************************** */

interface IRadioQuestionSectionProps {
	content: IQuestionSectionRadio['content'];
	helpers: ISectionHelpers;
}

export const RadioQuestionSection: FC<IRadioQuestionSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on monivalinta"
		></Heading>

		{props.content.options.map((question, i) => (
			<RadioField
				name={'radio'}
				label={question.label}
				value={question.value}
				id={'random_q_' + i + Math.random()}
			></RadioField>
		))}
		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
