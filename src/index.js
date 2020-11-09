import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        //<React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App
                    /*dispatch={store.dispatch.bind(store)}*//>
            </Provider>
        </BrowserRouter>,
        //</React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(() => {
    //let state = store.getState();
    rerenderEntireTree();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
