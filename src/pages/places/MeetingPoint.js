// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazy-load';
import ReactGA from 'react-ga';
import './MeetingPoint.css';
import RaftEveningImage from '../../images/raft-evening.jpg';
import SamPuiChauPierImage from '../../images/sam-pui-chau-pier.jpg';
import TsengTauTsuenImage from '../../images/tseng-tau-tsuen.jpg';
import YungShueORaftImage from '../../images/yung-shue-o-raft.jpg';

class MeetingPoint extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <Card className="meetingPointItem">
                    <CardMedia>
                        <img
                            src={TsengTauTsuenImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle title={<div><strong>11:30 AM</strong> Tseng Tau Tsuen (井頭村) Minibus Terminus</div>} />
                    <CardText>
                        <p>If you take Green Minibus <a href="http://www.16seats.net/eng/gmb/gn_807k.html" title="Minibus route 807K" target="_blank">route 807K</a>, it will take you to Tseng Tau Tsuen at the last stop.</p>
                        <p>It should not be too difficult to walk to there even if you take other routes. Click <a href="/places/getting-there" title="Getting there">here</a> to learn how you can get there.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Meeting Point',
                                action   : 'Display',
                                label    : 'Google Map (Tseng Tau Tsuen Minibus Terminus)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118076.89549807012!2d114.09542218135105!3d22.357291765113327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040f135a9753fd%3A0x7b16803ad7ba2578!2sTseng+Tau+Tsuen!5e0!3m2!1sen!2shk!4v1497718219869" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p>There are 3 piers near Tseng Tau Tsuen. We will walk 10 minutes to the farthest one, Kei Ling Ha Hoi Pier (企嶺下海碼頭), aka Sam Pui Chau Pier (三杯酒碼頭).</p>
                    </CardText>
                </Card>
                <Card className="meetingPointItem">
                    <CardMedia>
                        <img
                            src={SamPuiChauPierImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle title={<div><strong>12:00 PM</strong> Sam Pui Chau Pier (三杯酒碼頭)</div>} />
                    <CardText>
                        <p>We will walk from the minibus terminus to the pier. Part of the road is covered by trees.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Meeting Point',
                                action   : 'Display',
                                label    : 'Google Map (Sam Pui Chau Pier)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497720781547!6m8!1m7!1sF%3A-fdAcu4b9pSo%2FVWPjmljUzqI%2FAAAAAAABNu8%2FuVblQhFXCA8dJteEehAfsukFs8jXNOuWwCJkC!2m2!1d22.4317466!2d114.2694121!3f215.51966352377502!4f18.855990498735693!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p>We will take the boat provided by the raft owner. In a few minutes, we will arrive at the raft.</p>
                    </CardText>
                </Card>
                <Card className="meetingPointItem">
                    <CardMedia>
                        <img
                            src={YungShueORaftImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle title={<div><strong>12:15 PM</strong> Yung Shue O Rafts (榕樹澳漁排)</div>} />
                    <CardText>
                        <p>There are over 100 rafts and we will spend our day on one of these.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Meeting Point',
                                action   : 'Display',
                                label    : 'Google Map (Yung Shue O Rafts)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497721548633!6m8!1m7!1sF%3A-VrMR0TfFtys%2FVgFlCaK9KWI%2FAAAAAAAAfXM%2FlgIkW-sv43ovS31ljaaIgvCJ37JFTIxQgCLIB!2m2!1d22.4219482!2d114.2769164!3f16.208133242012664!4f1.518324652762871!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                    </CardText>
                </Card>
                <Card className="meetingPointItem">
                    <CardMedia>
                        <img
                            src={RaftEveningImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle title={<div><strong>Evening</strong> Yung Shue O Rafts (榕樹澳漁排)</div>} />
                    <CardText>
                        <p>We will again take the boat provided by the raft owner to go back to the pier, and walk the way back to the minibus terminus.</p>
                        <p>We will dismiss at the minibus terminus. Some of us will take minibus route 807K, some may walk to the bus station, and some may take a taxi.</p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default muiThemeable()(MeetingPoint);
