import React, { useState } from 'react';
import ReactTable from 'react-table';
import checkboxHOC, {
	SelectInputComponentProps,
	SelectAllInputComponentProps
} from 'react-table/lib/hoc/selectTable';
import { InlineCheckBoxSmall } from '../Components/CheckBox/CheckBox';

interface IItem {
	id: string | number;
	[key: string]: any;
}

type ListItemType = IItem[] | undefined | null;

// TODO, id attribuutit generoidaan math.random() haksauksella, hankitaan guid-kirjasto?

export const useSelectableReactTable = (list: ListItemType) => {
	const [selected, setSelected] = useState([] as Array<string | number>);
	const [allSelected, setAllSelected] = useState(false);
	const dataWithGuid = addGuid(list);

	const isSelected = (key: string) => selected.includes(key);
	const toggleSelection = (key: string, shiftpressed: boolean, row: IItem) => {
		if (isSelected(key)) {
			setSelected([...selected].filter((item) => item !== key));
			setAllSelected(false);
		} else {
			setSelected([...selected, key]);
		}
	};

	const toggleAll = () => {
		const selection = [] as Array<string | number>;

		if (!allSelected) {
			dataWithGuid.forEach((item) => {
				selection.push(item._id);
			});
		}
		setAllSelected(!allSelected);
		setSelected(selection);
	};

	const getSelectTableProps = {
		selectAll: allSelected,
		isSelected,
		toggleSelection,
		toggleAll,
		selectType: 'checkbox' as 'checkbox',
		SelectInputComponent: (props: SelectInputComponentProps) => (
			<InlineCheckBoxSmall
				id={Math.random().toString()}
				checked={props.checked}
				onChange={() => {}}
				onClick={(e) => props.onClick(props.row._id, e.shiftKey, props.row)}
			/>
		),
		SelectAllInputComponent: (props: SelectAllInputComponentProps) => (
			<InlineCheckBoxSmall
				id={Math.random().toString()}
				defaultChecked={props.checked}
				onClick={() => props.onClick()}
			/>
		),
		getTrProps: (s: any, r: any) => ({
			className: isSelected(r && r.original._id) ? 'row--selected' : ''
		})
	};

	return {
		dataWithGuid,
		selected,
		getSelectTableProps
	};
};

export const SelectTable = checkboxHOC(ReactTable);

const addGuid = (list: ListItemType) =>
	list && list.length ? list.map((item, index) => ({ _id: item.id, ...item })) : [];
