// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LazyLoad from 'react-lazy-load';
import './Fishing.css';
import FakeBaitImage from '../../images/fake-bait.jpg';
import FishingImage from '../../images/fishing.jpg';
import FishingPoleImage from '../../images/fishing-pole.jpg';
import FishingToolsImage from '../../images/fishing-tools.jpg';
import GrouperImage from '../../images/grouper.jpg';
import MottledSpinefootImage from '../../images/mottled-spinefoot.jpg';
import ShrimpImage from '../../images/shrimp.jpg';
import SnapperImage from '../../images/snapper.jpg';

class Fishing extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <Card className="fishingItem">
                    <CardMedia>
                        <img
                            src={FishingImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle
                        title="Fishing"
                        subtitle="A challenge of wild nature" />
                    <CardText>
                        <p>Fishing is an exciting and additive activity. You always want to catch more fish. You don't need to be a professional; what you need is just a set of basic gears, a few tricks, and patience. Usually you will learn how to fish in the first few minutes of trying. So don't worry even if you are a novice.</p>
                    </CardText>
                </Card>
                <Card className="fishingItem">
                    <CardTitle title="Kinds of fish" />
                    <CardText>
                        <p>The kinds of fish you will find vary depending on the season. In summer, you will always find groups of baby snappers and some small mottled spinefoot.</p>
                        <p><strong>Snapper (鱲魚)</strong></p>
                        <p>In summer, it is very easy to spot groups of baby snappers swim close to the water surface.</p>
                        <LazyLoad
                            width={768}
                            height={375}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={SnapperImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <p><strong>Mottled spinefoot (泥鯭)</strong></p>
                        <p>They are very active in summer. They taste sweet, and we can make exceptional tasty congee with them.</p>
                        <p><strong>Caution:</strong> Their fins can emit slight toxic substance. Avoid touching their fins or you may risk getting punctured, which is painful and you will feel paralyzed, immediately, for 30 minutes. But no worries, you won't die because of this ;-)</p>
                        <LazyLoad
                            width={768}
                            height={400}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={MottledSpinefootImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <p><strong>Grouper (石斑)</strong></p>
                        <p>Groupers are one of the most tasty fish and at the same time, one of the most difficult fish to catch. Usually they appear individually, swim close to the bottom of the sea, sometimes doing nothing and just sit, waiting for the best chance to catch her food. You will only find them if you are lucky or highly skilled.</p>
                        <LazyLoad
                            width={768}
                            height={444}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={GrouperImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                    </CardText>
                </Card>
                <Card className="fishingItem">
                    <CardTitle title="Tools" />
                    <CardText>
                        <p>We don't classify fishing tools as novice or professional. We choose the right tools according to the environment. Basically we divide fishing tools into 2 types, those with poles and those without. Both types are equally capable of catching any kind of fish.</p>
                        <p>Many people has a misconception that you need a fishing pole to catch big fish. In fact, the size of fish you can catch depends on the strength of the fishing wire, the size of the hook, and of course, the taste of the bait and your skill. The stronger the wire, the bigger fish you can catch before it breaks. The larger the hook, the larger bait you can use to attract bigger fish. However, a strong wire and large hook are thick and are more noticeable by fish, so it demands more fishing skills.</p>
                        <p></p>
                        <p><strong>Handheld fishing wire</strong></p>
                        <p>Pros</p>
                        <p>
                            <ul>
                                <li>Easy to setup</li>
                                <li>Easy to control</li>
                                <li>Very cheap</li>
                            </ul>
                        </p>
                        <p>Cons</p>
                        <p>
                            <ul>
                                <li>Not suitable to use near rocks</li>
                                <li>Baits are close to you so fish may be aware of you</li>
                            </ul>
                        </p>
                        <LazyLoad
                            width={768}
                            height={524}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={FishingToolsImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <p><strong>Fishing pole</strong></p>
                        <p>Pros</p>
                        <p>
                            <ul>
                                <li>Reach very far so fish cannot notice you</li>
                                <li>Provide extra strength</li>
                            </ul>
                        </p>
                        <p>Cons</p>
                        <p>
                            <ul>
                                <li>Expensive, price varies between hundreds to thousands</li>
                                <li>Complicate to setup</li>
                            </ul>
                        </p>
                        <LazyLoad
                            width={768}
                            height={600}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={FishingPoleImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                    </CardText>
                </Card>
                <Card className="fishingItem">
                    <CardTitle title="Baits" />
                    <CardText>
                        <p>Different kind of fish prefers different food. Most kinds of fish in Hong Kong like shrimps. Some like worms and don't even eat any shrimp at all. Choose your baits wisely based on the kind of fish you want.</p>
                        <p><strong>Antarctic shrimp</strong></p>
                        <p>These are small but have a very strong smell that can attract fish from far away. They live near the South Pole and grow in a huge amount. People use them as food for farmed animals and fishing baits.</p>
                        <p>We don't use shrimps available in local markets because they are usually too big that small fish won't eat it. If we cut the shrimp, it will easily dissolve under water.</p>
                        <p>We also don't use living shrimps because they are much more expensive, and it requires highly skilled techniques to hook it, or it will die immediately.</p>
                        <LazyLoad
                            width={768}
                            height={356}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={ShrimpImage}
                                    style={{
                                        maxWidth : '100%'
                                    }} />
                            </div>
                        </LazyLoad>
                        <br />
                        <p><strong>Worms</strong></p>
                        <p>Worms are smelly and they can still move under water for a long time even after we cut them into pieces. We don't use worms because they are more expensive than shrimps, much more uglier, and most importantly, they carry many bacterias that can be fatal to human.</p>
                        <p>Image of worms is omitted ;-)</p>
                        <p><strong>Home made baits</strong></p>
                        <p>Some professionals prefer home made baits which are made of cooked meat balls with added artificial favors. They are much cheaper other types of baits, but requires more skills when fishing because the bait looks unnatural to fish.</p>
                        <br />
                        <p><strong>Fake baits</strong></p>
                        <p>The cheapest bait is fake plastic baits which can be reused as many times as you want. It is only for the most skillful professionals who can let their baits move like a living fish under water. Usually it is used to catch squids and other big fish.</p>
                        <LazyLoad
                            width={768}
                            height={450}>
                            <div
                                style={{
                                    textAlign : 'center'
                                }}>
                                <img
                                    src={FakeBaitImage}
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

export default muiThemeable()(Fishing);
