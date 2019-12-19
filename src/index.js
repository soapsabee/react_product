import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore , applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const store = createStore(reducer , {}, applyMiddleware(reduxThunk));


ReactDOM.render(<Provider store={store}><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
