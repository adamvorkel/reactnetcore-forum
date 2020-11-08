import { QuestionData } from '../../QuestionsData';

export interface QuestionsState {
    readonly loading: boolean;
    readonly unanswered: QuestionData[] | null;
    readonly postedResult?: QuestionData;
}
