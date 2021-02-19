import React from "react";
import { Image, Row, Col } from "react-bootstrap"
import "./style.css"


function Hero() {
    return (
            <Row>
                <Col xs={6} md={4}>
                    <Image src={process.env.PUBLIC_URL + "/assets/profile-img.jpg"} rounded className="profileImg" />
                </Col>
                <Col xs={12} md={8}>
                    <p className="name">Shoshanah Lo Greco</p>
                    <p>Hi I'm Shoshanah a Full Stack Web Developer</p>
                </Col>
            </Row>
    )
}

export default Hero;


