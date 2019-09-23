import React, { FC } from 'react';
import { RouteComponentProps, Route, Redirect, RouteProps } from 'react-router';
import styled from '../../Theme/theme';
import { useEvents } from '../../Queries/useEvents';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';
import { FrontPage } from './FrontPage';
import { RegistrationForms } from './RegistrationForms';
import { Settings } from './Settings';
import { CustomerLists } from './CustomerLists';
import * as routes from '../../Constants/routes';
import { PageFooter } from '../../Layout/MainFooter';
import { CardWrapper } from '../MyCollection/MyCollection';

export interface EventRouteProps {
	id: string;
}

export const Event: FC<RouteComponentProps<EventRouteProps>> = ({ match }) => {
	const { events } = useEvents();
	const event = events.find((event) => event.id === match.params.id);
	const currentPath = routes.event.path + '/' + match.params.id;

	return (
		<>
			<EventSubRouteLinks>
				<NavLink to={currentPath + '/frontpage'} className="tab-link">
					Etusivu
				</NavLink>
				<NavLink to={currentPath + '/settings'} className="tab-link">
					Asetukset
				</NavLink>
				<NavLink to={currentPath + '/participants'} className="tab-link">
					Osallistujat
				</NavLink>
				<NavLink to={currentPath + '/forms'} className="tab-link">
					Lomakkeet
				</NavLink>
				<NavLink to={currentPath + '/budjet'} className="tab-link">
					Budjetti
				</NavLink>
			</EventSubRouteLinks>

			<Route
				path="/event/:id/frontpage"
				component={() => <FrontPage event={event}></FrontPage>}
			/>
			<Route
				path="/event/:id/settings"
				component={() => <Settings event={event}></Settings>}
			/>
			<Route
				path="/event/:id/participants"
				component={() => <CustomerLists event={event}></CustomerLists>}
			/>
			<Route
				path="/event/:id/forms"
				component={() => <RegistrationForms></RegistrationForms>}
			/>
			<Route
				path="/event/:id/budjet"
				component={() => (
					<CardWrapper>
						<h2>Budjetointi</h2>
						<div style={{ marginLeft: '1.25rem' }}>
							<ol>
								<li>Menot (per item lista menoja)</li>
								<li>
									Tulot (toteutuneet saamingit) (ilmoittautumisen tulot + manuaaliset
									lisäykset)
								</li>
								<li>saatavat(lähetetyt, mutta toteutumattomat laskut)</li>
								<li>Kehityskäyrä</li>
							</ol>
						</div>
					</CardWrapper>
				)}
			/>
			<Redirect to={currentPath + '/frontpage'} />

			<PageFooter showDates></PageFooter>
		</>
	);
};

const EventSubRouteLinks = styled.nav`
	display: flex;

	.tab-link {
		flex: 1 1 100%;
		width: 0;
		border: none;
		padding: 0.25rem 0.5rem;
		color: #fff;
		transition: background-color 0.2s ease-in-out;
		background: ${(p) => p.theme.menu_background_color};
		margin-bottom: 1rem;
		text-align: center;
		text-decoration: none;
		user-select: none;

		&:focus {
			box-shadow: ${(p) => p.theme.shadow.focus};
			outline: none;
		}

		&:hover {
			background: ${(p) => darken(0.2, p.theme.menu_background_color)};

			&.active {
				background: ${(p) => darken(0.2, p.theme.primary_color)};
			}
		}

		&.active {
			background: ${(p) => p.theme.primary_color};
			color: #fff;
		}

		&:not(last-child) {
			border-right: 1px solid ${(p) => p.theme.primary_color};
		}

		&:last-child {
			border-radius: 0 0.5rem 0.5rem 0;
		}

		&:first-child {
			border-radius: 0.5rem 0 0 0.5rem;
		}
	}
`;
