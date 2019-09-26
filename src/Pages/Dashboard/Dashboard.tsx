import React, { useContext } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { CardWrapper } from './CardWrapper';
import { FeedCustomers } from '../../Components/FeedCustomers/FeedCustomers';
import { FeedSystemEvents } from '../../Components/FeedSystemEvents/FeedSystemEvents';
import Icons from '../../Components/Icons/icons';
import styled, { ThemeContext } from '../../Theme/theme';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { MockRegistratinData } from '../../MockData/MockEvents';
import { MultiStatCard } from './MultiStatusCard';
import { useHistory } from 'react-router';
import * as routes from '../../Constants/Routes_MODIF';
import { EventAttendanceGraph } from './EventAttendanceGraph';
import { PerformanceGraph } from './PerformanceGraph';

export const DashBoard = () => {
	useDocumentTitle('Dash');
	const history = useHistory();
	const theme = useContext(ThemeContext);

	const data = {
		labels: [
			MockRegistratinData[0][0].name,
			MockRegistratinData[0][1].name,
			MockRegistratinData[0][2].name
		],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					theme.primary_color,
					theme.secondary_color,
					'rgba(75,192,192,1)'
				],
				hoverBackgroundColor: [
					theme.primary_color,
					theme.secondary_color,
					'rgba(75,192,192,1)'
				],
				borderColor: theme.primary_color,
				borderWidth: 0
			}
		]
	};

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

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<Doughnut data={data}></Doughnut>
					</CardWrapper>
				</div>
				<div className="col-lg-6">
					<CardWrapper>
						<Doughnut data={data}></Doughnut>
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const CanvasFix = styled.div`
	.chartjs-render-monitor {
		max-width: 100%;
	}
`;
