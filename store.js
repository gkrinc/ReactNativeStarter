import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import rootReducer from './reducers/index';

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
    });
}

const store = createStore(
    rootReducer,
    /* Default Store Values */
    {
        login: {
            loading: false,
            username: '',
            password: '',
        },
        user: {
            username: '',
        },        
    },
    compose(
        applyMiddleware(thunk),
        process.env.NODE_ENV == 'development' ? applyMiddleware(freeze) : f => f,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
