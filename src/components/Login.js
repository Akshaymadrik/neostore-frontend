import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Nav1 from "./Nav1";
import { loginUser } from "./config/Myservice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Footer1 from "./Footer1";
import SocialButton from './SocialButton';
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export default function Login() {                                     
  let [email, setEmail] = useState("");                                         //a Hook that allows you to have state variables in functional components.
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    let data = { email: email, password: password };
    loginUser(data).then((res) => {                                       
      if (res.data.err) {
        alert(res.data.err);                                              //if email and password does not match it will show eror
      } else {
        alert(res.data.msg);
        console.log(res.data);
        localStorage.setItem("_token", res.data.token);             
        sessionStorage.setItem("user", email);
        navigate("/dashboard");                                           //if we enter correct email and pass it will go to dashboard
      }
    });
  };
  const handleSocialLogin = (user) => {                   //this is function of social log in and login failure
    console.log(user);
    setEmail(user._profile.email);
  
  navigate('/home')
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
   
  };
  return (
    <>
      <Nav1 />
      <Container className="mt-5 py-2" style={{ border: "4px solid black" }}>
        <h4 className="text-center">Login </h4>
        <Row className="py-2">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <div><SocialButton                                              //social button to login with social applications
                        provider="facebook"
                        appId="1050755129046065"
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        variant="danger"
                     style={{padding:10}}
                        >
                        Login with Facebook
                        </SocialButton></div>
                        
                        
                       <div> <SocialButton
                        provider="google"
                        appId="1061401315399-d3jlfpd3c4phv7so9a5aqabcen8qp2ge.apps.googleusercontent.com"
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        variant="primary"
                        style={{padding:10}}
                        >
                        Login with Gmail
                </SocialButton></div>

                <div> <SocialButton
                        provider="google"
                        appId="1061401315399-d3jlfpd3c4phv7so9a5aqabcen8qp2ge.apps.googleusercontent.com"
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        variant="warning"
                        style={{padding:10}}
                        >
                        Login with Twiter
                </SocialButton></div>
               
               
               
            <div className="d-grid gap-2"></div>
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter Emailid"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {email != "" && !regForEmail.test(email) && (
                  <span className="text-danger">Enter email correctly</span>
                )}
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {password != "" && password.length < 8 && (
                  <span className="text-danger">Enter password correctly</span>
                )}
              </Form.Group>
              <Row>
                <Button variant="primary" onClick={login}>
                  Login
                </Button>
                <Link to="/forgetpassword" class="nav-link text-danger">
                  <b>Forget Password</b>
                </Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer1 />
    </>
  );
}
