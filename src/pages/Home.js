import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";


function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
                      <h1>Shoshanah Lo Greco</h1>
            <hr className="my-4"></hr>
            <div className="row">
              <div className="col-4"><a href="/about" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">About Shoshanah</a></div>
              <div className="col-4"><a href="/portfolio" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">Shoshanah's Portfolio</a></div>
              <div className="col-4"><a href="/contact" className="btn btn-outline-light btn-lg btn-block"
                role="button" aria-pressed="true">Contact Shoshanah</a></div>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;