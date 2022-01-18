import React from "react";
import { Container, Nav } from "react-bootstrap";

export default function Nav1() {
  return (
    <>
      <Container fluid>
        <Nav
          className="justify-content-between bg-dark text-white"
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="/">
              <h2 className="pt-2 text-white">
                <b>Neo</b>
                <span>
                  <b className="text-danger">STORE</b>
                </span>
              </h2>
            </Nav.Link>
          </Nav.Item>
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="/register"
                className="btn btn-outline-light mt-3 m-2"
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/login"
                className="btn btn-outline-light mt-3 m-2"
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav>
      </Container>
    </>
  );
}
