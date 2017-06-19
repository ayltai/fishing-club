'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router history={createBrowserHistory()}>
            <App />
        </Router>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
