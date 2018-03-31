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
import { cleanerEpic } from './cleaner/CleanerEpics';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'rxjs';

export const rootEpic = combineEpics(
    cleanerEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, INITAL_STATE, composeWithDevTools(applyMiddleware(epicMiddleware)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root') as HTMLElement
);