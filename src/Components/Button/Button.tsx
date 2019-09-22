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

const Button: React.SFC<IProps> = ({
	text,
	icon,
	iconAlt,
	type = 'button',
	children,
	...rest
}) => {
	return (
		<ThemedButton type={type} data-role="none" {...rest}>
			{icon && <span>{icon}</span>}
			{text && <span>{text}</span>}
			{children}
			{iconAlt && <span>{iconAlt}</span>}
		</ThemedButton>
	);
};

export { Button };
