import React, { FC } from 'react';

import { QuestionData } from '../QuestionsData';

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
    <div className="question">
        <h3 className="question-title">{data.title}</h3>
        {showContent && <p>{data.content}</p>}
        <span className="question-created">
            Asked by {data.userName} on {data.created.toLocaleDateString()}{' '}
            {data.created.toLocaleTimeString()}
        </span>
    </div>
);
