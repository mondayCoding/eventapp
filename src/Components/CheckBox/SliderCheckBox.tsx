import React, { FC } from 'react';
import { SliderCheckboxWrapper } from './SliderCheckboxStyles';
import { FieldProps, Field, FastField } from 'formik';

type IProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

//****************************************************** */
// base slider, no formik
//****************************************************** */

export const SliderCheckboxInline: FC<IProps> = ({
	id,
	label,
	name,
	children,
	...rest
}) => (
	<Field
		name={name}
		render={({ field }: FieldProps) => (
			<SliderCheckbox
				id={`${field.name}_slider_TID`}
				name={field.name}
				className="cb__input inlined"
				onChange={field.onChange}
				onBlur={field.onBlur}
				checked={field.value}
				label={label}
				{...rest}
			/>
		)}
	/>
);

//****************************************************** */
// base slider, no formik
//****************************************************** */

const SliderCheckbox: FC<IProps> = ({ id, label, children, ...rest }) => (
	<SliderCheckboxWrapper>
		<input className="cb__input" id={id} type="checkbox" {...rest} />
		<label htmlFor={id} className="cb__label">
			{label}
			{children}
		</label>
	</SliderCheckboxWrapper>
);

//****************************************************** */
// slider cb, formik, normal
//****************************************************** */

export const SliderField: FC<IProps> = ({ label, name, ...props }) => (
	<Field
		name={name}
		render={({ field }: FieldProps) => (
			<SliderCheckbox
				id={`${field.name}_slider_TID`}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				checked={field.value}
				label={label}
				{...props}
			/>
		)}
	/>
);

//****************************************************** */
// slider cb, formik, fast (optimised)
//****************************************************** */

export const SliderFastField: FC<IProps> = ({ label, name, ...props }) => (
	<FastField
		name={name}
		render={({ field }: FieldProps) => (
			<SliderCheckbox
				id={`${field.name}_slider_TID`}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				checked={field.value}
				label={label}
				{...props}
			/>
		)}
	/>
);

export default SliderCheckbox;
