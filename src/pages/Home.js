import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
// import { Container } from "react-bootstrap"




function Home() {
  return (

    // <Container>
    //     <Hero></Hero>
    // </Container>
    <Container fluid>
      <Hero />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <div className="row">
              <div className="col-4"><Link to="/about" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">About Shoshanah</Link></div>
              <div className="col-4"><Link to="/portfolio" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">Shoshanah's Portfolio</Link></div>
              <div className="col-4"><Link to="/contact" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">Contact Shoshanah</Link></div>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;