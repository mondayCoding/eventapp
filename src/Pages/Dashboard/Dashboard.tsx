import React from 'react';
import { CardWrapper } from '../../Components/CardWrapper';
import { FeedCustomers } from '../../Components/FeedCustomers/FeedCustomers';
import { FeedSystemEvents } from '../../Components/FeedSystemEvents/FeedSystemEvents';
import Icons from '../../Components/Icons/icons';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { MultiStatCard } from '../../Components/MultiStatusCard';
import { useHistory } from 'react-router';
import * as routes from '../../Constants/Routes_MODIF';
import { EventAttendanceGraph } from '../../Graphs/EventAttendanceGraph';
import { PerformanceGraph } from '../../Graphs/PerformanceGraph';

export const DashBoard = () => {
	useDocumentTitle('Dash');
	const history = useHistory();

	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<MultiStatCard
						onClick={() => history.push(routes.events.path)}
						stats={[
							{
								value: '723',
								icon: <span style={{ color: 'lightsalmon' }}>{Icons.user}</span>,
								text: 'Vierailijoita'
							},
							{
								value: '403',
								// state: 'success',
								text: 'Ilmoittautumisia'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								value: '2 301',
								icon: <span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>,
								text: 'Lähetettyjä viestejä'
							},
							{
								value: '1 023',
								// state: 'success',
								text: 'Avattuja viestejä'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								value: '12 930, 90 €',
								icon: Icons.dollar,
								text: 'Tulot'
							},
							{
								value: '2 620, 10 €',
								// state: 'success',
								text: 'Saatavat'
							}
						]}
					></MultiStatCard>
				</div>
			</div>

			<CardWrapper>
				<EventAttendanceGraph></EventAttendanceGraph>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<FeedCustomers></FeedCustomers>
					</CardWrapper>
				</div>
				<div className="col-lg-6">
					<CardWrapper>
						<FeedSystemEvents></FeedSystemEvents>
					</CardWrapper>
				</div>
			</div>

			<CardWrapper>
				<PerformanceGraph></PerformanceGraph>
			</CardWrapper>
		</>
	);
};
