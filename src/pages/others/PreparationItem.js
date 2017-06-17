// @flow
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';

const PreparationItem = (props : Object) => {
    return (
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText={props.name}
            secondaryText={props.description}
            secondaryTextLines={2} />
    );
};

PreparationItem.propTypes = {
    name        : PropTypes.string.isRequired,
    description : PropTypes.string
};

export default muiThemeable()(PreparationItem);
