// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import PreparationItem from './PreparationItem';

const Preparations = () : any => {
    return (
        <Paper>
            <List>
                <PreparationItem
                    name="Waterproof shorts"
                    description="You will get wet for sure when you visit Star beach" />
                <PreparationItem
                    name="Cash"
                    description="You can buy more drinks there" />
                <PreparationItem
                    name="(Optional) Sunglasses"
                    description="Just in case it will be shiny" />
                <PreparationItem
                    name="(Optional) Suncream"
                    description="Just in case it will be shiny" />
                <PreparationItem
                    name="(Optional) Snacks"
                    description="Some snacks will be prepared and shared but you are welcome to bring more" />
                <PreparationItem
                    name="(Optional) Swimwear"
                    description="Only if you want to swim" />
                <PreparationItem
                    name="(Optional) Small waterproof bag"
                    description="We will take our valuable belongings with us to visit Star beach and leave them on a dry place, but you may choose to keep it with you in a waterproof bag" />
            </List>
        </Paper>
    );
};

export default muiThemeable()(Preparations);
