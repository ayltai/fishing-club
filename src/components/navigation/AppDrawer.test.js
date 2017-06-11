'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppDrawer from './AppDrawer';
import AppDrawerStore from './AppDrawerStore';
import NavItem from './NavItem';

const createStore : AppDrawerStore = () => {
    const store : AppDrawerStore = new AppDrawerStore(true);

    store.items.push(new NavItem('/', 'Home', 'home'));
    store.items.push(new NavItem('/location', 'Location', 'map-marker'));
    store.items.push(new NavItem('/transportation', 'Transportation', 'bus'));

    store.selected = '/';

    return store;
};

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppDrawer store={createStore()} />
        </MuiThemeProvider>,
        div);

    expect(div.innerHTML).toMatchSnapshot();
});
