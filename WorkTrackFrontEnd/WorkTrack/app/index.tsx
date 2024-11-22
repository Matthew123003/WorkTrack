// /app/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useLogin } from '../context/LoginContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useLogin(); // Assuming this is available in your context
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true); // Update login state
      router.push('/'); // Redirect to the main app after login
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WorkTrack</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});
