import * as React from 'react';
import { ThemedButton, IButtonStyleProps } from './IconButtonStyle';

export interface IProps
	extends IButtonStyleProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	onClick?(x: any): void;
}

/**
 * @typedef {object} Props
 * small = 2rem
 */
export const IconButton: React.SFC<IProps> = ({ icon, children, ...rest }) => {
	return (
		<ThemedButton type="button" {...rest}>
			{icon}
			{children}
		</ThemedButton>
	);
};
