import axios from "axios";

export interface RegisterResponse {
  status?: number;
  error?: string;
}

const API_BASE_URL = "http://localhost:8080/api/auth";

export const register = async (
  username: string,
  password: string
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username,
      password,
    });

    return { status: response.status };
  } catch (error: any) {
    if (error.response) {
      return { error: error.response.data };
    }
    return { error: "Network error" };
  }
};
