import React from 'react';
import styled from '../../Theme/theme';
import Icons from '../../Components/Icons/icons';
import { Button } from '../../Components/Button/Button';
import { useMenuState, Menu, MenuItem, MenuDisclosure } from 'reakit/Menu';
import * as routes from '../../Constants/Routes_MODIF';
import { useHistory } from 'react-router';

export const EventActions = () => {
	const menu = useMenuState();
	const history = useHistory();

	const CreateNewEmptyEvent = () => history.push(routes.event.path + '/0/settings/');

	return (
		<MenuWrapper>
			<MenuDisclosure {...menu} as={Button}>
				<span className="menu__icon">
					{Icons.plus}
					{Icons.calendar} Luo uusi tapahtuma
				</span>
			</MenuDisclosure>

			<Menu {...menu} aria-label="Settings" className="menu__box">
				<MenuItem
					{...menu}
					onClick={CreateNewEmptyEvent}
					className="menu__box__item"
					title="Luo uusi tapahtuma ilman esiasetuksia"
				>
					<div className="menu__icon">Tyhjä tapahtuma</div>
				</MenuItem>
				<MenuItem
					{...menu}
					onClick={CreateNewEmptyEvent}
					className="menu__box__item"
					title="Luo tapahtuma luentoihin ja koulutuksiin liittyvillä perusasetuksilla"
				>
					<div className="menu__icon">Koulutustapahtuma</div>
				</MenuItem>
				<MenuItem
					{...menu}
					onClick={CreateNewEmptyEvent}
					className="menu__box__item"
					title="Luo tapahtuma jossa on valmiit majoitustenhallinan asetukset"
				>
					<div className="menu__icon">Majoitustapahtuma</div>
				</MenuItem>
				<MenuItem
					{...menu}
					onClick={CreateNewEmptyEvent}
					className="menu__box__item"
					title="Luo tapahtuma jossa on valmiita tuotteita"
				>
					<div className="menu__icon">Tuotetapahtuma</div>
				</MenuItem>
				<MenuItem
					{...menu}
					onClick={CreateNewEmptyEvent}
					className="menu__box__item"
					title="Luo tapahtuma jossa on pääsylippujen käyttöön liittyvät perusasetukset"
				>
					<div className="menu__icon">Pääsylipputapahtuma</div>
				</MenuItem>
			</Menu>
		</MenuWrapper>
	);
};

const MenuWrapper = styled.div`
	flex: 0 0 auto;
	position: relative;
	display: inline-flex;

	.menu__icon > svg {
		margin-right: 0.35rem;
	}
	.menu__text {
		font-size: 0.9rem;
		color: lightgray;
		padding: 0.25rem 0 0.5rem 0;
		border-bottom: 1px solid ${(p) => p.theme.border_color};
	}

	.menu__box {
		display: flex;
		flex-direction: column;
		white-space: nowrap;
		box-shadow: none !important;
		position: absolute;
		top: 100%;
		right: 0;
		border-radius: 0.3rem;
		z-index: 20;

		&[aria-orientation='vertical'] {
			padding: 0.25em 0;
		}

		&[aria-orientation='horizontal'] {
			padding: 0;
		}

		.menu__box__item {
			line-height: 1.5;
			padding: 0.5rem 0.75rem;
			text-align: left;
			justify-content: flex-start;
			border: 0;
			border-radius: 0;
			font-size: 100%;
			color: ${(p) => p.theme.text_color_nav};
			background: ${(p) => p.theme.menu_background_color};
			margin: 0;
			user-select: none;
			cursor: default;

			&:focus,
			&[aria-expanded='true'] {
				background-color: ${(p) => p.theme.primary_color};
				color: white;
				box-shadow: none !important;
			}
			&:active {
				background-color: ${(p) => p.theme.primary_color} !important;
			}

			&:last-child {
				border-radius: 0 0 0.35rem 0.35rem;
			}
			&:first-child {
				border-radius: 0.35rem 0.35rem 0 0;
			}
		}
	}
`;
