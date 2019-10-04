import React, { useState, FC } from 'react';
import { ChromePicker } from 'react-color';
import { FieldProps } from 'formik';
import { PickerWrapper, ColorSampleWrapper } from './ColorPickerStyles';

interface TextProp {
	text: string;
}

export const ColorPicker: FC<FieldProps & TextProp> = (props) => {
	const [showPicker, setShowPicker] = useState(false);
	const { field, form, text } = props;
	const handlePickerClick = () => setShowPicker(!showPicker);

	return (
		<PickerWrapper>
			<ColorSampleWrapper color={field.value} onClick={handlePickerClick}>
				<div className="sample" style={{ backgroundColor: field.value }}>
					<b>{text}</b>
				</div>
			</ColorSampleWrapper>

			{showPicker && (
				<ChromePicker
					color={field.value}
					disableAlpha={true}
					onChangeComplete={(value) => {
						form.setFieldValue(field.name, value.hex);
						form.setFieldTouched(field.name);
					}}
				/>
			)}
		</PickerWrapper>
	);
};
