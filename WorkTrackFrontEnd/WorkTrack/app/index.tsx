import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Use expo-router's useRouter hook

const IndexPage = () => {
  const router = useRouter(); // Initialize router from expo-router
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

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

      <Button
        title="Sign In"
        onPress={() => {
          // Handle login logic here or navigate if needed
          console.log("Login logic here with username: ", username, " and password: ", password);
        }}
      />
      <Button
        title="Sign Up"
        onPress={handleSignUpNavigation} // Navigate to Sign Up page
        color="blue"
      />
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
});

export default IndexPage;
