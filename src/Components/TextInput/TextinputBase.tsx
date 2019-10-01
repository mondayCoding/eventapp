import * as React from 'react';
import { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { ThemedTextInputBase } from './TextInputBaseStyles';

type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextFieldBase: FC<TextfieldProps> = ({
	id,
	name,
	required,
	disabled,
	children,
	...rest
}) => (
	<Field
		name={name}
		render={({ field, form: { errors, touched } }: FieldProps) => (
			<ThemedTextInputBase
				data-role="none"
				id={`${field.name}_textinput_TID`}
				type="text"
				maxLength={300}
				required={required}
				disabled={disabled}
				hasError={(touched[field.name] && errors[field.name]) as boolean}
				{...field}
				{...rest}
			/>
		)}
	/>
);
