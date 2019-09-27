import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../Constants/Routes_MODIF';
import styled from '../../Theme/theme';
import { useEvents } from '../../Queries/useEvents';
import { EventTag, EventTagType } from '../../Constants/EventTags';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { Heading } from '../../Components/Text/Heading';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { IEvent } from '../../MockData/MockEvents';
import Icons from '../../Components/Icons/icons';
import { useFavouriteEvents } from '../../Data/useFavouriteEvents';
import { IconButton } from '../../Components/Button/IconButton';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';
import { EventAttendanceGraph } from '../../Graphs/EventAttendanceGraph';
import ReactTable from 'react-table';
import { Badge } from '../Dashboard/Badge';

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
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<EventAttendanceGraph></EventAttendanceGraph>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<MultiStatCard
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
			<CardWrapper>
				<Heading text="Tapahtumat" isUnderlined />

				<FilterInput
					type="text"
					value={filter}
					placeholder="Suodata tapahtumista"
					onChange={(e) => setFilter(e.target.value)}
				></FilterInput>

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
								<Link to={`${routes.event.path}/${original.id}`}>{original.name}</Link>
							)
						},
						{
							Header: 'Roolit',
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
		</div>
	);
};

interface RowOriginal {
	original: IEvent;
}

const FilterInput = styled.input`
	display: block;
	width: 100%;
	max-width: 20rem;
	border: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	margin-bottom: 1rem;
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
