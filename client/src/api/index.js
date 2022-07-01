import axios from "axios";

const instance = axios.create({
  baseURL: "BACKEND_URL",
});

export const getCards = () => instance.get(`/cards`);
export default instance;
