'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Preparations from './Preparations';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MuiThemeProvider>
                <Preparations />
            </MuiThemeProvider>
        </BrowserRouter>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
