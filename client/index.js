/* eslint linebreak-style: ["error", "unix"] */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/App';

// import './index.css'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#app')
);