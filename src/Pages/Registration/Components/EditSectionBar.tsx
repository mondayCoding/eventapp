import React, { FC } from 'react';
import { ISectionHelpers } from '../RenderSection';
import { ButtonLink } from '../../../Components/Button/ButtonLink';
import Icons from '../../../Components/Icons/icons';

interface EditSectionBarProps {
	isInEditMode: boolean;
	helpers: ISectionHelpers;
	onEditClick?: () => void;
}

export const EditSectionBar: FC<EditSectionBarProps> = ({
	helpers,
	isInEditMode,
	onEditClick
}) =>
	isInEditMode ? (
		<div className="registration__content__section__editbox">
			<ButtonLink
				icon={Icons.angle_up}
				onClick={() => helpers.moveUp()}
				disabled={helpers.disableUp}
			/>
			<ButtonLink
				icon={Icons.angle_down}
				onClick={() => helpers.moveDown()}
				disabled={helpers.disableDown}
			/>
			<ButtonLink icon={Icons.pen} onClick={onEditClick} text="Muokkaa" />
			<ButtonLink icon={Icons.trashcan} onClick={() => helpers.remove()} text="Poista" />
		</div>
	) : null;
