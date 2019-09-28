import React, { FC, useState } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { CardWrapper } from '../Dashboard/CardWrapper';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { BudjetProgressionGrap } from '../../Graphs/BudjetProgressionGrap';
import ReactTable from 'react-table';
import Icons from '../../Components/Icons/icons';
import { IExpense, IRevenue } from '../../MockData/MockBudjets';
import { ButtonLink } from '../../Components/Button/ButtonLink';
import { MultiStatCard } from '../Dashboard/MultiStatusCard';
import styled from '../../Theme/theme';
import { IconButton } from '../../Components/Button/IconButton';
import { Calendar2 } from '../Dashboard/ReactCalendar';
import { Formik } from 'formik';

export const Budget: FC = () => {
	useDocumentTitle('Budjetti');

	const [expenses, setExpenses] = useState(expenseData);
	const [revenues, setRevenues] = useState(RevenueData);

	const addExpense = () => {
		setExpenses([
			...expenses,
			{
				name: 'Uusi tulo',
				value: 10,
				editable: true
			}
		]);
	};

	const addRevenue = () => {
		setRevenues([
			...revenues,
			{
				name: 'Uusi tulo',
				value: 10,
				editable: true
			}
		]);
	};

	const removeRevenue = (revenueIndex: number) => {
		setRevenues(revenues.filter((rev, index) => index !== revenueIndex));
	};

	const removeExpense = (expenseIndex: number) => {
		setExpenses(revenues.filter((rev, index) => index !== expenseIndex));
	};

	const revenueTotal = revenues.reduce((total, current) => current.value + total, 0);
	const expenseTotal = expenses.reduce((total, current) => current.value + total, 0);

	// const renderEditable = (cellInfo: any) => {
	// 	return (
	// 		<div
	// 			contentEditable
	// 			suppressContentEditableWarning
	// 			onBlur={(e) => {
	// 				const data = [...revenues];
	// 				data[cellInfo.index].name = e.target.innerHTML;
	// 				setRevenues(data);
	// 			}}
	// 			dangerouslySetInnerHTML={{
	// 				__html: revenues[cellInfo.index].name
	// 			}}
	// 		/>
	// 	);
	// };

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading text="Budjettikehitys" isUnderlined></Heading>
						<BudjetProgressionGrap></BudjetProgressionGrap>
					</CardWrapper>
				</div>

				<div className="col-lg-4">
					<MultiStatCard
						heading="Budjetti"
						stats={[
							{
								value: localisedMarkedValue(revenueTotal),
								text: 'Yhteistulot',
								icon: Icons.dollar,
								state: 'success'
							},
							{
								value: localisedMarkedValue(expenseTotal),
								text: 'Yhteismenot',
								icon: Icons.dollar,
								state: 'warning'
							}
						]}
					></MultiStatCard>
				</div>
			</div>

			<BudjetGoalBar>80%</BudjetGoalBar>

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<Heading text={'Tulot'} isUnderlined icon={Icons.dollar}>
							<RevenueTotalSpan>{localisedMarkedValue(revenueTotal)}</RevenueTotalSpan>
						</Heading>

						<Formik initialValues={{}} onSubmit={() => {}}>
							<ReactTable
								showPagination={false}
								minRows={5}
								data={revenues}
								columns={[
									{
										accessor: 'name',
										Header: 'Lähde'
									},
									{
										accessor: 'value',
										Header: 'Arvo',
										Cell: ({ original }: RowProps) =>
											original.editable && localisedMarkedValue(original.value)
									},
									{
										accessor: 'editable',
										Header: '',
										Cell: ({ original }: RowProps) =>
											original.editable ? (
												<ButtonLink text="Muokkaa" icon={Icons.edit}></ButtonLink>
											) : (
												<span>Automaattinen arvo</span>
											)
									},
									{
										width: 50,
										resizable: false,
										accessor: 'editable',
										Header: '',
										Cell: ({ original, index }: RowProps) =>
											original.editable && (
												<IconButton
													icon={Icons.trashcan}
													onClick={() => removeRevenue(index)}
												></IconButton>
											)
									}
								]}
							></ReactTable>
						</Formik>
						<ButtonLink
							text="Lisää tulo"
							icon={Icons.plus}
							onClick={() => addRevenue()}
						></ButtonLink>
					</CardWrapper>
				</div>

				<div className="col-lg-6">
					<CardWrapper>
						<Heading text={'Menot'} isUnderlined icon={Icons.dollar}>
							<ExpenseTotalSpan>{localisedMarkedValue(expenseTotal)}</ExpenseTotalSpan>
						</Heading>

						<ReactTable
							showPagination={false}
							minRows={5}
							data={expenses}
							columns={[
								{
									accessor: 'name',
									Header: 'Lähde'
								},
								{
									accessor: 'value',
									Header: 'Arvo',
									Cell: ({ original }: RowProps) =>
										original.editable && localisedMarkedValue(original.value)
								},
								{
									accessor: 'editable',
									Header: '',
									Cell: ({ original }: RowProps) =>
										original.editable ? (
											<ButtonLink text="Muokkaa" icon={Icons.edit}></ButtonLink>
										) : (
											<span>Automaattinen arvo</span>
										)
								},
								{
									width: 50,
									resizable: false,
									accessor: 'editable',
									Header: '',
									Cell: ({ original, index }: RowProps) =>
										original.editable && (
											<IconButton
												icon={Icons.trashcan}
												onClick={() => removeExpense(index)}
											></IconButton>
										)
								}
							]}
						></ReactTable>
						<ButtonLink
							text="Lisää kulu"
							icon={Icons.plus}
							onClick={() => addExpense()}
						></ButtonLink>
					</CardWrapper>
				</div>
			</div>

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

			<Calendar2></Calendar2>
		</>
	);
};

const localisedMarkedValue = (value: number) =>
	new Intl.NumberFormat('fi-FI', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);

const BudjetGoalBar = styled.span`
	display: flex;
	height: 1.5rem;
	font-size: 1.2rem;
	border-radius: 0.5rem;
	margin: 0 0 1rem 0;
	justify-content: center;
	align-items: center;
	background: ${(p) => p.theme.success_color};
	color: #fff;
	box-shadow: ${(p) => p.theme.shadow.card};
`;

const ExpenseTotalSpan = styled.span`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 auto;
	color: ${(p) => p.theme.warning_color};
`;

const RevenueTotalSpan = styled.span`
	display: flex;
	justify-content: flex-end;
	flex: 1 1 auto;
	color: ${(p) => p.theme.success_color};
`;

interface RowProps {
	original: IExpense;
	index: number;
}

const expenseData: IExpense[] = [
	{
		editable: false,
		name: 'Ilmoittautumistulot',
		value: 12034
	},
	{
		editable: true,
		name: 'Tuet',
		value: 7034
	},
	{
		editable: true,
		name: 'Ilmastobonus',
		value: 399
	}
];

const RevenueData: IRevenue[] = [
	{
		editable: true,
		name: 'Palkat',
		value: 21034
	},
	{
		editable: true,
		name: 'Kiinteistön vuokra',
		value: 5034
	}
];
