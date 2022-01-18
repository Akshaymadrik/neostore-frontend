import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import UpdProfile from "./components/UpdProfile";
import ResetPassword from "./components/ResetPassword";
import Orders from "./components/Orders";
import Allorder from "./components/Allorder";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Menu />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/allorders" element={<Allorder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upd_profile" element={<UpdProfile />} />
          <Route path="/forgetpassword" element={<ResetPassword />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;