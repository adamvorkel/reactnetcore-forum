import React, { FC, useState, createContext } from 'react';

export interface Values {
    [key: string]: any;
}

export interface Errors {
    [key: string]: string[];
}

export interface Touched {
    [key: string]: boolean;
}

interface FormContextProps {
    values: Values;
    setValue?: (fieldName: string, value: any) => void;
    errors: Errors;
    validate?: (fieldName: string) => void;
    touched: Touched;
    setTouched?: (fieldName: string) => void;
}

export const FormContext = createContext<FormContextProps>({
    values: {},
    errors: {},
    touched: {},
});

// Validation
// todo: move into own file

type Validator = (value: any, args?: any) => string;

export const required: Validator = (value: any): string =>
    value === undefined || value === null || value === ''
        ? 'This field is required'
        : '';

export const minLength: Validator = (value: any, length: number): string =>
    value && value.length < length
        ? `This field must be at least ${length} characters`
        : '';

interface Validation {
    validator: Validator;
    arg?: any;
}

interface ValidationProp {
    [key: string]: Validation[];
}

//

interface Props {
    submitCaption?: string;
    validationRules?: ValidationProp;
}

export const Form: FC<Props> = ({
    submitCaption,
    children,
    validationRules,
}) => {
    const [values, setValues] = useState<Values>({});
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Touched>({});

    const validate = (fieldName: string): string[] => {
        if (!validationRules || !validationRules[fieldName]) {
            return [];
        }
        const fieldErrors: string[] = [];
        validationRules[fieldName].forEach((rule) => {
            const error = rule.validator(values[fieldName], rule.arg);
            error && fieldErrors.push(error);
        });
        setErrors({ ...errors, [fieldName]: fieldErrors });
        return fieldErrors;
    };

    return (
        <FormContext.Provider
            value={{
                values,
                setValue: (fieldName: string, value: any) => {
                    setValues({ ...values, [fieldName]: value });
                },
                errors,
                validate,
                touched,
                setTouched: (fieldName: string) => {
                    setTouched({ ...touched, [fieldName]: true });
                },
            }}
        >
            <form noValidate={true}>
                {children}
                <button type="submit" className="btn btn-primary">
                    {submitCaption ? submitCaption : 'Submit'}
                </button>
            </form>
        </FormContext.Provider>
    );
};
