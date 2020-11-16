import React, { FC, useContext, ChangeEvent } from 'react';
import { FormContext } from './Form';
import { StyledField, StyledTextarea } from './styled/lib';

// style
import { Alert } from './styled/lib';

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
                        <StyledField
                            type={type.toLowerCase()}
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {type === 'TextArea' && (
                        <StyledTextarea
                            id={name}
                            value={values[name] ? values[name] : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )}
                    {errors[name] &&
                        errors[name].length > 0 &&
                        errors[name].map((error) => (
                            <Alert key={error} error>
                                {error}
                            </Alert>
                        ))}
                </div>
            )}
        </FormContext.Consumer>
    );
};
