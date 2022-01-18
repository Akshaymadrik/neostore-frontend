import React, { useState, useEffect } from "react";
import Nav2 from "./Nav2";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
} from "react-bootstrap";
import { getProfile } from "./config/Myservice";
import Footer1 from "./Footer1";
import { Link } from "react-router-dom";
export default function Profile() {
  let [user, setUser] = useState([]);
  useEffect(() => {
    getProfile(sessionStorage.getItem("user")).then((res) => {
      if (res.data.user) {
        console.log(res.data.user);
        setUser(res.data.user);
      }
    });
  }, []);

  return (
    <>
      <Nav2 />
      <Container className="my-5">
        <h2>My Account</h2>
        <Row>
        <Col className="col-8">
            <Card>
              <Card.Header as="h5">Profile</Card.Header>
              <Card.Body>
                <Card.Text>
                  <b style={{ fontSize: "20px" }}>Name :</b> {user.name}
                </Card.Text>
                <Card.Text>
                  <b style={{ fontSize: "20px" }}>Email :</b> {user.email}
                </Card.Text>
                <Card.Text>
                  <b style={{ fontSize: "20px" }}>Mobile :</b> {user.mobile}
                </Card.Text>
                <Card.Text>
                  <b style={{ fontSize: "20px" }}>Address :</b> {user.address}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="outline-secondary" href="/upd_profile">
                  Edit <i class="fa fa-edit"></i>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="col-4">
            <Col className="p-3 m-auto" style={{ display: "block" }}>
              <Image height="200" width="200" src="../images/user3.png" roundedCircle />
            </Col>
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link to="/allorders" class="nav-link text-danger">
                    <b>
                      Orders <i className="fa fa-arrow-circle-right"></i>
                    </b>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/upd_profile" class="nav-link text-danger">
                    <b>
                      Edit Profile <i className="fa fa-arrow-circle-right"></i>
                    </b>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/forgetpassword" class="nav-link text-danger">
                    <b>
                      Reset Password{" "}
                      <i className="fa fa-arrow-circle-right"></i>
                    </b>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          
        </Row>
      </Container>
      <Footer1 />
    </>
  );
}
