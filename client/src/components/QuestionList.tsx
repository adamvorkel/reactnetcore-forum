import React, { FC } from 'react';

import { QuestionData } from '../QuestionsData';
import { Question } from './Question';

interface Props {
    data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
    <ul className="question-list">
        {data.map(question => (
            <li key={question.questionId}>
                <Question data={question} />
            </li>
        ))}
    </ul>
);
