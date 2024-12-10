import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Use expo-router's useRouter hook
import axios from 'axios'; // Import Axios for API requests

const IndexPage = () => {
  const router = useRouter(); // Initialize router from expo-router
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const API_URL = 'http://localhost:3000';
  const API_AUTH = API_URL + '/users/authuser';
  const API_REG = API_URL + '/api/register';

  // Function to handle login
  const handleLogin = () => {
    // Mock login validation
    if (username === 'user' && password === 'password') {
      console.log('Login successful!');
      router.push('/(tabs)/home'); // Navigate to the home screen
    } else {
      console.log('Invalid username or password');
      // Optionally, show an error message
    }
  };

  // Function to handle navigation to the Sign Up page
  const handleSignUpNavigation = () => {
    router.push('/(auth)/signUp'); // Navigate to the sign-up screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Logo Section */}
        <Image
          source={require('../assets/images/react-logo.png')} // Replace with the actual path to your logo
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to WorkTrack!</Text>

        {/* Username input box */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername} // Update username state
        />

        {/* Password input box */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword} // Update password state
        />

        {/* Sign In button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign Up button */}
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={handleSignUpNavigation}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[styles.button, styles.forgotButton]}
        onPress={() => router.push('/(auth)/forgot')}
        >
        <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400, // Limit the maximum width for larger screens
    alignItems: 'center', // Center items inside this container
  },
  logo: {
    width: 100, // Adjust the width of your logo
    height: 100, // Adjust the height of your logo
    marginBottom: 20, // Space below the logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#28A745', // Green color for Sign Up button
  },
  forgotButton: {
    backgroundColor: '#FF0000', // Red color for Forgot button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IndexPage;
