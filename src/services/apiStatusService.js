import axios from "@/services/axios";

export const checkApiStatus = async () => {
  try {
    const response = await axios.get("/actuator/health");
    const data = response.data;

    if (data.status === "UP") {
      return {
        status: "UP",
        statusClass: "up",
        statusText: "API is active",
      };
    } else {
      return {
        status: "DOWN",
        statusClass: "down",
        statusText: "API is inactive",
      };
    }
  } catch (error) {
    return {
      status: "DOWN",
      statusClass: "down",
      statusText: "API is inactive",
    };
  }
};
