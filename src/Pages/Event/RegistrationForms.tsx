import React, { FC } from 'react';
import { IEvent } from '../../MockData/MockEvents';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../MyCollection/MyCollection';
import { CustomerItem } from '../Customers/Customers';
import ReactTimeago from 'react-timeago';
import * as routes from '../../Constants/Routes';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import styled from '../../Theme/theme';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Badge } from '../Dashboard/Badge';
import { MockDataEventParticipation } from '../../MockData/MockDataEventParticipation';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';

interface IRegistrationItem {
	name: string;
	start: Date;
	roles: roleType[];
	end: Date;
	id: number;
}

interface RowOriginal {
	original: IRegistrationItem;
}

enum roleType {
	participant,
	bossman,
	lecturer,
	showerman,
	maid,
	gerbil
}
const Role = {
	[roleType.participant]: 'Osallistuja',
	[roleType.bossman]: 'Pomomies',
	[roleType.lecturer]: 'Luennoitsija',
	[roleType.showerman]: 'Näytteilleasettaja',
	[roleType.maid]: 'Huoltoihminen',
	[roleType.gerbil]: 'Gerbiilinkasvattaja'
};

const registrationsList: IRegistrationItem[] = [
	{
		name: 'Ilmoittautumislomake Syyskuu 2019',
		start: new Date(2019, 8, 1),
		end: new Date(2019, 9, 1),
		roles: [1, 2],
		id: 1
	},
	{
		name: 'Ilmoittautumislomake Lokakuu 2019',
		start: new Date(2019, 9, 1),
		end: new Date(2019, 10, 1),
		roles: [4, 5],
		id: 2
	},
	{
		name: 'Ilmoittautumislomake Marraskuu 2019',
		start: new Date(2019, 10, 1),
		end: new Date(2019, 11, 1),
		roles: [3, 4],
		id: 3
	},
	{
		name: 'Ilmoittautumislomake Joulukuu 2019',
		start: new Date(2019, 11, 1),
		end: new Date(2020, 1, 1),
		roles: [1],
		id: 4
	}
];

export const RegistrationForms = () => {
	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<MultiStatCard
						stats={[
							{
								icon: Icons.clipboard_list,
								text: 'Avoimia',
								value: '3',
								description: 'Avoimia lomakkeita tällä hetkellä'
							},
							{
								text: 'Loppuneita',
								value: '5',
								description: 'Avoimia lomakkeita tällä hetkellä'
							}
						]}
					></MultiStatCard>
				</div>
				<div className="col-lg-4">
					<CardWrapper>
						<Doughnut data={MockDataEventParticipation}></Doughnut>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'6'}
						icon={<span style={{ color: 'lightseagreen' }}>{Icons.info_circle}</span>}
						text="Avautuvia"
						description="Aukeamista odottavia lomakkeita"
					></StatCard>
				</div>
			</div>

			<CardWrapper>
				<Heading icon={Icons.calendar} text="Avoimet" isUnderlined></Heading>

				<ReactTable
					data={registrationsList}
					showPagination={false}
					minRows={0}
					columns={[
						{
							Header: '',
							accessor: 'id',
							width: 30,
							resizable: false,
							Cell: () => <div>{Icons.clipboard_list}</div>
						},
						{
							Header: 'Nimi',
							accessor: 'name',
							Cell: ({ original }: RowOriginal) => (
								<Link to={`${routes.registrationform.path}/${original.id}`}>
									{original.name}
								</Link>
							)
						},
						{
							Header: 'Roolit',
							accessor: 'roles',
							Cell: ({ original }: RowOriginal) =>
								original.roles.map((role) => <Badge text={Role[role]} />)
						},
						{
							Header: 'Aukesi',
							accessor: 'start',
							Cell: ({ original }: RowOriginal) => (
								<div>
									<DateSpanSuccess>
										{original.start.toLocaleDateString('fi-FI')}
									</DateSpanSuccess>
									<DateSpan>
										<ReactTimeago date={original.start} />
									</DateSpan>
								</div>
							)
						},
						{
							Header: 'Päättyy',
							accessor: 'end',
							Cell: ({ original }: RowOriginal) => (
								<div>
									<DataSpanWarning>
										{original.end.toLocaleDateString('fi-FI')}
									</DataSpanWarning>
									<DateSpan>
										<ReactTimeago date={original.end} />
									</DateSpan>
								</div>
							)
						}
					]}
				></ReactTable>

				<Heading
					icon={Icons.calendar}
					text="Aukeavat"
					isUnderlined
					hasSpaceAbove
				></Heading>

				<ReactTable
					data={registrationsList}
					showPagination={false}
					minRows={0}
					columns={[
						{
							Header: '',
							accessor: 'id',
							width: 30,
							resizable: false,
							Cell: () => <div>{Icons.clipboard_list}</div>
						},
						{
							Header: 'Nimi',
							accessor: 'name',
							Cell: ({ original }: RowOriginal) => (
								<Link to={`${routes.registrationform.path}/${original.id}`}>
									{original.name}
								</Link>
							)
						},
						{
							Header: 'Aukeaa',
							accessor: 'start',
							Cell: ({ original }: RowOriginal) => (
								<div>
									<DateSpanSuccess>
										{original.start.toLocaleDateString('fi-FI')}
									</DateSpanSuccess>
									<DateSpan>
										<ReactTimeago date={original.start} />
									</DateSpan>
								</div>
							)
						}
					]}
				></ReactTable>

				<Heading
					icon={Icons.calendar}
					text="Sulkeutuneet"
					isUnderlined
					hasSpaceAbove
				></Heading>

				<ReactTable
					data={registrationsList}
					showPagination={false}
					minRows={0}
					columns={[
						{
							Header: '',
							accessor: 'id',
							width: 30,
							resizable: false,
							Cell: () => <div>{Icons.clipboard_list}</div>
						},
						{
							Header: 'Nimi',
							accessor: 'name',
							Cell: ({ original }: RowOriginal) => (
								<Link to={`${routes.registrationform.path}/${original.id}`}>
									{original.name}
								</Link>
							)
						},

						{
							Header: 'Päättyi',
							accessor: 'end',
							Cell: ({ original }: RowOriginal) => (
								<div>
									<DataSpanWarning>
										{original.end.toLocaleDateString('fi-FI')}
									</DataSpanWarning>
									<DateSpan>
										<ReactTimeago date={original.end} />
									</DateSpan>
								</div>
							)
						}
					]}
				></ReactTable>
			</CardWrapper>
		</>
	);
};

const DateSpan = styled.time`
	color: ${(p) => p.theme.primary_color};
	padding: 0.5rem;
`;

const DataSpanWarning = styled.time`
	color: ${(p) => p.theme.warning_color};
	padding: 0.5rem;
`;

const DateSpanSuccess = styled.time`
	color: ${(p) => p.theme.success_color};
	padding: 0.5rem;
`;
