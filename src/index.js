import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import App from './components/App';
import Store from './components/Store/Store';

import './index.css';
import * as serviceWorker from './registerServiceWorker';

const Root = (
    <Provider Store= {Store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();