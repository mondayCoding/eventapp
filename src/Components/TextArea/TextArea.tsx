import * as React from 'react';
import { FieldProps, Field } from 'formik';
import { FieldContainer, IFieldContainerProps } from '../FieldContainer/FieldContainer';
import { TextAreaThemed } from './TextAreaStyles';

interface IProps
	extends IFieldContainerProps,
		React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextAreaField: React.FC<IProps> = ({
	name,
	label,
	hideErrorMessage,
	required,
	disabled,
	error,
	hideContainer,
	showMobileView,
	children,
	...rest
}) => (
	<Field
		name={name}
		render={({ field, form: { errors, touched } }: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_textarea_TID`}
				disabled={disabled}
				required={required}
				hideErrorMessage={hideErrorMessage}
				showMobileView={showMobileView}
				hideContainer={hideContainer}
			>
				<TextAreaThemed
					id={`${field.name}_textarea_TID`}
					data-role="none"
					data-haserror={(touched[field.name] && errors[field.name]) as boolean}
					maxLength={3000}
					required={required}
					disabled={disabled}
					{...field}
					{...rest}
				/>
				{children}
			</FieldContainer>
		)}
	/>
);
