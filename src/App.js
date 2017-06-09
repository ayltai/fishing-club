// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './components/navigation/AppDrawer';
import AppDrawerStore from './components/navigation/AppDrawerStore';
import AppDrawerItem from './components/navigation/AppDrawerItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

injectTapEventPlugin();

const createAppDrawerStore = () : AppDrawerStore => {
    const store : AppDrawerStore = new AppDrawerStore(true);

    store.items.push(new AppDrawerItem('Home', 'home'));
    store.items.push(new AppDrawerItem('Location', 'map-marker'));
    store.items.push(new AppDrawerItem('Transportation', 'bus'));

    store.selected = 'Home';

    return store;
};

export default class App extends React.Component {
    _appDrawer : AppDrawerStore;

    constructor(props : Object) {
        super(props);

        this._appDrawer = createAppDrawerStore();
    }

    render() : any {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Fishing Club"
                        onLeftIconButtonTouchTap={() : void => {
                            this._appDrawer.isOpened = !this._appDrawer.isOpened;
                        }} />
                    <AppDrawer store={this._appDrawer} />
                </div>
            </MuiThemeProvider>
        );
    }
}
