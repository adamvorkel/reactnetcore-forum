import React, { FC } from 'react';
import { AnswerData } from '../AnswerData';

interface Props {
    data: AnswerData;
}

export const Answer: FC<Props> = ({ data }) => {
    return (
        <div className="Answer">
            <p>{data.content}</p>
            <span className="answer-created">
                {`Answered by ${data.userName} on 
                ${data.created.toLocaleDateString()} at 
                ${data.created.toLocaleTimeString()}`}
            </span>
        </div>
    );
};
