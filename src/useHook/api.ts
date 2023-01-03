import axios from "axios";

const POXY = "http://localhost:3006/api";

const API = () => {
  const get = async (url: string) => {
    try {
      const reponsive = await axios.get(`${POXY}/${url}`);
      const data = await reponsive.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const postJson = async (url: string, dataPost: Object) => {
    try {
      const reponsive = await axios.post(`${POXY}/${url}`, dataPost);
      const data = await reponsive.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return { get, postJson };
};

export default API;
