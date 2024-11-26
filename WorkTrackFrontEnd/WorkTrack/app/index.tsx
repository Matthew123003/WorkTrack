import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Use expo-router's useRouter hook

const IndexPage = () => {
  const router = useRouter(); // Initialize router from expo-router
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

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
