import React, { FC, useState } from 'react';
import { Heading } from '../../Components/Text/Heading';
import { CardWrapper } from '../../Components/CardWrapper';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { BudjetProgressionGrap } from '../../Graphs/BudjetProgressionGrap';
import ReactTable from 'react-table';
import Icons from '../../Components/Icons/icons';
import { IExpense } from '../../MockData/MockBudjets';
import { ButtonLink } from '../../Components/Button/ButtonLink';
import { MultiStatCard } from '../../Components/MultiStatusCard';
import styled from '../../Theme/theme';
import { IconButton } from '../../Components/Button/IconButton';
import { Formik, Form } from 'formik';
import { ProgressBar } from '../../Components/ProgressBar';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextFieldBase } from '../../Components/TextInput/TextinputBase';
import { MockexpenseData, MockRevenueData } from '../../MockData/MockRevenueData';

interface IValueSourceForm {
	value: number;
	source: string;
}

export const Budget: FC = () => {
	useDocumentTitle('Budjetti');

	const [expenses, setExpenses] = useState(MockexpenseData);
	const [revenues, setRevenues] = useState(MockRevenueData);

	const addExpense = (values: IValueSourceForm) => {
		setExpenses([
			...expenses,
			{
				name: values.source,
				value: values.value,
				editable: true
			}
		]);
	};

	const addRevenue = (values: IValueSourceForm) => {
		setRevenues([
			...revenues,
			{
				name: values.source,
				value: values.value,
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
	const goal = 45000;
	const percent = (revenueTotal / goal) * 100;
	const percentRounded = Math.round(percent * 100) / 100;
	const balance = revenueTotal - expenseTotal;
	const balanceIsPositive = balance > 1;
	const goalBalance = revenueTotal - goal;
	const goalBalanceIsPositive = goalBalance > 1;

	return (
		<>
			<div className="row">
				<div className="col-lg-8">
					<CardWrapper>
						<Heading text="Tuloskehitys" isUnderlined></Heading>
						<BudjetProgressionGrap></BudjetProgressionGrap>
					</CardWrapper>

					<CardWrapper>
						<Heading text="Tulostavoite" isUnderlined></Heading>
						<ProgressBar
							percent={percentRounded}
							textEnd="Tavoite 45 000,00 €"
							textCenter={`${percentRounded}%`}
							textStart={`Kerätty ${localisedMarkedValue(revenueTotal)}`}
						></ProgressBar>
					</CardWrapper>
				</div>

				<div className="col-lg-4">
					<MultiStatCard
						heading="Budjetti"
						stats={[
							{
								value: localisedMarkedValue(goal),
								text: 'Tavoite',
								icon: Icons.dollar
							},
							{
								value: localisedMarkedValue(revenueTotal),
								text: 'Yhteistulot',
								// icon: Icons.dollar,
								state: 'success'
							},
							{
								value: localisedMarkedValue(expenseTotal),
								text: 'Yhteismenot',
								state: 'warning'
							},
							{
								value: localisedMarkedValue(balance),
								text: 'Tulot/Menot Tase',
								// icon: balanceIsPositive ? Icons.arrowUp : Icons.arrowDown,
								state: balanceIsPositive ? 'success' : 'warning'
							},
							{
								value: localisedMarkedValue(goalBalance),
								text: 'Tulot/Tavoite Tase',
								// icon: goalBalanceIsPositive ? Icons.arrowUp : Icons.arrowDown,
								state: goalBalanceIsPositive ? 'success' : 'warning'
							}
						]}
					></MultiStatCard>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6">
					<CardWrapper>
						<Heading text={'Tulot'} isUnderlined icon={Icons.dollar}>
							<RevenueTotalSpan>{localisedMarkedValue(revenueTotal)}</RevenueTotalSpan>
						</Heading>

						<ReactTable
							showPagination={false}
							minRows={10}
							pageSize={10}
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
									width: 40,
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
						<Formik
							initialValues={{ source: 'Uusi Tulo', value: 479.99 }}
							onSubmit={addRevenue}
						>
							<Form>
								<FormWrapper className="row">
									<div className="col-lg-6">
										<TextField
											label="Lähde"
											placeholder="Lähde"
											name="source"
											showMobileView
										></TextField>
									</div>
									<div className="col-lg-6">
										<TextField
											label="Tulo"
											placeholder="Tulo"
											name="value"
											type="number"
											maxLength={8}
											showMobileView
										></TextField>
									</div>
								</FormWrapper>
								<FormWrapper>
									<ButtonLink
										text="Lisää tulo"
										icon={Icons.plus}
										type="submit"
									></ButtonLink>
								</FormWrapper>
							</Form>
						</Formik>
					</CardWrapper>
				</div>

				<div className="col-lg-6">
					<CardWrapper>
						<Heading text={'Menot'} isUnderlined icon={Icons.dollar}>
							<ExpenseTotalSpan>{localisedMarkedValue(expenseTotal)}</ExpenseTotalSpan>
						</Heading>

						<ReactTable
							showPagination={false}
							minRows={10}
							pageSize={10}
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
									width: 40,
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
						<Formik
							initialValues={{ source: 'Uusi Meno', value: 479.99 }}
							onSubmit={addExpense}
						>
							<Form>
								<FormWrapper className="row">
									<div className="col-lg-6">
										<TextField
											label="Lähde"
											placeholder="Lähde"
											name="source"
											showMobileView
										></TextField>
									</div>
									<div className="col-lg-6">
										<TextField
											label="Meno"
											placeholder="Meno"
											name="value"
											type="number"
											maxLength={8}
											showMobileView
										></TextField>
									</div>
								</FormWrapper>
								<FormWrapper>
									<ButtonLink
										text="Lisää Meno"
										icon={Icons.minus}
										type="submit"
									></ButtonLink>
								</FormWrapper>
							</Form>
						</Formik>
					</CardWrapper>
				</div>
			</div>
		</>
	);
};

const localisedMarkedValue = (value: number) =>
	new Intl.NumberFormat('fi-FI', {
		style: 'currency',
		currency: 'EUR'
	}).format(value);

const FormWrapper = styled.section`
	padding: 1rem;
	border-top: 1px solid ${(p) => p.theme.border_color};
	margin: 1.5rem 0 0 0;

	& + & {
		margin-top: 0.5rem;
		border: none;
	}
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
