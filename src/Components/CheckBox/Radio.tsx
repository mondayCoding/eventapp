import * as React from 'react';
import { FieldProps, FastField } from 'formik';
import { RadioWrapDiv } from './RadioStyles';

export interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Radio: React.SFC<IRadioProps> = ({ id, label, children, ...rest }) => {
	return (
		<RadioWrapDiv>
			<input
				className="themeradio--input"
				id={id}
				data-role="none"
				type="radio"
				{...rest}
			/>
			<label className="themeradio--label" htmlFor={id}>
				{label}
				{children}
			</label>
		</RadioWrapDiv>
	);
};

type radioProps = { label: string; name: string; showMobileView?: boolean } & Partial<
	IRadioProps
>;

export const RadioField: React.FC<radioProps> = ({
	name,
	label,
	required,
	showMobileView,
	...props
}) => (
	<FastField
		name={name}
		render={({ field }: FieldProps) => (
			<Radio
				id={`${field.name}_radio_TID`}
				name={field.name}
				label={label}
				required={required}
				{...field}
				{...props}
			/>
		)}
	/>
);

export default RadioField;
