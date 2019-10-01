import React, { FC } from 'react';
import { useMenuState, Menu, MenuItem, MenuDisclosure } from 'reakit/Menu';
import Icons from '../../../Components/Icons/icons';
import { Button } from '../../../Components/Button/Button';
import { useHistory } from 'react-router';
import * as routes from '../../../Constants/Routes_MODIF';

export const CustomerActionsMenu: FC<{ id: string }> = ({ id }) => {
	const menu = useMenuState();
	const history = useHistory();
	return (
		<>
			<MenuDisclosure {...menu} as={Button}>
				<span className="panel__icon-and-text">{Icons.user} Asiakastoiminnon</span>
			</MenuDisclosure>

			<Menu {...menu} aria-label="Settings" className="panel__menubutton__menu">
				<MenuItem
					{...menu}
					onClick={() => history.push(routes.sendEmail.path + '/' + id)}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.envelope} Lähetä viesti</span>
				</MenuItem>

				<MenuItem
					{...menu}
					onClick={() => alert('REMOVE_MUG_ACTION')}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.trashcan} Poista</span>
				</MenuItem>

				{/* <MenuItem
					{...menu}
					onClick={() => history.push(routes.signOut.path)}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.power_off} Kirjaudu ulos</span>
				</MenuItem> */}
			</Menu>
		</>
	);
};
