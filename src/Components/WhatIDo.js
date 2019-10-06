import React, {memo} from 'react';
import {Col, Row} from "reactstrap";
import htmlLogo from '../assets/htmlLogo.png';
import jsLogo from '../assets/jsLogo.png';
import cssLogo from '../assets/cssLogo.png';
import reactLogo from '../assets/reactLogo.png';
import angularLogo from '../assets/angularLogo.png';
import reduxLogo from '../assets/reduxLogo.png';
import restLogo from '../assets/restLogo.png';
import nodeLogo from '../assets/nodeLogo.png';
import expressLogo from '../assets/expressLogo.png';
import mongoDBLogo from '../assets/mongoDBLogo.png';
import mySQLLogo from '../assets/mySQLLogo.png';

import './Layout.css';
import Container from "reactstrap/es/Container";

const WhatIDo = memo(() => {
    return (
        <Container className="whatIDoContainer">
            <h1>What I Do</h1>
            <Row className="whatIdoTopRow">
                <Col md={6} sm={12}>
                    <Row>
                        <img src={htmlLogo}
                             className="webDevelopmentLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={jsLogo}
                             className="webDevelopmentLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={cssLogo}
                             className="webDevelopmentLogo"
                             alt="HTML5, CSS3, Javascript"/>
                    </Row>
                    <Row>
                        <h2>WEB DEVELOPMENT</h2>
                        <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt,
                            I have a passion for developing pixel-perfect websites and apps while maintaining a
                            semantic,
                            modular, and DRY code base.
                        </p>
                    </Row>
                </Col>
                <Col md={6} sm={12}>
                    <Row>
                        <img src={reactLogo}
                             className="reactLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={angularLogo}
                             className="angularLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={reduxLogo}
                             className="reactLogo"
                             alt="HTML5, CSS3, Javascript"/>
                    </Row>
                    <Row className="frontEndFrameworksTitle">
                        <h2>FRONT-END FRAMEWORKS</h2>
                        <p>"A user interface is like a joke. If you have to explain it, it's not that good."
                            I strive to develop and implement responsive and aesthetically pleasing interfaces for
                            websites
                            and apps that adapt to any type of device, platform,
                            or browser.
                        </p>
                    </Row>
                </Col>
            </Row>
            <Row className="whatIdoBottomRow">
                <Col md={6} sm={12}>
                    <Row>
                        <img src={restLogo}
                             className="restLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={nodeLogo}
                             className="nodeLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={expressLogo}
                             className="expressLogo"
                             alt="HTML5, CSS3, Javascript"/>
                    </Row>
                    <Row>
                        <h2>BACKEND LIBRARIES</h2>
                        <p>Most of the cli packages use Express as its default server, so I default myself to Express as
                            well for server needs.
                            And to keep it a javascript only environment, for most of my academic projects, I have
                            chosen
                            NodeJS to be the language of the API.
                            I have designed REST APIs for my academic projects at SJSU.
                        </p>
                    </Row>
                </Col>
                <Col md={6} sm={12}>
                    <Row>
                        <img src={mongoDBLogo}
                             className="mongoDBLogo"
                             alt="HTML5, CSS3, Javascript"/>
                        <img src={mySQLLogo}
                             className="mySQLLogo"
                             alt="HTML5, CSS3, Javascript"/>
                    </Row>
                    <h2>DATABASES</h2>
                    <Row>
                        <p>Depending upon the project and its needs, I usually choose between the either of these:
                            MongoDB
                            or MySQL. Both of these technologies:
                            SQL and noSQL have their respective pros and cons and I prefer both in different scenarios
                            as
                            they are appropriately applicable.
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default WhatIDo;