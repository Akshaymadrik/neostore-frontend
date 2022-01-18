import axios from "axios";
import { MAIN_URL } from "./Url";
let token = localStorage.getItem("_token");
export function registerUser(data) {
  return axios.post(`${MAIN_URL}eshop/register`, data);
}
export function loginUser(data) {
  return axios.post(`${MAIN_URL}eshop/login`, data);
}

export function getProfile(email)
 {
  return axios.get(`${MAIN_URL}eshop/profile/${email}`);
}
export function updProfile(id, data) {
  return axios.put(`${MAIN_URL}eshop/updprofile/${id}`, data);
}

export function getProducts() {
  return axios.get(`${MAIN_URL}eshop/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
export function cartAdd(item, email) {
  return axios.get(
    `${MAIN_URL}eshop/cart/${item.pname}/${item.price}/${email}`
  );
}
export function getOrder(email)

 {
  return axios.get(`${MAIN_URL}eshop/orders/${email}`);
}
export function deleteorder(id)

 {
  return axios.delete(`${MAIN_URL}eshop/deleteorder/${id}`);
}
export function checkout_order(email)

 {
  return axios.get(`${MAIN_URL}eshop/checkout/${email}`);
}
export function getAllOrder(email)

 {
  return axios.get(`${MAIN_URL}eshop/allorders/${email}`);
}

export function sendOtp(email,otp){
  return axios.post(`${MAIN_URL}eshop/email/${email}`,otp);
}

export function RPassword(email,pass){

  return axios.put(`${MAIN_URL}eshop/resetpass/${email}`,pass)
}