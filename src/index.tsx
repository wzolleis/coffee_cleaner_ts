import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { reducer, INITAL_STATE } from './RootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, INITAL_STATE);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root') as HTMLElement
);