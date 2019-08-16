import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

import './Layout.css';

const IntroductionCard = () => {
    return (
        <Card className="introduction-card">
            <CardImg top
                     className="introduction-card-image"
                     src="https://i.ibb.co/1dSrvMF/from-Portfolio.jpg"
                     alt="Card image cap"/>
            <CardBody>
                <CardTitle>Arsh Bhatti</CardTitle>
                <CardSubtitle>Connect with me on</CardSubtitle>
                <Button>Button</Button>
            </CardBody>
        </Card>

    );
};

export default IntroductionCard;