import React from "react";
import { Col, Row, Container } from "reactstrap";

import "./Layout.css";

const WhatIDo = () => {
  return (
    <>
      <Col md={6} sm={12} className="whatIDoGridLeft">
        <Row>
          <img
            src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
            alt="web-development"
            className="webDevelopmentImage"
          />
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Using HTML, CSS, and JavaScript,I have a passion for developing
            pixel-perfect websites and apps while maintaining a semantic,
            modular, and DRY code base.
          </p>
        </Row>
        <Row className="whatIDoGridBottomRow">
          <img
            src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
            alt="web-development"
            className="webDevelopmentImage"
          />
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Using HTML, CSS, and JavaScript with pre-processors and build tools
            such as Sass and Grunt, I have a passion for developing
            pixel-perfect websites and apps while maintaining a semantic,
            modular, and DRY code base.
          </p>
        </Row>
      </Col>
      <Col md={6} sm={12}>
        <Row>
          <img
            src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
            alt="web-development"
            className="webDevelopmentImage"
          />
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Using HTML, CSS, and JavaScript with pre-processors and build tools
            such as Sass and Grunt, I have a passion for developing
            pixel-perfect websites and apps while maintaining a semantic,
            modular, and DRY code base.
          </p>
        </Row>
        <Row className="whatIDoGridBottomRow">
          <img
            src="https://i.ibb.co/8Y2Yq0R/all-logo.png"
            alt="web-development"
            className="webDevelopmentImage"
          />
          <h3>WEB DEVELOPMENT</h3>
          <p>
            Using HTML, CSS, and JavaScript with pre-processors and build tools
            such as Sass and Grunt, I have a passion for developing
            pixel-perfect websites and apps while maintaining a semantic,
            modular, and DRY code base.
          </p>
        </Row>
      </Col>
    </>
  );
};

export default WhatIDo;
