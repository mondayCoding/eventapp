import styled from '../../../Theme/theme';

export interface StyleProps {
	maxWidth?: string;
	centered?: boolean;
}

export const LimiterMobile = styled.div`
	max-width: 36rem;
	margin: ${(props: StyleProps) => (props.centered ? '0 auto' : '0')};
	width: 100%;
`;

export const LimiterTablet = styled.div`
	max-width: 68rem;
	margin: ${(props: StyleProps) => (props.centered ? '0 auto' : '0')};
	width: 100%;
`;

export const LimiterLaptop = styled.div`
	max-width: 79rem;
	margin: ${(props: StyleProps) => (props.centered ? '0 auto' : '0')};
	width: 100%;
`;

export const LimiterDesktop = styled.div`
	max-width: 102rem;
	margin: ${(props: StyleProps) => (props.centered ? '0 auto' : '0')};
	width: 100%;
`;

export const Limiter = {
	Mobile: LimiterMobile,
	Table: LimiterTablet,
	Laptop: LimiterLaptop,
	Destop: LimiterDesktop
};
