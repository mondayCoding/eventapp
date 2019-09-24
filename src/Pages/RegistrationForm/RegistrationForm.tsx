import React, { FC, useContext, useState } from 'react';
import * as routes from '../../Constants/routes';
import { CardWrapper } from '../MyCollection/MyCollection';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { RouterProps, RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Data/useDocumentTitle';

interface RegistrationRouteProps {
	id: string;
}

export const RegistrationForm: FC<RouteComponentProps<RegistrationRouteProps>> = ({
	match
}) => {
	useDocumentTitle('Ilmoittautumislomake');
	// const event = events.find((event) => event.id === match.params.id);

	return (
		<div>
			<CardWrapper>
				<Heading text="Ilmoittautumislomake" isUnderlined />
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
			</CardWrapper>
		</div>
	);
};
