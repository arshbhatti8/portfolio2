import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import IntroductionCard from './IntroductionCard';
import IntroductionInfo from './IntroductionInfo';

import NavbarTop from './NavbarTop';

import './Layout.css';


const Layout = () => {

    return (
        <Container fluid>
            <NavbarTop/>
            <Row className="particles">
            </Row>
            <Row>
                <Container>
                    <Row className="introduction-row">
                        <Col md={6} className="introduction-text">
                            <IntroductionInfo/>
                        </Col>
                        <Col md={{size: 5, offset: 1}} className="introduction-image-col">
                            <IntroductionCard/>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid className="whatIDo">

                </Container>
            </Row>
            <Row className="workExperience">
            </Row>
            <Row className="projects">
            </Row>
            <footer>
            </footer>
        </Container>

    );
};

export default Layout;