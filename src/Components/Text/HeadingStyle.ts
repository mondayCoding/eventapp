import styled, { css } from '../../Theme/theme';

export interface IStyleProps {
	isUnderlined?: boolean;
	isUppercase?: boolean;
	isEllipsed?: boolean;
	hasIngress?: boolean;
	isInlined?: boolean;
	isColored?: boolean;
	hasSpaceAbove?: boolean;
	hasSpaceBelow?: boolean;
}

const ellipsedHeadingCSS = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const underlinedHeadingCSS = css`
	border-bottom: 0.1rem solid ${(props) => props.theme.primary_color};
	padding-bottom: 0.25rem;
`;

const marginlessHeadingCSS = css`
	margin: 0;
`;

const inlinedHeadingCSS = css`
	display: inline;
	margin: 0;
`;

const uppercaseHeadingCSS = css`
	text-transform: uppercase;
`;

const coloredHeadingCSS = css`
	color: ${(props) => props.theme.primary_color};
`;

const spacingAfterHeadingCSS = css`
	margin-bottom: 2em;
`;

const spacingBeforeHeadingCSS = css`
	margin-top: 2em;
`;

const sharedProperties = css`
	font-family: ${(props) => props.theme.heading_font};
  color: ${(p) => p.theme.text_color};
	float: none;
	clear: both;
	display: flex;
	flex-direction: row;
	width: 100%;

	& > .icon {
      margin-right: .5rem;
	}

	${(props: IStyleProps) => props.isColored && coloredHeadingCSS}
	${(props: IStyleProps) => props.isEllipsed && ellipsedHeadingCSS}
	${(props: IStyleProps) => props.isInlined && inlinedHeadingCSS}
	${(props: IStyleProps) => props.hasIngress && marginlessHeadingCSS}
	${(props: IStyleProps) => props.isUnderlined && underlinedHeadingCSS}
	${(props: IStyleProps) => props.isUppercase && uppercaseHeadingCSS}
	${(props: IStyleProps) => props.hasSpaceAbove && spacingBeforeHeadingCSS}
	${(props: IStyleProps) => props.hasSpaceBelow && spacingAfterHeadingCSS}
`;

export const HeadingWrapper = styled.header`
	display: block;
	margin: 0 0 1em 0;
`;

export const H1 = styled.h1`
	font-size: 2rem;
	${sharedProperties}
`;

export const H2 = styled.h2`
	font-size: 1.5rem;
	${sharedProperties}
`;

export const H3 = styled.h3`
	font-size: 1.15rem;
	${sharedProperties}
`;

export const H4 = styled.h4`
	font-size: 1rem;
	${sharedProperties}
`;

export const H5 = styled.h5`
	font-size: 0.9rem;
	${sharedProperties}
`;

export const H6 = styled.h6`
	font-size: 0.85rem;
	${sharedProperties}
`;

export const IngressSpan = styled.span`
	display: block;
	margin-bottom: 1.35rem;
	margin-top: 0.3rem;
	font-style: italic;
	font-size: ${({ theme }) => theme.global_font_size};
	color: gray;
`;
