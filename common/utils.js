import axios from "axios";
import { getItemAsync } from "expo-secure-store";
import { Alert } from "react-native";
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
  const jwt_token = (await getItemAsync("jwt_token")) || "";
  const request = axios.create({
    baseURL: "http://192.168.1.81:5000/api/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt_token}`,
    },
    timeout: 5000,
  });
  return request;
};
