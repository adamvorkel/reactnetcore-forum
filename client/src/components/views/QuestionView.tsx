import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Form, Values, required, minLength } from '../Form';
import { Field } from '../Field';

import { QuestionData } from '../../QuestionsData';
import { Question } from '../Question';
import { AnswerList } from '../AnswerList';
import { getQuestion, postAnswer } from '../../api/mock';

interface RouteParams {
    questionId: string;
}

export const QuestionView: FC<RouteComponentProps<RouteParams>> = ({
    match,
}) => {
    const [question, setQuestion] = useState<QuestionData | null>(null);
    useEffect(() => {
        const doGetQuestion = async (questionId: number) => {
            const foundQuestion = await getQuestion(questionId);
            setQuestion(foundQuestion);
        };
        if (match.params.questionId) {
            const questionId = Number(match.params.questionId);
            doGetQuestion(questionId);
        }
    }, [match.params.questionId]);
    const handleSubmit = async (values: Values) => {
        const result = await postAnswer({
            questionId: question!.questionId,
            content: values.content,
            userName: 'Adam',
            created: new Date(),
        });
        return { success: result ? true : false };
    };
    return (
        <div className="View">
            <div className="container">
                {question && <Question data={question} />}
                {question && <AnswerList data={question.answers} />}
                <Form
                    submitCaption="Submit Answer"
                    validationRules={{
                        content: [
                            { validator: required },
                            { validator: minLength, arg: 50 },
                        ],
                    }}
                    onSubmit={handleSubmit}
                    failureMessage="There was a problem submitting your question..."
                    successMessage="Your answer has been submitted!"
                >
                    <Field name="content" label="Your Answer" type="TextArea" />
                </Form>
            </div>
        </div>
    );
};
