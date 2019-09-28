import React, { FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { IEvent } from '../../MockData/MockEvents';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { MockCustomers, ICustomer } from '../../MockData/MockCustomers';
import * as routes from '../../Constants/Routes_MODIF';
import styled from '../../Theme/theme';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { IconButton } from '../../Components/Button/IconButton';
import { useHistory } from 'react-router';
import { BadgeTag } from '../Dashboard/BadgeTag';
import { EventParticipationByRolesGraph } from '../../Graphs/EventParticipationByRolesGraph';

export const ParticipantLists: FC<{ event?: IEvent }> = ({ event }) => {
	const history = useHistory();

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading
							text="Osallistujat"
							ingress="Asiakkat jotka ovat ilmoittaneet osallistuvansa tapahtumaan"
							isUnderlined
						></Heading>

						<ReactTable
							data={MockCustomers}
							showPagination={false}
							minRows={MockCustomers.length}
							columns={[
								{
									Header: '',
									accessor: 'id',
									width: 38,
									resizable: false,
									Cell: ({ original }: RowProps) => (
										<IconButton
											icon={Icons.envelope}
											onClick={() =>
												history.push(routes.sendEmail.path + '/' + original.id)
											}
										></IconButton>
									)
								},
								{
									accessor: 'firstnae',
									Header: 'Nimi',
									Cell: ({ original }: RowProps) => (
										<Link
											className="card__link"
											to={`${routes.customer.path}/${original.id}`}
										>
											{`${original.firstname} ${original.lastname}`}
										</Link>
									)
								},
								{
									accessor: 'email',
									Header: 'Arvo'
								},
								{
									accessor: 'city',
									Header: ''
								}
							]}
						></ReactTable>
					</CardWrapper>

					<CardWrapper>
						<Heading
							text="Kutsutut"
							ingress="Asiakkat joille on lähetetty kutsu tapahtumaan"
							isUnderlined
						></Heading>

						<ReactTable
							data={MockCustomers}
							showPagination={false}
							minRows={MockCustomers.length}
							columns={[
								{
									Header: '',
									accessor: 'id',
									width: 38,
									resizable: false,
									Cell: ({ original }: RowProps) => (
										<IconButton
											icon={Icons.envelope}
											onClick={() =>
												history.push(routes.sendEmail.path + '/' + original.id)
											}
										></IconButton>
									)
								},

								{
									accessor: 'firstname',
									Header: 'Nimi',
									Cell: ({ original }: RowProps) => (
										<Link
											className="card__link"
											to={`${routes.customer.path}/${original.id}`}
										>
											{`${original.firstname} ${original.lastname}`}
										</Link>
									)
								},
								{
									Header: 'Tila',
									accessor: 'email',
									Cell: ({ original }: RowProps) =>
										original.tags.length <= 2 ? (
											<BadgeTag
												description="Avannut kutsun, ei ole ilmoittautunut"
												name="Avannut"
												icon={Icons.envelope_open}
											></BadgeTag>
										) : (
											<BadgeTag
												description="Ei ole avannut kutsua"
												name="Avaamaton"
												icon={Icons.envelope}
											></BadgeTag>
										)
								},
								{
									Header: 'Email',
									accessor: 'email',
									Cell: ({ original }: RowProps) => (
										<Link
											className="card__link"
											to={`${routes.sendEmail.path}/${original.id}`}
										>
											{Icons.envelope} {original.email}
										</Link>
									)
								},
								{
									accessor: 'city',
									Header: ''
								}
							]}
						></ReactTable>
					</CardWrapper>
				</div>
				<div className="col-lg-4">
					<CardWrapper>
						<Heading text="Osallistujien roolijakauma" isUnderlined></Heading>
						<EventParticipationByRolesGraph></EventParticipationByRolesGraph>
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

interface RowProps {
	original: ICustomer;
	index: number;
}
