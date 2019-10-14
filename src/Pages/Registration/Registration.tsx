import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';
import { RegistrationPage } from './Assets/Styles';
import { Formik, FieldArray, Form } from 'formik';
import { Button } from '../../Components/Button/Button';
import Icons from '../../Components/Icons/icons';
import { AutoFormDebug } from '../../Utils/FormDebug';
import { Section, RenderSection } from './RenderSection';
import { ColorPickerField } from '../../Components/ColorPicker/ColorPickerField';
import { ThemeManager } from '../../Theme/ThemeManager';
import { themes } from '../../Theme/theme';
import { useTheme } from '../../Theme/useTheme';
import {
	useRegistrations,
	MockRegistrationAbstact
} from '../../Queries/useRegistrations';
import { SelectFieldBase } from '../../Components/Select/Select';

interface RegistrationRouteProps {
	id: string;
}

type formProps = RouteComponentProps<RegistrationRouteProps>;

export interface IRegistrationForm {
	images: {
		header?: string;
		logo?: string;
	};
	sections: Section[];
}

export const Registration: FC<formProps> = () => {
	useDocumentTitle('Ilmoittautumislomake');
	const theme = useTheme();
	const { registrations } = useRegistrations();
	const [editing, setEditing] = useState(false);
	const [showJSON, setShowJSON] = useState(false);
	const [data, setData] = useState(MockRegistrationAbstact);
	const [themeColor, setThemeColor] = useState(theme.primary_color);
	const [themeFont, setThemeFont] = useState(theme.body_font);
	const [isDarkTheme, setIsDarkTheme] = useState(theme.is_dark_theme);

	return (
		<ThemeManager theme={createModifiedTheme(themes, themeColor, themeFont, isDarkTheme)}>
			<RegistrationPage editing={editing}>
				<div className="registration">
					<nav className="registration__top">top</nav>

					<main className="registration__content">
						{data.images.header && (
							<div className="registration__content__header">
								<img
									src={data.images.header}
									alt=""
									className="registration__content__header__image"
								/>
							</div>
						)}

						<div className="TEST">
							<Button
								text={editing ? 'Muokkaa' : 'Esikatsele'}
								className="TEST__BUTTON"
								icon={editing ? Icons.lockopen : Icons.lock}
								onClick={() => setEditing(!editing)}
							/>
							<Button
								text={showJSON ? 'Piilota JSON' : 'Näytä JSON'}
								className="TEST__BUTTON"
								icon={showJSON ? Icons.eye_slash : Icons.eye}
								onClick={() => setShowJSON(!showJSON)}
							/>
							<Button
								text={'Pohja #1 (Abstract)'}
								className="TEST__BUTTON TEST__BUTTON--THEME"
								icon={Icons.globe}
								onClick={() => setData(registrations[0])}
							/>
							<Button
								text={'Pohja #2 (Pitkä)'}
								className="TEST__BUTTON TEST__BUTTON--THEME"
								icon={Icons.globe}
								onClick={() => setData(registrations[1])}
							/>
							<Button
								text={'Pohja #3 (Lyhyt)'}
								className="TEST__BUTTON TEST__BUTTON--THEME"
								icon={Icons.globe}
								onClick={() => setData(registrations[2])}
							/>
							<Button
								text={'Pohja #4 (Kysymyksiä)'}
								className="TEST__BUTTON TEST__BUTTON--THEME"
								icon={Icons.globe}
								onClick={() => setData(registrations[3])}
							/>

							<Button
								text={'Lisää Kysymyslohko'}
								className="TEST__BUTTON TEST__BUTTON"
								icon={Icons.list}
								onClick={() => alert('NOT_IMPLEMENTED')}
							/>
							<Button
								text={isDarkTheme ? 'Käytä vaaleaa teemaa' : 'käytä tummaa Teemaa'}
								className="TEST__BUTTON TEST__BUTTON"
								icon={Icons.sun}
								onClick={() => setIsDarkTheme(!isDarkTheme)}
							/>
							<Formik
								onSubmit={(values) => {
									setThemeColor(values.color);
									setThemeFont(values.font);
								}}
								initialValues={{ color: themeColor, font: themeFont }}
							>
								<Form>
									<ColorPickerField name="color" text="Väriteema" />
									<SelectFieldBase
										name="font"
										options={[
											{ label: 'Roman', value: '"Times New Roman", Times, serif' },
											{ label: 'Montserrat', value: "'Montserrat', sans-serif" },
											{ label: 'Georgia', value: 'Georgia, serif' },
											{
												label: 'Palatino',
												value: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
											},
											{ label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
											{
												label: 'Comic Sans',
												value: '"Comic Sans MS", cursive, sans-serif'
											},
											{
												label: 'Impact',
												value: 'Impact, Charcoal, sans-serif'
											},
											{
												label: 'Tahoma',
												value: 'Tahoma, Geneva, sans-serif'
											},
											{
												label: 'Trebuchet',
												value: '"Trebuchet MS", Helvetica, sans-serif'
											},
											{
												label: 'Verdana',
												value: 'Verdana, Geneva, sans-serif'
											},
											{
												label: 'Lucida Console',
												value: '"Lucida Console", Monaco, monospacef'
											}
										]}
									></SelectFieldBase>
									<Button type="submit" text="Valitse"></Button>
								</Form>
							</Formik>
						</div>

						<Formik
							initialValues={data}
							onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
							enableReinitialize
						>
							{(formik) => (
								<Form>
									{showJSON ? (
										<AutoFormDebug />
									) : (
										<FieldArray name="sections">
											{(sectionHelpers) =>
												formik.values.sections.map((section, index) => {
													const helpers = {
														sectionIndex: index,
														isInEditMode: editing,
														disableUp: index === 0,
														disableDown: index === formik.values.sections.length - 1,
														moveUp: () => sectionHelpers.swap(index, index - 1),
														moveDown: () => sectionHelpers.swap(index, index + 1),
														remove: () => {
															if (window.confirm('Haluatko varmasti poistaa lohkon?'))
																sectionHelpers.remove(index);
														}
													};

													return RenderSection(section, helpers);
												})
											}
										</FieldArray>
									)}
								</Form>
							)}
						</Formik>
					</main>

					<footer className="registration__footer">© mondayCoding 2019</footer>
				</div>
			</RegistrationPage>
		</ThemeManager>
	);
};

const createModifiedTheme = (
	defaultThemes: typeof themes,
	newThemeColor: string,
	newThemeFont: string,
	baseThemeIsDark: boolean
) =>
	baseThemeIsDark
		? {
				...defaultThemes.dark,
				primary_color: newThemeColor,
				shadow: { ...themes.dark.shadow, focus: `0 0 0 3px ${newThemeColor}` },
				body_font: newThemeFont,
				heading_font: newThemeFont
		  }
		: {
				...defaultThemes.default,
				primary_color: newThemeColor,
				shadow: { ...themes.default.shadow, focus: `0 0 0 3px ${newThemeColor}` },
				body_font: newThemeFont,
				heading_font: newThemeFont
		  };

// const NewCheckboxSection: IQuestionSectionCheckbox = {
// 	type: SectionType.question_Checkbox,
// 	content: {
// 		title: 'Uusi kysymys',
// 		condition: false,
// 		options: [{ label: 'Vaihtoehto', checked: false }]
// 	}
// };
