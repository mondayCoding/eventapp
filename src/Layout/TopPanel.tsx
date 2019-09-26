import React, { FC, useContext } from 'react';
import { useMenuState, Menu, MenuItem, MenuDisclosure, MenuSeparator } from 'reakit/Menu';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import Icons from '../Components/Icons/icons';
import { IconButton } from '../Components/Button/IconButton';
import { AppContext } from '../App';
import { Button } from '../Components/Button/Button';
import { TopPanelThemed } from './Styles/TopPanel';
import { RoutableAutoSuggest } from './AutoSuggestSeach';
import { useHistory } from 'react-router';
import * as routes from '../Constants/Routes_MODIF';

export const TopPanel = () => {
	const { toggleTheme, isDarkTheme, authorization } = useContext(AppContext);
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
				<AppDropDown
					username={
						authorization
							? authorization.displayName || authorization.email || 'Admin'
							: 'Admin'
					}
				></AppDropDown>
			</div>
		</TopPanelThemed>
	);
};

const AppDropDown: FC<{ username: string }> = (props) => {
	const menu = useMenuState();
	const history = useHistory();

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
					onClick={() => history.push(routes.settings.path)}
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
					onClick={() => history.push(routes.signOut.path)}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.power_off} Kirjaudu ulos</span>
				</MenuItem>
			</Menu>
		</>
	);
};
