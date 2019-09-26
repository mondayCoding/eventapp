import React, { FC, useContext } from 'react';
import { ICollectionItem } from '../../Interfaces';
import styled, { device } from '../../Theme/theme';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes_MODIF';

interface ItemCardProps {
	item: ICollectionItem;
	isOnWishlist: boolean;
	isCollected: boolean;
}

export const EventCard: FC<ItemCardProps> = ({ item, isCollected, isOnWishlist }) => {
	const { addToCollected, addToWishlist } = useContext(AppContext);

	return (
		<Card>
			<div className="preview">
				<img src={item.images[0]} className="preview__image" />
			</div>
			<div className="title">
				<Link className="title__link" to={`${routes.event.path}/${item.id}`}>
					{item.name}
				</Link>
			</div>
			<div className="description">
				{item.description}
				{isCollected && <div>Kerätty</div>}
				{isOnWishlist && <div>Toivelistalla</div>}
				<div>
					<Button
						disabled={isCollected}
						text="lisää kokoelmaan"
						isLinkBtn
						onClick={() => addToCollected(item.id)}
					/>
				</div>
				<div>
					<Button
						disabled={isOnWishlist}
						text="lisää toivelistalle"
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

const Card = styled.section`
	flex: 0 0 23%;
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.card_background_color};
	color: ${(p) => p.theme.text_color};
	font-family: ${(p) => p.theme.body_font};
	border-radius: 0.3rem;
	margin: 1%;
	overflow: hidden;
	transition: background-color 0.2s ease-in-out;
	box-shadow: ${(p) => p.theme.shadow.card};
	font-weight: 800;

	&:hover {
		background: ${(p) => p.theme.focus_color};
	}

	/* suurempi laitekoko */
	@media ${device.above.lg} {
		flex: 0 0 19.5%;
	}

	@media ${device.above.xxl} {
		flex: 0 0 calc(99% / 7);
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
		padding: 1rem;
		font-size: 1rem;
		font-family: ${(p) => p.theme.text_color};
		line-height: 1.1;
		margin-bottom: 0.5rem;

		&__link {
			text-decoration: none;
			color: ${(p) => p.theme.text_color};
		}
	}
	.description {
		padding: 0 1rem;
		/* height: 5rem; */
		text-overflow: ellipsis;
		/* overflow: hidden; */
		flex: 1 1 auto;
	}
	.footer {
		padding: 1rem;
		display: flex;
		justify-content: center;

		&__marketvalue {
			flex: 0 0 50%;
			text-align: right;

			font-size: 1.25rem;
			opacity: 0.5;
		}
		&__created {
			flex: 0 0 50%;
			text-align: left;

			font-size: 1.25rem;
			opacity: 0.5;
		}
	}
`;
