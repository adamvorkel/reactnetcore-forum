import React from 'react';

import { Form, Values, required, minLength } from '../Form';
import { Field } from '../Field';

import { postQuestion } from '../../api/mock';

export const AskView = () => {
    const handleSubmit = async (values: Values) => {
        const question = await postQuestion({
            title: values.title,
            content: values.content,
            userName: 'Adam',
            created: new Date(),
        });
        return { success: question ? true : false };
    };
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
                    onSubmit={handleSubmit}
                    failureMessage="There was a problem submitting your question..."
                    successMessage="Your question has been submitted!"
                >
                    <Field name="title" label="Title" />
                    <Field name="content" label="Content" type="TextArea" />
                </Form>
            </div>
        </div>
    );
};
