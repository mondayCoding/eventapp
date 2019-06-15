import { FC } from 'react';
import * as React from 'react';
import { FieldProps, Field, FastField } from 'formik';
import ReactDatePicker, {
	ReactDatePickerProps,
	setDefaultLocale,
	registerLocale
} from 'react-datepicker';
import { FieldContainer, IFieldContainerProps } from '../FieldContainer/FieldContainer';
import { DayInput, CalenderSpacing, InputContainer, CalenderIcon } from './DayPickerStyles';
import Icons from '../Icons/icons';
import fi from 'date-fns/esm/locale/fi';
import sv from 'date-fns/esm/locale/sv';
registerLocale('fi', fi);
registerLocale('sv', sv);
setDefaultLocale('fi');

import { Button } from '../Button/Button';

type DayPickerFieldProps = { label: string; name: string } & IFieldContainerProps &
	Partial<ReactDatePickerProps>;

type DayRangeFieldProps = {
	label: string;
	name: string;
	secondname: string;
} & IFieldContainerProps &
	Partial<ReactDatePickerProps>;

export const DayPickerBase: FC<ReactDatePickerProps> = ({ showTimeSelect, ...rest }) => {
	const fieldRef = React.useRef(null as any);
	const handleFieldClick = () => fieldRef.current && fieldRef.current.input.click();

	return (
		<InputContainer hasTimeSelect={showTimeSelect}>
			<ReactDatePicker
				ref={fieldRef}
				customInput={<DayInput />}
				showTimeSelect={showTimeSelect}
				dateFormat={showTimeSelect ? 'd.M.yyyy HH:mm' : 'd.M.yyyy'}
				{...rest}
			/>
			<Button
				buttonIcon={showTimeSelect ? CalendarAndTime : Icons.calendar}
				onClick={handleFieldClick}
			/>
		</InputContainer>
	);
};

export const DayPickerField: FC<DayPickerFieldProps> = ({
	name,
	label,
	tooltip,
	hideErrorMessage,
	showMobileView,
	required,
	disabled,
	hideContainer,
	showTimeSelect,
	...props
}) => {
	const fieldRef = React.useRef(null as any);
	const handleFieldClick = () => fieldRef.current && fieldRef.current.input.click();

	return (
		<Field
			name={name}
			render={({
				field,
				form: { errors, touched, setFieldValue, setFieldTouched }
			}: FieldProps) => (
				<FieldContainer
					label={label}
					error={touched[field.name] && errors[field.name]}
					id={`${field.name}_daypicker_TID`}
					tooltip={tooltip}
					required={required}
					disabled={disabled}
					showMobileView={showMobileView}
					hideContainer={hideContainer}
					hideErrorMessage={hideErrorMessage}
				>
					<InputContainer hasTimeSelect={showTimeSelect}>
						<ReactDatePicker
							required={required}
							disabled={disabled}
							id={`${field.name}_daypicker_TID`}
							ref={fieldRef}
							// selected={field.value ? toUtcDateFormat(field.value) : undefined}
							selected={field.value}
							onBlur={() => setFieldTouched(field.name, true)}
							onChange={(date: Date) => {
								// setFieldValue(field.name, restoreLocalOffsetToUtcDate(date))
								// console.log(date);
								setFieldValue(field.name, date);
							}}
							customInput={<DayInput />}
							showTimeSelect={showTimeSelect}
							dateFormat={showTimeSelect ? 'd.M.yyyy HH:mm' : 'd.M.yyyy'}
							// timeFormat={'HH:mm'}
							{...props}
						/>
						<Button
							buttonIcon={showTimeSelect ? CalendarAndTime : Icons.calendar}
							onClick={handleFieldClick}
						/>
					</InputContainer>
				</FieldContainer>
			)}
		/>
	);
};

const restoreLocalOffsetToUtcDate = (date: Date) =>
	new Date(date.getTime() + date.getTimezoneOffset() * 60000 * -1);

const toUtcDateFormat = (date: Date) => new Date(date.getTime() + date.getTimezoneOffset() * 60000);

// TODO FORMIK ARRAY?
export const DayPickerRangeField: FC<DayRangeFieldProps> = ({
	name,
	secondname,
	label,
	showMobileView,
	hideErrorMessage,
	showTimeSelect,
	disabled,
	hideContainer,
	tooltip,
	...props
}) => {
	const startFieldRef = React.useRef(null as any);
	const endFieldRef = React.useRef(null as any);
	const handleStartClick = () => startFieldRef.current && startFieldRef.current.input.click();
	const handleEndClick = () => endFieldRef.current && endFieldRef.current.input.click();

	return (
		<Field
			name={name}
			render={({
				field,
				form: { errors, touched, setFieldValue, setFieldTouched, setFieldError, values }
			}: FieldProps) => (
				<FieldContainer
					label={label}
					error={touched[field.name] && errors[field.name]}
					id={`${field.name}_dayRange_TID`}
					disabled={disabled}
					showMobileView={showMobileView}
					hideContainer={hideContainer}
					hideErrorMessage={hideErrorMessage}
					tooltip={tooltip}
				>
					<InputContainer hasTimeSelect={showTimeSelect}>
						<ReactDatePicker
							id={`${field.name}_dayRange_TID`}
							disabled={disabled}
							selected={values[field.name]}
							onBlur={() => setFieldTouched(field.name, true)}
							ref={startFieldRef}
							onChange={(date) => {
								if ((date && date < values[secondname]) || (date && !values[secondname])) {
									setFieldValue(field.name, date);
									console.log('set new start value');
									console.log(date);
								} else {
									setFieldValue(field.name, values[secondname]);
									console.log('setting date failed (start)');
									console.log(date);
								}
							}}
							customInput={<DayInput />}
							showTimeSelect={showTimeSelect}
							startDate={values[field.name]}
							endDate={values[secondname]}
							selectsStart={true}
							dateFormat={showTimeSelect ? 'd.M.yyyy HH:mm' : 'd.M.yyyy'}
							timeFormat={'HH:mm'}
							{...props}
						/>
						<Button
							buttonIcon={showTimeSelect ? CalendarAndTime : Icons.calendar}
							onClick={handleStartClick}
						/>

						<CalenderSpacing />

						<ReactDatePicker
							id={`${secondname}_dayRange_TID`}
							disabled={disabled}
							selected={values[secondname]}
							ref={endFieldRef}
							onBlur={() => setFieldTouched(secondname, true)}
							onChange={(date) => {
								console.log(date);
								if (date && date > values[field.name]) {
									setFieldValue(secondname, date);
								} else {
									setFieldValue(secondname, values[field.name]);
									console.log('setting date failed (end)');
									console.log(date);
								}
							}}
							customInput={<DayInput />}
							showTimeSelect={showTimeSelect}
							startDate={values[field.name]}
							endDate={values[secondname]}
							selectsEnd={true}
							dateFormat={showTimeSelect ? 'd.M.yyyy HH:mm' : 'd.M.yyyy'}
							timeFormat={'HH:mm'}
							{...props}
						/>
						<Button
							buttonIcon={showTimeSelect ? CalendarAndTime : Icons.calendar}
							onClick={handleEndClick}
						/>
					</InputContainer>
				</FieldContainer>
			)}
		/>
	);
};

const CalendarAndTime = (
	<span style={{ display: 'inline-flex' }}>
		{Icons.calendar}
		<span style={{ marginLeft: '.3rem' }}>{Icons.clock}</span>
	</span>
);
