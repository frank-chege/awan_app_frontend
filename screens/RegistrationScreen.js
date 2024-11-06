import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Config from 'react-native-config';
import { createRequest } from '../auth/utils';

const RegistrationScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    business_nature: '',
  });
  const [businessNatureColor, setBusinessNatureColor] = useState('#aaa'); // Default color for placeholder

  const handleRegister = () => {
    const checkAllFields = Object.values(userData).every((value) => value !== '')
    if (!checkAllFields){
      Alert.alert("Missing Fields", "Please fill in all the fields.");
    }
    const request = createRequest()
    payload = {...userData}
    try {
      const res = request.post('/register', payload)
      Alert.alert('Registration successful. Please check your email for further instructions')
      navigation.navigate('login')
    } catch (error) {
      if (error.response?.data?.error){
        Alert.alert('Registration failed')
      }
      else{
        Alert.alert('An error occured. Please try again')
      }
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={userData.first_name}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, first_name: text }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={userData.last_name}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, last_name: text }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={userData.email}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, email: text }))}
      />

      {/* Picker for Nature of Business */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userData.business_nature}
          onValueChange={(itemValue) => {
            setUserData((prev) => ({ ...prev, business_nature: itemValue }));
            setBusinessNatureColor(itemValue ? '#333' : '#aaa'); // Change color based on selection
          }}
          style={[styles.picker, { color: businessNatureColor }]} // Conditional color styling
        >
          <Picker.Item label="Select Business Nature" value="" />
          <Picker.Item label="Production" value="production" />
          <Picker.Item label="Bulking" value="bulking" />
          <Picker.Item label="Distribution" value="distribution" />
          <Picker.Item label="Processing" value="processing" />
          <Picker.Item label="Services" value="services" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#FF8C00',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RegistrationScreen;
