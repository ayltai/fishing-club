// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazy-load';
import ReactGA from 'react-ga';
import './StarBeach.css';
import StarBeachImage from '../../images/star-beach.jpg';
import StarfishImage from '../../images/starfish.jpg';

class StarBeach extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <Card className="starBeachItem">
                    <CardMedia>
                        <img
                            src={StarBeachImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle
                        title="Star beach (星星灘)"
                        subtitle="A good place for selfies" />
                    <CardText>
                        <p>It is a beach covered entirely by water and only appears when the tide is low. It was a place with no name, and people start to call it "Star beach" because the water there is so clear that many starfishes live in there.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Star Beach',
                                action   : 'Display',
                                label    : 'Starfish'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={StarfishImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p>Sadly, due to heavy pollutions, we can no longer find that many starfishes there as shown in the above image. But still, we will find some, and you can even put it in your hands to feel when it crawls.</p>
                    </CardText>
                </Card>
                <Card className="starBeachItem">
                    <CardTitle title="How and when to visit Star beach?" />
                    <CardText>
                        <p>Star beach is covered by water when the tide is high, so we have to wait until the tide is low enough. For only once a day, the tide is at its lowest level. The time of a low tide is not fixed and is shifted about 1 hour each day. That's why we picked certain weekends when a low tide will appear in day time. On that day it will be around 3pm to 5pm, the beach will appear for about 1 hour.</p>
                        <p>The raft owner will pay close attention to the tide and let us know when the time has come. From the raft, we will take a boat and travel to the beach in a few minutes. The beach will be surrounded by shallow water where the boat will not go too close to it, or it will be stranded. Therefore, we will leave the boat, jump into water, and walk to the beach. The water level there is about 2 to 3 feet (about as high as our hip).</p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default muiThemeable()(StarBeach);
