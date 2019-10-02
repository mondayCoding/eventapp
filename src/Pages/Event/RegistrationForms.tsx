import React, { useState, FC } from 'react';
import { Heading } from '../../Components/Text/Heading';
import Icons from '../../Components/Icons/icons';
import { CardWrapper } from '../../Components/CardWrapper';
import ReactTimeago from 'react-timeago';
import * as routes from '../../Constants/Routes';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import styled from '../../Theme/theme';
import { Badge } from '../../Components/Badge';
import {
	IRegistrationForm,
	MockRegistrationForms,
	Role,
	registrationType
} from '../../MockData/MockRegistrationForms';
import { ButtonLink } from '../../Components/Button/ButtonLink';

interface RowOriginal {
	original: IRegistrationForm;
}

export const RegistrationForms: FC = () => {
	const [showRoles, setShowRoles] = useState(false);
	return (
		<>
			<CardWrapper>
				<Heading icon={Icons.calendar} text="Avoimet" isUnderlined></Heading>
				<ButtonLink
					onClick={() => setShowRoles(!showRoles)}
					text={showRoles ? 'Näytä aukeamisaika' : 'Näytä roolit'}
				></ButtonLink>

				<ReactTable
					data={MockRegistrationForms.filter(
						(form) => form.type === registrationType.ongoing
					)}
					showPagination={false}
					minRows={0}
					columns={columnSetupOpen(showRoles)}
				></ReactTable>

				<Heading
					icon={Icons.calendar}
					text="Aukeavat"
					isUnderlined
					hasSpaceAbove
				></Heading>

				<ReactTable
					data={MockRegistrationForms.filter(
						(form) => form.type === registrationType.planned
					)}
					showPagination={false}
					minRows={0}
					columns={columnSetupOpening}
				></ReactTable>

				<Heading
					icon={Icons.calendar}
					text="Sulkeutuneet"
					isUnderlined
					hasSpaceAbove
				></Heading>

				<ReactTable
					data={MockRegistrationForms.filter(
						(form) => form.type === registrationType.ended
					)}
					showPagination={false}
					minRows={0}
					columns={columnSetupClosed}
				></ReactTable>
			</CardWrapper>
		</>
	);
};

const columnSetupOpen = (showRoles: boolean) => [
	{
		Header: 'Nimi',
		accessor: 'name',
		Cell: ({ original }: RowOriginal) => (
			<Link className="card__link" to={`${routes.registrationform.path}/${original.id}`}>
				{original.name}
			</Link>
		)
	},
	showRoles ? renderRoleColumns() : renderDateColumns(),
	{
		Header: 'Päättyy',
		accessor: 'end',
		Cell: ({ original }: RowOriginal) => (
			<div>
				<DataSpanWarning>{original.end.toLocaleDateString('fi-FI')}</DataSpanWarning>
				<DateSpan>
					<ReactTimeago date={original.end} />
				</DateSpan>
			</div>
		)
	}
];

const columnSetupOpening = [
	{
		Header: 'Nimi',
		accessor: 'name',
		Cell: ({ original }: RowOriginal) => (
			<Link className="card__link" to={`${routes.registrationform.path}/${original.id}`}>
				{original.name}
			</Link>
		)
	},
	{
		Header: 'Aukeaa',
		accessor: 'start',
		Cell: ({ original }: RowOriginal) => (
			<div>
				<DateSpanSuccess>{original.start.toLocaleDateString('fi-FI')}</DateSpanSuccess>
				<DateSpan>
					<ReactTimeago date={original.start} />
				</DateSpan>
			</div>
		)
	}
];

const columnSetupClosed = [
	{
		Header: 'Nimi',
		accessor: 'name',
		Cell: ({ original }: RowOriginal) => (
			<Link className="card__link" to={`${routes.registrationform.path}/${original.id}`}>
				{original.name}
			</Link>
		)
	},

	{
		Header: 'Päättyi',
		accessor: 'end',
		Cell: ({ original }: RowOriginal) => (
			<div>
				<DataSpanWarning>{original.end.toLocaleDateString('fi-FI')}</DataSpanWarning>
				<DateSpan>
					<ReactTimeago date={original.end} />
				</DateSpan>
			</div>
		)
	}
];

const renderRoleColumns = () => ({
	Header: 'Roolit',
	accessor: 'roles',
	Cell: ({ original }: RowOriginal) =>
		original.roles.map((role, index) => <Badge key={index} text={Role[role]} />)
});

const renderDateColumns = () => ({
	Header: 'Aukesi',
	accessor: 'start',
	Cell: ({ original }: RowOriginal) => (
		<div>
			<DateSpanSuccess>{original.start.toLocaleDateString('fi-FI')}</DateSpanSuccess>
			<DateSpan>
				<ReactTimeago date={original.start} />
			</DateSpan>
		</div>
	)
});

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
