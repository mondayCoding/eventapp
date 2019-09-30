import React, { useRef, FC, MutableRefObject } from 'react';
import { Route } from 'react-router';
import { Content, Main } from '../AppStyles';

import { TopPanel } from './TopPanel';

export const MainPage: FC = (props) => {
	const ref = useRef(undefined as any | HTMLElement);
	return (
		<Content ref={ref}>
			<TopPanel />
			<Main>
				<Route path={'/'} component={() => <ScrollToTop external={ref}></ScrollToTop>} />
				{props.children}
			</Main>
		</Content>
	);
};

const ScrollToTop: FC<{ external: MutableRefObject<any> }> = ({ external }) => {
	if (external.current) external.current._container.scrollTop = 0;
	return null;
};
