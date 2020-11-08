import React, { useEffect, useState } from 'react';

import { QuestionData } from '../../QuestionsData';
import { QuestionList } from '../QuestionList';
import { getUnansweredQuestions } from '../../api/mock';

export const HomeView = () => {
    const [questions, setQuestions] = useState<QuestionData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const doGetUnansweredQuestion = async () => {
            const unansweredQuestions = await getUnansweredQuestions();
            setQuestions(unansweredQuestions);
            setLoading(false);
        };
        doGetUnansweredQuestion();
    }, []);
    return (
        <section id="home">
            <div className="View">
                <div className="container">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <QuestionList data={questions || []} />
                    )}
                </div>
            </div>
        </section>
    );
};
