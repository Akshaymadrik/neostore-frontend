import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getOrder, checkout_order } from "./config/Myservice";
import { useNavigate } from "react-router";
import Nav2 from "./Nav2";
export default function Checkout() {
  const [cnumber, setCnumber] = useState(0);
  let [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    getOrder(sessionStorage.getItem("user")).then((res) => {
      const ttl = res.data.orders.reduce(
        (prev, cur) => prev + cur.price * cur.quantity,
        0
      );
      setTotal(ttl);
    });
  }, []);
  const checkout = () => {
    checkout_order(sessionStorage.getItem("user")).then((res) => {
      alert(res.data.msg);
      navigate("/order");
    });
  };
  return (
    <Container>
      <Nav2 />
      <Container className="mt-3">
        <h2>Check out</h2>
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm={2}>
              Credit card
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="number"
                placeholder="Enter credit card number"
                name="cnumber"
                onChange={(e) => {
                  setCnumber(e.target.value);
                }}
              />
              {cnumber != "" && cnumber.length < 16 && (
                <span className="text-danger">
                  Enter credidt card number correctly
                </span>
              )}
            </Col>
            <h4 className="mt-4">Order total: ${total}</h4>
          </Form.Group>
          <Button variant="primary" onClick={() => checkout()}>
            Check out
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
