// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './components/navigation/AppDrawer';
import AppDrawerStore from './components/navigation/AppDrawerStore';
import AppDrawerItem from './components/navigation/AppDrawerItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const createAppDrawerStore = () : AppDrawerStore => {
    const store : AppDrawerStore = new AppDrawerStore(true);

    store.items.push(new AppDrawerItem('Home', 'icofont icofont-home'));
    store.items.push(new AppDrawerItem('-'));
    store.items.push(new AppDrawerItem('Yung Shue O Raft', 'icofont icofont-ui-map'));
    store.items.push(new AppDrawerItem('Meeting point', 'icofont icofont-social-google-map'));
    store.items.push(new AppDrawerItem('Getting there', 'icofont icofont-bus'));
    store.items.push(new AppDrawerItem('-'));
    store.items.push(new AppDrawerItem('Barbecue', 'icofont icofont-bbq'));
    store.items.push(new AppDrawerItem('Fishing', 'icofont icofont-animal-fish'));
    store.items.push(new AppDrawerItem('Star beach', 'icofont icofont-star'));
    store.items.push(new AppDrawerItem('-'));
    store.items.push(new AppDrawerItem('FAQ', 'icofont icofont-question-circle'));

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
