import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-cb7b0.firebaseio.com/"
});

export default instance;
