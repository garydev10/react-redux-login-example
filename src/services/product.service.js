import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/product";

const create = (data) => {
  return axios.post(API_URL, data, { headers: authHeader() });
};

const getAll = () => {
  return axios.get(API_URL);
};

const get = (id) => {
  return axios.get(API_URL, { id });
};

const update = (data) => {
  return axios.put(API_URL, data, { headers: authHeader() });
};

const remove = (data) => {
  return axios.delete(API_URL, data, { headers: authHeader() });
};


const productService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default productService