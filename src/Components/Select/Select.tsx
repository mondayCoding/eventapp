import React, { FC } from 'react';
import { FieldProps, Field, FastField } from 'formik';

import ReactSelect from 'react-select';
import { Props as reactSelectProps } from 'react-select/base';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';

type ProvidedProps = reactSelectProps<any> & IFieldContainerProps;

export const SelectBase = ({ className, ...rest }: reactSelectProps) => {
	return (
		<ReactSelect
			className={`reactselect ${className}`}
			classNamePrefix={'reactselect'}
			{...rest}
		/>
	);
};

export const SelectFieldBase: FC<reactSelectProps<any>> = ({
	name,
	required,
	disabled,
	className,
	classNamePrefix,
	options,
	...props
}) => (
	<Field
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => (
			<ReactSelect
				inputId={`${field.name}_select_TID`}
				error={touched[field.name] && errors[field.name]}
				options={options}
				isDisabled={disabled}
				name={field.name}
				defaultValue={
					options ? options.find((option: any) => option.value === field.value) : ''
				}
				onBlur={() => setFieldTouched(field.name, true)}
				onChange={(option: any) => setFieldValue(field.name, option.value)}
				className={`reactselect ${className}`}
				classNamePrefix={`reactselect`}
				{...props}
			/>
		)}
	/>
);

export const SelectFastField: FC<ProvidedProps> = ({
	name,
	label,
	required,
	disabled,
	hideContainer,
	className,
	classNamePrefix,
	options,
	hideErrorMessage,
	showMobileView,
	...props
}) => (
	<FastField
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_select_TID`}
				required={required}
				showMobileView={showMobileView}
				disabled={disabled}
				hideErrorMessage={hideErrorMessage}
				hideContainer={hideContainer}
				className={(touched[field.name] && errors[field.name] && 'hasError') || ''}
			>
				<ReactSelect
					inputId={`${field.name}_select_TID`}
					error={touched[field.name] && errors[field.name]}
					options={options}
					isDisabled={disabled}
					name={field.name}
					defaultValue={
						options ? options.find((option: any) => option.value === field.value) : ''
					}
					onBlur={() => setFieldTouched(field.name, true)}
					onChange={(option: any) => setFieldValue(field.name, option.value)}
					className={`reactselect ${className}`}
					classNamePrefix={`reactselect`}
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);

export const SelectField: FC<ProvidedProps> = ({
	name,
	label,
	required,
	disabled,
	hideContainer,
	className,
	classNamePrefix,
	options,
	hideErrorMessage,
	showMobileView,
	...props
}) => (
	<Field
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_select_TID`}
				required={required}
				showMobileView={showMobileView}
				disabled={disabled}
				hideErrorMessage={hideErrorMessage}
				hideContainer={hideContainer}
				className={(touched[field.name] && errors[field.name] && 'hasError') || ''}
			>
				<ReactSelect
					inputId={`${field.name}_select_TID`}
					error={touched[field.name] && errors[field.name]}
					options={options}
					isDisabled={disabled}
					name={field.name}
					defaultValue={
						options ? options.find((option: any) => option.value === field.value) : ''
					}
					onBlur={() => setFieldTouched(field.name, true)}
					onChange={(option: any) => setFieldValue(field.name, option.value)}
					className={`reactselect ${className}`}
					classNamePrefix={`reactselect`}
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);

export const MultiSelectField: FC<ProvidedProps> = ({
	name,
	label,
	required,
	options,
	hideContainer,
	showMobileView,
	...props
}) => (
	<Field
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_select_TID`}
				required={required}
				showMobileView={showMobileView}
				hideContainer={hideContainer}
			>
				<ReactSelect
					inputId={`${field.name}_select_TID`}
					error={touched[field.name] && errors[field.name]}
					options={options}
					name={field.name}
					isMulti={true}
					defaultValue={
						options && field.value
							? options.filter((option: any) => field.value.includes(option.value))
							: []
					}
					onBlur={() => setFieldTouched(field.name, true)}
					onChange={(option: any) => {
						setFieldValue(field.name, option.map((option: any) => option.value));
					}}
					className="reactselect"
					classNamePrefix="reactselect"
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);
