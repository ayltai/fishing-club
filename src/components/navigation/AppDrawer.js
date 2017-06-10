// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppDrawerItem from './AppDrawerItem';
import AppDrawerStore from './AppDrawerStore';
import PubSub from 'pubsub-js';
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
                    {this.props.store.items.map((item : AppDrawerItem) : any => {
                        const icon : any = item.icon ? <FontIcon className={item.icon} /> : null;

                        return (
                            <MenuItem
                                key={item.name}
                                value={item.name}
                                leftIcon={icon}
                                onTouchTap={() : void => {
                                    this.props.store.selected = item.name;

                                    PubSub.publish('AppDrawer.selectionChanged', item.name);
                                }}>
                                {item.name}
                            </MenuItem>
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
