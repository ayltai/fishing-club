// @flow
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppDrawerStore from './AppDrawerStore';
import NavItem from './NavItem';
import './AppDrawer.css';

@observer
class AppDrawer extends React.Component {
    static propTypes : Object;

    props : {
        store : AppDrawerStore
    };

    render() : any {
        return (
            <Drawer
                docked={this.props.store.isOpened}
                containerClassName="drawer">
                <Menu value={this.props.store.selected}>
                    {this.props.store.items.map((item : NavItem, index : number) : any => {
                        if (item.key === '-') return <Divider key={`${item.key}-${index}`} />;

                        const icon : any = item.icon ? <FontIcon className={item.icon} /> : null;

                        return (
                            <MenuItem
                                key={`${item.key}-${index}`}
                                value={item.name}
                                primaryText={item.name}
                                leftIcon={icon}
                                onTouchTap={() : void => {
                                    this.props.store.selected = item.key;

                                    this.props.store.selectionChanges.onNext(item.key);
                                }} />
                        );
                    })}
                </Menu>
            </Drawer>
        );
    }
}

AppDrawer.propTypes = {
    store : PropTypes.instanceOf(AppDrawerStore)
};

export default muiThemeable()(AppDrawer);
