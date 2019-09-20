import React, { useContext, useState } from 'react';
import { Heading } from 'library';
import { EventCard } from './EventCard';
import styled from '../../Theme/theme';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';
import { sortCondition, sortCollectionBy, sortDirection } from './collectionSorter';

export const Events = () => {
	const { collection, collected, wishlist } = useContext(AppContext);
	const [sortBy, setSortCondition] = useState(sortCondition.NAME);
	const [direction, setSortDirection] = useState(sortDirection.ASCENDING);

	const sortedCollection = sortCollectionBy(collection, sortBy, direction);

	return (
		<div>
			<Heading headingText="Kokoelma" isUnderlined />
			<div>
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
			</div>
			<div>
				<Button
					buttonText="Ascending Order"
					onClick={() => setSortDirection(sortDirection.ASCENDING)}
				/>
				<Button
					buttonText="Descending Order"
					onClick={() => setSortDirection(sortDirection.DESCENDING)}
				/>
			</div>
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

const CollectionWrapper = styled.section`
	padding: 1rem 0;
	background: none;
	display: flex;
	flex-wrap: wrap;
`;
