import * as React from 'react';
import Tip from 'rc-tooltip';
import Icons from '../../Icons/icons';

interface IProps {
	content: string;
}

interface IProps {
	content: string;
}

export const TooltipCircle: React.SFC<IProps> = (props) => {
	const content = <span>{props.content}</span>;

	return (
		<Tip
			overlay={content}
			mouseEnterDelay={0.1}
			placement="top"
			transitionName="rc-tooltip-animate"
		>
			<span>{Icons.questionmark}</span>
		</Tip>
	);
};

export const Tooltip: React.SFC<IProps> = (props) => {
	const content = <span>{props.content}</span>;

	return (
		<Tip
			overlay={content}
			mouseEnterDelay={0.1}
			placement="right"
			transitionName="rc-tooltip-animate"
		>
			{props.children}
		</Tip>
	);
};
