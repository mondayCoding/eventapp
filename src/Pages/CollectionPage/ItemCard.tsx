import React, { FC, useState, useContext } from 'react';
import { styled, IThemeInterface, Icons } from 'library';
import { ICollectionItem } from '../../Interfaces';
import { device } from '../../Theme/theme';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';

interface ItemCardProps {
	item: ICollectionItem;
	isOnWishlist: boolean;
	isCollected: boolean;
}

export const ItemCard: FC<ItemCardProps> = ({ item, isCollected, isOnWishlist }) => {
	const { addToCollected, addToWishlist } = useContext(AppContext);

	return (
		<Card>
			<div className="preview">
				<img src={item.images[0]} className="preview__image" />
			</div>
			<div className="title">{item.name}</div>
			<div className="description">
				{item.description}
				{isCollected && <div>Kerätty</div>}
				{isOnWishlist && <div>Toivelistalla</div>}
				<div>
					<Button
						disabled={isCollected}
						buttonText="lisää kokoelmaan"
						isLinkBtn
						onClick={() => addToCollected(item.id)}
					/>
				</div>
				<div>
					<Button
						disabled={isOnWishlist}
						buttonText="lisää toivelistalle"
						isLinkBtn
						onClick={() => addToWishlist(item.id)}
					/>
				</div>
			</div>
			<div className="footer">
				<span className="footer__created">{item.created}</span>
				<span className="footer__marketvalue">{item.marketValue} €</span>
			</div>
		</Card>
	);
};

interface Theme {
	theme: IThemeInterface;
}

const Card = styled.section`
	flex: 0 0 24.5%;
	display: flex;
	flex-direction: column;
	/* background-color: ${(p: Theme) => p.theme.primary_color}; */
	background-color: #233;
	border: 1px solid black;
	border-radius: 0.5rem;
	margin: 0.25%;
	overflow: hidden;
	transition: background-color 0.2s ease-in-out;
   box-shadow: 0 0 4px 2px #222;

	&:hover {
		background: ${(p: Theme) => p.theme.focus_color};
	}

	/* suurempi laitekoko */
	@media ${device.above.lg} {
		flex: 0 0 19.5%;
	}

	@media ${device.above.xxl} {
		flex: 0 0 calc(99%/7);
	}

	/* pienempi laitekoko */
	@media ${device.below.md} {
		flex: 0 0 32.5%;
	}

	@media ${device.below.sm} {
		flex: 0 0 49.5%;
	}

	@media ${device.below.xs} {
		flex: 0 0 100%;
	}

	.preview {
		width: 100%;
		height: 14rem;

		&__image {
			width: 100%;
			height: 14rem;
			object-fit: cover;
		}
	}
	.title {
		padding: 0.5rem;
		font-size: 1.3rem;
		font-family: ${(p) => p.theme.heading_font};
		line-height: 1.1;
		margin-bottom: 0.5rem;
	}
	.description {
		padding: 0.5rem;
		height: 5rem;
		text-overflow: ellipsis;
		overflow: hidden;
		flex: 1 1 auto;
	}
	.footer {
		padding: 0.5rem;
		display: flex;
		justify-content: center;

		&__marketvalue {
			flex: 0 0 50%;
			text-align: right;
			color: lightgray;
			font-size: 1.25rem;
         opacity: .5;
		}
		&__created {
			flex: 0 0 50%;
			text-align: left;
			color: lightgray;
			font-size: 1.25rem;
         opacity: .5;
		}
	}
`;
