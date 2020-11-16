import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { QuestionList } from '../QuestionList';
import { QuestionData } from '../../QuestionsData';
import { searchQuestions } from '../../api/mock';

export const SearchView: FC<RouteComponentProps> = ({ location }) => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);

    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';

    useEffect(() => {
        const doSearch = async (q: string) => {
            const results = await searchQuestions(q);
            setQuestions(results);
        };
        doSearch(searchQuery);
    }, [searchQuery]);
    return (
        <div className="container">
            <div className="View">
                <p>Search Results for "{searchQuery}"</p>
                <QuestionList data={questions} />
            </div>
        </div>
    );
};
