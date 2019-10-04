import React, { FC } from 'react';
import { Field } from 'formik';
import { ColorPicker } from './ColorPicker';

interface ColorPickerFieldProps {
	name: string;
	text: string;
}

export const ColorPickerField: FC<ColorPickerFieldProps> = (props) => (
	<Field name={props.name} text={props.text} component={ColorPicker} />
);
