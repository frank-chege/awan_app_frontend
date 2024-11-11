import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { getItemAsync } from "expo-secure-store";
import Navbar from "../common/NavBar";
const HomeScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  //get name
  useEffect(() => {
    const fetchName = async () => {
      const userName =
        route?.params?.name || (await getItemAsync("name")) || "";
      setName(userName);
    };
    fetchName();
  }, [route]);

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />

      {/* Search Field with Button */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Message */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello {name} 👋</Text>
      </View>

      {/* Feature Tiles */}
      <View style={styles.featureGrid}>
        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={{ uri: "your-image-url" }}
            style={styles.featureImage}
          />
          <Text style={styles.featureTitle}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={{ uri: "your-image-url" }}
            style={styles.featureImage}
          />
          <Text style={styles.featureTitle}>Guides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={{ uri: "your-image-url" }}
            style={styles.featureImage}
          />
          <Text style={styles.featureTitle}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureCard}>
          <Image
            source={{ uri: "your-image-url" }}
            style={styles.featureImage}
          />
          <Text style={styles.featureTitle}>News</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.footerButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ResourceHub")}>
          <Text style={styles.footerButton}>Resource Hub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60, // Adjusted for navbar space
  },
  searchContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 20, // Rounded corners on the container
    borderWidth: 1, // Border around the container
    borderColor: "#FF8C00", // Border color around the container
    height: 40, // Ensures a consistent height
  },
  searchBar: {
    flex: 1, // Input takes most of the space
    height: "100%", // Fill the container height
    color: "#333", // Text color inside the input field
    paddingHorizontal: 10, // Padding inside the input field
    backgroundColor: "#fff", // Background color for the input field
  },
  searchButton: {
    padding: 10,
    width: 75,
    backgroundColor: "#FF8C00", // Button background color
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "medium",
    color: "#FF8C00",
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  featureCard: {
    width: "45%",
    height: 150,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 3, // adds shadow for elevation on Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  featureImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF8C00",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#333",
  },
  footerButton: {
    color: "#FF8C00",
    fontSize: 16,
  },
});

export default HomeScreen;
