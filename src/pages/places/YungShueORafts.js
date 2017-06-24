// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazy-load';
import ReactGA from 'react-ga';
import './YungShueORafts.css';
import OurRaft1Image from '../../images/our-raft-1.jpg';
import OurRaft2Image from '../../images/our-raft-2.jpg';
import OurRaft3Image from '../../images/our-raft-3.jpg';
import RaftFloatingImage from '../../images/raft-floating.jpg';
import YungShueORaftsIcs from '../../ics/YungShueORafts.ics';

class YungShueORafts extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
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
                        <p>Yung Shue O fish cultivation facilities have become sites for recreational activities since 15 years ago (2002) as one of the steps the Government planned to promote local economic growth. There are over a hundred fish cultivation rafts. Some of them feature water sports, some feature fishing in closed areas where the fish is trapped. The one we chose is 魚樂會, where we are going to fish in the middle of the ocean!</p>
                        <p>A fish cultivation raft is a floating structure, built using woods with large empty plastic cylinder containers underneath. The structure is so large that you can hardly feel you are floating on water.</p>
                    </CardText>
                </Card>
                <Card className="yungShueORaftItem">
                    <CardTitle title="The event" />
                    <CardText>
                        <p>The event will be held on <strong>July 9, 2017 (Sunday)</strong>, from noon till evening.</p>
                        <p>
                            Reserve your day by importing this iCalendar appointment file to your device:<br />
                            <span
                                style={{
                                    fontSize : 'xx-large'
                                }}>
                                <a href={YungShueORaftsIcs} title="iCalendar appointment"><i className="icofont icofont-ui-calendar"></i></a>
                            </span>
                        </p>
                        <LazyLoad
                            width={768}
                            height={640}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Yung Shue O Rafts',
                                action   : 'Display',
                                label    : 'our-raft-1'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={OurRaft1Image}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <LazyLoad
                            width={768}
                            height={400}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Yung Shue O Rafts',
                                action   : 'Display',
                                label    : 'our-raft-2'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={OurRaft2Image}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <LazyLoad
                            width={768}
                            height={400}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Yung Shue O Rafts',
                                action   : 'Display',
                                label    : 'our-raft-3'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={OurRaft3Image}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default muiThemeable()(YungShueORafts);
