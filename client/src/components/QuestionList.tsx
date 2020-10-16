import React, { FC } from 'react';
import { QuestionData } from '../QuestionsData';

interface Props {
    data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
    <ul className="question-list">
        {data.map(question => (
            <li key={question.questionId}>
                <h3>{question.title}</h3>
            </li>
        ))}
    </ul>
);
