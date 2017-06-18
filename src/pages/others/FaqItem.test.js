'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaqItem from './FaqItem';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MuiThemeProvider>
                <FaqItem
                    question="Is there any mobile network coverage?"
                    answer="Of course! It is covered by all mobile network providers." />
            </MuiThemeProvider>
        </BrowserRouter>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
