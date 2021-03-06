import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';
import personReducer from './store/reducer/person';
import gitUserReducer from './store/reducer/gitUser';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
    pers: personReducer,
    gUser: gitUserReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log("[MiddleWare] Dispatching ", action);
            const result = next(action);
            console.log("[MiddleWare] Dispatching ", store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
