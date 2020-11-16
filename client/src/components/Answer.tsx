import React, { FC } from 'react';
import styled from 'styled-components';

import { AnswerData } from '../AnswerData';

interface Props {
    data: AnswerData;
}

const StyledAnswer = styled.div`
    padding-top: 1rem;
    border-top: 1px solid var(--color-gray-light);
    .created {
        font-size: 0.85rem;
        color: var(--color-gray-dark);
    }
`;

export const Answer: FC<Props> = ({ data }) => {
    return (
        <StyledAnswer>
            <p>{data.content}</p>
            <span className="created">
                {`Answered by ${data.userName} on 
                ${data.created.toLocaleDateString()} at 
                ${data.created.toLocaleTimeString()}`}
            </span>
        </StyledAnswer>
    );
};
