import React, { FC } from 'react';
import { ISectionHelpers, IAfterwordSection } from '../RenderSection';
import { EditSectionBar } from '../Components/EditSectionBar';
import { Button } from '../../../Components/Button/Button';
import Icons from '../../../Components/Icons/icons';

//************************************************** */
// Loppulohko (Submit/Järjestäjät)
//************************************************** */

interface IAfterwordSectionProps {
	content: IAfterwordSection['content'];
	helpers: ISectionHelpers;
}

export const AfterwordSection: FC<IAfterwordSectionProps> = (props) => (
	<section className="registration__content__section registration__content__section--afterword">
		<div className="submit-wrapper">
			<Button
				text={props.content.buttonText || 'Ilmoittautu'}
				className="submit-wrapper__submit-btn"
				type="submit"
				icon={Icons.user}
				onClick={() => alert('yay')}
			></Button>
		</div>

		<footer className="organisers">
			<address className="organisers__organiser">
				<ul className="organisers__organiser__list">
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
				</ul>
			</address>
			<address className="organisers__organiser">
				<ul className="organisers__organiser__list">
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
				</ul>
			</address>
			<address className="organisers__organiser">
				<ul className="organisers__organiser__list">
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
					<li>Osoitekatu 123</li>
				</ul>
			</address>
		</footer>

		<EditSectionBar isInEditMode={props.helpers.isInEditMode} helpers={props.helpers} />
	</section>
);
