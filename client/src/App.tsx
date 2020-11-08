import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './state/store';
import Header from './components/Header';
import { HomeView } from './components/views/HomeView';
import { SearchView } from './components/views/SearchView';
import { AskView } from './components/views/AskView';
import { LoginView } from './components/views/LoginView';
import { QuestionView } from './components/views/QuestionView';
import { NotFoundView } from './components/views/NotFoundView';
import './App.css';

const App = () => {
    return (
        <Provider store={configureStore()}>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/search" component={SearchView} />
                        <Route path="/ask" component={AskView} />
                        <Route path="/login" component={LoginView} />
                        <Route
                            path="/questions/:questionId"
                            component={QuestionView}
                        />
                        <Route component={NotFoundView} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
