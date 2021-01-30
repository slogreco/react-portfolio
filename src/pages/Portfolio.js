import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Card from "../components/Card/Card";
import CardHeader from "../components/CardHeader/CardHeader"
import CardBody from "../components/CardBody/CardBody"
import DarkButton from "../components/DarkButton/DarkButton"




const styles = {
    img: {
        maxHeight: "250px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    text: {
        color: '#F0E4D8'
    }
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
                            <img src={process.env.PUBLIC_URL + "/assets/u-pick.jpg"} className="img-thumbnail" style={styles.img}
                                alt="U-Pick" />
                            <hr className="my-4"></hr>
                            <p>With the U-Pick application indecisiveness won't stop you from getting food, drinks, or seeing a movie with friends.</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/joeybrown-ctrl/U-Pick" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://u-pick-app.herokuapp.com/" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
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
                            <p> With the application Unleash a user can create a profile for their pet, have it displayed publicly, then apply for open job applications.</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/slogreco/artemis" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://artemis-project-2.herokuapp.com/" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
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
                            <p>The Dime Travel application allows you to visualize your vacation destination while viewing the currency exchange rate.</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/slogreco/dime-travel" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://slogreco.github.io/dime-travel/" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <br></br>
            </Row>
            <Row>
                <Col size="md-4">
                    <Card>
                        <CardHeader>
                            <h3>Password Generator</h3>
                        </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/PasswordGenerator.jpg"} className="img-thumbnail" style={styles.img}
                                alt="Password Generator" />
                            <hr className="my-4"></hr>
                            <p>Utilizes JavaScript to make a functional random password generator.</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/slogreco/password-generator" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://slogreco.github.io/password-generator/" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
                        </CardBody>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card>
                        <CardHeader>
                            <h3>ReadMe Generator</h3>
                        </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/read-me-generator.jpg"} className="img-thumbnail" style={styles.img}
                                alt="ReadMe Generator" />
                            <hr className="my-4"></hr>
                            <p>A command-line applicaiton where a readme.md file is created using Node.js</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/slogreco/read-me-generator" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://drive.google.com/file/d/1GOjgRXHBdUv4DuS7IhZkkrjtil4HvbJc/view" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
                        </CardBody>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Card>
                        <CardHeader>
                            <h3>Budget Tracker</h3>
                        </CardHeader>
                        <CardBody>
                            <img src={process.env.PUBLIC_URL + "/assets/budget-tracker.jpg"} className="img-thumbnail" style={styles.img}
                                alt="Budget Tracker" />
                            <hr className="my-4"></hr>
                            <p>This budget tracking app is a PWA that allows the user to add expenses and deposits to their budget whether or not they have an internet connection.</p>
                            <hr className="my-4"></hr>
                            <a href="https://github.com/slogreco/budget-tracker" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> Get the Repo </DarkButton></a>
                            <a href="https://budget-tracker-4000.herokuapp.com/" style={styles.text} target="_blank" rel="noreferrer"><DarkButton> View Deployment </DarkButton></a>
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