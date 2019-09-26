import React, { useContext } from 'react';
import { Heading } from '../../../Components/Text/Heading';
import { AppContext } from '../../../App';
import styled from '../../../Theme/theme';
import { Limiter } from '../../../Components/Utility/ContentLimiter/Limiter';
import { CardWrapper } from '../../Dashboard/CardWrapper';

export const MyWishlistPage = () => {
	const { collection, wishlist } = useContext(AppContext);
	const wishlistCount = wishlist.length;
	const wishlistItems = collection.filter((item) => wishlist.includes(item.id));
	const wishlistValue = wishlistItems.reduce((prev, curr) => curr.marketValue + prev, 0);

	return (
		<div>
			<CardWrapper>
				<Heading text="Toivelista" />
				<p>{`items in wishlist ${wishlistCount}`}</p>
				<p>{`wishlist items total value is ${wishlistValue}`}</p>
			</CardWrapper>
			<CardWrapper>
				{wishlistItems.map((item) => (
					<Limiter.Mobile>
						<ItemRow key={item.id}>
							<div>{item.name}</div>
							<div>{item.created}</div>
							<div>{item.marketValue}</div>
						</ItemRow>
					</Limiter.Mobile>
				))}
			</CardWrapper>
		</div>
	);
};

const ItemRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 0 0 0.5rem;
	padding: 0.25rem 0;
	border-top: 1px solid ${(p) => p.theme.border_color};
`;
