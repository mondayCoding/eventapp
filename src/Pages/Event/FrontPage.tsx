import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { EventTagType, EventTag } from '../../Constants/EventTags';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { EventParticipationByRolesGraph } from '../../Graphs/EventParticipationByRolesGraph';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';
import styled from '../../Theme/theme';

export const FrontPage: FC<{ event?: IEvent }> = ({ event }) => {
	const hasImage = !!(event && event.image);
	return (
		<>
			<div className="row">
				<div className={hasImage ? 'col-lg-8 d-flex flex-column' : 'col-lg-12'}>
					<CardWrapper>
						<Heading
							text={event ? `${event.name}` : ''}
							ingress={event && event.description}
							isUnderlined
						></Heading>
						<div>{event && event.tags && renderTags(event.tags)}</div>
					</CardWrapper>

					<div className="row">
						<div className="col-lg-6">
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
										// icon: <span style={{ color: 'lightblue' }}>{Icons.dollar}</span>,
										state: 'success'
									},
									{
										text: 'Menot',
										value: '930, 90 €',
										// icon: <span style={{ color: '#d25151' }}>{Icons.dollar}</span>,
										state: 'warning'
									}
								]}
							></MultiStatCard>

							<MultiStatCard
								stats={[
									{
										text: 'Avoinna',
										value: '3',
										description: 'Avoimia lomakkeita tällä hetkellä',
										icon: <span style={{ color: 'lightseagreen' }}>{Icons.list}</span>
									},
									{
										text: 'Loppuneita',
										value: '5',
										description: 'Loppuneita ilmoittautumisia'
									},
									{
										text: 'Avautuvia',
										value: '6',
										description: 'Aukeamista odottavia lomakkeita'
									}
								]}
							></MultiStatCard>
						</div>

						<div className="col-lg-6">
							<MultiStatCard
								stats={[
									{
										text: 'Kutsuttuja',
										value: '1 800',
										description: 'Loppuneita ilmoittautumisia',
										icon: <span style={{ color: 'lightsalmon' }}>{Icons.users}</span>
									},
									{
										text: 'Ilmoittautuneita',
										value: '1 013',
										state: 'success',
										description: 'Avoimia lomakkeita tällä hetkellä'
									},
									{
										text: 'Peruneita',
										value: '3',
										description: 'Aukeamista odottavia lomakkeita',
										state: 'warning'
									}
								]}
							></MultiStatCard>
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
				</div>
				{hasImage && (
					<div className="col-lg-4 ">
						<CardWrapper>
							<EventImage src={event!.image}></EventImage>
						</CardWrapper>

						<CardWrapper>
							<Heading text="Ilmoittautuneet rooleittain" isUnderlined></Heading>
							<EventParticipationByRolesGraph></EventParticipationByRolesGraph>
						</CardWrapper>
					</div>
				)}
			</div>
		</>
	);
};

const EventImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
`;

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
