// App.js
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./auth/LoginScreen";
import RegistrationScreen from "./auth/RegistrationScreen";
import * as SplashScreen from "expo-splash-screen";
import useCheckAuthStatus from "./auth/useCheckAuthStatus";
import Logout from "./auth/Logout";

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
const Stack = createNativeStackNavigator();

export default function App() {
  //check auth status
  const { checkingAuthStatus, isAuthenticated } = useCheckAuthStatus("");

  useEffect(() => {
    if (!checkingAuthStatus) {
      SplashScreen.hideAsync();
    }
  }, [checkingAuthStatus]);

  if (checkingAuthStatus) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        {isAuthenticated ? (
          <Stack.Screen name="home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
        <Stack.Screen name="register" component={RegistrationScreen} />
        <Stack.Screen name="logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
