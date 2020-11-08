import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    GettingUnansweredQuestionsAction,
    GotUnansweredQuestionsAction,
    PostedQuestionAction,
} from './actionTypes';
import { QuestionData, PostQuestionData } from '../../QuestionsData';
import { getUnansweredQuestions, postQuestion } from '../../api/mock';

export const getUnansweredQuestionsActionCreator: ActionCreator<ThunkAction<
    Promise<void>, // return type for inner function
    QuestionData[], // data type in last action
    null, // param type for inner function
    GotUnansweredQuestionsAction // action type for last action
>> = () => {
    return async (dispatch: Dispatch) => {
        const gettingUnansweredQuestionsAction: GettingUnansweredQuestionsAction = {
            type: 'GettingUnansweredQuestions',
        };
        dispatch(gettingUnansweredQuestionsAction);

        const questions = await getUnansweredQuestions();

        const gotUnansweredQuestionsAction: GotUnansweredQuestionsAction = {
            type: 'GotUnansweredQuestions',
            questions,
        };
        dispatch(gotUnansweredQuestionsAction);
    };
};

export const postQuestionActionCreator: ActionCreator<ThunkAction<
    Promise<void>,
    QuestionData,
    PostQuestionData,
    PostedQuestionAction
>> = (question: PostQuestionData) => {
    return async (dispatch: Dispatch) => {
        const result = await postQuestion(question);
        const postedQuestionAction: PostedQuestionAction = {
            type: 'PostedQuestion',
            result,
        };
        dispatch(postedQuestionAction);
    };
};

export const clearPostedQuestionActionCreator: ActionCreator<PostedQuestionAction> = () => {
    const postedQuestionAction: PostedQuestionAction = {
        type: 'PostedQuestion',
        result: undefined,
    };
    return postedQuestionAction;
};
