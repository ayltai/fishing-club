// @flow
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './components/navigation/AppDrawer';
import AppDrawerStore from './components/navigation/AppDrawerStore';
import NavItem from './components/navigation/NavItem';
import Home from './pages/Home';
import YungShueORafts from './pages/places/YungShueORafts';
import MeetingPoint from './pages/places/MeetingPoint';
import GettingThere from './pages/places/GettingThere';
import Barbecue from './pages/activities/Barbecue';
import Fishing from './pages/activities/Fishing';
import StarBeach from './pages/activities/StarBeach';
import Preparations from './pages/others/Preparations';
import Faq from './pages/others/Faq';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

injectTapEventPlugin();

const theme = getMuiTheme({
    palette : {
        primary1Color : blue500
    }
});

const createNavItems = () : NavItem[] => {
    const items = [];

    items.push(new NavItem('/', 'Home', 'icofont icofont-home', <Home />));
    items.push(new NavItem('-'));
    items.push(new NavItem('/places/yung-shue-o-rafts', 'Yung Shue O rafts', 'icofont icofont-ui-map', <YungShueORafts />));
    items.push(new NavItem('/places/meeting-point', 'Meeting point', 'icofont icofont-social-google-map', <MeetingPoint />));
    items.push(new NavItem('/places/getting-there', 'Getting there', 'icofont icofont-bus', <GettingThere />));
    items.push(new NavItem('-'));
    items.push(new NavItem('/activities/barbecue', 'Barbecue', 'icofont icofont-bbq', <Barbecue />));
    items.push(new NavItem('/activities/fishing', 'Fishing', 'icofont icofont-animal-fish', <Fishing />));
    items.push(new NavItem('/activities/star-beach', 'Star beach', 'icofont icofont-star', <StarBeach />));
    items.push(new NavItem('-'));
    items.push(new NavItem('/others/preparations', 'Preparations', 'icofont icofont-listine-dots', <Preparations />));
    items.push(new NavItem('/others/faq', 'FAQ', 'icofont icofont-question-circle', <Faq />));

    return items;
};

const createAppDrawerStore = (items : NavItem[]) : AppDrawerStore => {
    const store : AppDrawerStore = new AppDrawerStore(true);

    if (items.length > 0) {
        store.items.push(...items);
        store.selected = items[0].key;
    }

    return store;
};

export default class App extends React.Component {
    static contextTypes : Object;
    static stateTypes   : Object;

    context    : Object;
    state      : Object;
    _navItems  : NavItem[];
    _appDrawer : AppDrawerStore;

    constructor(props : Object) {
        super(props);

        this.state = {
            drawerWidth  : 230,
            contentWidth : 800
        };

        this._navItems  = createNavItems();
        this._appDrawer = createAppDrawerStore(this._navItems);
        this._appDrawer.selectionChanges.subscribe((selected : string) => this.context.router.history.push(selected));
    }

    render() : any {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <AppBar
                        title="Fishing Club"
                        style={{
                            position : 'fixed',
                            top      : 0
                        }}
                        onLeftIconButtonTouchTap={() : void => {
                            this._appDrawer.isOpened = !this._appDrawer.isOpened;

                            this.setState({
                                drawerWidth  : this._appDrawer.isOpened ? 230 : 0,
                                contentWidth : this._appDrawer.isOpened ? 800 : 960
                            });
                        }} />
                    <AppDrawer store={this._appDrawer} />
                    <div
                        className="mainContent"
                        style={{
                            marginLeft : `calc((100% - ${this.state.drawerWidth}px - ${this.state.contentWidth}px) / 2 + ${this.state.drawerWidth}px)`,
                            width      : this.state.contentWidth
                        }}>
                        {this._navItems.map((item : NavItem) => {
                            return (
                                <Route
                                    exact
                                    path={item.key}
                                    component={() : any => item.page} />
                            );
                        })}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.contextTypes = {
    router : PropTypes.shape({
        history       : PropTypes.shape({
            push    : PropTypes.func.isRequired,
            replace : PropTypes.func.isRequired
        }).isRequired,
        staticContext : PropTypes.object
    }).isRequired
};

App.stateTypes = {
    drawerWidth  : PropTypes.number,
    contentWidth : PropTypes.number
};
