import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { QuestionData } from '../QuestionsData';

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
    <div className="Question">
        <span className="created">
            {`Asked by ${data.userName} on 
            ${data.created.toLocaleDateString()} at 
            ${data.created.toLocaleTimeString()}`}
        </span>
        <Link to={`/questions/${data.questionId}`} className="title">
            {data.title}
        </Link>
        {showContent && <p>{data.content}</p>}
    </div>
);
