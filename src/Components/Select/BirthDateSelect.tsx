import React, { FC } from 'react';
import { FieldProps, Field } from 'formik';

import ReactSelect from 'react-select';
import { Props as reactSelectProps } from 'react-select/base';
import styled from '../../Theme/theme';
import Icons from '../Icons/icons';

const BirstDateSelectParent = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	flex: 1 1 auto;

	& > div:nth-child(1) {
		/* flex: 0 0 calc(20% - 0.5rem); */
		flex: 0 0 6rem;
		margin-right: 0.5rem;
	}
	& > div:nth-child(2) {
		flex: 0 0 12rem;
		margin-right: 0.5rem;
	}
	& > div:nth-child(3) {
		flex: 0 0 10rem;
		margin-right: 0.5rem;
	}
	& > .calendar-icon {
		flex: 0 0 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
      background: ${(p) => p.theme.input_background};
		/* border: 1px solid ${(p) => p.theme.border_color}; */
		border: ${(p) => p.theme.input_border};
		border-radius: 0.25rem;
	}
`;

export const BirthDateSelect: FC<reactSelectProps<any>> = ({
	name,
	required,
	disabled,
	className,
	classNamePrefix,
	...props
}) => (
	<Field
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => {
			// const handleChange = (x: string) => setFieldValue(field.name, x)
			const error = touched[field.name] && errors[field.name];
			const onBlur = () => setFieldTouched(field.name, true);

			return (
				<BirstDateSelectParent>
					<ReactSelect
						inputId={`${field.name}_1select_TID`}
						error={error}
						options={dayOptions}
						placeholder="Päivä"
						isDisabled={disabled}
						name={field.name}
						defaultValue={dayOptions.find((option: any) => option.value === field.value)}
						onBlur={onBlur}
						onChange={(option: any) => setFieldValue(field.name, option.value)}
						className={`reactselect ${className}`}
						classNamePrefix={`reactselect`}
						{...props}
					/>
					<ReactSelect
						inputId={`${field.name}_2select_TID`}
						error={error}
						options={monthOptions}
						placeholder="Kuukausi"
						isDisabled={disabled}
						name={field.name}
						defaultValue={monthOptions.find(
							(option: any) => option.value === field.value
						)}
						onBlur={onBlur}
						onChange={(option: any) => setFieldValue(field.name, option.value)}
						className={`reactselect ${className}`}
						classNamePrefix={`reactselect`}
						{...props}
					/>
					<ReactSelect
						inputId={`${field.name}_3select_TID`}
						error={error}
						options={yearOptions}
						placeholder="Vuosi"
						isDisabled={disabled}
						name={field.name}
						defaultValue={yearOptions.find((option: any) => option.value === field.value)}
						onBlur={onBlur}
						onChange={(option: any) => setFieldValue(field.name, option.value)}
						className={`reactselect ${className}`}
						classNamePrefix={`reactselect`}
						{...props}
					/>
					<span className="calendar-icon">{Icons.calendar}</span>
				</BirstDateSelectParent>
			);
		}}
	/>
);

const dayOptions = [
	{ label: '1', value: '1' },
	{ label: '2', value: '2' },
	{ label: '3', value: '3' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
	{ label: '6', value: '6' },
	{ label: '7', value: '7' },
	{ label: '8', value: '8' },
	{ label: '9', value: '9' },
	{ label: '10', value: '10' },
	{ label: '11', value: '11' },
	{ label: '12', value: '12' },
	{ label: '13', value: '13' },
	{ label: '14', value: '14' },
	{ label: '15', value: '15' },
	{ label: '16', value: '16' },
	{ label: '17', value: '17' },
	{ label: '18', value: '18' },
	{ label: '19', value: '19' },
	{ label: '20', value: '20' },
	{ label: '21', value: '21' },
	{ label: '22', value: '22' },
	{ label: '23', value: '23' },
	{ label: '24', value: '24' },
	{ label: '25', value: '25' },
	{ label: '26', value: '26' },
	{ label: '27', value: '27' },
	{ label: '28', value: '28' },
	{ label: '29', value: '29' },
	{ label: '30', value: '30' },
	{ label: '31', value: '31' },
	{ label: '32', value: '32' }
];

const monthOptions = [
	{ label: 'Tammikuu', value: '1' },
	{ label: 'Helmikuu', value: '2' },
	{ label: 'Maaliskuu', value: '3' },
	{ label: 'Huhtikuu', value: '4' },
	{ label: 'Toukokuu', value: '5' },
	{ label: 'Kesäkuu', value: '6' },
	{ label: 'Heinäkuu', value: '7' },
	{ label: 'Elokuu', value: '8' },
	{ label: 'Syyskuu', value: '9' },
	{ label: 'Lokakuu', value: '10' },
	{ label: 'Marraskuu', value: '11' },
	{ label: 'Joulukuu', value: '12' }
];

const yearOptions = [
	{ label: '2016', value: '1' },
	{ label: '2017', value: '2' },
	{ label: '2018', value: '3' },
	{ label: '2019', value: '4' }
];
