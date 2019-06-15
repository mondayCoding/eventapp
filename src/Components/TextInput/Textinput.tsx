import * as React from 'react';
import { FC } from 'react';
import { Field, FieldProps, FastField } from 'formik';
import { FieldContainer, IFieldContainerProps } from '../FieldContainer/FieldContainer';
import { ThemedTextInput } from './TextInputStyles';

export type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement> & IFieldContainerProps;

export const TextField: FC<TextfieldProps> = ({
	id,
	label,
	tooltip,
	name,
	required,
	disabled,
	showMobileView,
	isSmall,
	hideErrorMessage,
	hideContainer,
	children,
	...rest
}) => (
	<FastField
		name={name}
		render={({ field, form: { errors, touched } }: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_textinput_TID`}
				tooltip={tooltip}
				required={required}
				hideErrorMessage={hideErrorMessage}
				showMobileView={showMobileView}
				hideContainer={hideContainer}
				isSmall={isSmall}
				disabled={disabled}
			>
				<ThemedTextInput
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
				{children}
			</FieldContainer>
		)}
	/>
);
