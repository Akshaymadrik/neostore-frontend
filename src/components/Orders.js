import React from "react";
import Footer1 from "./Footer1";
import Nav2 from "./Nav2";
import { Container, Alert, Button } from "react-bootstrap";

export default function Orders() {
  return (
    <>
      <Nav2 />
      <Container>
        <Container>
          <h1>Order has been placed Successfully</h1>
          <Alert varaint="success">
            You will receive notification to email with order details
          </Alert>
          <Button varaint="secondary" href="/dashboard">
            Go an order some other{" "}
          </Button>
        </Container>
      </Container>
      <Footer1 />
    </>
  );
}
