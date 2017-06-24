// @flow
'use strict';

import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FaqItem from './FaqItem';

class Faq extends React.Component {
    componentDidMount() : void {
        window.scrollTo(0, 0);
    }

    render() : any {
        return (
            <div>
                <FaqItem
                    question="Are we going to rent a yacht and fishing at sea?"
                    answer={<div>Not exactly. We will meet at <a href="https://goo.gl/maps/4kfABNV6Pc92" title="Tseng Tau Tsuen (井頭村)" target="_blank">Tseng Tau Tsuen (井頭村)</a>, walk a few minutes to <a href="https://goo.gl/maps/R4qv67i4KX42" title="Kei Ling Ha Hoi Pier (企嶺下海碼頭), aka Sam Pui Chau Pier (三杯酒碼頭)" target="_blank">Kei Ling Ha Hoi Pier (企嶺下海碼頭), aka Sam Pui Chau Pier (三杯酒碼頭)</a>, and take a boat to <a href="https://goo.gl/maps/P7zwgrFRq8t" title="Yung Shue O rafts (榕樹澳漁排)" target="_blank">Yung Shue O rafts (榕樹澳漁排)</a>, which is a group of fish cultivation facilities floating on the sea.</div>} />
                <FaqItem
                    question="What if there is bad weather?"
                    answer={
                        <div>
                            <p>
                                <strong>Typhoon</strong><br />
                                The activity will be re-scheduled when Typhoon Signal No. 8 or above is hoisted. Please check our <a href="https://9gag.slack.com/messages/G5L8FC3SQ">Slack channel</a> for announcements.
                            </p>
                            <p>
                                <strong>Rainstorm</strong><br />
                                If an Amber, Red, or Black Rainstorm Warning Signal is in force <i>before</i> the activity, we may decide to re-schedule the activity. Please check our <a href="https://9gag.slack.com/messages/G5L8FC3SQ">Slack channel</a> for announcements.<br />
                                If an Amber, Red, or Black Rainstorm Warning Signal is in force <i>during</i> the activity, the activity will continue.
                            </p>
                        </div>
                    } />
                <FaqItem
                    question="Can I swim there?"
                    answer="Sure! The water quality there is good. Swimming is one of the typical activities there. Remember to bring your swimwear." />
                /*
                <FaqItem
                    question={'What is Star beach? What\'s so special about it?'}
                    answer="Blah blah blah" />
                */
                <FaqItem
                    question="What types of fish can I catch there?"
                    answer="Usually in summer, you will find groups of baby snappers (鱲魚) and some mottled spinefoot (泥鯭). Sometimes if you are lucky, you may catch small groupers (石斑)." />
                <FaqItem
                    question="Is there any mobile network coverage?"
                    answer="Of course! It is covered by all mobile network providers." />
            </div>
        );
    }
}

export default muiThemeable()(Faq);
