import React from "react";
import { Container, Row, Col } from "reactstrap";

import IntroductionCard from "./IntroductionCard";
import IntroductionInfo from "./IntroductionInfo";
import WhatIDo from "./WhatIDo";
import WorkExperience from "./WorkExperience";

import NavbarTop from "./NavbarTop";

import "./Layout.css";

const Layout = () => {
  return (
    <Container fluid>
      <NavbarTop />
      <Row className="particles"></Row>
      <Container>
        <Row className="section-row">
          <Col md={6} sm={12} xs={12}>
            <IntroductionInfo />
          </Col>
          <Col md={{ size: 5, offset: 1 }} sm={12} xs={12}>
            <IntroductionCard />
          </Col>
        </Row>
      </Container>
      <Container fluid className="whatIDo">
        <Row className="whatIDoRow">
          <WhatIDo />
        </Row>
      </Container>
      <Container className="workExperience">
        <WorkExperience />
      </Container>
      <Row className="projects"></Row>
      <footer></footer>
    </Container>
  );
};

export default Layout;
