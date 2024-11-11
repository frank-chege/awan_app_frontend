// Navbar.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Logo from "../assets/landscapeLogo.png";

const Navbar = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <View style={styles.navBar}>
      {/* Logo on the left */}
      <Image source={Logo} style={styles.logo} />

      {/* Hamburger Menu Icon on the right */}
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerMenu}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>

      {/* Menu items - visible only when menuVisible is true */}
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("logout")}>
            <Text style={styles.menuItem}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.menuItem}>Close Menu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
    alignItems: "center",
    padding: 10,
    position: "absolute", // Make the navbar stay fixed at the top
    top: 0, // Pin to top
    left: 0,
    right: 0,
    zIndex: 100, // Ensure it stays above the content
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
  menu: {
    position: "absolute", // Position it absolutely
    top: 60, // Ensure it doesn't overlap with the navbar
    right: 0,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  menuItem: {
    fontSize: 18,
    color: "#FF8C00",
    paddingVertical: 10,
  },
});

export default Navbar;
