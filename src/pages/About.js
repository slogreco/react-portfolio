import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import DarkButton from "../components/DarkButton/DarkButton";
import {Link} from "react-router-dom"

const styles = {
    img: {
        height: "75%",
        paddingLeft: "60px"
    },
    header: {
        paddingTop: "10px"
    }
}


function About() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>About Shoshanah</h1>
                        <hr className="my-4"></hr>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <img src={process.env.PUBLIC_URL + "/assets/profile-img.jpg"} className="rounded" style={styles.img}
                        alt="Shoshanah" />
                </Col>
                <br></br>
                <Col size="md-8">
                    <h3 style={styles.header}>Shoshanah's Bio</h3>
                    <br></br>
                    <p> Shoshanah is a junior software engineer with a background in social media marketing management
                    and patient resource management. She recently earned a certificate in full stack web development
                    from the University of Arizona, with newly developed skills in HTML, CSS, JavaScript, and
                    responsive web design.
                    </p>
                    <p>She successfully developed weekly content for business’ social media platforms including
                    Facebook, Instagram, YouTube, and weekly email using MailChimp, all the while regularly updating
                    the business’ website. She creates content that is not only relevant but also visually appealing
                    and geared towards engaging users in unique and impactful ways. She has adeptly created a
                    successful business website with a mind towards ease of use, striking content display, and ready
                        access to relevant information .</p>
                    <p>Shoshanah is passionate about creating life-enhancing user experiences while collaborating with
                    others to develop meaningful content. She is positioned to provide unique perspectives on how
                    front end users interact within emails by leveraging her background to create fast paced,
                        quality driven, and user friendly content.</p>
                    <br />
                    <Link to="/contact">
                        <DarkButton>
                            Check out Shoshanah's Resume
                        </DarkButton>
                    </Link>
                </Col>
            </Row>
        </Container>
    );

}


export default About;