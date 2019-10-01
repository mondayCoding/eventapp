import * as React from 'react';

import {
	CheckBoxInput,
	CheckBoxWrapper,
	CheckboxLabel,
	CheckBoxWrapperInlined,
	CheckBoxInputInlined,
	CheckboxLabelInlined
} from './CheckboxStyles';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';
import { Field, FieldProps, FastField } from 'formik';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

// checkbox, non formik
const Checkbox: React.SFC<IProps> = ({ id, label, children, className, ...rest }) => (
	<CheckBoxWrapper>
		<CheckBoxInput id={id} type="checkbox" {...rest} />
		<CheckboxLabel htmlFor={id}>
			{label}
			{children}
		</CheckboxLabel>
	</CheckBoxWrapper>
);

const CheckBoxInline: React.SFC<IProps> = ({ id, children, ...rest }) => {
	return (
		<CheckBoxWrapperInlined>
			<CheckBoxInputInlined id={id} type="checkbox" {...rest} />
			<CheckboxLabelInlined htmlFor={id} />
			{children}
		</CheckBoxWrapperInlined>
	);
};

// checkbox formik
export const CheckBoxField: React.FC<IProps> = ({ name, label, ...props }) => (
	<Field
		name={name}
		render={({ field }: FieldProps) => (
			<Checkbox
				id={`${field.name}_cb_TID`}
				label={label}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				checked={field.value}
				{...props}
			/>
		)}
	/>
);

// checkbox inside fieldcontainer, formik
export const CheckBoxContainerField: React.FC<IProps & IFieldContainerProps> = ({
	name,
	label,
	required,
	hideContainer,
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
				id={`${field.name}_cb_TID`}
				hideContainer={hideContainer}
				required={required}
				showMobileView={showMobileView}
			>
				<CheckBoxInline
					id={`${field.name}_cb_TID`}
					required={required}
					name={field.name}
					onChange={field.onChange}
					onBlur={field.onBlur}
					checked={field.value}
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);

//** This one is for non-formik use */
export { CheckBoxInline as CheckboxBase };

//** This one is for tables and not for formik fields */
export const InlineCheckBoxSmall: React.SFC<IProps> = ({ id, ...rest }) => (
	<CheckBoxWrapperInlined>
		<input className="checkbox--small--input" id={id} type="checkbox" {...rest} />
		<label className="checkbox--small--label" htmlFor={id} />
	</CheckBoxWrapperInlined>
);

export default Checkbox;
