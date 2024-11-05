import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegistrationScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessNature: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [businessNatureColor, setBusinessNatureColor] = useState('#aaa'); // Default color for placeholder

  const handleRegister = () => {
    const { firstName, lastName, email, password } = userData;

    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please ensure the password and confirmation match.");
      return;
    }

    if (firstName && lastName && email && password && userData.businessNature) {
      // Perform registration logic (e.g., API call to register the user)
      Alert.alert("Registration Successful", "You have registered successfully!");
      navigation.navigate('Login'); // Navigate to Login screen after successful registration
    } else {
      Alert.alert("Missing Fields", "Please fill in all the fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={userData.firstName}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, firstName: text }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={userData.lastName}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, lastName: text }))}
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
          selectedValue={userData.businessNature}
          onValueChange={(itemValue) => {
            setUserData((prev) => ({ ...prev, businessNature: itemValue }));
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

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={userData.password}
        onChangeText={(text) => setUserData((prev) => ({ ...prev, password: text }))}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

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
