import * as React from 'react';
import { FC } from 'react';
import { FieldProps, Field, FastField } from 'formik';

import ReactSelect from 'react-select';
import { Props as reactSelectProps } from 'react-select/lib/Select';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';

type ProvidedProps = reactSelectProps<any> & IFieldContainerProps;

const SelectBase = ({ className, ...rest }: reactSelectProps<any>) => {
   return (
      <ReactSelect className={`reactselect ${className}`} classNamePrefix={'reactselect'} {...rest} />
   );
};

const SelectFastField: React.FC<ProvidedProps> = ({
   name,
   label,
   tooltip,
   required,
   disabled,
   hideContainer,
   className,
   classNamePrefix,
   options,
   hideErrorMessage,
   showMobileView,
   ...props
}) => (
      <FastField
         name={name}
         render={({ field, form: { errors, touched, setFieldValue, setFieldTouched } }: FieldProps) => (
            <FieldContainer
               label={label}
               error={touched[field.name] && errors[field.name]}
               id={`${field.name}_select_TID`}
               tooltip={tooltip}
               required={required}
               showMobileView={showMobileView}
               disabled={disabled}
               hideErrorMessage={hideErrorMessage}
               hideContainer={hideContainer}
               className={(touched[field.name] && errors[field.name] && 'hasError') || ''}
            >
               <ReactSelect
                  inputId={`${field.name}_select_TID`}
                  error={touched[field.name] && errors[field.name]}
                  options={options}
                  isDisabled={disabled}
                  name={field.name}
                  defaultValue={options ? options.find((option: any) => option.value === field.value) : ''}
                  onBlur={() => setFieldTouched(field.name, true)}
                  onChange={(option: any) => setFieldValue(field.name, option.value)}
                  className={`reactselect ${className}`}
                  classNamePrefix={`reactselect`}
                  {...props}
               />
            </FieldContainer>
         )}
      />
   );

const SelectField: React.FC<ProvidedProps> = ({
   name,
   label,
   tooltip,
   required,
   disabled,
   hideContainer,
   className,
   classNamePrefix,
   options,
   hideErrorMessage,
   showMobileView,
   ...props
}) => (
      <Field
         name={name}
         render={({ field, form: { errors, touched, setFieldValue, setFieldTouched } }: FieldProps) => (
            <FieldContainer
               label={label}
               error={touched[field.name] && errors[field.name]}
               id={`${field.name}_select_TID`}
               tooltip={tooltip}
               required={required}
               showMobileView={showMobileView}
               disabled={disabled}
               hideErrorMessage={hideErrorMessage}
               hideContainer={hideContainer}
               className={(touched[field.name] && errors[field.name] && 'hasError') || ''}
            >
               <ReactSelect
                  inputId={`${field.name}_select_TID`}
                  error={touched[field.name] && errors[field.name]}
                  options={options}
                  isDisabled={disabled}
                  name={field.name}
                  defaultValue={options ? options.find((option: any) => option.value === field.value) : ''}
                  onBlur={() => setFieldTouched(field.name, true)}
                  onChange={(option: any) => setFieldValue(field.name, option.value)}
                  className={`reactselect ${className}`}
                  classNamePrefix={`reactselect`}
                  {...props}
               />
            </FieldContainer>
         )}
      />
   );

const MultiSelectField: React.FC<ProvidedProps> = ({
   name,
   label,
   tooltip,
   required,
   options,
   hideContainer,
   showMobileView,
   ...props
}) => (
      <Field
         name={name}
         render={({ field, form: { errors, touched, setFieldValue, setFieldTouched } }: FieldProps) => (
            <FieldContainer
               label={label}
               error={touched[field.name] && errors[field.name]}
               id={`${field.name}_select_TID`}
               tooltip={tooltip}
               required={required}
               showMobileView={showMobileView}
               hideContainer={hideContainer}
            >
               <ReactSelect
                  inputId={`${field.name}_select_TID`}
                  error={touched[field.name] && errors[field.name]}
                  options={options}
                  name={field.name}
                  isMulti={true}
                  defaultValue={
                     options && field.value
                        ? options.filter((option: any) => field.value.includes(option.value))
                        : []
                  }
                  onBlur={() => setFieldTouched(field.name, true)}
                  onChange={(option: any) => {
                     setFieldValue(field.name, option.map((option: any) => option.value));
                  }}
                  className="reactselect"
                  classNamePrefix="reactselect"
                  {...props}
               />
            </FieldContainer>
         )}
      />
   );

export { SelectBase, SelectField, MultiSelectField, SelectFastField };
