import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
    rootReducer, 
    { auth: { authenticated: localStorage.getItem('token') } }, 
    applyMiddleware(reduxThunk)
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
