import React, { useContext, useState } from 'react';
import { Heading, ButtonRow } from 'library';
import { EventCard } from './EventCard';
import styled from '../../Theme/theme';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';
import { sortCondition, sortCollectionBy, sortDirection } from './collectionSorter';
import { useEvents } from '../../Queries/useEvents';
import { EventTag, EventTagType } from '../../MockData/EventTags';
import { mix } from 'polished';
import { CardWrapper } from '../MyCollection/MyCollection';

export const Events = () => {
	const { collection, collected, wishlist } = useContext(AppContext);
	const [sortBy, setSortCondition] = useState(sortCondition.NAME);
	const [direction, setSortDirection] = useState(sortDirection.ASCENDING);
	const { events } = useEvents();

	const sortedCollection = sortCollectionBy(collection, sortBy, direction);

	return (
		<div>
			<CardWrapper>
				<Heading headingText="Kokoelma" isUnderlined />
				{events.map((event, index) => (
					<>
						<div>{event.name}</div>
						<div>{event.description}</div>
						{renderTags(event.tags)}
						<div>{event.start.toLocaleString()}</div>
					</>
				))}
			</CardWrapper>
			<ButtonRow>
				<Button
					buttonText="By Name"
					onClick={() => setSortCondition(sortCondition.NAME)}
				/>
				<Button
					buttonText="By Created"
					onClick={() => setSortCondition(sortCondition.CREATED)}
				/>
				<Button
					buttonText="By Value"
					onClick={() => setSortCondition(sortCondition.MARKETVALUE)}
				/>
			</ButtonRow>
			<ButtonRow>
				<Button
					buttonText="Ascending Order"
					onClick={() => setSortDirection(sortDirection.ASCENDING)}
				/>
				<Button
					buttonText="Descending Order"
					onClick={() => setSortDirection(sortDirection.DESCENDING)}
				/>
			</ButtonRow>
			<CollectionWrapper>
				{sortedCollection.map((item) => (
					<EventCard
						item={item}
						key={item.id}
						isCollected={collected.includes(item.id)}
						isOnWishlist={wishlist.includes(item.id)}
					/>
				))}
			</CollectionWrapper>
		</div>
	);
};

const renderTags = (tags: EventTagType[]) =>
	tags.map((tag) => {
		const current = EventTag[tag];
		return current ? (
			<BadgeTag title={current.description}>
				<span className="tag__icon">{current.icon}</span>
				{current.name}
			</BadgeTag>
		) : (
			new Error(`Uknown Event Tag Type: ${tag}`)
		);
	});

export const BadgeTag = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0 0.5rem 0 0;
	height: 1.5rem;
	border-radius: 1rem;
	position: relative;
	background: ${(p) => mix(0.2, '#000', p.theme.menu_background_color)};
	color: ${(p) => p.theme.text_color_nav};
	cursor: pointer;

	.tag__icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.25rem;
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 100%;
		font-size: 0.8rem;
		background: ${(p) => mix(0.2, '#000', p.theme.primary_color)};
	}

	& + & {
		margin-left: 0.25rem;
	}
`;

const CollectionWrapper = styled.section`
	padding: 1rem 0;
	background: none;
	display: flex;
	flex-wrap: wrap;
`;
