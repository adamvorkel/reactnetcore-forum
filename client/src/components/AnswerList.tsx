import React, { FC } from 'react';
import styled from 'styled-components';

import { Answer } from './Answer';
import { AnswerData } from '../AnswerData';

const AnswerListing = styled.div`
    margin-bottom: 1em;
    padding: 1rem;
`;

interface Props {
    data: AnswerData[];
}

export const AnswerList: FC<Props> = ({ data }) => {
    return (
        <div className="AnswerList">
            {data.map((answer) => (
                <AnswerListing key={answer.answerId}>
                    <Answer data={answer} />
                </AnswerListing>
            ))}
        </div>
    );
};
