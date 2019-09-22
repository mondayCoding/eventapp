import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/routes';
import { EventCard } from './EventCard';
import styled from '../../Theme/theme';
import { AppContext } from '../../App';
import { useEvents } from '../../Queries/useEvents';
import { EventTag, EventTagType } from '../../MockData/EventTags';
import { CardWrapper } from '../MyCollection/MyCollection';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from './BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';

export const Events = () => {
	const { events } = useEvents();
	const [filter, setFilter] = useState('');

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
				<Heading text="Kokoelma" isUnderlined />

				<h1>TÄHÄN TAPAHTUMAKALENTERI</h1>
				<h3>suosikit</h3>

				<FilterInput
					type="text"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				></FilterInput>

				{createFilter(events).map((event) => (
					<>
						<EventListItem key={event.id} to={`${routes.event.path}/${event.id}`}>
							<span className="event__favourite">{Icons.star}</span>
							<span className="event__name">{`${event.name}`}</span>
							<span className="event__tags">{renderTags(event.tags)}</span>
							<span className="event__location">{`${event.location}`}</span>
						</EventListItem>
					</>
				))}
			</CardWrapper>
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
