import React, { useState, useEffect } from "react";
import { Container, Table, Button, Card } from "react-bootstrap";
import Nav2 from "./Nav2";
import Footer1 from "./Footer1";
import { getOrder, deleteorder } from "./config/Myservice";
import { useNavigate } from "react-router";
export default function ShoppingCart() {
  let [orders, setOrders] = useState([]);
  let [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {                                                           //its allow to perform side effects in our components
    getOrder(sessionStorage.getItem("user")).then((res) => {
      if (!res.data.msg) {
        setOrders(res.data.orders);
        const ttl = res.data.orders.reduce(
          (prev, cur) => prev + cur.price * cur.quantity,
          0
        );
        setTotal(ttl);
      }
    });
  }, []);
  const deleteord = (id)=> {
    deleteorder(id).then((res) => {
      alert(res.data.msg);
      window.location.reload();
      navigate("/cart");
    });
  };
  return (
    <Container>
      <Nav2 />
      <Container className="mt-3">
        <h3>Shopping Cart</h3>
        {orders.length !== 0 ? (
          <Table striped bordered hover size="sm">
            <tbody>
              {orders.map((item) => (
                <tr key={item._id}>
                  <td>{item.pname}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      type="submit"
                      variant="danger"
                      onClick={() => deleteord(item._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                
              ))}
              <tr>
                <td colSpan="3">${total}</td>

                <td>
                  <Button href="/checkout" variant="secondary">
                    Check out
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <h3 className="mt-5 bg-secondary p-2">Your cart is empty</h3>
        )}
      </Container>
      <Footer1 />
    </Container>
  );
}