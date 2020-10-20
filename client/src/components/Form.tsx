import React, { FC, useState, createContext } from 'react';

export interface Values {
    [key: string]: any;
}

interface FormContextProps {
    values: Values;
    setValue?: (fieldName: string, value: any) => void;
}

export const FormContext = createContext<FormContextProps>({
    values: {},
});

interface Props {
    submitCaption?: string;
}

export const Form: FC<Props> = ({ submitCaption, children }) => {
    const [values, setValues] = useState<Values>({});
    return (
        <FormContext.Provider
            value={{
                values,
                setValue: (fieldName: string, value: any) => {
                    setValues({ ...values, [fieldName]: value });
                },
            }}
        >
            <form noValidate={true}>
                {children}
                <button type="submit">
                    {submitCaption ? submitCaption : 'Submit'}
                </button>
            </form>
        </FormContext.Provider>
    );
};
