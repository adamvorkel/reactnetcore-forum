import React from 'react';

import { getUnansweredQuestions } from '../QuestionsData';
import { QuestionList } from './QuestionList';

export const HomePage = () => (
    <section id="home">
        <div className="view-header">
            <div className="container">
                <h2>Unanswered Questions</h2>
                <button className="btn btn-primary">Ask a question</button>
            </div>
        </div>
        <main>
            <div className="container">
                <QuestionList data={getUnansweredQuestions()} />
            </div>
        </main>
    </section>
);
