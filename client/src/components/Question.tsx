import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { QuestionData } from '../QuestionsData';

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    .title {
        display: inline-block;
        font-size: 1.5em;
        font-weight: bold;
        color: inherit;
        text-decoration: none;
        margin-top: 0.25rem;
        margin-bottom: 0.25em;
        color: var(--color-dark);
    }
    .created {
        font-size: 0.85rem;
        color: var(--color-gray-dark);
    }
`;

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

export const Question: FC<Props> = ({ data, showContent = true }) => (
    <StyledQuestion>
        <span className="created">
            {`Asked by ${data.userName} on 
            ${data.created.toLocaleDateString()} at 
            ${data.created.toLocaleTimeString()}`}
        </span>
        <Link to={`/questions/${data.questionId}`} className="title">
            {data.title}
        </Link>
        {showContent && <p>{data.content}</p>}
    </StyledQuestion>
);
