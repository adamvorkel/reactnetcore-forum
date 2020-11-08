import React, { FC, useState, createContext, FormEvent } from 'react';

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

export interface SubmitResult {
    success: boolean;
    errors?: Errors;
}

interface Props {
    submitCaption?: string;
    validationRules?: ValidationProp;
    onSubmit: (values: Values) => Promise<SubmitResult>;
    successMessage?: string;
    failureMessage?: string;
}

export const Form: FC<Props> = ({
    submitCaption,
    children,
    validationRules,
    onSubmit,
    successMessage = 'Submitted successfully',
    failureMessage = 'Something went wrong',
}) => {
    const [values, setValues] = useState<Values>({});
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Touched>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitting(true);
            setSubmitError(false);
            const result = await onSubmit(values);
            setErrors(result.errors || {});
            setSubmitError(!result.success);
            setSubmitting(false);
            setSubmitted(true);
        }
    };

    const validateForm = () => {
        const newErrors: Errors = {};
        let haveError: boolean = false;
        if (validationRules) {
            Object.keys(validationRules).forEach((fieldName) => {
                newErrors[fieldName] = validate(fieldName);
                if (newErrors[fieldName].length > 0) {
                    haveError = true;
                }
            });
        }
        setErrors(newErrors);
        return !haveError;
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
            <form noValidate={true} onSubmit={handleSubmit}>
                {children}
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting || (submitted && !submitError)}
                >
                    {submitCaption ? submitCaption : 'Submit'}
                </button>
                {submitted && submitError && (
                    <div className="alert alert-error">{failureMessage}</div>
                )}
                {submitted && !submitError && (
                    <div className="alert alert-success">{successMessage}</div>
                )}
            </form>
        </FormContext.Provider>
    );
};
