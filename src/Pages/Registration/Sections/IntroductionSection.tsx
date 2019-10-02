import React, { FC } from 'react';
import { IIntroductionSection, ISectionHelpers } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';
import { TextField } from '../../../Components/TextInput/Textinput';
import { TextAreaField } from '../../../Components/TextArea/TextArea';
import { SliderField } from '../../../Components/CheckBox/SliderCheckBox';
import { FieldContainer } from '../../../Components/FieldContainer/FieldContainer';

//************************************************** */
// Johdanto
//************************************************** */

interface IIntroductionSectionProps {
	section: IIntroductionSection;
	helpers: ISectionHelpers;
}

export const IntroductionSection: FC<IIntroductionSectionProps> = (props) => (
	<section className="registration__content__section">
		<h2 className="registration__content__section__introduction__heading">
			{props.section.content.headingtext || 'NO_HEADING_TEXT_GIVEN'}
		</h2>
		<span className="registration__content__section__introduction__dates">
			{props.section.content.showDates &&
				`${props.section.content.start.toLocaleDateString(
					'fi-FI'
				)} - ${props.section.content.end.toLocaleDateString('fi-FI')}`}
		</span>
		<div className="registration__content__section__introduction__ingress">
			<span className="registration__content__section__introduction__ingress__text">
				{props.section.content.ingress || 'NO_INGRESS_TEXT_GIVEN'}
			</span>
		</div>

		{props.helpers.isInEditMode && (
			<div className="registration__content__section__settings">
				<TextField
					name={`sections.${props.helpers.sectionIndex}.content.headingtext`}
					label={'Pääotsikko'}
					placeholder="Ilmoittautumisen pääotsikko"
				/>
				<TextAreaField
					name={`sections.${props.helpers.sectionIndex}.content.ingress`}
					label={'Ingressi'}
					placeholder="Korvaa Osoite kentän selite"
				/>
				<FieldContainer label="Näytä">
					<SliderField
						name={`sections.${props.helpers.sectionIndex}.content.showDates`}
						label="Tapahtuman päivämäärät"
					/>
				</FieldContainer>
			</div>
		)}

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
