import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Card from "../components/Card/Card";
import CardHeader from "../components/CardHeader/CardHeader"
import CardBody from "../components/CardBody/CardBody"
import DarkButton from "../components/DarkButton/DarkButton"



const styles = {
    img: {
        maxHeight: "75%",
        paddingLeft: "60px"
    },
}

function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="display-4 text-center">Portfolio</h1>
                        <hr />
                        <h5 className="lead text-center">A Collection and Projects and Assignments</h5>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <Card>
                        <CardHeader>
                            <h3>U-Pick</h3>

                        </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/unleash.png"} className="img-thumbnail" style={styles.img}
                                alt="Unleash" />
                            <hr className="my-4"></hr>
                            <DarkButton href="https://github.com/slogreco/artemis">Get the Repo
                        </DarkButton>
                            <DarkButton href="https://artemis-project-2.herokuapp.com/">View Deployment
                        </DarkButton>
                        </CardBody>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card>
                        <CardHeader>
                            <h3>Unleash</h3>
                        </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/unleash.png"} className="img-thumbnail" style={styles.img}
                                alt="Unleash" />
                            <hr className="my-4"></hr>
                            <DarkButton href="https://github.com/slogreco/artemis">Get the Repo
                        </DarkButton>
                            <DarkButton href="https://artemis-project-2.herokuapp.com/">View Deployment
                        </DarkButton>
                        </CardBody>
                    </Card>
                </Col>
                <Col size="md-4">
                <Card>
                    <CardHeader>
                        <h3>Dime Travel</h3>
                    </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/dimeTravel.png"} className="img-thumbnail" style={styles.img}
                                alt="Unleash" />
                            <hr className="my-4"></hr>
                            <DarkButton href="https://github.com/slogreco/dime-travel">Get the Repo
                        </DarkButton>
                            <DarkButton href="https://slogreco.github.io/dime-travel/">View Deployment
                        </DarkButton>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <br></br>
            </Row>
        </Container>

    );
}

export default Portfolio;