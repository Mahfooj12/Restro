import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const axiosWrapper = axios.create({
  baseURL: "",  // ✅ Ab empty — same origin use karega
  withCredentials: true,
  headers: { ...defaultHeader },
});
