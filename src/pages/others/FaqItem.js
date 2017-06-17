// @flow
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import './FaqItem.css';

const FaqItem = (props : Object) => {
    return (
        <Card className="faqItem">
            <CardHeader
                title={props.question}
                actAsExpander
                showExpandableButton />
            <CardText expandable>
                <div>{props.answer}</div>
                <IconButton tooltip="Love it">
                    <FontIcon className="icofont icofont-emo-heart-eyes" />
                </IconButton>
                <IconButton tooltip="Wow">
                    <FontIcon className="icofont icofont-emo-open-mouth" />
                </IconButton>
                <IconButton tooltip="Good">
                    <FontIcon className="icofont icofont-emo-laughing" />
                </IconButton>
                <IconButton tooltip="Okay">
                    <FontIcon className="icofont icofont-emo-slightly-smile" />
                </IconButton>
                <IconButton tooltip="Meh">
                    <FontIcon className="icofont icofont-emo-worried" />
                </IconButton>
            </CardText>
        </Card>
    );
};

FaqItem.propTypes = {
    question : PropTypes.string.isRequired,
    answer   : PropTypes.string.isRequired
};

export default muiThemeable()(FaqItem);
