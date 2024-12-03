import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ForgotPasswordPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lastName, setLastName] = useState('');

  // Function to handle submit
  const handleSubmit = () => {
    // Add logic for handling password reset request
    console.log('Submitted:', { username, email, zipcode, lastName });
    // Optionally navigate or show success message
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Reset Your Password</Text>

        {/* Explanatory Paragraph */}
        <Text style={styles.description}>
          Please enter all the required information below to help us locate your account. Once verified, we will send a recovery email or reset your password.
        </Text>

        {/* Username input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Email input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* ZIP Code input */}
        <TextInput
          style={styles.input}
          placeholder="ZIP Code"
          keyboardType="numeric"
          value={zipcode}
          onChangeText={setZipcode}
        />

        {/* Last Name input */}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  contentContainer: {
    width: '100%',
    maxWidth: 400, // Limit max width for larger screens
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20, // Space between paragraph and first input box
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordPage;
