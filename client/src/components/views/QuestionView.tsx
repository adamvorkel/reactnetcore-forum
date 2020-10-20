import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { QuestionData, getQuestion } from '../../QuestionsData';
import { Question } from '../Question';
import { AnswerList } from '../AnswerList';

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

    return (
        <div className="View">
            <div className="container">
                {question && <Question data={question} />}
                {question && <AnswerList data={question.answers} />}
            </div>
        </div>
    );
};
