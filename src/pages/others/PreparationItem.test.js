'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PreparationItem from './PreparationItem';

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MuiThemeProvider>
                <PreparationItem
                    name="Cash"
                    description="You can buy more drinks there." />
            </MuiThemeProvider>
        </BrowserRouter>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
