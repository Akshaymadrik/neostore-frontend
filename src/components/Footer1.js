import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function Footer1() {
  return (
    <>
      <Container fluid className="justify-content-between my-1">
        <Row xs="3" className="bg-dark text-white text-center p-2">
          <Col className="px-5 py-2">
            <h5 className="p-2">
              <b>About Company</b>
            </h5>
            <p>
              NeoSotore quick and easy service for
              shopping <br /> Contact Information <br /> Email:
              contact@neosoftmail.com <br />
              Phone: +91 123456789 <br />
              BNEGALURU, INDIA
            </p>
            <p></p>
          </Col>
          <Col className="px-5 py-2">
            <h5 className="p-2">
              <b>Information</b>
            </h5>
            <p>
              Terms and Conditions <br />
              
              Contact Us
              <br />
              Privacy Policy
              <br />
              Locate Us
            </p>
          </Col>
          <Col className="px-5 py-2">
            <h5 className="p-2">For more Info</h5>
            <p>
              Signup to get exclusive offer from our favorite branch and to get
              news <br />
            </p>
            <Form className="px-2">
              <Form.Control type="text" placeholder="Enter email.." />
              <Button className="my-1" variant="primary">
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
