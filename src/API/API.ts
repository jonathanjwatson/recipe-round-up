import axios from "axios";

export default {
  getItems: function() {
    return axios({
      method: "get",
      url: "https://demo5544737.mockable.io/items"
    });
  }
};
