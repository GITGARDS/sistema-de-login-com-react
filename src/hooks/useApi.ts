import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "Content-Type": "application/json" },
});

const validateToken = async (token: string) => {
  return {
    user: { id: 1, name: "ards", email: "ards@email.com" },
  };
  const response = await api.post("/vadate", { token });
  return response.data;
};

const signin = async (email: string, password: string) => {
  return {
    user: { id: 1, name: "ards", email: "ards@email.com" },
    token: "4353",
  };
  const response = await api.post("/signin", { email, password });
  return response.data;
};

const logout = async () => {
  return { status: true };
  const response = await api.post("/logout");
  return response.data;
};

export const useApi = {
  validateToken,
  signin,
  logout,
};
