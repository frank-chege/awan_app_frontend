// HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Logo from '../assets/landscapeLogo.png'; // Adjust the path if needed

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Bar with Logo, Search, and Login */}
      <View style={styles.topBar}>
        {/* Logo */}
        <Image source={Logo} style={styles.logo} />

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

        {/* Login Button */}
        <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>AWAN AFRIKA</Text>
        <Text style={styles.subtitle}>Continental African Women Agribusiness Network</Text>
      </View>

      {/* Description Section */}
      <View style={styles.content}>
        <Text style={styles.description}>
          We offer the following features to empower your agribusiness:
        </Text>
        <Text style={styles.listItem}>• Resources at Your Fingertips</Text>
        <Text style={styles.listItem}>• Skill Development</Text>
        <Text style={styles.listItem}>• Marketplace Features</Text>
      </View>

      {/* Feature Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: 'your-image-url' }} style={styles.cardImage} />
          <Text style={styles.cardText}>Information</Text>
          <Text style={styles.cardSubText}>Get all the information you need in one place</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: 'your-image-url' }} style={styles.cardImage} />
          <Text style={styles.cardText}>Guides</Text>
          <Text style={styles.cardSubText}>Get all the information you need in one place</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: 'your-image-url' }} style={styles.cardImage} />
          <Text style={styles.cardText}>Courses</Text>
          <Text style={styles.cardSubText}>Get all the information you need in one place</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: 'your-image-url' }} style={styles.cardImage} />
          <Text style={styles.cardText}>Market</Text>
          <Text style={styles.cardSubText}>Get all the information you need in one place</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ResourceHub')}>
          <Text style={styles.footerButton}>Resource Hub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
          <Text style={styles.footerButton}>Marketplace</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#333',
  },
  logo: {
    width: 50, // Adjust the size as needed
    height: 50,
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  searchButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FF8C00',
    borderRadius: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  loginText: { color: '#fff', fontWeight: 'bold' },
  header: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FF8C00' },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center' },
  content: { paddingHorizontal: 20 },
  description: { fontSize: 16, color: '#333', marginBottom: 10 },
  listItem: { fontSize: 14, color: '#333', marginBottom: 5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 },
  card: {
    width: '45%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  cardImage: { width: '100%', height: 100, borderRadius: 8, marginBottom: 10 },
  cardText: { fontSize: 18, fontWeight: 'bold', color: '#FF8C00' },
  cardSubText: { fontSize: 12, color: '#666', textAlign: 'center' },
  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: '#333' },
  footerButton: { color: '#FF8C00', fontSize: 16 },
});

export default HomeScreen;
