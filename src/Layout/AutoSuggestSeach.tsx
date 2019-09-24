import React, { FC, useState } from 'react';
import Icons from '../Components/Icons/icons';
import Autosuggest from 'react-autosuggest';
import { withRouter, RouteComponentProps } from 'react-router';
import { MockCustomers } from '../MockData/MockCustomers';
import { MockEvents } from '../MockData/MockEvents';
import * as routes from '../Constants/Routes';

const AutoSuggestSeach: FC<RouteComponentProps> = ({ history }) => {
	const [inputValue, setInputValue] = useState('');
	const [suggestions, setSuggestions] = useState([] as any[]);

	const onChange = (
		event: any,
		{
			newValue,
			method
		}: {
			newValue: string;
			method: any;
		}
	) => {
		setInputValue(newValue);
	};

	const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
		setSuggestions(getSuggestions(value));
	};

	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};

	const onSelection = (e: any, { suggestion }: { suggestion: ISuggestionOption }) => {
		if (suggestion.type === suggestionTypeEnum.customer) {
			setInputValue('');
			return history.push(`${routes.customer.path}/${suggestion.id}`);
		} else {
			setInputValue('');
			return history.push(`${routes.event.path}/${suggestion.id}`);
		}
	};

	const inputProps = {
		value: inputValue,
		onChange: onChange,
		placeholder: '🔍 Hae asiakkaita tai tapahtumia'
		// title: 'Hae asiakkaita tai tapahtumia'
	};

	return (
		<Autosuggest
			suggestions={suggestions}
			onSuggestionsFetchRequested={onSuggestionsFetchRequested}
			onSuggestionsClearRequested={onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={renderSuggestion}
			inputProps={inputProps}
			onSuggestionSelected={onSelection}
		></Autosuggest>
	);
};

export const RoutableAutoSuggest = withRouter(AutoSuggestSeach);

function renderSuggestion(option: ISuggestionOption) {
	return (
		<span>
			<span>{suggestionTypeIcon[option.type]}</span>
			<span>{option.value}</span>
		</span>
	);
}

function getSuggestionValue(suggestion: ISuggestionOption) {
	return suggestion.value;
}

function escapeRegexCharacters(str: string) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value: string) {
	const escapedValue = escapeRegexCharacters(value.trim());
	if (escapedValue === '') return [];
	const regex = new RegExp('^' + escapedValue, 'i');
	return mockSuggestions.filter((option) => regex.test(option.value));
}

enum suggestionTypeEnum {
	customer,
	event
}

const suggestionTypeIcon = {
	[suggestionTypeEnum.customer]: (
		<span style={{ color: 'lightblue', paddingRight: '.5rem' }}>{Icons.user}</span>
	),
	[suggestionTypeEnum.event]: (
		<span style={{ color: 'orange', paddingRight: '.5rem' }}>{Icons.calendar}</span>
	)
};

interface ISuggestionOption {
	value: string;
	type: suggestionTypeEnum;
	id: string;
}

const mockSuggestions = [
	...MockCustomers.map((cust) => ({
		value: `${cust.firstname} ${cust.lastname}`,
		id: cust.id,
		type: suggestionTypeEnum.customer
	})),
	...MockEvents.map((event) => ({
		value: `${event.name}`,
		id: event.id,
		type: suggestionTypeEnum.event
	}))
];
