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
import { useHistory } from 'react-router';
import * as routes from '../../Constants/Routes_MODIF';

export const FrontPage: FC<{ event?: IEvent }> = ({ event }) => {
	const history = useHistory();
	const hasImage = !!(event && event.image);

	return (
		<>
			<div className="row">
				<div className={hasImage ? 'col-lg-8 d-flex flex-column' : 'col-lg-12'}>
					<CardWrapper>
						<Heading
							text={event ? `${event.name}` : ''}
							type="h2"
							ingress={event && event.description}
							isUnderlined
						></Heading>
						<div>{event && event.tags && renderTags(event.tags)}</div>
					</CardWrapper>

					<div className="row">
						<div className="col-lg-6">
							<MultiStatCard
								heading="Budjetti"
								onClick={() => history.push(`${routes.event.path}/${event!.id}/budjet`)}
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
								heading="Lomakkeet"
								onClick={() => history.push(`${routes.event.path}/${event!.id}/forms`)}
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
								heading="Osallistujat"
								onClick={() =>
									history.push(`${routes.event.path}/${event!.id}/participants`)
								}
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
								heading="Kutsutut"
								onClick={() =>
									history.push(`${routes.event.path}/${event!.id}/participants/#id`)
								}
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
				{event && hasImage && (
					<div className="col-lg-4 ">
						<CardWrapper>
							<img alt="" className="card__image" src={event.image}></img>
						</CardWrapper>

						<CardWrapper>
							<Heading text="Tiivistelmä" isUnderlined></Heading>
							<SummaryRow>
								<div className="row__title">Tapahtuma</div>
								<div className="row__data">{event.name}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Alkaa</div>
								<div className="row__data">{`${event.start.toLocaleString(
									'fi-FI'
								)}`}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Päättyy</div>
								<div className="row__data">{`${event.end.toLocaleString('fi-FI')}`}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Sijanti</div>
								<div className="row__data">{`${event.location}`}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Katuosoite</div>
								<div className="row__data">{`${event.city} ${event.address} ${event.postNumber}`}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Kotisivut</div>
								<div className="row__data">{event.homepage}</div>
							</SummaryRow>
							<SummaryRow>
								<div className="row__title">Järjestäjä</div>
								<div className="row__data">{event.organizer}</div>
							</SummaryRow>
						</CardWrapper>
					</div>
				)}
			</div>
		</>
	);
};

const SummaryRow = styled.section`
	display: flex;
	flex-direction: row;

	.row__title {
		flex: 0 0 150px;
		font-weight: 700;
	}
	.row__data {
		flex: 1 1 auto;
	}
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
