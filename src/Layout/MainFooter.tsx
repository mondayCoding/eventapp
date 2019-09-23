import React, { FC } from 'react';
import Icons from '../Components/Icons/icons';
import styled from '../Theme/theme';

interface PageFooterProps {
	edited?: Date;
	created?: Date;
	showDates?: boolean;
}

export const PageFooter: FC<PageFooterProps> = ({
	edited,
	created,
	showDates = false
}) => (
	<Footer>
		<div className="footer">
			{showDates && (
				<div className="footer__dates">
					<span className="footer__dates__date">
						{Icons.calendar} Luotu: {new Date(2017, 3, 2, 10, 8).toLocaleString('fi-FI')}
					</span>
					<span className="footer__dates__date">
						{Icons.calendar} Muokattu:{' '}
						{new Date(2019, 8, 12, 12, 12).toLocaleString('fi-FI')}
					</span>
				</div>
			)}
			{/* <span>Made by MondayCoding with ♥ {Icons.home} </span> */}
			<span>Näytä viimeinen muokkaaja </span>
		</div>
	</Footer>
);

const Footer = styled.footer`
	display: flex;
	flex: 1 1 auto;
	align-items: flex-end;
	width: 100%;
	/* border: 2px solid red; */

	.footer {
		justify-content: space-between;
		align-items: center;
		display: flex;
		padding-top: 0.5rem;
		width: 100%;
		background-color: transparent;
		border-top: 1px solid lightgray;
		color: gray;

		.footer__dates {
			&__date {
				padding-right: 1rem;
				color: gray;
			}
		}
	}
`;
