// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { createRequest } from "../common/utils";
import { setItemAsync } from "expo-secure-store";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const request = createRequest(); //configure request headers

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please fill in all the fields.");
    }
    payload = { email, password };
    //login request
    setLoading(true);
    try {
      const res = await request.post(
        "http://192.168.1.81:5000/api/v1/auth/login",
        payload
      );

      const msg = res?.data?.message;
      const jwt_token = res.data?.jwt_token;
      const refresh_token = res?.data?.refresh_token;
      const name = res?.data?.user_name || "";
      //store access tokens in keystores
      if (jwt_token && refresh_token) {
        try {
          //ensure keys are stored successfully
          await Promise.all([
            setItemAsync("jwt_token", jwt_token),
            setItemAsync("refresh_token", refresh_token),
            setItemAsync("name", name),
          ]);
          navigation.navigate("home", { name: name });
        } catch (error) {
          Alert.alert("Error logging in. Please try again");
        }
      } else {
        Alert.alert("Error logging in. Please try again");
      }
    } catch (error) {
      if (error.response?.data?.error) {
        Alert.alert(error.response?.data?.error);
      } else {
        Alert.alert("An unexpected error occured. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Awan Afrika</Text>
      <Text style={styles.subtitle}>Please log in to continue</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>
          {loading ? "Please wait..." : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={styles.loginLink}>Don't have an account? register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // Light background color
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8C00", // Orange color
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#FF8C00",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    color: "#333", // Text color for input
  },
  loginButton: {
    backgroundColor: "#FF8C00", // Orange color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#FFF", // White text color
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    color: "#FF8C00",
    textAlign: "center",
    marginTop: 20,
  },
});

export default LoginScreen;
