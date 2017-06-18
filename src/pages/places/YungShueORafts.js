// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './YungShueORafts.css';
import RaftFloatingImage from '../../images/raft-floating.jpg';

const YungShueORafts = () : any => {
    return (
        <div>
            <Card className="yungShueORaftItem">
                <CardMedia>
                    <img
                        src={RaftFloatingImage}
                        style={{
                            maxWidth : '100%'
                        }} />
                </CardMedia>
                <CardTitle title="Yung Shue O Rafts (榕樹澳漁排)" />
                <CardText>
                    <p>Yung Shue O fish cultivation facilities have become sites for recreational activities since 15 years ago (2002) as one of the steps the Government planned to promote local economic growth. There are over a hundred fish cultivation rafts. Some of them feature water sports, some feature fishing in closed areas. The one we chosed is 魚樂會, where we are going to fish in the middle of the ocean!</p>
                    <p>A fish cultivation raft is a floating structure, built using woods with large empty plastic cylinder containers underneath. The structure is so large that you can hardly feel you are floating on water.</p>
                </CardText>
            </Card>
        </div>
    );
};

export default muiThemeable()(YungShueORafts);