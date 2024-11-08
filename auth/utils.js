import axios from "axios";
import { getItemAsync } from "expo-secure-store";
import Config from "react-native-config";

export const createRequest = () => {
  const url = Config.BASE_URL;
  const request = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 5000,
  });
  return request;
};

export const createAuthenticatedRequest = async () => {
  const url = Config.BASE_URL;
  const jwt_token = await getItemAsync("jwt_token");
  const request = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt_token}`,
    },
    timeout: 5000,
  });
  return request;
};
