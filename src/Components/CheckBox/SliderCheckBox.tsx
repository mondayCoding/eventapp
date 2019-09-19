import * as React from 'react';
// import { TooltipCircle as Tooltip } from '../Utility/Tooltip/Tooltip';
import { CheckBoxWrapper } from './CheckboxStyles';
import {
	SlideCheckboxInput,
	SliderCheckboxLabel,
	SliderCheckboxLabelInlined,
	SlideCheckboxInputInlined
} from './SliderCheckboxStyles';
import { FieldProps, Field, FastField } from 'formik';
import { FieldContainer, IFieldContainerProps } from '../FieldContainer/FieldContainer';

type IProps = React.InputHTMLAttributes<HTMLInputElement> & {
	tooltip?: string;
	label?: string;
};
type SliderProps = IFieldContainerProps & IProps;

const SliderCheckbox: React.SFC<IProps> = ({ id, label, tooltip, children, ...rest }) => (
	<CheckBoxWrapper>
		<SlideCheckboxInput data-role="none" id={id} type="checkbox" {...rest} />
		<SliderCheckboxLabel htmlFor={id}>
			{label}
			{children}
			{tooltip && (
				<span style={{ fontSize: '1.1rem', paddingLeft: '.33rem' }}>
					{/* <Tooltip content={tooltip} /> */}
				</span>
			)}
		</SliderCheckboxLabel>
	</CheckBoxWrapper>
);

const SliderCheckboxInline: React.SFC<IProps> = ({ id, children, ...rest }) => (
	<CheckBoxWrapper>
		<SlideCheckboxInputInlined data-role="none" id={id} type="checkbox" {...rest} />
		<SliderCheckboxLabelInlined htmlFor={id} />
		{children}
	</CheckBoxWrapper>
);

export const SliderField: React.FC<IProps> = ({ label, name, ...props }) => (
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

export const SliderContainerField: React.FC<SliderProps> = ({
	name,
	label,
	tooltip,
	required,
	hideContainer,
	disabled,
	showMobileView,
	...props
}) => (
	<Field
		name={name}
		render={({ field, form: { errors, touched } }: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_slider_TID`}
				tooltip={tooltip}
				disabled={disabled}
				hideContainer={hideContainer}
				required={required}
				showMobileView={showMobileView}
			>
				<SliderCheckboxInline
					id={`${field.name}_slider_TID`}
					name={field.name}
					disabled={disabled}
					onChange={field.onChange}
					onBlur={field.onBlur}
					checked={field.value}
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);

export default SliderCheckbox;
