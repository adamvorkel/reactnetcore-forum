import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { QuestionData } from '../../QuestionsData';
import { QuestionList } from '../QuestionList';

import { AppState } from '../../state/store';
import { getUnansweredQuestionsActionCreator } from '../../state/questions/actions';
import { getUnansweredQuestions } from '../../api/mock';

interface Props extends RouteComponentProps {
    getUnansweredQuestions: () => Promise<void>;
    questions: QuestionData[] | null;
    loading: boolean;
}

const HomeView: FC<Props> = ({
    history,
    questions,
    loading,
    getUnansweredQuestions,
}) => {
    useEffect(() => {
        if (questions === null) {
            getUnansweredQuestions();
        }
    }, [questions, getUnansweredQuestions]);
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

const mapStateToProps = (store: AppState) => {
    return {
        questions: store.questions.unanswered,
        loading: store.questions.loading,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        getUnansweredQuestions: () =>
            dispatch(getUnansweredQuestionsActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
