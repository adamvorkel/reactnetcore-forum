import React, { FC, useContext, ChangeEvent } from 'react';
import { FormContext } from './Form';

interface Props {
    name: string;
    label?: string;
    type?: 'Text' | 'TextArea' | 'Password';
}

export const Field: FC<Props> = ({ name, label, type = 'Text' }) => {
    const { setValue } = useContext(FormContext);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setValue && setValue(name, e.currentTarget.value);
    };
    return (
        <FormContext.Consumer>
            {({ values }) => (
                <div className="field">
                    {label && <label htmlFor={name}>{label}</label>}
                    {(type === 'Text' || type === 'Password') && (
                        <input
                            type={type.toLowerCase()}
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                        />
                    )}
                    {type === 'TextArea' && (
                        <textarea
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                        />
                    )}
                </div>
            )}
        </FormContext.Consumer>
    );
};
