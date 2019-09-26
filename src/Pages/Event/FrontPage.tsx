import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { EventTagType, EventTag } from '../../Constants/EventTags';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { MockDataEventParticipation } from '../../MockData/MockDataEventParticipation';
import { Doughnut } from 'react-chartjs-2';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';

export const FrontPage: FC<{ event?: IEvent }> = ({ event }) => {
	return (
		<>
			<CardWrapper>
				<Heading
					text={event ? `${event.name}` : ''}
					ingress={event && event.description}
					isUnderlined
				></Heading>
				<div>{event && event.tags && renderTags(event.tags)}</div>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								text: 'Tulot',
								value: '12 930, 90 €',
								icon: <span style={{ color: 'lightgreen' }}>{Icons.dollar}</span>
							},
							{
								text: 'Saatavat',
								value: '2 405, 00 €',
								icon: <span style={{ color: 'lightblue' }}>{Icons.dollar}</span>,
								state: 'success'
							},
							{
								text: 'Menot',
								value: '930, 90 €',
								icon: <span style={{ color: '#d25151' }}>{Icons.dollar}</span>,
								state: 'warning'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								text: 'Ilmoittautuneita',
								value: '1 013',
								description: 'Avoimia lomakkeita tällä hetkellä',
								icon: <span style={{ color: 'lightsalmon' }}>{Icons.users}</span>
							},
							{
								text: 'Kutsuttuja',
								value: '1 800',
								description: 'Loppuneita ilmoittautumisia'
							},
							{
								text: 'Peruneita',
								value: '3',
								description: 'Aukeamista odottavia lomakkeita'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								text: 'Lähetettyjä kutsuja',
								value: '1 800',
								description: 'Avoimia lomakkeita tällä hetkellä',
								icon: <span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>
							},
							{
								text: 'Avattuja',
								value: '1 263',
								description: 'Loppuneita ilmoittautumisia'
							},
							{
								text: 'Peruneita',
								value: '3',
								description: 'Aukeamista odottavia lomakkeita'
							}
						]}
					></MultiStatCard>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								text: 'Lähetettyjä kutsuja',
								value: '1 800',
								description: 'Avoimia lomakkeita tällä hetkellä',
								icon: <span style={{ color: 'lightseagreen' }}>{Icons.envelope}</span>
							},
							{
								text: 'Avattuja',
								value: '1 263',
								description: 'Loppuneita ilmoittautumisia'
							},
							{
								text: 'Peruneita',
								value: '3',
								description: 'Aukeamista odottavia lomakkeita'
							}
						]}
					></MultiStatCard>
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
					<StatCard
						value={'6'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.info_circle}</span>}
						text="Avautuvia"
						description="Aukeamista odottavia lomakkeita"
					></StatCard>
				</div>
				<div className="col-lg-8">
					<CardWrapper>
						<Doughnut data={MockDataEventParticipation}></Doughnut>
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const renderTags = (tags: EventTagType[]) =>
	tags.map((tag) => {
		const current = EventTag[tag];
		return current ? (
			<BadgeTag
				name={current.name}
				icon={current.icon}
				description={current.description}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});
