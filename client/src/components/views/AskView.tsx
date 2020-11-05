import React from 'react';

import { Form } from '../Form';
import { Field } from '../Field';

export const AskView = () => {
    return (
        <div className="View">
            <div className="container">
                <Form submitCaption="Submit Question">
                    <Field name="title" label="Title" />
                    <Field name="content" label="Content" type="TextArea" />
                </Form>
            </div>
        </div>
    );
};
