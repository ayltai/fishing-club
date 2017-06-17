// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './GettingThere.css';

const GettingThere = () : any => {
    return (
        <div>
            <Card className="gettingThereItem">
                <CardMedia overlay={<CardTitle title="Tseng Tau Tsuen (井頭村) Minibus Terminus" />}>
                    <div dangerouslySetInnerHTML={{
                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497689580935!6m8!1m7!1s6AYgUM4BRD8kvHozZpjBsg!2m2!1d22.42711954906949!2d114.2686072335166!3f130.59760056577662!4f-4.069780523952858!5f0.7820865974627469" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>'
                    }} />
                </CardMedia>
                <CardTitle title="Minibus route 807K" />
                <CardText>
                    <div>
                        <p>You can take Green Minibus <a href="http://www.16seats.net/eng/gmb/gn_807k.html" title="Minibus route 807K" target="_blank">route 807K</a> at University Station or Ma On Shan. <strong>Make sure not to be confused with minibus routes 807A and 807B.</strong> They are different routes.</p>
                        <p><strong>Pick-up point:</strong> University Station / Fok On Shopping Arcade, near Ma On Shan Station</p>
                        <div
                            style={{
                                textAlign : 'center'
                            }}
                            dangerouslySetInnerHTML={{
                                __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497695415894!6m8!1m7!1sq4PRDYAMfsRvKp8-3lKxrQ!2m2!1d22.42493714793533!2d114.2293410616572!3f255.40645450677786!4f1.87654003892564!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                            }} />
                        <p><strong>Drop-off point:</strong> Tseng Tau Tsuen (井頭村) Minibus Terminus</p>
                    </div>
                </CardText>
            </Card>
            <Card className="gettingThereItem">
                <CardMedia overlay={<CardTitle title="Tseng Tau Tsuen (井頭村) intersection" />}>
                    <div dangerouslySetInnerHTML={{
                        __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497694361846!6m8!1m7!1syUFsmg7RAM4O7Qa6hHlaIw!2m2!1d22.4246578536519!2d114.2631817287665!3f356.1821297900994!4f0.47286029743999336!5f0.7820865974627469" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>'
                    }} />
                </CardMedia>
                <CardTitle
                    title="Bus routes 299X / 99"
                    subtitle="May get into a traffic jam" />
                <CardText>
                    <div>
                        <p><strong>Pick-up point:</strong> Sai Kung Bus Terminus</p>
                        <p>You can take bus routes 299X or 99. Both routes go via Sai Sha Road. Although route 299X usually take less time, sometimes the queue is very long or it is already very full such that you may want to take route 99 instead.</p>
                        <p>Note that you may get into a traffic jam because these routes go via Sai Kung city center. Make sure to check Google Map for real-time traffic information before taking these routes.</p>
                        <div
                            style={{
                                textAlign : 'center'
                            }}
                            dangerouslySetInnerHTML={{
                                __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29508.814602610182!2d114.24559441125844!3d22.406363232863576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x34040597e48e7035%3A0xd35e26f938451819!2sSai+Kung+Bus+Terminus%2C+Sai+Kung!3m2!1d22.382172!2d114.273822!4m5!1s0x34040f135a9753fd%3A0x7b16803ad7ba2578!2sTseng+Tau+Tsuen!3m2!1d22.427825!2d114.269397!5e0!3m2!1sen!2shk!4v1497692618840" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                            }} />
                        <p><strong>Drop-off point:</strong> Kei Ling Ha San Wai (企嶺下新圍)</p>
                        <div
                            style={{
                                textAlign : 'center'
                            }}
                            dangerouslySetInnerHTML={{
                                __html : '<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1497693896759!6m8!1m7!1sncIgVETHXjkyHZZDHuD46w!2m2!1d22.42446573387123!2d114.2632637667211!3f339.64823703835924!4f4.007460564200628!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                            }} />
                        <p><strong>Walk:</strong> About 15 minutes, 1.0 km</p>
                    </div>
                </CardText>
            </Card>
            <Card className="gettingThereItem">
                <CardTitle
                    title="GoGoVan"
                    subtitle="Cheaper than taxi" />
                <CardText>
                    {
                        // eslint-disable-next-line
                        <div>
                            <p>You can take GoGoVan and share the fare between 2 to 4 passengers. It is a little cheaper than taxi. Tell the driver the drop-off point is Tseng Tau Tsuen (井頭村) Minibus Terminus, Sai Kung. Most drivers know where it is and they will choose the fastest route for you.</p>
                            <p>Check out their <a href="https://itunes.apple.com/hk/app/gogovan/id708390467" target="_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=hk.gogovan.GoGoVanClient2" target="_blank">Android</a> app.</p>
                            <p><i>There will be a holiday charge of HK$ 15</i></p>
                        </div>
                    }
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
};

export default muiThemeable()(GettingThere);
