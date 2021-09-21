import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function NoMatch() {

  return (
    <>
        <Container>
          <Row>
          <Col md="7">
            <h2 className="pt-5">
              OOPS! You don't want to see this!<br />
              <span className="small">
              This is probably not what you were looking for. <br />
                            </span>
            </h2>
                <Button variant="warning" href="/"><i className="fas fa-undo-alt"></i> Try again</Button>{' '}
         
            </Col>
          </Row>
          <Row>
          <Col>
          <img
                          className="img-fluid"
                          alt="..."
                          src={require("../assets/images/error.svg").default}
                        />
          </Col>
          </Row>
        </Container>
    </>
  );
}

export default NoMatch;

