import React from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../Dashboard/CardWrapper';
import ReactTimeago from 'react-timeago';
import * as routes from '../../Constants/Routes_MODIF';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import styled from '../../Theme/theme';
import { Badge } from '../Dashboard/Badge';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';
import { EventParticipationByRolesGraph } from '../../Graphs/EventParticipationByRolesGraph';
import {
	IRegistrationForm,
	MockRegistrationForms,
	Role
} from '../../MockData/MockRegistrationForms';

interface RowOriginal {
	original: IRegistrationForm;
}

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
						<EventParticipationByRolesGraph></EventParticipationByRolesGraph>
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
					data={MockRegistrationForms}
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
					data={MockRegistrationForms}
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
					data={MockRegistrationForms}
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
