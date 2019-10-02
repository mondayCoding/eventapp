import React, { FC } from 'react';
import styled from '../Theme/theme';

interface IProgressBarProps {
	percent: number;
	textStart?: string;
	textEnd?: string;
	textCenter?: string;
}

export const ProgressBar: FC<IProgressBarProps> = (props) => {
	const getStage = (x: number) => {
		if (x > 99)
			return 'linear-gradient(90deg, rgba(33,65,42,1) 0%, rgba(90,161,37,1) 100%)';
		if (x > 75)
			return 'linear-gradient(90deg, rgba(166,86,33,1) 0%, rgba(212,192,5,1) 100%)';
		if (x > 50) return '#f2b01e';
		if (x > 25) return '#f27011';
		return '#f63a0f';
	};

	const getWidth = (x: number) => (x <= 0 ? 0 : x >= 100 ? 100 : x);

	return (
		<ProgressBarElement>
			{props.textEnd && (
				<span className="progress__text progress__text--start">{props.textStart}</span>
			)}
			{props.textStart && (
				<span className="progress__text progress__text--end">{props.textEnd}</span>
			)}
			{props.textCenter && (
				<span className="progress__text progress__text--center">{props.textCenter}</span>
			)}

			<div
				className="progress__bar"
				style={{
					width: `${getWidth(props.percent)}%`,
					background: getStage(props.percent)
				}}
			></div>
		</ProgressBarElement>
	);
};

const ProgressBarElement = styled.div`
	width: 100%;
	padding: 0.3rem;
	background: ${(p) =>
		p.theme.is_dark_theme ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.15)'};
	border-radius: 0.75rem;
	box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
	position: relative;

	.progress__text {
		position: absolute;
		top: 0;
		color: #fff;
		height: 100%;
		display: inline-flex;
		align-items: center;
		text-shadow: 1px 1px 2px black;

		&--start {
			left: 0.8rem;
		}
		&--end {
			right: 0.8rem;
		}
		&--center {
			right: 0rem;
			left: 0rem;
			width: 100%;
			justify-content: center;
		}
	}

	.progress__bar {
		height: 1.2rem;
		border-radius: 0.65rem;
		display: flex;
		width: 0;
		transition: 0.4s linear;
		transition-property: width, background-color;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
	}

	& + & {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
`;
