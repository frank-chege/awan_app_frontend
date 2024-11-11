import { Alert } from "react-native";
import { deleteItemAsync } from "expo-secure-store";

const Logout = ({ navigation }) => {
  const clearSessionData = async () => {
    try {
      await Promise.all(
        deleteItemAsync("jwt_token"),
        deleteItemAsync("refresh_token"),
        deleteItemAsync("name")
      );
    } catch (error) {
      return false;
    }
    return true;
  };
  const logout = async () => {
    const res = await clearSessionData();
    if (res) {
      navigation.navigate("login");
    } else {
      Alert.alert("Logout failed");
    }
  };
  logout();
  return null;
};
export default Logout;
