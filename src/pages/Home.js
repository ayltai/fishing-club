// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import LogoImage from '../images/logo.jpg';

class Home extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <Card className="homeItem">
                    <CardMedia>
                        <img
                            src={LogoImage}
                            style={{
                                maxWidth : '100%'
                            }} />
                    </CardMedia>
                    <CardTitle title="Fishing Club" />
                    <CardText>
                        <p>Welcome to our fishing club! We are going to hold our first ever fishing activity. Here you will find useful information in a nicely organized way.</p>
                        <p>We try to include as much detailed information as we can. Do let us know if we miss any information that you need. If you are in a hurry, please check <a href="/others/preparations" title="Preparations">Preparations</a> page where you will learn how to better prepare yourself for the activity.</p>
                        <p>Hope you will enjoy the activity.</p>
                        <br />
                        <p><small>The source code of this website is hosted on <a href="https://github.com/ayltai/fishing-club" title="GitHub">GitHub</a>.</small></p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default muiThemeable()(Home);
