import React, { FC, useContext, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { RouterProps, RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { StatCard } from '../Dashboard/StatusCard';
import { Doughnut } from 'react-chartjs-2';
import { EventParticipationByRolesGraph } from '../../Graphs/EventParticipationByRolesGraph';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';

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
				<div className="row">
					<div className="col-lg-8">
						<MultiStatCard
							stats={[
								{
									text: 'Ilmoittautuneita',
									icon: Icons.users,
									state: 'success',
									value: '2 234'
								},
								{
									text: 'Peruneita',
									icon: Icons.users,
									state: 'warning',
									value: '24'
								}
							]}
						></MultiStatCard>
					</div>
					<div className="col-lg-4">
						<CardWrapper>
							<EventParticipationByRolesGraph></EventParticipationByRolesGraph>>
						</CardWrapper>
					</div>
				</div>
				<h2> Kenttiä:</h2>

				<div style={{ marginLeft: '1.25rem' }}>
					<ol>
						<li>nimi</li>
						<li>linkin teksti</li>
						<li>kuvaus</li>
						<li>aukeaa</li>
						<li>sulkeutuu</li>
						<li>näkyvyys ()</li>
						<li>kielet (1/2) </li>
						<li>
							<b>lomakkeella:</b>
						</li>
						<li>johdanto</li>
						<li>Otsikko</li>
						<li>Perustietolohkot (kentät mitkä) </li>
						<li>rajoitteet ( mitkä)</li>
						<li>tietosuojat ( mitkä)</li>
						<li>tuotteet ( mitkä)</li>
						<li>majoitukset ( mitkä)</li>
						<li>luentosarjat ( mitkä)</li>
						<li>Kysymyslohkot ( kysymykset)</li>
						<li>laskutuestiedot ( kysymykset)</li>
						<li>vahvistus ( millainen)</li>
					</ol>
				</div>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
			</CardWrapper>
		</div>
	);
};
