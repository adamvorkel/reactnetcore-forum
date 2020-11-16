import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

// style stuff
import { Container, LayoutInverted, Main, Sidebar, Card } from '../styled/lib';

import { QuestionData } from '../../QuestionsData';

import { AppState } from '../../state/store';
import { getUnansweredQuestionsActionCreator } from '../../state/questions/actions';

import { QuestionList } from '../QuestionList';

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
        <Container>
            <LayoutInverted>
                <Main>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <QuestionList data={questions || []} />
                    )}
                </Main>
                <Sidebar>
                    <Card>
                        <p>This is the sidebar</p>
                    </Card>
                </Sidebar>
            </LayoutInverted>
        </Container>
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
