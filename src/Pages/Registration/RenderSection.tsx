import React from 'react';
import { IntroductionSection } from './Sections/IntroductionSection';
import { AccommdationSection } from './Sections/AccommodationSection';
import { OrdersSection } from './Sections/OrdersSections';
import { CheckboxQuestionSection } from './Sections/QuestionSectionCheckbox';
import { RadioQuestionSection } from './Sections/QuestionSectionRadio';
import { TextQuestionSection } from './Sections/QuestionSectionText';
import { SelectQuestionSection } from './Sections/QuestionSectionSelect';
import { BasicInformationSection } from './Sections/BasicInformationSection';
import { AfterwordSection } from './Sections/AfterwordSection';
import { AbstractSection } from './Sections/AbstractSection';

export enum SectionType {
	basicInformation,
	introduction,
	afterword,
	question_Checkbox,
	question_Radio,
	question_Text,
	question_Select,
	accommodation,
	orders,
	lectures,
	abstract
}

export interface IQuestionSectionRadio {
	type: SectionType.question_Radio;
	content: {
		title: string;
		condition: boolean;
		options: {
			value: string;
			label: string;
		}[];
	};
}

export interface IQuestionSectionSelect {
	type: SectionType.question_Select;
	content: {
		title: string;
		condition: boolean;
		options: {
			value: string;
			label: string;
		}[];
	};
}

export interface IQuestionSectionCheckbox {
	type: SectionType.question_Checkbox;
	content: {
		title: string;
		condition: boolean;
		options: {
			checked: boolean;
			label: string;
		}[];
	};
}

export interface IQuestionSectionText {
	type: SectionType.question_Text;
	content: {
		title: string;
		condition: boolean;
		label: string;
		value: string;
	};
}

export interface IAccommodationSection {
	type: SectionType.accommodation;
	content: {
		title: string;
	};
}

export interface IIntroductionSection {
	type: SectionType.introduction;
	content: {
		headingtext: string;
		ingress?: string;
		showDates?: boolean;
		start: Date;
		end: Date;
	};
}

export interface IBasicInformationSection {
	type: SectionType.basicInformation;
	content: {
		title?: string;
		firstname?: string;
		firstnameLabel?: string;
		firstnameInUse: boolean;
		firstnameRequired: boolean;

		lastname?: string;
		lastnameLabel?: string;
		lastnameInUse: boolean;
		lastnameRequired: boolean;

		department?: string;
		departmentLabel?: string;
		departmentInUse: boolean;
		departmentRequired: boolean;

		adress?: string;
		adressLabel?: string;
		adressInUse: boolean;
		adressRequired: boolean;

		phone?: string;
		phoneLabel?: string;
		phoneInUse: boolean;
		phoneRequired: boolean;

		email?: string;
		emailLabel?: string;
		emailInUse: boolean;
		emailRequired: boolean;
	};
}

export interface IAfterwordSection {
	type: SectionType.afterword;
	content: {
		buttonText: string;
	};
}

interface ILecturesSection {
	type: SectionType.lectures;
	content: any;
}

export interface IAbstractSection {
	type: SectionType.abstract;
	content: {
		title: string;
		titleDescription: string;
		type: string;
		typeOptions: { label: string; value: string }[];
		typeLabel: string;
		topicLabel: string;
		topicOptions: { text: string; checked: boolean }[];
		topics: string[];
		abstractTitle: string;
		abstractTitleLabel: string;
		tags: string[];
		tagsLabel: string;
		tagsOptions: { label: string; value: string }[];
		authors: {
			firstname: string;
			lastname: string;
			title: string;
			city: string;
			email: string;
			isPresenter: boolean;
		}[];
		authorLabels: {
			firstname: string;
			lastname: string;
			title: string;
			city: string;
			email: string;
			isPresenter: string;
		};
		content: string;
		contentDesctiption: string;
		contentLabel: string;
		authorsHeading: string;
		authorsDescription: string;
		addAuthorBtnText: string;
	};
}

// TODO: separate form and form config (this is config)
interface IAbstractSectionConfig {
	type: SectionType.abstract;
	content: {
		typeOptions: { label: string; value: string }[];
		topicOptions: { text: string; checked: boolean }[];
		titleDescription: string;
		titleLabel: string;
		authorsDescripton: string;
		authorsLabel: string;
		contentDesctiption: string;
		contentLabel: string;
	};
}

export interface IOrdersSection {
	type: SectionType.orders;
	content: {
		title: string;
		products: {
			name: string;
			value: number;
			avaibility: string;
		}[];
	};
}

export type Section =
	| IBasicInformationSection
	| IAccommodationSection
	| IIntroductionSection
	| IAfterwordSection
	| ILecturesSection
	| IOrdersSection
	| IQuestionSectionRadio
	| IQuestionSectionCheckbox
	| IQuestionSectionText
	| IQuestionSectionSelect
	| IAfterwordSection
	| IAbstractSection;

export interface ISectionHelpers {
	isInEditMode: boolean;
	disableDown: boolean;
	disableUp: boolean;
	sectionIndex: number;
	moveUp: () => void;
	moveDown: () => void;
	remove: () => void;
}

export const RenderSection = (section: Section, helpers: ISectionHelpers) => {
	switch (section.type) {
		case SectionType.introduction:
			return <IntroductionSection section={section} helpers={helpers} />;

		case SectionType.basicInformation:
			return <BasicInformationSection section={section} helpers={helpers} />;

		case SectionType.orders:
			return <OrdersSection section={section} helpers={helpers} />;

		case SectionType.accommodation:
			return <AccommdationSection section={section} helpers={helpers} />;

		case SectionType.question_Radio:
			return <RadioQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Checkbox:
			return <CheckboxQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Text:
			return <TextQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.question_Select:
			return <SelectQuestionSection content={section.content} helpers={helpers} />;

		case SectionType.afterword:
			return <AfterwordSection content={section.content} helpers={helpers} />;

		case SectionType.abstract:
			return <AbstractSection content={section.content} helpers={helpers} />;

		default:
			return <h2>Lohkotyypille ei löytynyt render-metodia: {section.type}</h2>;
	}
};
