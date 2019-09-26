import * as React from 'react';
import { ThemedButton, IButtonStyleProps } from './IconButtonStyle';

export interface IProps
	extends IButtonStyleProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	onClick?(x: React.MouseEvent<HTMLButtonElement>): void;
}

/**
 * @typedef {object} Props
 * small = 2rem
 */

export const IconButton = React.forwardRef(
	({ icon, children, ...rest }: IProps, ref: any) => {
		return (
			<ThemedButton type="button" {...rest} ref={ref}>
				{icon}
				{children}
			</ThemedButton>
		);
	}
);
