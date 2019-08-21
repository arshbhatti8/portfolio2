import React, {memo} from 'react';
import {Col, Row} from "reactstrap";

import './Layout.css';
import Container from "reactstrap/es/Container";

const WhatIDo = memo(() => {
    return (
        <Container className="whatIDoContainer">
            <h1>What I Do</h1>
            <Row>
                <Col md={6} sm={12} style={{border:"1px solid grey", borderLeft:"0"}}>
                    <img src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
                         className="webDevelopmentImage"
                         alt="HTML5, CSS3, Javascript"/>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I
                        have a passion for developing pixel-perfect websites and apps while maintaining a semantic,
                        modular, and DRY code base.
                    </p>
                </Col>
                <Col md={6} sm={12} style={{border:"1px solid grey", borderRight:"0"}}>
                    <img src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
                         className="webDevelopmentImage"
                         alt="HTML5, CSS3, Javascript"/>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I
                        have a passion for developing pixel-perfect websites and apps while maintaining a semantic,
                        modular, and DRY code base.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12} style={{border:"1px solid grey", borderLeft:"0", borderBottom:"0"}}>
                    <img src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
                         className="webDevelopmentImage"
                         alt="HTML5, CSS3, Javascript"/>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                </Col>
                <Col md={6} sm={12} style={{border:"1px solid grey", borderRight:"0", borderBottom:"0"}}>
                    <img src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
                         className="webDevelopmentImage"
                         alt="HTML5, CSS3, Javascript"/>
                    <h1>WEB DEVELOPMENT</h1>
                    <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                </Col>
            </Row>
        </Container>
    );
});

export default WhatIDo;