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
	const tooltip = useTooltipState({ placement: 'left' });

	return (
		<TopPanelThemed>
			<RoutableAutoSuggest />

			<div className="panel__themebutton">
				<TooltipReference
					{...tooltip}
					as={IconButton}
					onClick={toggleTheme}
					icon={isDarkTheme ? Icons.moon : Icons.sun}
					style={{ width: '1.8rem', height: '1.8rem', fontSize: '1rem' }}
				/>
				<Tooltip {...tooltip} className="panel__themebutton__tooltip">
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
				<span className="panel__icon-and-text">
					{Icons.user} {props.username}
				</span>
			</MenuDisclosure>

			<Menu {...menu} aria-label="Settings" className="panel__menubutton__menu">
				<MenuItem
					{...menu}
					onClick={() => alert('HELLO')}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.cog} Asetukset</span>
				</MenuItem>

				<MenuItem
					{...menu}
					onClick={() => alert('MOVING TO USER PAGE')}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.user} Käyttäjäprofiili</span>
				</MenuItem>

				{/* <MenuSeparator {...menu} /> */}

				<MenuItem
					{...menu}
					onClick={() => alert('SIGNING OUT')}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.power_off} Kirjaudu ulos</span>
				</MenuItem>
			</Menu>
		</>
	);
};
