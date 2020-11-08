import { Reducer } from 'redux';

import { QuestionsState } from './index';
import { QuestionsAction } from './actionTypes';

const initialQuestionsState: QuestionsState = {
    loading: false,
    unanswered: null,
};

export const questionsReducer: Reducer<QuestionsState, QuestionsAction> = (
    state = initialQuestionsState,
    action,
) => {
    switch (action.type) {
        case 'GettingUnansweredQuestions': {
            return {
                ...state,
                unanswered: null,
                loading: true,
            };
        }
        case 'GotUnansweredQuestions': {
            return {
                ...state,
                unanswered: action.questions,
                loading: false,
            };
        }
        case 'PostedQuestion': {
            return {
                ...state,
                unanswered: action.result
                    ? (state.unanswered || []).concat(action.result)
                    : state.unanswered,
                postedResult: action.result,
            };
        }
        default: {
            return state;
        }
    }
};
