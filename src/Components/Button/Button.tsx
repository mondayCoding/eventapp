import * as React from 'react';
import { ThemedButton, IButtonStyleProps } from './ButtonStyle';

export interface IProps extends IButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText?: string;
	buttonIcon?: React.ReactNode;
	buttonIconSecond?: React.ReactNode;
	onClick?(x: any): void;
}

const Button: React.SFC<IProps> = ({
	buttonText,
	buttonIcon,
	buttonIconSecond,
	type = 'button',
	...rest
}) => {
	return (
		<ThemedButton type={type} data-role="none" {...rest}>
			{buttonIcon && <span>{buttonIcon}</span>}
			{buttonText && <span>{buttonText}</span>}
			{buttonIconSecond && <span>{buttonIconSecond}</span>}
		</ThemedButton>
	);
};

export { Button };
