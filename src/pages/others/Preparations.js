// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import PreparationItem from './PreparationItem';

class Preparations extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <Paper>
                <List>
                    <PreparationItem
                        name="Waterproof shorts"
                        description="You will need to walk through shallow water when you visit Star beach. Your may wear waterproof shorts, or bring a spare pair of shorts." />
                    <PreparationItem
                        name="(Optional) Waterproof shoes"
                        description="You will need to walk through shallow water when you visit Star beach. You may wear waterproof shoes, or otherwise take them off." />
                    <PreparationItem
                        name="(Optional) Plastic bags"
                        description="You will need to walk through shallow water when you visit Star beach. Plastic bags come in handy if you take off your shoes." />
                    <PreparationItem
                        name="Cash"
                        description="You can buy more drinks there." />
                    <PreparationItem
                        name="(Optional) Sunglasses"
                        description="Just in case it will be shiny." />
                    <PreparationItem
                        name="(Optional) Suncream"
                        description="Just in case it will be shiny." />
                    <PreparationItem
                        name="(Optional) Mosquito Repellent"
                        description="You will walk through trees to go to the pier. There may be mosquitoes." />
                    <PreparationItem
                        name="(Optional) Snacks"
                        description="Some snacks will be prepared and shared but you are welcome to bring more." />
                    <PreparationItem
                        name="(Optional) Swimwear"
                        description="Only if you want to swim." />
                    <PreparationItem
                        name="(Optional) Small waterproof bag"
                        description="We will take our valuable belongings with us to visit Star beach and leave them on a dry place, but you may choose to keep it with you in a waterproof bag." />
                </List>
            </Paper>
        );
    }
}

export default muiThemeable()(Preparations);
