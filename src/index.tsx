import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import { reducer, INITAL_STATE } from './app/RootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appEpic } from './app/AppEpic';
import 'rxjs'; // um Observable mit allen Methoden aus redux-obervable zu erweitern
import { add2TeamEpic } from './admin/Add2TeamEpic'; 
import { removeCleanerFromTeamEpic } from './admin/RemoveFromTeamEpic';

export const rootEpic = combineEpics(
    appEpic, add2TeamEpic, removeCleanerFromTeamEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, INITAL_STATE, applyMiddleware(epicMiddleware));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root') as HTMLElement
);
