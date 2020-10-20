import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { QuestionData } from '../QuestionsData';

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
    <div className="question">
        <Link to={`questions/${data.questionId}`} className="question-title">
            {data.title}
        </Link>
        {showContent && <p>{data.content}</p>}
        <span className="question-created">
            Asked by {data.userName} on {data.created.toLocaleDateString()}{' '}
            {data.created.toLocaleTimeString()}
        </span>
    </div>
);
