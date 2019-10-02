import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { SliderFastField } from '../../../Components/CheckBox/SliderCheckBox';
import { IQuestionSectionCheckbox, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Kysymyslohko (Checkbox)
//************************************************** */

interface ICheckBoxQuestionSection {
	content: IQuestionSectionCheckbox['content'];
	helpers: ISectionHelpers;
}

export const CheckboxQuestionSection: FC<ICheckBoxQuestionSection> = ({
	helpers,
	content
}) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on valintaruutuja"
		></Heading>

		{content.options.map((question, i) => (
			<SliderFastField
				name={`sections.${helpers.sectionIndex}.content.options.${i}.checked`}
				label={question.label}
				key={i}
				id={'random_q_' + i + Math.random()}
			/>
		))}

		{/* {helpers.isInEditMode && <div>TODO: Muokkaa vaihtoehtoja</div>} */}

		<EditSectionBar isInEditMode={helpers.isInEditMode} helpers={helpers} />
	</section>
);
