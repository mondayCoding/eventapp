import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes';
import styled from '../../Theme/theme';
import { useEvents } from '../../Queries/useEvents';
import { EventTag, EventTagType } from '../../Constants/EventTags';
import { CardWrapper } from '../MyCollection/MyCollection';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { useFavouriteEvents } from '../../Data/useFavouriteEvents';
import { IconButton } from '../../Components/Button/IconButton';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { StatCard } from '../Dashboard/StatusCard';
import { Doughnut } from 'react-chartjs-2';
import { MockDataEventParticipation } from '../../MockData/MockDataEventParticipation';

export const Events = () => {
	useDocumentTitle('Tapahtuma');
	const { events } = useEvents();
	const [filter, setFilter] = useState('');
	const { favourites, toggleFavourite } = useFavouriteEvents();

	const createFilter = (list: IEvent[]) => {
		const filt = filter.toLowerCase();

		return list.filter((item) => {
			return filt
				? item.name.toLowerCase().indexOf(filt) > -1 ||
						item.location.toLowerCase().indexOf(filt) > -1 ||
						item.description.toLowerCase().indexOf(filt) > -1
				: true;
		});
	};

	return (
		<div>
			<CardWrapper>
				<Heading text="Tapahtumat" isUnderlined />

				<FilterInput
					type="text"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				></FilterInput>

				{createFilter(events).map((event) => (
					<>
						<EventListItem key={event.id} to={`${routes.event.path}/${event.id}`}>
							<span className="event__favourite">
								<IconButton
									icon={favourites.includes(event.id) ? Icons.star_filled : Icons.star}
									onClick={(e) => {
										toggleFavourite(event.id);
										e.preventDefault();
									}}
								></IconButton>
							</span>
							<span className="event__name">{`${event.name}`}</span>
							<span className="event__tags">{renderTags(event.tags)}</span>
							<span className="event__location">{`${event.location}`}</span>
						</EventListItem>
					</>
				))}
			</CardWrapper>

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
					<CardWrapper>
						<Doughnut data={MockDataEventParticipation}></Doughnut>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'6'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.info_circle}</span>}
						text="Avautuvia"
						description="Aukeamista odottavia lomakkeita"
					></StatCard>
				</div>
			</div>
		</div>
	);
};

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid lightgray;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 0.2rem;
	background: ${(p) => p.theme.input_background};
`;

const EventListItem = styled(Link)`
	display: flex;
	justify-content: space-between;
	color: ${(p) => p.theme.primary_color};
	align-items: center;
	border: none;
	padding: 0.25rem 0.5rem;
	cursor: pointer;
	font-size: 0.85rem;
	width: 100%;
	background: none;
	text-align: left;
	text-decoration: none;

	&&:hover {
		color: ${(p) => p.theme.secondary_color};
		background: #ccc;
	}

	&:nth-child(odd) {
		background: ${(p) => p.theme.body_background_color};
	}

	& + & {
		/* border-top: 1px solid #ccc; */
	}

	&:focus {
		border: none;
		box-shadow: 0 0 0 2px ${(p) => p.theme.primary_color};
	}
	.event__favourite {
		flex: 0 0 2rem;
		padding-right: 0.5rem;
	}
	.event__name {
		flex: 0 0 40%;
		padding-left: 1rem;
		color: ${(p) => p.theme.text_color};
	}
	.event__location {
		flex: 0 0 20%;
		padding-left: 1rem;
		text-align: left;
	}
	.event__tags {
		flex: 0 0 40%;
		padding-left: 1rem;
		text-align: left;
	}
`;

const renderTags = (tags: EventTagType[]) =>
	tags.map((tag) => {
		const current = EventTag[tag];
		return current ? (
			<BadgeTag
				description={current.description}
				name={current.name}
				icon={current.icon}
			/>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});
