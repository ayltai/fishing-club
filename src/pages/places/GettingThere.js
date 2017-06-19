// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazy-load';
import ReactGA from 'react-ga';
import './GettingThere.css';

class GettingThere extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <Card className="gettingThereItem">
                    <CardTitle
                        title={<div><strong>From Tai Po / Ma On Shan</strong> Minibus route 807K</div>}
                        subtitle="Departs every 7 to 10 minutes" />
                    <CardText>
                        <p>You can take Green Minibus <a href="http://www.16seats.net/eng/gmb/gn_807k.html" title="Minibus route 807K" target="_blank">route 807K</a> at University Station or Ma On Shan. <strong>Make sure not to be confused with minibus routes 807A and 807B.</strong> They are different routes.</p>
                        <p><strong>Pick-up point:</strong> University Station / Ma On Shan Park, next to Ma On Shan Plaza</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Minibus route 807K)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497710040386!6m8!1m7!1sUnhVj7KuThpP32n-v7Aqyg!2m2!1d22.42587753254536!2d114.2309455589173!3f66.54543307736353!4f14.938532675884844!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p><strong>Drop-off point:</strong> Tseng Tau Tsuen (井頭村) Minibus Terminus</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Tseng Tau Tsuen Minibus Terminus)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497710372836!6m8!1m7!1s6AYgUM4BRD8kvHozZpjBsg!2m2!1d22.42711954906949!2d114.2686072335166!3f133.38779224475027!4f3.9645947317568186!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                    </CardText>
                </Card>
                <Card className="gettingThereItem">
                    <CardTitle
                        title={<div><strong>From Shatin</strong> Bus routes 299X</div>}
                        subtitle="It's a bit slow" />
                    <CardText>
                        <p><strong>Pick-up point:</strong> Sai Kung Bus Terminus</p>
                        <p>You can take bus route 299X. It takes about 1 hour from New Town Plaza to the drop-off point.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Bus routes 299X)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29509.27094487426!2d114.22016115525014!3d22.404214077644557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x340407ada8273715%3A0xde0938ac1ae32e74!2sNew+Town+Plaza%2C+18+Sha+Tin+Centre+St%2C+Sha+Tin!3m2!1d22.3814592!2d114.1889307!4m5!1s0x34040f135a9753fd%3A0x7b16803ad7ba2578!2sTseng+Tau+Tsuen%2C+Hong+Kong!3m2!1d22.427825!2d114.269397!5e0!3m2!1sen!2shk!4v1497710991792" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p><strong>Drop-off point:</strong> Tai Tung (大洞)</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Tai Tung)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497712107758!6m8!1m7!1sncIgVETHXjkyHZZDHuD46w!2m2!1d22.42446573387123!2d114.2632637667211!3f136.3708193242854!4f-2.9868229881180497!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p><strong>Walk:</strong> About 15 minutes, 1.0 km</p>
                    </CardText>
                </Card>
                <Card className="gettingThereItem">
                    <CardTitle
                        title={<div><strong>From Sai Kung</strong> Bus routes 299X / 99</div>}
                        subtitle="May get into a traffic jam" />
                    <CardText>
                        <p><strong>Pick-up point:</strong> Sai Kung Bus Terminus</p>
                        <p>You can take bus routes 299X or 99. Both routes go via Sai Sha Road. Although route 299X usually take less time, sometimes the queue is very long or it is already very full such that you may want to take route 99 instead.</p>
                        <p>Note that you may get into a traffic jam because these routes go via Sai Kung city center. Make sure to check Google Map for real-time traffic information before taking these routes.</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Bus routes 299X / 99)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29508.814602610182!2d114.24559441125844!3d22.406363232863576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x34040597e48e7035%3A0xd35e26f938451819!2sSai+Kung+Bus+Terminus%2C+Sai+Kung!3m2!1d22.382172!2d114.273822!4m5!1s0x34040f135a9753fd%3A0x7b16803ad7ba2578!2sTseng+Tau+Tsuen!3m2!1d22.427825!2d114.269397!5e0!3m2!1sen!2shk!4v1497692618840" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p><strong>Drop-off point:</strong> Tin Liu (田寮)</p>
                        <LazyLoad
                            width={768}
                            height={450}
                            onContentVisible={() : void => ReactGA.event({
                                category : 'Getting There',
                                action   : 'Display',
                                label    : 'Google Map (Tin Liu)'
                            })}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497711677078!6m8!1m7!1sUJwlAQe0-iybTxI480yxGQ!2m2!1d22.42470620291166!2d114.2631617875714!3f337.75344486039717!4f-6.514110221753683!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                                    }} />
                            </div>
                        </LazyLoad>
                        <p><strong>Walk:</strong> About 15 minutes, 1.0 km</p>
                    </CardText>
                </Card>
                <Card className="gettingThereItem">
                    <CardTitle
                        title="GoGoVan"
                        subtitle="Cheaper than taxi" />
                    <CardText>
                        <p>You can take GoGoVan and share the fare between 2 to 4 passengers. It is a little cheaper than taxi. Tell the driver the drop-off point is Tseng Tau Tsuen (井頭村) Minibus Terminus, Sai Kung. Most drivers know where it is and they will choose the fastest route for you.</p>
                        <p>Check out their <a href="https://itunes.apple.com/hk/app/gogovan/id708390467" target="_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=hk.gogovan.GoGoVanClient2" target="_blank">Android</a> app.</p>
                        <p><i>There will be a holiday charge of HK$ 15</i></p>
                    </CardText>
                </Card>
                <Card className="gettingThereItem">
                    <CardTitle
                        title="Taxi"
                        subtitle="Never get lost" />
                    <CardText>You won't get lost if you take a taxi. Depending on where the taxi pick-up point is, you may want remind the driver <strong>not</strong> to enter Sai Kung city center because traffic is usually congested on weekends. If feasible, go via Ma On Shan instead.</CardText>
                </Card>
            </div>
        );
    }
}

export default muiThemeable()(GettingThere);
