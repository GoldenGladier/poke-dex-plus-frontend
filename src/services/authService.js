import axios from "./axios";

const API_URL = "/auth";

export const register = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    password,
  });
  return response;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });
  return response;
};
