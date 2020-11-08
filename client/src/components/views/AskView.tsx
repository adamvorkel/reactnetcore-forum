import React from 'react';

import { Form, required, minLength } from '../Form';
import { Field } from '../Field';

export const AskView = () => {
    return (
        <div className="View">
            <div className="container">
                <Form
                    submitCaption="Submit Question"
                    validationRules={{
                        title: [
                            { validator: required },
                            { validator: minLength, arg: 10 },
                        ],
                        content: [
                            { validator: required },
                            { validator: minLength, arg: 50 },
                        ],
                    }}
                >
                    <Field name="title" label="Title" />
                    <Field name="content" label="Content" type="TextArea" />
                </Form>
            </div>
        </div>
    );
};
