'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './css/icofont.min.css';

const initGA = (gaTrackingId) => {
    if (gaTrackingId) {
        ReactGA.initialize(gaTrackingId, {
            debug     : process.env.NODE_ENV === 'development',
            gaOptions : {
                siteSpeedSampleRate : 100
            }
        });
        ReactGA.plugin.require('linkid');
    }
};

const initHistory = (gaTrackingId) => {
    const history = createBrowserHistory();

    history.listen((location) => {
        if (gaTrackingId) {
            ReactGA.set({
                page : location.pathname
            });
            ReactGA.pageview(location.pathname);
        }
    });

    return history;
};

initGA(process.env.GA_TRACKING_ID);

ReactDOM.render(
    <Router history={initHistory(process.env.GA_TRACKING_ID)}>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
