import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import IntroductionCard from './IntroductionCard';
import IntroductionInfo from './IntroductionInfo';
import WhatIDo from './WhatIDo';
import WorkExperience from './WorkExperience';

import NavbarTop from './NavbarTop';

import './Layout.css';
import './stars.css';


const Layout = () => {
    return (
        <Container fluid>
            <NavbarTop/>
            <div className="stars"/>
            <div className="twinkling"/>
            <Row className="particles">
            </Row>
            <div id="about"/>
            <Container className="introductionContainer" >
                <Row className="section-row">
                    <Col md={6} sm={12} xs={12}>
                        <IntroductionInfo/>
                    </Col>
                    <Col md={{size: 5, offset: 1}} sm={12} xs={12}>
                        <IntroductionCard/>
                    </Col>
                </Row>
            </Container>
            <div className="clouds">
            <Row className="whatIDo" id="whatIDo">
                <WhatIDo/>
            </Row>
            </div>
            <Container fluid className="journeyContainer">
                <h1 className="journeyTitle">My Journey into Tech</h1>
                <WorkExperience/>
            </Container>
            <Row className="projects">
            </Row>
            <footer>
            </footer>


        </Container>

    );
};

export default Layout;