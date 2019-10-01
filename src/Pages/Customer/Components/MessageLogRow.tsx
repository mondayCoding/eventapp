import React, { FC } from 'react';
import styled from '../../../Theme/theme';
import Icons from '../../../Components/Icons/icons';
import ReactTimeago from 'react-timeago';

export interface IMessageProps {
	date: Date;
	title: string;
	onClick?: () => void;
}

export const MessageLogList: FC<IMessageProps> = (props) => (
	<MessageLogRow onClick={props.onClick}>
		<div className="icon">{Icons.envelope}</div>
		<div className="name">{props.title}</div>
		<div className="date__ago">
			<ReactTimeago date={props.date}></ReactTimeago>
		</div>

		<div className="date__icon">{Icons.calendar}</div>
		{props.children}
	</MessageLogRow>
);

export const MessageLogRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem 0.5rem;
	border-radius: 0.8rem;
	border-bottom: 1px solid ${(p) => p.theme.border_color};
	color: ${(p) => p.theme.text_color};
	cursor: pointer;

	&:hover {
		color: ${(p) => p.theme.info_color};
	}

	.icon {
		flex: 0 0 2rem;
		font-size: 1.2rem;
	}
	.name {
		flex: 1 1 auto;
	}
	.date__ago {
		display: flex;
		justify-content: flex-end;
		flex: 0 0 20%;
		padding-right: 0.5rem;
	}
	.date__icon {
		flex: 0 0 1.25rem;
		display: flex;
		justify-content: center;
	}
`;
