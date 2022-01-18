import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { getProducts, cartAdd } from "./config/Myservice";
import Nav2 from "./Nav2";
import Footer1 from "./Footer1";
import jwt_decode from "jwt-decode";
export default function Menu() {
  const [uid, setUid] = useState("");
  let [products, setProducts] = useState([]);
  let [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("user") === undefined) {
      navigate("/login");
    }
    if (localStorage.getItem("_token") != undefined) {
      let token = localStorage.getItem("_token");
      let decode = jwt_decode(token);                     //it will validate token in our server
      console.log(decode);
      setUid(decode.uid);
      setEmail(sessionStorage.getItem("user"));
      getProducts().then((res) => { 
        console.log(res.data);
        if (res.data.err) {
          alert(res.data.err);
        } else {
          setProducts(res.data.products);             //show the all products
        }
      });
    }
  }, []);
  const addCart = (item) => {                   //this function will use to  item will add in cart
    window.location.reload();
    console.log(item);
    cartAdd(item, email).then((res) => {
      alert(res.data.msg);
    });
  };
  return (
    <>
      <Nav2 />
      <Container fluid>
        <Row>
          <Col className="col-2">
            <Container>
              <Card className="mt-4" style={{ width: "16rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Link to="/" class="nav-link text-danger">
                      <b>
                        All Products
                        <i className="fa fa-arrow-circle-right"></i>
                      </b>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/" class="nav-link text-danger">
                      <b>
                        Categories <i className="fa fa-arrow-circle-right"></i>
                      </b>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="/" class="nav-link text-danger">
                      <b>
                        Color <i className="fa fa-arrow-circle-right"></i>
                      </b>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Container>
          </Col>
          <Col className="col-10">
            <Container className="mt-3">
              
              <Row>
                {products.map((item) => (
                  <Col lg={4} key={item._id}>
                    <Card className="m-2">
                      <Card.Img
                        variant="top"
                        src={`/images/${item.image}`}
                        height="200"
                      />
                      <Card.Body className="">
                        <div className="d-flex justify-content-between">
                          <Card.Title>{item.pname}</Card.Title>

                          <Card.Title>
                            {item.rating}{" "}
                            <i className="fa fa-star text-warning"></i>
                          </Card.Title>
                        </div>

                        <div className="d-flex justify-content-between">
                          <Button
                            variant="primary"
                            onClick={() => {
                              addCart(item);
                            }}
                          >
                            Add to cart
                          </Button>
                          <Card.Title>
                            <span className="text-danger">
                              <b>$ {item.price}</b>
                            </span>
                          </Card.Title>
                        </div>
                        <Link
                          className="text-danger my-3"
                          to={`/productsdetails/${item._id}`}
                        >
                          Details
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
}
