import axios from "axios";
import {BASE_URL, CORS_API_URL} from "../constants/APIConstants";

export default {
  getItems: function() {
    let url = process.env.NODE_ENV === "development" ? CORS_API_URL + BASE_URL + "items" : BASE_URL + "items";
    return axios({
      method: "get",
      url: url
    });
  },
  getOrders: function() {
    let url = process.env.NODE_ENV === "development" ? CORS_API_URL + BASE_URL + "orders" : BASE_URL + "orders";
    return axios({
      method: "get",
      url: url
    });
  },
  getRecipes: function() {
    let url = process.env.NODE_ENV === "development" ? CORS_API_URL + BASE_URL + "recipes" : BASE_URL + "recipes";
    return axios({
      method: "get",
      url: url
    })
  }
};
