import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f3d0291584e74863bbebb0d58a2da207",
  },
});
//https://rawg.io
