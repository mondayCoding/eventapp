import * as React from 'react';
import { ThemedButton, IButtonStyleProps } from './ButtonStyle';

export interface IProps
	extends IButtonStyleProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: React.ReactNode;
	iconAlt?: React.ReactNode;
	onClick?(x: any): void;
}

export const Button = React.forwardRef(
	({ text, icon, iconAlt, type = 'button', children, ...rest }: IProps, ref: any) => {
		return (
			<ThemedButton type={type} ref={ref} {...rest}>
				{icon && <span>{icon}</span>}
				{text && <span>{text}</span>}
				{children}
				{iconAlt && <span>{iconAlt}</span>}
			</ThemedButton>
		);
	}
);
