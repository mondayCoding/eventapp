import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { TextField } from '../../../Components/TextInput/Textinput';
import { IQuestionSectionText, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Kysymyslohko (Text)
//************************************************** */

interface IQuestionSectionTextProps {
	content: IQuestionSectionText['content'];
	helpers: ISectionHelpers;
}

export const TextQuestionSection: FC<IQuestionSectionTextProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.content.title || 'Kysymyslohko'}
			ingress="Tässä lohkossa on on vapaamuotoinen vastauskenttä"
		></Heading>

		<TextField label={props.content.label} name={'custom_text'}></TextField>

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
