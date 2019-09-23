import React, { FC } from 'react';
import { IEvent } from '../../MockData/MockEvents';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { StatCard } from '../Dashboard/StatusCard';
import { CardWrapper } from '../MyCollection/MyCollection';
import { CustomerItem } from '../Customers/Customers';
import ReactTimeago from 'react-timeago';
import * as routes from '../../Constants/routes';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import styled from '../../Theme/theme';

interface IRegistrationItem {
	name: string;
	start: Date;
	end: Date;
	id: number;
}

interface RowOriginal {
	original: IRegistrationItem;
}

const registrationsList: IRegistrationItem[] = [
	{
		name: 'Ilmoittautumislomake Syyskuu 2019',
		start: new Date(2019, 8, 1),
		end: new Date(2019, 9, 1),
		id: 1
	},
	{
		name: 'Ilmoittautumislomake Lokakuu 2019',
		start: new Date(2019, 9, 1),
		end: new Date(2019, 10, 1),
		id: 2
	},
	{
		name: 'Ilmoittautumislomake Marraskuu 2019',
		start: new Date(2019, 10, 1),
		end: new Date(2019, 11, 1),
		id: 3
	},
	{
		name: 'Ilmoittautumislomake Joulukuu 2019',
		start: new Date(2019, 11, 1),
		end: new Date(2020, 1, 1),
		id: 4
	}
];

export const RegistrationForms = () => {
	return (
		<>
			<div className="row">
				<div className="col-lg-4">
					<StatCard
						value={'3'}
						icon={Icons.clipboard_list}
						text="Avoinna"
						description="Avoimia lomakkeita tällä hetkellä"
					></StatCard>
				</div>
				<div className="col-lg-4">
					<StatCard
						value={'5'}
						icon={<span style={{ color: 'lightsalmon' }}>{Icons.check_circle}</span>}
						text="Loppuneita"
						description="Loppuneita ilmoittautumisia"
					></StatCard>
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
				<Heading
					text="Ilmoittautumiset"
					ingress="Täällä voit tarkastella ja muokata tapahtuman ilmoittautumislomakkeita ja niiden aikatauluja"
					isUnderlined
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
							Header: 'Name',
							accessor: 'name',
							Cell: ({ original }: RowOriginal) => (
								<Link to={routes.customers.path}>{original.name}</Link>
							)
						},
						{
							Header: 'Alkaa',
							accessor: 'start',
							Cell: ({ original }: RowOriginal) => (
								<div>
									<div>{original.start.toLocaleDateString('fi-FI')}</div>
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
									<div>{original.end.toLocaleDateString('fi-FI')}</div>
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
`;
