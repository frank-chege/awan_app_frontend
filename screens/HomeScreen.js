import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import Logo from "../assets/landscapeLogo.png"; // Adjust the path if needed

const HomeScreen = ({ navigation, route }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        {/* Logo on the left */}
        <Image source={Logo} style={styles.logo} />

        {/* Hamburger Menu Icon on the right */}
        <TouchableOpacity
          onPress={() => navigation.openDrawer()} // Assuming you use a Drawer for navigation
          style={styles.hamburgerMenu}
        >
          <Text style={styles.hamburgerText}>☰</Text>
        </TouchableOpacity>
      </View>

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
        <Text style={styles.welcomeText}>Hello, {name} 👋</Text>
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
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
  },
  hamburgerMenu: {
    padding: 10,
  },
  hamburgerText: {
    fontSize: 30,
    color: "#fff",
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
    // No border or border radius on the input field
  },

  searchButton: {
    padding: 10,
    width: 75,
    backgroundColor: "#FF8C00", // Button background color
    // No border or border radius on the button
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
