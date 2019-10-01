import React, { FC } from 'react';
import { useMenuState, Menu, MenuItem, MenuDisclosure, MenuSeparator } from 'reakit/Menu';
import Icons from '../../Components/Icons/icons';
import { MenuWrapper } from '../Events/EventActions';
import { ButtonLink } from '../../Components/Button/ButtonLink';

interface IPostOfficeActionsMenuProps {
	sendEmails: () => void;
	removeSelectedFromList: () => void;
}

export const PostOfficeActionsMenu: FC<IPostOfficeActionsMenuProps> = (props) => {
	const menu = useMenuState();

	return (
		<MenuWrapper>
			<MenuDisclosure {...menu} as={ButtonLink}>
				<span className="menu__icon">{Icons.cog} Postituslistan toiminnot</span>
			</MenuDisclosure>

			<Menu {...menu} aria-label="PostOffice Actions" className="menu__box">
				<MenuItem {...menu} className="menu__box__item" as={SubMenuCSV as any} />

				<MenuItem {...menu} className="menu__box__item" as={SubMenuEXCEL as any} />

				<MenuItem {...menu} className="menu__box__item" as={SubMenuPDF as any} />

				<MenuSeparator {...menu} className="menu__box__separator" />

				<MenuItem {...menu} onClick={props.sendEmails} className="menu__box__item">
					<span className="menu__icon">{Icons.envelope} Lähetä viesti valituille</span>
				</MenuItem>

				<MenuItem
					{...menu}
					onClick={() => props.removeSelectedFromList}
					className="menu__box__item"
				>
					<span className="menu__icon">{Icons.trashcan} Poista valitut listalta</span>
				</MenuItem>

				{/* <MenuItem
					{...menu}
					onClick={() => history.push(routes.signOut.path)}
					className="panel__menubutton__menuitem"
				>
					<span className="panel__icon-and-text">{Icons.power_off} Kirjaudu ulos</span>
				</MenuItem> */}
			</Menu>
		</MenuWrapper>
	);
};

const SubMenuCSV = React.forwardRef((props, ref: any) => {
	const menu = useMenuState();
	return (
		<>
			<MenuDisclosure ref={ref} {...menu} {...props}>
				Kerää tiedot (CSV)
			</MenuDisclosure>
			<Menu {...menu} aria-label="Print Data" className="menu__box">
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää osallistumistiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää tuotetiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää suoritukset
				</MenuItem>
			</Menu>
		</>
	);
});

const SubMenuPDF = React.forwardRef((props, ref: any) => {
	const menu = useMenuState();
	return (
		<>
			<MenuDisclosure ref={ref} {...menu} {...props}>
				Kerää tiedot (PDF)
			</MenuDisclosure>
			<Menu {...menu} aria-label="Print Data" className="menu__box">
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää osallistumistiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää tuotetiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää suoritukset
				</MenuItem>
			</Menu>
		</>
	);
});

const SubMenuEXCEL = React.forwardRef((props, ref: any) => {
	const menu = useMenuState();
	return (
		<>
			<MenuDisclosure ref={ref} {...menu} {...props}>
				Kerää tiedot (EXCEL)
			</MenuDisclosure>
			<Menu {...menu} aria-label="Print Data" className="menu__box">
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää osallistumistiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää tuotetiedot
				</MenuItem>
				<MenuItem {...menu} className="menu__box__item" onClick={() => alert('Print')}>
					Kerää suoritukset
				</MenuItem>
			</Menu>
		</>
	);
});
