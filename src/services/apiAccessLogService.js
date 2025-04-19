import axios from "./axios";

export const getAccessLogs = async () => {
  try {
    const response = await axios.get("/api/access-logs");
    return response.data;
  } catch (error) {
    console.error("Error fetching access logs:", error);
    throw error;
  }
};
