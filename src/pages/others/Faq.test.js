'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Faq from './Faq';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MuiThemeProvider>
                <Faq />
            </MuiThemeProvider>
        </BrowserRouter>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
