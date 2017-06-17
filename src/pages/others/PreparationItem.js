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
    name        : PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.element.isRequired ]),
    description : PropTypes.oneOfType([ PropTypes.string, PropTypes.element ])
};

export default muiThemeable()(PreparationItem);
