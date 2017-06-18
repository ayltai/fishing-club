// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './Barbecue.css';
import BarbecueImage from '../../images/barbecue.jpg';
import SoftDrinksImage from '../../images/soft-drinks.jpg';
import WinesImage from '../../images/wines.jpg';

const Barbecue = () : any => {
    return (
        <div>
            <Card className="barbecueItem">
                <CardMedia>
                    <img
                        src={BarbecueImage}
                        style={{
                            maxWidth : '100%'
                        }} />
                </CardMedia>
                <CardTitle title="Barbecue" />
                <CardText>
                    <p>The following foods are included. We will bring some snacks in case you still feel hungry after barbecue.</p>
                    <p>
                        <ul>
                            <li>1 x Pork steak</li>
                            <li>1 x Beef steak</li>
                            <li>1 x Chicken steak</li>
                            <li>3 x Chicken wings</li>
                            <li>6 x Meat balls</li>
                            <li>2 x Red sausages</li>
                            <li>2 x Sausages</li>
                        </ul>
                    </p>
                </CardText>
            </Card>
            <Card className="barbecueItem">
                <CardMedia>
                    <img
                        src={SoftDrinksImage}
                        style={{
                            maxWidth : '100%'
                        }} />
                </CardMedia>
                <CardTitle title="Soft drinks & beers" />
                <CardText>
                    <p>Two soft drinks per person are included. You can buy more from there.</p>
                    <p>
                        <ul>
                            <li>HK$ 10 Bottled water</li>
                            <li>HK$ 10 Can of soft drink</li>
                            <li>HK$ 16 Can of Tsingtao</li>
                            <li>HK$ 18 Small bottle of Blue Girl</li>
                        </ul>
                    </p>
                </CardText>
            </Card>
            <Card className="barbecueItem">
                <CardMedia>
                    <img
                        src={WinesImage}
                        style={{
                            maxWidth : '100%'
                        }} />
                </CardMedia>
                <CardTitle title="Wines" />
                <CardText>
                    <p>Red and white wines will be provided to our wine lovers. We will decide the wine selection later. Stay tuned!</p>
                </CardText>
            </Card>
        </div>
    );
};

export default muiThemeable()(Barbecue);
