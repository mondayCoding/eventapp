import * as React from 'react';
// import { TooltipCircle as Tooltip } from '../Utility/Tooltip/Tooltip';
import {
	CheckBoxInput,
	CheckBoxWrapper,
	CheckboxLabel,
	CheckBoxWrapperInlined,
	CheckBoxInputInlined,
	CheckboxLabelInlined,
	InlineCheckboxSmall,
	CheckBoxInputInlinedSmall
} from './CheckboxStyles';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';
import { Field, FieldProps, FastField } from 'formik';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	tooltip?: string;
}

const Checkbox: React.SFC<IProps> = ({
	id,
	label,
	tooltip,
	children,
	className,
	...rest
}) => (
	<CheckBoxWrapper>
		<CheckBoxInput data-role="none" id={id} type="checkbox" {...rest} />
		<CheckboxLabel htmlFor={id}>
			{label}
			{children}
			{tooltip && (
				<span style={{ fontSize: '1.1rem', paddingLeft: '.33rem' }}>
					{/* <Tooltip content={tooltip} /> */}
				</span>
			)}
		</CheckboxLabel>
	</CheckBoxWrapper>
);

const CheckBoxInline: React.SFC<IProps> = ({ id, children, ...rest }) => {
	return (
		<CheckBoxWrapperInlined>
			<CheckBoxInputInlined data-role="none" id={id} type="checkbox" {...rest} />
			<CheckboxLabelInlined htmlFor={id} />
			{children}
		</CheckBoxWrapperInlined>
	);
};

export const CheckBoxField: React.FC<IProps> = ({ name, label, tooltip, ...props }) => (
	<Field
		name={name}
		render={({ field }: FieldProps) => (
			<Checkbox
				id={`${field.name}_cb_TID`}
				label={label}
				tooltip={tooltip}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				checked={field.value}
				{...props}
			/>
		)}
	/>
);

export const CheckBoxContainerField: React.FC<IProps & IFieldContainerProps> = ({
	name,
	label,
	tooltip,
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
				tooltip={tooltip}
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
export const InlineCheckBoxSmall: React.SFC<IProps> = ({ id, ...rest }) => {
	return (
		<CheckBoxWrapperInlined>
			<CheckBoxInputInlinedSmall data-role="none" id={id} type="checkbox" {...rest} />
			<InlineCheckboxSmall htmlFor={id} />
		</CheckBoxWrapperInlined>
	);
};

export default Checkbox;
