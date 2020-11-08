import { Action } from 'redux';

import { QuestionData } from '../../QuestionsData';

export interface GettingUnansweredQuestionsAction
    extends Action<'GettingUnansweredQuestions'> {}

export interface GotUnansweredQuestionsAction
    extends Action<'GotUnansweredQuestions'> {
    questions: QuestionData[];
}

export interface PostedQuestionAction extends Action<'PostedQuestion'> {
    result: QuestionData | undefined;
}

export type QuestionsAction =
    | GettingUnansweredQuestionsAction
    | GotUnansweredQuestionsAction
    | PostedQuestionAction;
