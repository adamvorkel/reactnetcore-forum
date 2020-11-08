import React, { FC, useContext, ChangeEvent } from 'react';
import { FormContext } from './Form';

interface Props {
    name: string;
    label?: string;
    type?: 'Text' | 'TextArea' | 'Password';
}

export const Field: FC<Props> = ({ name, label, type = 'Text' }) => {
    const { setValue, touched, setTouched, validate } = useContext(FormContext);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setValue && setValue(name, e.currentTarget.value);
        touched[name] && validate && validate(name);
    };
    const handleBlur = () => {
        setTouched && setTouched(name);
        validate && validate(name);
    };
    return (
        <FormContext.Consumer>
            {({ values, errors }) => (
                <div className="field">
                    {label && <label htmlFor={name}>{label}</label>}
                    {(type === 'Text' || type === 'Password') && (
                        <input
                            type={type.toLowerCase()}
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {type === 'TextArea' && (
                        <textarea
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {errors[name] &&
                        errors[name].length > 0 &&
                        errors[name].map((error) => (
                            <div key={error} className="alert alert-error">
                                {error}
                            </div>
                        ))}
                </div>
            )}
        </FormContext.Consumer>
    );
};
