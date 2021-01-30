import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Link} from "react-router-dom"


function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
                      <h1>Shoshanah Lo Greco</h1>
            <hr className="my-4"></hr>
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