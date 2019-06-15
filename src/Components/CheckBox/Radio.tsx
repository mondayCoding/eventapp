import * as React from 'react';
import { FieldProps, Field, FastField } from 'formik';
import { TooltipCircle as Tooltip } from '../Utility/Tooltip/Tooltip';
import { RadioWrapDiv } from './RadioStyles';

export interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	tooltip?: string;
}

const Radio: React.SFC<IRadioProps> = ({ id, label, tooltip, children, ...rest }) => {
	return (
		<RadioWrapDiv>
			<input className="themeradio--input" id={id} data-role="none" type="radio" {...rest} />
			<label className="themeradio--label" htmlFor={id}>
				{label}
				{children}
				{tooltip && <Tooltip content={tooltip} />}
			</label>
		</RadioWrapDiv>
	);
};

type radioProps = { label: string; name: string; showMobileView?: boolean } & Partial<IRadioProps>;

export const RadioField: React.FC<radioProps> = ({
	name,
	label,
	tooltip,
	required,
	showMobileView,
	...props
}) => (
	<FastField
		name={name}
		render={({ field, form: { errors, touched, setFieldValue, setFieldTouched } }: FieldProps) => (
			<Radio
				id={`${field.name}_radio_TID`}
				name={field.name}
				label={label}
				required={required}
				tooltip={tooltip}
				{...field}
				{...props}
			/>
		)}
	/>
);

export default RadioField;
