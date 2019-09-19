import * as React from 'react';
import { useMemo } from 'react';
// import { TooltipCircle as Tooltip } from '../Utility/Tooltip/Tooltip';
import {
	Container,
	Content,
	FieldLabel,
	Star,
	ErrorContainer,
	IStyleProps
} from './FieldContainerStyle';

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
	tooltip?: string;
	showMobileView?: boolean;
}

export const FieldContainer: React.SFC<IFieldContainerProps> = ({
	id,
	label,
	tooltip,
	error,
	disabled,
	children,
	hideErrorMessage,
	isSmall,
	hideContainer,
	showMobileView,
	required,
	...rest
}) => {
	// const MemoTooltip = useMemo(() => (tooltip ? FieldTooltip(tooltip) : null), [tooltip]);

	if (hideContainer) return <>{children}</>;

	return (
		<>
			<Container isDisabled={disabled} isMobile={showMobileView} {...rest}>
				<FieldLabel htmlFor={id} isMobile={showMobileView}>
					{label}
					{required && <Star>*</Star>}
				</FieldLabel>

				<Content isSmall={isSmall}>
					<div className="field--content">{children}</div>

					{/* {MemoTooltip} */}
				</Content>
			</Container>

			{!hideErrorMessage && error && <ErrorContainer>{error}</ErrorContainer>}
		</>
	);
};

const FieldTooltip = (content: string) => (
	<div className="field--tooltip">{/* <Tooltip content={content} /> */}</div>
);
