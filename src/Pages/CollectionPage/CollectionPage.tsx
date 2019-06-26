import React, { useContext } from 'react';
import { Heading } from 'library';
import { ItemCard } from './ItemCard';
import styled from '../../Theme/theme';
import { AppContext } from '../../App';

export const CollectionPage = () => {
	const { collection, collected, wishlist } = useContext(AppContext);

	return (
		<div>
			<Heading headingText="Kokoelma" isUnderlined />

			<CollectionWrapper>
				{collection.map((item) => (
					<ItemCard
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
