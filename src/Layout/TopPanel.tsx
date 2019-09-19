import React, { FC, useContext } from 'react';
import { Button } from 'reakit/Button';
import { useMenuState, Menu, MenuItem, MenuDisclosure, MenuSeparator } from 'reakit/Menu';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import Icons from '../Components/Icons/icons';
import { IconButton } from '../Components/Button/IconButton';
import { AppContext } from '../App';

export const TopPanel = () => {
	const { toggleTheme, isDarkTheme } = useContext(AppContext);
	const tooltip = useTooltipState();

	return (
		<div className="main__top-panel">
			<TooltipReference {...tooltip} as={Button}>
				<IconButton
					onClick={() => toggleTheme()}
					icon={isDarkTheme ? Icons.moon : Icons.sun}
				></IconButton>
			</TooltipReference>

			<Tooltip {...tooltip}>
				{isDarkTheme ? 'Using Night theme' : 'Using Day theme'}
			</Tooltip>

			<AppDropDown username="Admin"></AppDropDown>
		</div>
	);
};

const AppDropDown: FC<{ username: string }> = (props) => {
	const menu = useMenuState();

	return (
		<>
			<MenuDisclosure {...menu}>
				{Icons.user} {props.username}
			</MenuDisclosure>

			<Menu {...menu} aria-label="Settings">
				<MenuItem {...menu} onClick={() => alert('HELLO')}>
					{Icons.cog} Settings
				</MenuItem>

				<MenuItem {...menu} onClick={() => alert('MOVING TO USER PAGE')}>
					{Icons.user} Profile
				</MenuItem>

				<MenuSeparator {...menu} />

				<MenuItem {...menu} onClick={() => alert('SIGNING OUT')}>
					{Icons.power_off} Sign out
				</MenuItem>
			</Menu>
		</>
	);
};
