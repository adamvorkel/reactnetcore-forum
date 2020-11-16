import React, { FC } from 'react';

import { QuestionData } from '../QuestionsData';
import { Question } from './Question';

interface Props {
    data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
    <div className="QuestionList">
        {data.map((question) => (
            <Question data={question} key={question.questionId} />
        ))}
    </div>
);
