import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  Card,
  CardHeader,
} from "reactstrap";

function Contact() {
  const [state, handleSubmit] = useForm("mzbyyngr");
  if (state.succeeded) {
    return (
           <Container>
        <Row className="justify-content-md-center mt-250">
    <Col xs lg="5">
     
 
        <Alert color="success">Thanks for getting in touch! </Alert>
           </Col>
     </Row>
     </Container>
    );
  }
  return (
    <>
  
      <Container fluid className="me-5">
  
        <Row className="d-flex justify-content-center" >
          <Col xs={12} md={6}>
              <Row>
                <Col>
                  <h2>Questions?</h2>
                  <p>
                    We are here to answer any questions about adoptions and/or
                    sponsorships.{" "}
                  </p>
                </Col>
                <Col xs lg="2">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../assets/images/contact-dog.svg").default}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardHeader>
                      <h3>Contact Us</h3>
                    </CardHeader>
                    <Form onSubmit={handleSubmit} className="p-4">
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Enter Your Email"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </FormGroup>

                      <FormGroup className="mt-3">
                        <Input
                          type="textarea"
                          name="message"
                          placeholder="Send me a note..."
                          id="message"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </FormGroup>
                      <Button
                        className="mt-3"
                        color="success"
                        type="submit"
                        disabled={state.submitting}
                      >
                        Submit
                      </Button>
                    </Form>
                  </Card>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container>
  
    </>
  );
}

export default Contact;
