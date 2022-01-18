import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Footer1 from "./Footer1";
import Nav1 from "./Nav1";
export default function Home() {
  return (
    <>
      <Nav1 />
      <Container>
        <Card className="mt-4">
          <Card.Header>
            <h1>
              <b>Neo</b>
              <span>
                <b className="text-danger">STORE</b>
              </span>
            </h1>
            <p>
              Welcome to NeoStore Shopping place .This is the place when you may
              choose the most popular shopping products you like from wide
              variety of options
            </p>
          </Card.Header>
          <Card.Body>
           
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" href="/login">
                Sign In and Order
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <br />
      <Footer1 />
    </>
  );
}
