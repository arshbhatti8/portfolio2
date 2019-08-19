import React from 'react';
import {Col, Row, Container} from "reactstrap";

import './Layout.css';


const WhatIDo = () => {
    return (
        <>
            <Col md={6} sm={12} className="whatIDoGridLeft">
                <img src="https://i.ibb.co/8Y2Yq0R/all-logo.png" className="webDevelopmentImage"/>
            </Col>
            <Col md={6} sm={12} className="whatIDoGridRight">
            </Col>
        </>
    );
};

export default WhatIDo;