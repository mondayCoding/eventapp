import * as React from 'react';

import { Container, Content, FieldLabel, ErrorContainer } from './FieldContainerStyle';

export interface IFieldContainerProps {
	required?: boolean;
	id?: string;
	label: string;
	disabled?: boolean;
	className?: string;
	error?: any;
	hideErrorMessage?: boolean;
	isSmall?: boolean;
	hideContainer?: boolean;
	showMobileView?: boolean;
	helper?: string;
}

export const FieldContainer: React.SFC<IFieldContainerProps> = ({
	id,
	label,
	error,
	disabled,
	children,
	hideErrorMessage,
	isSmall,
	hideContainer,
	showMobileView,
	required,
	...rest
}) =>
	hideContainer ? (
		<>children</>
	) : (
		<>
			<Container isDisabled={disabled} isMobile={showMobileView} {...rest}>
				<FieldLabel htmlFor={id} isMobile={showMobileView}>
					{label}
					{required && <span className="required-star">*</span>}
				</FieldLabel>

				<Content isSmall={isSmall}>
					<div className="field--content">{children}</div>
				</Content>
			</Container>

			{!hideErrorMessage && error && <ErrorContainer>{error}</ErrorContainer>}
		</>
	);
