import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes_MODIF';
import styled from '../../Theme/theme';
import { useEvents } from '../../Queries/useEvents';
import { EventTag, EventTagType } from '../../Constants/EventTags';
import { CardWrapper } from '../../Components/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../../Components/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { useFavouriteEvents } from '../../Hooks/useFavouriteEvents';
import { IconButton } from '../../Components/Button/IconButton';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { MultiStatCard } from '../../Components/MultiStatusCard';
import { EventAttendanceGraph } from '../../Graphs/EventAttendanceGraph';
import ReactTable from 'react-table';
import { EventActions } from './EventActions';

export const Events = () => {
	useDocumentTitle('Tapahtuma');
	const { events } = useEvents();
	const [filter, setFilter] = useState('');
	const { favourites, toggleFavourite } = useFavouriteEvents();

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

	const filteredEvents = createFilter(events);

	return (
		<div>
			<CardWrapper>
				<Heading text="Tapahtumat" isUnderlined />

				<ButtonRow>
					<FilterInput
						type="text"
						value={filter}
						placeholder="Suodata tapahtumista"
						onChange={(e) => setFilter(e.target.value)}
					></FilterInput>
					<EventActions></EventActions>
				</ButtonRow>

				<ReactTable
					data={filteredEvents}
					minRows={filteredEvents.length}
					showPagination={false}
					columns={[
						{
							Header: '',
							accessor: 'id',
							width: 30,
							resizable: false,
							Cell: ({ original }: RowOriginal) => (
								<IconButton
									icon={favourites.includes(original.id) ? Icons.star_filled : Icons.star}
									onClick={(e: any) => {
										toggleFavourite(original.id);
										e.preventDefault();
									}}
								></IconButton>
							)
						},
						{
							Header: 'Nimi',
							accessor: 'name',
							Cell: ({ original }: RowOriginal) => (
								<Link
									className="card__link"
									to={`${routes.event.path}/${original.id}/frontpage`}
								>
									{original.name}
								</Link>
							)
						},
						{
							Header: 'Tyyppi',
							accessor: 'roles',
							Cell: ({ original }: RowOriginal) => renderTags(original.tags)
						},

						{
							Header: 'Paikka',
							accessor: 'location',
							width: 150
						}
					]}
				></ReactTable>
			</CardWrapper>

			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<EventAttendanceGraph></EventAttendanceGraph>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
						heading="Tapahtumien tila"
						stats={[
							{
								text: 'Avoinna',
								value: '3',
								description: 'Avoimia lomakkeita tällä hetkellä',
								icon: Icons.clipboard_list
							},
							{
								text: 'Loppuneita',
								value: '23',
								description: 'Loppuneita ilmoittautumisia'
							},
							{
								text: 'Avautuvia',
								value: '6',
								description: 'Aukeamista odottavia lomakkeita'
							}
						]}
					></MultiStatCard>
				</div>
			</div>
		</div>
	);
};

interface RowOriginal {
	original: IEvent;
}

const ButtonRow = styled.section`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-right: 0.5rem;
	margin-bottom: 1rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid ${(p) => p.theme.border_color};
`;

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	border-radius: 3px;
	padding: 0.2rem;
	background: ${(p) => p.theme.input_background};
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
