import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
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
    // ADD API CALL HERE TO VALIDATE USER LOGIN
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
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>WorkTrack</Text>
        </View>
      </View>

      {/* Scrollable content */}
      <KeyboardAvoidingView
        style={styles.scrollContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60} // Adjust based on header height
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={require('../assets/images/react-logo.png')}
            style={styles.logo2}
          />

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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2F4F4F',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 4,
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 100,
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
  logo2: {
    width: 150,
    height: 150,
    marginBottom: 30, // Add spacing below the logo
  },
});

export default IndexPage;
