import { Store, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { QuestionsState } from './questions';
import { questionsReducer } from './questions/reducer';

export interface AppState {
    readonly questions: QuestionsState;
}

const rootReducer = combineReducers<AppState>({
    questions: questionsReducer,
});

export const configureStore = (): Store<AppState> => {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
};
