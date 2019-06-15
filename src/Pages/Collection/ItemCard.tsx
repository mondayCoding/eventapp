import React, { FC, useState } from 'react';
import { styled, IThemeInterface } from 'library';
import { ICollectionItem } from '../../Interfaces';

interface Theme {
	theme: IThemeInterface;
}

export const ItemCard: FC<{ item: ICollectionItem }> = ({ item }) => {
	return (
		<Card>
			<div className="preview">
				<img src={item.images[0]} className="preview__image" />
			</div>
			<div className="title">{item.name}</div>
			<div className="description">{item.description}</div>
			<div className="footer">
				<span className="footer__created">{item.created}</span>
				<span className="footer__marketvalue">{item.marketValue} €</span>
			</div>
		</Card>
	);
};

const Card = styled.section`
	flex: 0 0 24.5%;
	display: flex;
	flex-direction: column;
	background-color: ${(p: Theme) => p.theme.primary_color};
	border: 1px solid black;
	border-radius: 0.5rem;
	margin: 0.25%;
	overflow: hidden;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background: ${(p: Theme) => p.theme.focus_color};
	}

	.preview {
		width: 100%;
		height: 10rem;

		.preview__image {
			width: 100%;
			height: 10rem;
			object-fit: cover;
		}
	}
	.title {
		padding: 0.5rem;
		font-size: 1.3rem;
		font-family: Calibri, 'Trebuchet MS', sans-serif;
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
		}
		&__created {
			flex: 0 0 50%;
			text-align: left;
		}
	}
`;
