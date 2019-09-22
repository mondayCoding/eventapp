import React, { FC, useContext } from 'react';
// import { Button } from 'reakit/Button';
import { useMenuState, Menu, MenuItem, MenuDisclosure, MenuSeparator } from 'reakit/Menu';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import Icons from '../Components/Icons/icons';
import { IconButton } from '../Components/Button/IconButton';
import { AppContext } from '../App';
import { Button } from '../Components/Button/Button';
import { TopPanelThemed } from './Styles/TopPanel';

import { RoutableAutoSuggest } from './AutoSuggestSeach';

export const TopPanel = () => {
	const { toggleTheme, isDarkTheme } = useContext(AppContext);
	const tooltip = useTooltipState();

	return (
		<TopPanelThemed>
			<RoutableAutoSuggest />

			<div className="panel__themebutton">
				<TooltipReference
					{...tooltip}
					as={(p) => <IconButton IsLg {...p} />}
					onClick={() => toggleTheme()}
					style={{ width: '1.8rem', height: '1.8rem', fontSize: '1rem' }}
				>
					{isDarkTheme ? Icons.moon : Icons.sun}
				</TooltipReference>

				<Tooltip {...tooltip} className="HELLO">
					{isDarkTheme ? 'Using Night theme' : 'Using Day theme'}
				</Tooltip>
			</div>
			<div className="panel__menubutton">
				<AppDropDown username="Admin"></AppDropDown>
			</div>
		</TopPanelThemed>
	);
};

const AppDropDown: FC<{ username: string }> = (props) => {
	const menu = useMenuState();

	return (
		<>
			<MenuDisclosure {...menu} as={Button}>
				{Icons.user} {props.username}
			</MenuDisclosure>

			<Menu {...menu} aria-label="Settings" className="panel__menubutton__menu">
				<MenuItem
					{...menu}
					onClick={() => alert('HELLO')}
					className="panel__menubutton__menuitem"
				>
					{Icons.cog} Settings
				</MenuItem>

				<MenuItem
					{...menu}
					onClick={() => alert('MOVING TO USER PAGE')}
					className="panel__menubutton__menuitem"
				>
					{Icons.user} Profile
				</MenuItem>

				<MenuSeparator {...menu} />

				<MenuItem
					{...menu}
					onClick={() => alert('SIGNING OUT')}
					className="panel__menubutton__menuitem"
				>
					{Icons.power_off} Sign out dfs dfsd fsdfs dfsd
				</MenuItem>
			</Menu>
		</>
	);
};
