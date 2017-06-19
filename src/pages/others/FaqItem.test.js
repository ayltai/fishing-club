'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaqItem from './FaqItem';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router history={createBrowserHistory()}>
            <MuiThemeProvider>
                <FaqItem
                    question="Is there any mobile network coverage?"
                    answer="Of course! It is covered by all mobile network providers." />
            </MuiThemeProvider>
        </Router>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
