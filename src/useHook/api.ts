import axios from "axios";

const POXY = "http://localhost:3000/api";

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
  return { get };
};

export default API;
