'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Faq from './Faq';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router history={createBrowserHistory()}>
            <MuiThemeProvider>
                <Faq />
            </MuiThemeProvider>
        </Router>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
