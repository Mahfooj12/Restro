import axios from "axios";

const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Debug log (baad mein hata sakte ho)
console.log("🔍 Backend URL =", import.meta.env.VITE_API_URL);

export const axiosWrapper = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",  // ✅ Ab empty — same origin use karega
  withCredentials: true,
  headers: { ...defaultHeader },
});
