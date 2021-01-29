import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import CardBody from '../components/CardBody/CardBody';
import SocialButton from "../components/SocialButton/SocialButton"


function Contact() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Contact Shoshanah</h1>
                        <div>
                            <SocialButton href="https://www.linkedin.com/in/shoshanahlogreco/">
                                <i className="fab fa-linkedin-in"></i>
                            </SocialButton>
                            <SocialButton href="https://github.com/slogreco">
                                <i className="fab fa-github"></i>
                            </SocialButton>
                            <SocialButton href="mailto:shoshanahlogreco@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </SocialButton>
                        </div>
                        <hr class="my-4"></hr>
                        <CardBody>
                            <h3>Shoshanah Lo Greco</h3>
                            <h3>Email: <a href="mailto:someone@example.com">shoshanahlogreco@gmail.com</a></h3>
                            <h3>Phone Number: <a href="tel:5208508764">520-850-8764</a></h3>
                        </CardBody>
                    </Jumbotron>
                </Col>
            </Row >
            <Row>
                <Col size="md-12">
                    <h3 className="text-center">Shoshanah Lo Greco Resume:</h3>
                </Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-8" className="justify-content-md-center">
                    <iframe src={process.env.PUBLIC_URL + "/assets/resume.pdf"} title="Resume" width="75%" height="500px">
                    </iframe>
                </Col>
            </Row>
        </Container >
    );
}

export default Contact;