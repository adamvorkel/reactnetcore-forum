import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
    questionId: string;
}

export const QuestionPage: FC<RouteComponentProps<RouteParams>> = ({
    match,
}) => <div>Question {match.params.questionId}</div>;
