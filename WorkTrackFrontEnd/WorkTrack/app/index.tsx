import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Use expo-router's useRouter hook

const IndexPage = () => {
  const router = useRouter(); // Initialize router from expo-router
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  // Function to handle navigation to the Sign Up page
  const handleSignUpNavigation = () => {
    try {
      router.push('/(auth)/signUp'); // Navigate to the sign-up screen
    } catch (error) {
      console.error("Navigation to Sign Up failed:", error);
      Alert.alert('Error', 'Unable to navigate to the Sign Up page. Please try again.');
    }
  };

  // Function to handle the login process
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Validation Error', 'Please enter both username and password.'); // Validation for empty fields
      return;
    }

    // Simulate login logic here (replace with actual authentication later)
    console.log("Login attempt with username:", username, "and password:", password);

    // Provide feedback for login
    Alert.alert('Login Successful', `Welcome, ${username}!`);
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUpNavigation}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#28A745', // Green color for Sign Up button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IndexPage;
