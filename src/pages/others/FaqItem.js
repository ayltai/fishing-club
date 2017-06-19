// @flow
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ReactGA from 'react-ga';
import './FaqItem.css';

const FaqItem = (props : Object) => {
    return (
        <Card
            className="faqItem"
            onExpandChange={(isExpanded : boolean) : void => {
                if (isExpanded) ReactGA.event({
                    category : 'FAQ',
                    action   : 'View',
                    label    : props.question
                });
            }}>
            <CardHeader
                title={props.question}
                actAsExpander
                showExpandableButton />
            <CardText expandable>{props.answer}</CardText>
        </Card>
    );
};

FaqItem.propTypes = {
    question : PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.element.isRequired ]),
    answer   : PropTypes.oneOfType([ PropTypes.string.isRequired, PropTypes.element.isRequired ])
};

export default muiThemeable()(FaqItem);
