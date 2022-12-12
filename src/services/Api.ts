import axios from "axios";

const Api = () => {
  return axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });
};

export default Api;
