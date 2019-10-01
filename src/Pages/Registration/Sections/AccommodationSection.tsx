import React, { FC } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { TextAreaField } from '../../../Components/TextArea/TextArea';
import { IAccommodationSection, ISectionHelpers } from '../Registration';
import { ButtonLink } from '../../../Components/Button/ButtonLink';
import Icons from '../../../Components/Icons/icons';
import { EditSectionBar } from '../Components/EditSectionBar';

//************************************************** */
// Majoituslohko
//************************************************** */

interface IAccommodationSectionProps {
	section: IAccommodationSection;
	helpers: ISectionHelpers;
}

export const AccommdationSection: FC<IAccommodationSectionProps> = (props) => (
	<section className="registration__content__section">
		<Heading
			isUnderlined
			text={props.section.content.title || 'Majoituslohko'}
			ingress="Tässä lohkossa voi varata majoituksia"
		></Heading>

		<TextAreaField name="description" label="Kuvaus" />

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
