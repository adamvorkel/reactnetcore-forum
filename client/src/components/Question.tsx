import React, { FC } from 'react';

import { QuestionData } from '../QuestionsData';

interface Props {
    data: QuestionData
};

export const Question: FC<Props> = ({ data }) => (
    <div className="question">
        <h3 className="question-title">{data.title}</h3>
        <p className="question-created">Asked by {data.userName} on {data.created.toLocaleDateString()} {data.created.toLocaleTimeString()}</p>
    </div>
)