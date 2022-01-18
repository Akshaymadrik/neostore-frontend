import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Nav2 from "./Nav2";
import { useNavigate } from "react-router";
import { getProfile, updProfile } from "./config/Myservice";
import Footer1 from "./Footer1";
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export default function UpdProfile() {
  let [email, setEmail] = useState("");                                        //a Hook that allows you to have state variables in functional components.
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProfile(sessionStorage.getItem("user")).then((res) => {
      if (res.data.user) {                                                    //this function will show user information
        let data = res.data.user;
        setUser(data);
        setEmail(data.email);
        setName(data.name);
        setMobile(data.mobile);
        setAddress(data.address);
        setPassword(data.password);
      }
    });
  }, []);

  const updateProfile = (id) => {                                   //this function will save edited info of uer
    let data = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      password: password,
    };
    updProfile(id, data).then((res) => {
      if (res.data.err) {
        alert(res.data.err);
      } else {
        alert(res.data.msg);
        navigate("/profile");
      }
    });
  };

  return (
    <>
      <Nav2 />
      <Container className="my-5">
        <Row>
          <Col
            lg={8}
            md={6}
            sm={12}
            className="p-4 m-auto shadow-sm rounded-lg bg-light"
          >
            <h4>Update Profile </h4>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    defaultValue={user.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  {name != "" && name.length < 4 && (
                    <span className="text-danger">Enter Name correctly</span>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    defaultValue={user.email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {email != "" && !regForEmail.test(email) && (
                    <span className="text-danger">Enter email correctly</span>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Mobile
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                    name="mobile"
                    defaultValue={user.mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                  {mobile != "" && mobile.toString().length !== 10 && (
                    <span className="text-danger">
                      Enter Mobile number correctly
                    </span>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    defaultValue={user.address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  {address != "" && address.length < 10 && (
                    <span className="text-danger">Enter Address correctly</span>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue={user.password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {password != "" && password.length < 8 && (
                    <span className="text-danger">
                      Enter password correctly
                    </span>
                  )}
                </Col>
              </Form.Group>
              <Button variant="info" onClick={() => updateProfile(user._id)}>
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
}
