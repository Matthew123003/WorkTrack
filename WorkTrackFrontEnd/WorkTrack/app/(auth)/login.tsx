import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';

interface LoginScreenProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setIsLoggedIn }) => {
  const router = useRouter();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle the login process
  const handleLogin = () => {
    if (username && password) {
      // Simulate a login process here (e.g., API call to authenticate)
      console.log('Logging in with:', { username, password });

      // Set user as logged in
      setIsLoggedIn(true);

      // Navigate to the main screen (replace login screen with tabs)
      router.replace('/(tabs)'); // Redirect to the tabs screen
    } else {
      // Show error message if username or password is missing
      Alert.alert('Error', 'Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.footer}>Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  footer: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
