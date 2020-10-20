import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { QuestionData, getUnansweredQuestions } from '../QuestionsData';
import { QuestionList } from './QuestionList';

export const HomePage = () => {
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
            <div className="view-header">
                <div className="container">
                    <h2>Unanswered Questions</h2>
                    <Link to="/ask" className="btn btn-primary">
                        Ask a question
                    </Link>
                </div>
            </div>
            <main>
                <div className="container">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <QuestionList data={questions || []} />
                    )}
                </div>
            </main>
        </section>
    );
};
