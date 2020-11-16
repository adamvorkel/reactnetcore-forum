import React, { FC } from 'react';

import { Card } from './styled/lib';

import { QuestionData } from '../QuestionsData';
import { Question } from './Question';

interface Props {
    data: QuestionData[];
}

export const QuestionList: FC<Props> = ({ data }) => (
    <>
        {data.map((question) => (
            <Card key={question.questionId}>
                <Question data={question} />
            </Card>
        ))}
    </>
);
