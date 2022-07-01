import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-yt-backend.herokuapp.com",
});

export const getCards = () => instance.get(`/cards`);
export default instance;
