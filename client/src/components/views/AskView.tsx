import React, { FC, useEffect } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { PostQuestionData, QuestionData } from '../../QuestionsData';

import { AppState } from '../../state/store';
import {
    postQuestionActionCreator,
    clearPostedQuestionActionCreator,
} from '../../state/questions/actions';

import { Form, Values, required, minLength, SubmitResult } from '../Form';
import { Field } from '../Field';

interface Props {
    postQuestion: (questions: PostQuestionData) => Promise<void>;
    clearPostedQuestion: () => void;
    postedQuestionResult?: QuestionData;
}

const AskView: FC<Props> = ({
    postQuestion,
    clearPostedQuestion,
    postedQuestionResult,
}) => {
    useEffect(() => {
        //cleanup
        return () => {
            clearPostedQuestion();
        };
    }, [clearPostedQuestion]);

    const handleSubmit = (values: Values) => {
        postQuestion({
            title: values.title,
            content: values.content,
            userName: 'Adam',
            created: new Date(),
        });
    };

    let submitResult: SubmitResult | undefined;
    if (postedQuestionResult) {
        submitResult = { success: postedQuestionResult !== undefined };
    }

    return (
        <div className="container">
            <div className="View">
                <main className="Main">
                    <Form
                        onSubmit={handleSubmit}
                        submitResult={submitResult}
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
                        failureMessage="There was a problem submitting your question..."
                        successMessage="Your question has been submitted!"
                    >
                        <Field name="title" label="Title" />
                        <Field name="content" label="Content" type="TextArea" />
                    </Form>
                </main>
            </div>
        </div>
    );
};

const mapStateToProps = (store: AppState) => {
    return {
        postedQuestionResult: store.questions.postedResult,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        postQuestion: (question: PostQuestionData) =>
            dispatch(postQuestionActionCreator(question)),
        clearPostedQuestion: () => dispatch(clearPostedQuestionActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AskView);
