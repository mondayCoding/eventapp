import * as React from 'react';
// import { TooltipCircle as Tooltip } from '../Utility/Tooltip/Tooltip';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	IStyleProps,
	IngressSpan,
	HeadingWrapper
} from './HeadingStyle';

export interface IProps
	extends IStyleProps,
		React.HtmlHTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title?: string;
	icon?: React.ReactNode;
	text: React.ReactNode;
	tooltip?: string;
	ingress?: string;
	style?: any;
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	onClick?(params: any): void;
}

const Heading: React.FC<IProps> = ({
	text,
	icon,
	tooltip,
	type,
	ingress,
	children,
	...rest
}) => {
	const HeadingContent = () => {
		return (
			<React.Fragment>
				{icon && <span className="icon">{icon}</span>}
				{text && <span>{text}</span>}
				{/* {tooltip && <Tooltip content={tooltip} />} */}
			</React.Fragment>
		);
	};

	const IngressText = () => (ingress ? <IngressSpan>{ingress}</IngressSpan> : null);

	switch (type) {
		case 'h1':
			return (
				<HeadingWrapper>
					<H1 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H1>
					<IngressText />
				</HeadingWrapper>
			);
		case 'h2':
			return (
				<HeadingWrapper>
					<H2 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H2>
					<IngressText />
				</HeadingWrapper>
			);
		case 'h3':
			return (
				<HeadingWrapper>
					<H3 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H3>
					<IngressText />
				</HeadingWrapper>
			);
		case 'h4':
			return (
				<HeadingWrapper>
					<H4 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H4>
					<IngressText />
				</HeadingWrapper>
			);
		case 'h5':
			return (
				<HeadingWrapper>
					<H5 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H5>
					<IngressText />
				</HeadingWrapper>
			);
		case 'h6':
			return (
				<HeadingWrapper>
					<H6 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H6>
					<IngressText />
				</HeadingWrapper>
			);
		default:
			return (
				<HeadingWrapper>
					<H3 hasIngress={!!ingress} {...rest}>
						<HeadingContent />
						{children}
					</H3>
					<IngressText />
				</HeadingWrapper>
			);
	}
};

export { Heading };
