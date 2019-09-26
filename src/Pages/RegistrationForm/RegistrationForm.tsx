import React, { FC, useContext, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { RouterProps, RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { StatCard } from '../Dashboard/StatusCard';
import { Doughnut } from 'react-chartjs-2';
import { MockDataEventParticipation } from '../../MockData/MockDataEventParticipation';

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
					<div className="col-lg-4">
						<StatCard
							value={'3'}
							icon={Icons.clipboard_list}
							text="Avoinna"
							description="Avoimia lomakkeita tällä hetkellä"
						></StatCard>
						<StatCard
							value={'5'}
							icon={<span style={{ color: 'lightsalmon' }}>{Icons.check_circle}</span>}
							text="Loppuneita"
							description="Loppuneita ilmoittautumisia"
						></StatCard>
					</div>
					<div className="col-lg-4">
						<StatCard
							value={'6'}
							icon={<span style={{ color: 'lightseagreen' }}>{Icons.info_circle}</span>}
							text="Avautuvia"
							description="Aukeamista odottavia lomakkeita"
						></StatCard>
					</div>
					<div className="col-lg-4">
						<CardWrapper>
							<Doughnut data={MockDataEventParticipation}></Doughnut>
						</CardWrapper>
					</div>
				</div>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
				<h2>{match.params.id}</h2>
			</CardWrapper>
		</div>
	);
};
