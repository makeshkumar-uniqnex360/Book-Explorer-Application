import axios from "axios";

const BASE_URL = "https://openlibrary.org/search.json";

export const searchBooks = (query) => {
  return axios.get(`${BASE_URL}?q=${query}`);
};