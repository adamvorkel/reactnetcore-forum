import React, { FC } from 'react';

import { QuestionData } from '../QuestionsData';
import { Question } from './Question';

interface Props {
    data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
    <div className="QuestionList">
        {data.map((question) => (
            <div className="Card" key={question.questionId}>
                <Question data={question} />
            </div>
        ))}
    </div>
);
