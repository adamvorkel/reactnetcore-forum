import React, { FC } from 'react';

import { Answer } from './Answer';
import { AnswerData } from '../AnswerData';

interface Props {
    data: AnswerData[];
}

export const AnswerList: FC<Props> = ({ data }) => {
    return (
        <div className="AnswerList">
            {data.map((answer) => (
                <Answer key={answer.answerId} data={answer} />
            ))}
        </div>
    );
};
